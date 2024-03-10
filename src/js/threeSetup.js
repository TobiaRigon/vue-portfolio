import * as THREE from "three";
import gsap from 'gsap';

export function setupThree(canvas) {
  // scene
  const scene = new THREE.Scene();

  // test cube
  const cylinderGeometry = new THREE.CylinderGeometry(1, 1, 1.5, 3);
  const cubeMaterial = new THREE.MeshBasicMaterial({
    color: 0xff0000,
  });
  const mainGeo = new THREE.Mesh(cylinderGeometry, cubeMaterial);

  mainGeo.position.x = 1.5 
  mainGeo.rotation.x = Math.PI * 0.2 
  mainGeo.rotation.z = Math.PI * 0.15

  console.log(mainGeo);
  scene.add(mainGeo);

  // scroll
  const transformGeo = [
    {
      rotationZ: 0.45,
      positionX: 1.5
    },
    {
      rotationZ: -0.45,
      positionX: -1.5
    },
    {
      rotationZ: 0.0314,
      positionX: 0
    },

  ]

  let scrollY = window.scrollY
  let currentSection = 0
  
  window.addEventListener('scroll', () =>{
    scrollY = window.scrollY
    const newSection = Math.round(scrollY / sizes.height)
    console.log(newSection)

    if (newSection != currentSection) {
      currentSection = newSection

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

    // mainGeo.rotation.y = Math.sin(elapsedTime)

    if(!!mainGeo){
      mainGeo.position.y = Math.sin(elapsedTime*0.5) * 0.1 -0.1
    }

    // Render
    // console.log('tick')
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}
tick(); 

}