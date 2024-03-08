import * as THREE from "three";

export function setupThree(canvas) {
  // scene
  const scene = new THREE.Scene();

  // test cube
  const cubeGeometry = new THREE.BoxGeometry(1, 1, 1, 1);
  const cubeMaterial = new THREE.MeshBasicMaterial({
    color: 0xff0000,
  });
  const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

  scene.add(cube);

  // size
  const size = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  // camera
  const camera = new THREE.PerspectiveCamera(
    35,
    size.width / size.height,
    0.1,
    1000
  );
  camera.position.z = 5;
  scene.add(camera);

  // renderer
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialiasing: true,
    alpha: true,
  });

  renderer.setSize(size.width, size.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  renderer.render(scene, camera);
}