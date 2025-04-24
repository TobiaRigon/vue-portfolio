import * as THREE from "three";
import gsap from "gsap";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

let scene, camera, renderer, mainGeo, raycaster, mouse, controls;
let onMouseClickHandler;

export function setupThree(canvas) {
  scene = new THREE.Scene();
  const meshes = [];

  const transformGeo = [
    { heightSegments: 4 },
    { heightSegments: 80 },
    { heightSegments: 3 },
  ];

  let heightSegments = 3;
  const colors = ['#db3535', '#4ec439', '#39b2c4'];
  let currentColorIndex = 0;

  const cylinderGeometry = new THREE.CylinderGeometry(1.5, 1.5, 1.5, heightSegments);
  const mainMaterial = new THREE.MeshBasicMaterial({
    color: parseInt(colors[currentColorIndex].replace(/^#/, ''), 16),
  });

  mainGeo = new THREE.Mesh(cylinderGeometry, mainMaterial);
  mainGeo.position.x = 0;
  mainGeo.rotation.x = Math.PI * 0.15;
  mainGeo.rotation.z = Math.PI * 0.25;

  scene.add(mainGeo);
  meshes.push(mainGeo);

  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  camera = new THREE.PerspectiveCamera(35, sizes.width / sizes.height, 0.1, 1000);
  camera.position.z = 8;
  scene.add(camera);

  renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
  });

  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  raycaster = new THREE.Raycaster();
  mouse = new THREE.Vector2();

  controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.dampingFactor = 0.1;
  controls.enableZoom = false;

  // Clic logica
  onMouseClickHandler = (event) => {
    mouse.x = (event.clientX / sizes.width) * 2 - 1;
    mouse.y = -(event.clientY / sizes.height) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(meshes);
    if (intersects.length > 0) {
      currentColorIndex = (currentColorIndex + 1) % colors.length;
      mainGeo.material.color.set(parseInt(colors[currentColorIndex].replace(/^#/, ''), 16));

      const nextTransform = transformGeo.shift();
      transformGeo.push(nextTransform);
      heightSegments = nextTransform.heightSegments;
      mainGeo.geometry.dispose();
      mainGeo.geometry = new THREE.CylinderGeometry(1.5, 1.5, 1.5, heightSegments);
      mainGeo.geometry.computeVertexNormals();
    }
  };

  window.addEventListener("click", onMouseClickHandler);

  const clock = new THREE.Clock();
  const tick = () => {
    const elapsedTime = clock.getElapsedTime();
    mainGeo.rotation.y = elapsedTime * 0.5;
    mainGeo.position.y = Math.sin(elapsedTime * 0.5) * 0.15 - 0.15;

    controls.update();
    renderer.render(scene, camera);
    window.requestAnimationFrame(tick);
  };

  tick();
}

export function destroyThree() {
  window.removeEventListener("click", onMouseClickHandler);

  if (mainGeo) {
    mainGeo.geometry.dispose();
    mainGeo.material.dispose();
    scene.remove(mainGeo);
    mainGeo = null;
  }

  if (renderer) {
    renderer.dispose();
    renderer.forceContextLoss?.();
    renderer.domElement?.remove();
    renderer = null;
  }

  camera = null;
  controls = null;
  scene = null;
}
