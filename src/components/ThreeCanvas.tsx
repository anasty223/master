"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeCanvas = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;

    if (!mount) return;

    // Создаем сцену
    const scene = new THREE.Scene();

    // Создаем камеру
    const camera = new THREE.PerspectiveCamera(
      50, // Угол обзора
      mount.clientWidth / mount.clientHeight, // Соотношение сторон
      0.1, // Ближняя граница обзора
      1000 // Дальняя граница обзора
    );
    camera.position.z = 7;

    // Создаем рендерер
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    // Добавляем куб
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.set(-3, 0, 0);
    scene.add(cube);

    const sphereGeom = new THREE.SphereGeometry(0.5, 0.5, 0.5);
    const sphereMat = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const sphere = new THREE.Mesh(sphereGeom, sphereMat);
    sphere.position.set(3, 0, 0);
    const texture = new THREE.TextureLoader().load("/assets/1.jpg");
    const textureMaterial = new THREE.MeshBasicMaterial({ map: texture });

    const torus = new THREE.Mesh(
      new THREE.TorusGeometry(0.5, 0.2, 16, 100),
      textureMaterial
      // new THREE.MeshBasicMaterial({ color: "magenta", opacity: 0.5 })
    );
    torus.position.set(0, 0, 0);
    scene.add(torus);

    scene.add(sphere);
    // Анимация
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      sphere.rotation.x + -0.01;
      sphere.rotation.y += 0.01;

      torus.rotation.x += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    // Очистка при размонтировании
    return () => {
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full"></div>;
};

export default ThreeCanvas;
