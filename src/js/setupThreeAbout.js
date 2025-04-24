import * as THREE from "three";
import gsap from "gsap";

export function setupThreeAbout(canvas) {
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
    opacity: 0, // inizia invisibile
  });

  let mesh = new THREE.Mesh(geometries[shapeIndex](), material);
  mesh.scale.set(0.7, 0.7, 0.7);
  scene.add(mesh);

  // Fade-in dopo breve delay
  setTimeout(() => {
    gsap.to(material, {
      opacity: 1,
      duration: 1.2,
      ease: "power2.out"
    });
  }, 400);

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

  let pos = { x: 0, y: 0 };
  let velocity = { x: 0.0015, y: 0.0015 };

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
  const boundFactor = 1.05;

  const tick = () => {
    const elapsed = clock.getElapsedTime();
    const aspectRatio = sizes.width / sizes.height;
    const cameraHeight = 2 * Math.tan((camera.fov * Math.PI) / 360) * camera.position.z;
    const cameraWidth = cameraHeight * aspectRatio;

    const halfWidth = (cameraWidth / 2) * boundFactor;
    const halfHeight = (cameraHeight / 2) * boundFactor;
    const meshSize = 0.5;

    pos.x += velocity.x;
    pos.y += velocity.y;

    if (pos.x > halfWidth - meshSize || pos.x < -halfWidth + meshSize) {
      velocity.x *= -1;
      changeShape();
    }

    if (pos.y > halfHeight - meshSize || pos.y < -halfHeight + meshSize) {
      velocity.y *= -1;
      changeShape();
    }

    mesh.position.set(pos.x, pos.y + Math.sin(elapsed * 0.5) * 0.2, 0);
    mesh.rotation.x += 0.002;
    mesh.rotation.y += 0.004;

    renderer.render(scene, camera);
    requestAnimationFrame(tick);
  };

  tick();

  window.addEventListener("resize", () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();
    renderer.setSize(sizes.width, sizes.height);
  });
}
