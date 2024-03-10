import * as THREE from "three";
import gsap from 'gsap';

export function setupThree(canvas) {
  // Scene
  const scene = new THREE.Scene();

  // Array per memorizzare gli oggetti mesh
  const meshes = [];

  // scroll
  const transformGeo = [

    {
      heightSegments: 4 // Numero di segmenti in altezza per la seconda sezione
    },
    {
      heightSegments: 80 // Numero di segmenti in altezza per la terza sezione
    },
    {
      heightSegments: 3 // Numero di segmenti in altezza per la prima sezione
    },
  ];

  // Test cube
  let heightSegments = 3;
  const cylinderGeometry = new THREE.CylinderGeometry(1.5, 1.5, 1.5, heightSegments);
  const colors = ['#db3535', '#4ec439', '#39b2c4']; // Array di colori
  let currentColorIndex  = 0; // Colore iniziale
  const mainMaterial = new THREE.MeshBasicMaterial({
    color: parseInt(colors[currentColorIndex].replace(/^#/, ''), 16),
  });
  const mainGeo = new THREE.Mesh(cylinderGeometry, mainMaterial);
  mainGeo.position.x = 0;
  mainGeo.rotation.x = Math.PI * 0.15;
  mainGeo.rotation.z = Math.PI * 0.25;

  scene.add(mainGeo);
  meshes.push(mainGeo); // Aggiungi mainGeo all'array meshes

  // Aggiungi un event listener al click dell'oggetto mainGeo
  mainGeo.addEventListener('click', () => {
    console.log('Click su mainGeo!');
    // Cambia colore dell'oggetto
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    mainGeo.material.color.set(parseInt(colors[currentColorIndex].replace(/^#/, ''), 16));
  
  });

  // Size
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  // Camera
  const camera = new THREE.PerspectiveCamera(
    35,
    sizes.width / sizes.height,
    0.1,
    1000
  );
  camera.position.z = 8;
  scene.add(camera);

  // Renderer
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialiasing: true,
    alpha: true,
  });
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.render(scene, camera);

  // Raycaster
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  // Funzione per gestire il clic del mouse
  function onMouseClick(event) {
    // Calcola la posizione del clic del mouse nella finestra
    mouse.x = (event.clientX / sizes.width) * 2 - 1;
    mouse.y = -(event.clientY / sizes.height) * 2 + 1;

    // Effettua il raycasting
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(meshes);

    // Se ci sono intersezioni, gestisci il clic
    if (intersects.length > 0) {
      console.log('Clic su un oggetto!');
      // Cambia colore dell'oggetto
      currentColorIndex = (currentColorIndex + 1) % colors.length;
      mainGeo.material.color.set(parseInt(colors[currentColorIndex].replace(/^#/, ''), 16));
    

      // Cambia rotationZ in base alla configurazione in transformGeo
  const nextTransform = transformGeo.shift(); // Prendi il prossimo set di trasformazioni
  transformGeo.push(nextTransform); // Metti il set di trasformazioni al fondo dell'array
  heightSegments = nextTransform.heightSegments;
  mainGeo.geometry.dispose();
  mainGeo.geometry = new THREE.CylinderGeometry(1.5, 1.5, 1.5, heightSegments);
  mainGeo.geometry.computeVertexNormals(); // Calcola le normali dei vertici per la geometria del cilindro

    
    }
  }

  // Aggiungi un event listener per il clic del mouse
  window.addEventListener('click', onMouseClick);

  // Animate
  const clock = new THREE.Clock();
  const tick = () => {
    const elapsedTime = clock.getElapsedTime();
    const rotationSpeed = 0.5; // Velocità di rotazione
    const rotationAngle = elapsedTime * rotationSpeed;
    mainGeo.rotation.y = rotationAngle;

    // Respiro
    mainGeo.position.y = Math.sin(elapsedTime * 0.5) * 0.15 - 0.15;

    // Render
    renderer.render(scene, camera);

    // Richiedi il prossimo frame di animazione
    window.requestAnimationFrame(tick);
  };
  tick();
}
