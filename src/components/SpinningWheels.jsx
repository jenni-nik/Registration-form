import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

export default function SpinningWheels() {
  const mountRef = useRef(null);

  useEffect(() => {
    const width = 200;
    const height = 200;

    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 4;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
renderer.domElement.style.position = 'absolute';
renderer.domElement.style.left = '50%';
renderer.domElement.style.top = '35%';
renderer.domElement.style.transform = 'translate(-50%, -100%)';
renderer.domElement.style.zIndex = '6';

    

    mountRef.current.innerHTML = '';
    mountRef.current.appendChild(renderer.domElement);

    // 🔧 Сріблястий матеріал
    const geometry = new THREE.TorusGeometry(1.3, 0.4, 16, 100);
    const material = new THREE.MeshStandardMaterial({
      color: 0x000000,
      metalness: 0.9,
      roughness: 0.1
    });

    const wheel = new THREE.Mesh(geometry, material);
    scene.add(wheel);

    // 💡 Світло
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
    directionalLight.position.set(5, 5, 5);
    scene.add(ambientLight, directionalLight);

    // 🔄 Анімація
    const animate = () => {
      requestAnimationFrame(animate);
      wheel.rotation.x += 0.02;
      wheel.rotation.y += 0.025;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute top-1/2 left-0 -translate-y-1/2"
      style={{ width: '160px', height: '160px' }}
    />
  );
}  
