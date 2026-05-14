import * as THREE from "three";
import gsap from "gsap";

let scene, camera, renderer, material, mesh;
let sizes, pos, velocity;
let gravity = -0.0002;
let bounceFactor = -0.8;
let animationId = null;
let fadeTimeoutId = null;
let resizeHandler = null;
let clickHandler = null;
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

function tick() {
  const aspectRatio = sizes.width / sizes.height;
  const cameraHeight = 2 * Math.tan((camera.fov * Math.PI) / 360) * camera.position.z;
  const cameraWidth = cameraHeight * aspectRatio;

  const halfWidth = cameraWidth / 2 - 0.5;
  const floor = -2;

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
  animationId = requestAnimationFrame(tick);
}

export function setupThreeDevOps(canvas) {
  colorIndex = 0;
  shapeIndex = 0;
  pos = { x: 0, y: 2 };
  velocity = { x: 0, y: 0 };

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
  }, 600);

  sizes = { width: window.innerWidth, height: window.innerHeight };

  camera = new THREE.PerspectiveCamera(35, sizes.width / sizes.height, 0.1, 100);
  camera.position.z = 8;
  scene.add(camera);

  renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  animationId = requestAnimationFrame(tick);

  clickHandler = () => {
    velocity.y = 0.02;
    velocity.x = (Math.random() - 0.5) * 0.02;
    changeShape();
  };
  window.addEventListener("click", clickHandler);

  resizeHandler = () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();
    renderer.setSize(sizes.width, sizes.height);
  };
  window.addEventListener("resize", resizeHandler);
}

export function destroyThreeDevOps() {
  clearTimeout(fadeTimeoutId);
  fadeTimeoutId = null;

  if (animationId !== null) {
    cancelAnimationFrame(animationId);
    animationId = null;
  }

  if (clickHandler) {
    window.removeEventListener("click", clickHandler);
    clickHandler = null;
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
