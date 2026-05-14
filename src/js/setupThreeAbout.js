import * as THREE from "three";
import gsap from "gsap";

let scene, camera, renderer, material, mesh;
let sizes, pos, velocity;
let animationId = null;
let fadeTimeoutId = null;
let resizeHandler = null;
let colorIndex = 0;
let shapeIndex = 0;

const colors = ["#db3535", "#4ec439", "#39b2c4"];
const geometries = [
  () => new THREE.CylinderGeometry(1, 1, 1, 3),
  () => new THREE.CylinderGeometry(1, 1, 1, 4),
  () => new THREE.CylinderGeometry(1, 1, 1, 80),
];

function changeShape() {
  scene.remove(mesh);
  mesh.geometry.dispose();

  shapeIndex = (shapeIndex + 1) % geometries.length;
  colorIndex = (colorIndex + 1) % colors.length;

  material.color.set(colors[colorIndex]);
  mesh = new THREE.Mesh(geometries[shapeIndex](), material);
  mesh.scale.set(0.7, 0.7, 0.7);
  mesh.position.set(pos.x, pos.y, 0);
  scene.add(mesh);
}

const clock = new THREE.Clock();
const boundFactor = 1.05;

function tick() {
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
  animationId = requestAnimationFrame(tick);
}

export function setupThreeAbout(canvas) {
  colorIndex = 0;
  shapeIndex = 0;
  pos = { x: 0, y: 0 };
  velocity = { x: 0.0015, y: 0.0015 };

  scene = new THREE.Scene();

  material = new THREE.MeshBasicMaterial({
    color: new THREE.Color(colors[colorIndex]),
    wireframe: false,
    transparent: true,
    opacity: 0,
  });

  mesh = new THREE.Mesh(geometries[shapeIndex](), material);
  mesh.scale.set(0.7, 0.7, 0.7);
  scene.add(mesh);

  fadeTimeoutId = setTimeout(() => {
    gsap.to(material, { opacity: 1, duration: 1.2, ease: "power2.out" });
  }, 400);

  sizes = { width: window.innerWidth, height: window.innerHeight };

  camera = new THREE.PerspectiveCamera(35, sizes.width / sizes.height, 0.1, 100);
  camera.position.z = 8;
  scene.add(camera);

  renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  animationId = requestAnimationFrame(tick);

  resizeHandler = () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();
    renderer.setSize(sizes.width, sizes.height);
  };
  window.addEventListener("resize", resizeHandler);
}

export function destroyThreeAbout() {
  clearTimeout(fadeTimeoutId);
  fadeTimeoutId = null;

  if (animationId !== null) {
    cancelAnimationFrame(animationId);
    animationId = null;
  }

  if (resizeHandler) {
    window.removeEventListener("resize", resizeHandler);
    resizeHandler = null;
  }

  if (mesh) {
    mesh.geometry.dispose();
    scene?.remove(mesh);
    mesh = null;
  }

  if (material) {
    material.dispose();
    material = null;
  }

  if (renderer) {
    renderer.dispose();
    renderer.forceContextLoss?.();
    renderer.domElement?.remove();
    renderer = null;
  }

  camera = null;
  scene = null;
}
