import * as THREE from "three";
import gsap from "gsap";

let scene, camera, renderer, mainGeo, observer;
let clock, animationId;

export function setupThree(canvas) {
  scene = new THREE.Scene();

  const transformGeo = [
    { rotationZ: 0, positionX: 1.5, heightSegments: 3 },
    { rotationZ: -3, positionX: -1.7, heightSegments: 4 },
    { rotationZ: -6, positionX: 0, heightSegments: 80 },
  ];

  const colors = ['#db3535', '#4ec439', '#39b2c4', '#dbcb35'];
  let currentColorIndex = 0;

  const firstTransform = transformGeo[0];
  const geometry = new THREE.CylinderGeometry(1.5, 1.5, 1.5, firstTransform.heightSegments);
  const material = new THREE.MeshBasicMaterial({
    color: parseInt(colors[currentColorIndex].replace(/^#/, ''), 16),
    transparent: true,
    opacity: 0, // inizia invisibile
  });

  mainGeo = new THREE.Mesh(geometry, material);
  mainGeo.position.x = firstTransform.positionX;
  mainGeo.rotation.x = Math.PI * 0.2;
  mainGeo.rotation.z = firstTransform.rotationZ;
  scene.add(mainGeo);

  // Fade-in dopo 700ms
setTimeout(() => {
  gsap.to(mainGeo.material, {
    duration: 1.2,
    opacity: 1,
    ease: "power2.out",
  });
}, 400);

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

  const sectionEls = document.querySelectorAll("section");
  let currentSection = 0;

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        const index = parseInt(id.split("-")[1]);

        if (index !== currentSection) {
          currentSection = index;

          gsap.to(mainGeo.rotation, {
            duration: 1.5,
            ease: "power2.inOut",
            z: transformGeo[currentSection].rotationZ,
          });

          gsap.to(mainGeo.position, {
            duration: 1.5,
            ease: "power2.inOut",
            x: transformGeo[currentSection].positionX,
          });

          currentColorIndex = currentSection % colors.length;
          mainGeo.material.color.set(colors[currentColorIndex]);

          mainGeo.geometry.dispose();
          mainGeo.geometry = new THREE.CylinderGeometry(1.5, 1.5, 1.5, transformGeo[currentSection].heightSegments);
        }
      }
    });
  }, { root: null, threshold: 0.6 });

  sectionEls.forEach((el) => observer.observe(el));

  const startOnce = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        startOnce.disconnect();
        tick();
      }
    });
  }, { threshold: 0.9 });

  const firstSection = document.getElementById("section-0");
  if (firstSection) startOnce.observe(firstSection);

  clock = new THREE.Clock();
  const tick = () => {
    const elapsedTime = clock.getElapsedTime();

    if (mainGeo) {
      mainGeo.rotation.y = elapsedTime * 0.5;
      mainGeo.position.y = Math.sin(elapsedTime * 0.5) * 0.15 - 0.15;
    }

    renderer.render(scene, camera);
    animationId = window.requestAnimationFrame(tick);
  };
}

export function destroyThree() {
  if (animationId) {
    cancelAnimationFrame(animationId);
    animationId = null;
  }

  if (observer) {
    observer.disconnect();
    observer = null;
  }

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
  scene = null;
  clock = null;
}