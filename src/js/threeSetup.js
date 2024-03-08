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

//   lights
const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
scene.add(ambientLight)

const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
directionalLight.position.set(1, 2, 0)

directionalLight.castShadow = true
scene.add(directionalLight)



  // renderer
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialiasing: true,
    alpha: true,
  });

  renderer.setSize(size.width, size.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  renderer.render(scene, camera);

// animate

const clock = new THREE.Clock()
let lastElapsedTime = 0

const tick = () => {
    const elapsedTime = clock.getElapsedTime()
    const deltaTime = elapsedTime - lastElapsedTime
    lastElapsedTime = elapsedTime

    cube.rotation.y = Math.sin(elapsedTime)

    // Render
    console.log('tick')
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}
tick(); 

}