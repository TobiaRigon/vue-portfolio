import * as THREE from "three";
import gsap from 'gsap';

export function setupThree(canvas) {
  // scene
  const scene = new THREE.Scene();


  // scroll
  const transformGeo = [
    {
      rotationZ: 0.45,
      positionX: 1.5,
      heightSegments: 3 // Numero di segmenti in altezza per la prima sezione
    },
    {
      rotationZ: -2,
      positionX: -1.7,
      heightSegments: 4 // Numero di segmenti in altezza per la seconda sezione
    },
    {
      rotationZ: -3.5,
      positionX: 0,
      heightSegments: 80 // Numero di segmenti in altezza per la terza sezione
    },

  ]

  // test cube
    // Altezza dei segmenti iniziale
    let heightSegments = transformGeo[0].heightSegments;

  const cylinderGeometry = new THREE.CylinderGeometry(1.5, 1.5, 1.5, heightSegments);

  const colors = ['#db3535', '#4ec439', '#39b2c4', '#dbcb35']; // Array di colori
  let currentColorIndex  = 0;// Colore iniziale
  const mainMaterial = new THREE.MeshBasicMaterial({
    color: parseInt(colors[currentColorIndex].replace(/^#/, ''), 16),
  });
  const mainGeo = new THREE.Mesh(cylinderGeometry, mainMaterial);

  mainGeo.position.x = 1.5 
  mainGeo.rotation.x = Math.PI * 0.2 
  mainGeo.rotation.z = Math.PI * 0.15

  console.log(mainGeo);
  scene.add(mainGeo);

  // scroll
  

  let scrollY = window.scrollY
  let currentSection = 0
  
  window.addEventListener('scroll', () =>{
    scrollY = window.scrollY
    const newSection = Math.round(scrollY / sizes.height)
    console.log(newSection)

    if (newSection != currentSection) {
      currentSection = newSection

        // Calcola la posizione della sezione corrente
    const sectionPosition = currentSection * sizes.height;

    // Snappa lo scroll alla posizione della sezione
    // window.scrollTo({
    //   top: sectionPosition,
    //   behavior: 'smooth' // Opzionale: aggiunge un'animazione di scorrimento fluida
    // });
    

   

      if (!!mainGeo) {
          gsap.to(
            mainGeo.rotation, {
                  duration: 1.5,
                  ease: 'power2.inOut',
                  z: transformGeo[currentSection].rotationZ
              }
          )
          gsap.to(
            mainGeo.position, {
                  duration: 1.5,
                  ease: 'power2.inOut',
                  x: transformGeo[currentSection].positionX
              }
          )


          // Cambia il colore dell'oggetto
          currentColorIndex = currentSection % colors.length; // Calcola l'indice del colore
          mainGeo.material.color.set(colors[currentColorIndex]); // Imposta il colore


           // Aggiorna il numero di segmenti in altezza
        heightSegments = transformGeo[currentSection].heightSegments;
        mainGeo.geometry.dispose(); // Rimuove la geometria corrente
        mainGeo.geometry = new THREE.CylinderGeometry(1.5, 1.5, 1.5, heightSegments); // Crea nuova geometria con il nuovo numero di segmenti



          // gsap.to(
          //     sphereShadow.position, {
          //         duration: 1.5,
          //         ease: 'power2.inOut',
          //         x: transformGeo[currentSection].positionX - 0.2
          //     }
          // )
      }
  }
  })



  // size
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  // camera
  const camera = new THREE.PerspectiveCamera(
    35,
    sizes.width / sizes.height,
    0.1,
    1000
  );
  camera.position.z = 8;
  scene.add(camera);



  // renderer
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialiasing: true,
    alpha: true,
  });

  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  renderer.render(scene, camera);

// animate

const clock = new THREE.Clock()
let lastElapsedTime = 0

const tick = () => {
    const elapsedTime = clock.getElapsedTime()
    const deltaTime = elapsedTime - lastElapsedTime
    lastElapsedTime = elapsedTime

     // Calcola l'angolo di rotazione basato sul tempo trascorso
     const rotationSpeed = 0.5; // Velocità di rotazione
     const rotationAngle = elapsedTime * rotationSpeed;
 
     // Imposta l'angolo di rotazione lungo l'asse y
     mainGeo.rotation.y = rotationAngle;

    // respiro
    if(!!mainGeo){
      mainGeo.position.y = Math.sin(elapsedTime*0.5) * 0.15 -0.15
    }

    // Render
    // console.log('tick')
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}
tick(); 

}