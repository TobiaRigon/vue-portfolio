import * as THREE from "three";
import gsap from "gsap";

export function setupThreeDevOps(canvas) {
  const scene = new THREE.Scene();

  const colors = ["#db3535", "#4ec439", "#39b2c4"];
  let colorIndex = 0;

  const geometries = [
    () => new THREE.CylinderGeometry(1, 1, 1, 3),
    () => new THREE.CylinderGeometry(1, 1, 1, 4),
    () => new THREE.CylinderGeometry(1, 1, 1, 80),
  ];
  let shapeIndex = 0;

  const material = new THREE.MeshBasicMaterial({
    color: new THREE.Color(colors[colorIndex]),
    wireframe: false,
    transparent: true,
    opacity: 0, // partenza invisibile
  });

  let mesh = new THREE.Mesh(geometries[shapeIndex](), material);
  mesh.scale.set(0.7, 0.7, 0.7);
  scene.add(mesh);

  // Fade-in iniziale con delay
  setTimeout(() => {
    gsap.to(material, {
      opacity: 1,
      duration: 1.2,
      ease: "power2.out"
    });
  }, 600);

  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  const camera = new THREE.PerspectiveCamera(35, sizes.width / sizes.height, 0.1, 100);
  camera.position.z = 8;
  scene.add(camera);

  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
  });
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  let pos = { x: 0, y: 2 };
  let velocity = { x: 0, y: 0 };
  let gravity = -0.0002;
  let bounceFactor = -0.8;

  const changeShape = () => {
    scene.remove(mesh);
    mesh.geometry.dispose();

    shapeIndex = (shapeIndex + 1) % geometries.length;
    colorIndex = (colorIndex + 1) % colors.length;

    material.color.set(colors[colorIndex]);
    mesh = new THREE.Mesh(geometries[shapeIndex](), material);
    mesh.scale.set(0.7, 0.7, 0.7);
    mesh.position.set(pos.x, pos.y, 0);
    scene.add(mesh);
  };

  const clock = new THREE.Clock();

  const tick = () => {
    const elapsed = clock.getElapsedTime();

    const aspectRatio = sizes.width / sizes.height;
    const cameraHeight = 2 * Math.tan((camera.fov * Math.PI) / 360) * camera.position.z;
    const cameraWidth = cameraHeight * aspectRatio;

    const halfWidth = cameraWidth / 2 - 0.5;
    const floor = -2;
    const ceiling = 4;

    velocity.y += gravity;
    pos.y += velocity.y;
    pos.x += velocity.x;

    if (pos.y <= floor) {
      pos.y = floor;
      velocity.y *= bounceFactor;
    }

    if (pos.x <= -halfWidth || pos.x >= halfWidth) {
      velocity.x *= -1;
      pos.x = THREE.MathUtils.clamp(pos.x, -halfWidth, halfWidth);
    }

    mesh.position.set(pos.x, pos.y, 0);
    mesh.rotation.x += 0.005;
    mesh.rotation.y += 0.007;

    renderer.render(scene, camera);
    requestAnimationFrame(tick);
  };

  tick();

  window.addEventListener("click", () => {
    velocity.y = 0.02;
    velocity.x = (Math.random() - 0.5) * 0.02;
    changeShape();
  });

  window.addEventListener("resize", () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();
    renderer.setSize(sizes.width, sizes.height);
  });
}
