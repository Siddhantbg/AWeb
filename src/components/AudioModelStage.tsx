"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

type AudioModelStageProps = {
  mode?: "flat" | "alive";
  intensified?: boolean;
  className?: string;
};

export default function AudioModelStage({ mode = "flat", intensified = false, className }: AudioModelStageProps) {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) {
      return;
    }

    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 1000);
    camera.position.set(0, 0.9, 2.6);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = mode === "alive" ? 1.14 : 1.02;
    renderer.setClearColor(0x000000, 0);
    renderer.setClearAlpha(0);
    host.appendChild(renderer.domElement);

    const ambient = new THREE.AmbientLight(0xffffff, mode === "alive" ? 0.84 : 0.72);
    const key = new THREE.DirectionalLight(0xffffff, mode === "alive" ? 1.95 : 1.6);
    key.position.set(3.4, 2.8, 2.4);
    const fill = new THREE.DirectionalLight(0xffe3c0, mode === "alive" ? 1.08 : 0.88);
    fill.position.set(-3, 1.2, 1.8);
    const rim = new THREE.DirectionalLight(0xffffff, mode === "alive" ? 0.86 : 0.68);
    rim.position.set(0, 1.8, -3.8);
    scene.add(ambient, key, fill, rim);

    let frameId = 0;
    let mountedModel: THREE.Object3D | null = null;
    const animatedBars: Array<{
      mesh: THREE.Mesh;
      baseScaleY: number;
      phase: number;
      gain: number;
    }> = [];

    const resize = () => {
      const width = host.clientWidth;
      const height = host.clientHeight;
      if (width <= 0 || height <= 0) {
        return;
      }

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };

    const modelOffsetX = -0.58;
    const modelOffsetY = -0.05;

    const normalizeModel = (model: THREE.Object3D) => {
      const bounds = new THREE.Box3().setFromObject(model);
      const size = bounds.getSize(new THREE.Vector3());
      const center = bounds.getCenter(new THREE.Vector3());
      const maxDimension = Math.max(size.x, size.y, size.z) || 1;
      const scale = 3.1 / maxDimension;

      model.scale.setScalar(scale);
      model.position.sub(center.multiplyScalar(scale));
      model.position.x += modelOffsetX;
      model.position.y += modelOffsetY;

      model.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.castShadow = false;
          child.receiveShadow = false;

          const stylized = new THREE.MeshStandardMaterial({
            color: new THREE.Color("#f7f7f7"),
            emissive: new THREE.Color("#f0f0f0"),
            emissiveIntensity: mode === "alive" ? 0.92 : 0.72,
            roughness: 0.36,
            metalness: 0.12,
            transparent: true,
            opacity: 0.98,
          });

          if (Array.isArray(child.material)) {
            child.material.forEach((material) => material.dispose());
          } else {
            child.material.dispose();
          }

          child.material = stylized;

          // Treat each mesh as a potential bar in the signal icon and store baseline transform.
          const meshBounds = new THREE.Box3().setFromObject(child);
          const meshCenter = meshBounds.getCenter(new THREE.Vector3());
          const meshSize = meshBounds.getSize(new THREE.Vector3());
          animatedBars.push({
            mesh: child,
            baseScaleY: child.scale.y,
            phase: meshCenter.x * 4.2,
            gain: THREE.MathUtils.clamp(meshSize.y * 2.8, 0.65, 1.5),
          });
          return;
        }

        if (child instanceof THREE.Line || child instanceof THREE.LineSegments) {
          const lineMaterial = child.material as THREE.Material;
          lineMaterial.dispose();
          child.material = new THREE.LineBasicMaterial({
            color: new THREE.Color("#ffffff"),
            transparent: true,
            opacity: mode === "alive" ? 0.94 : 0.86,
          });
        }
      });
    };

    const loader = new GLTFLoader();
    const modelCandidates = ["/models/Audio/AudioSignal.glb", "/models/Audio/scene.gltf"];

    const tryLoad = (index: number) => {
      if (index >= modelCandidates.length) {
        setHasError(true);
        return;
      }

      loader.load(
        modelCandidates[index],
        (gltf) => {
          setHasError(false);
          mountedModel = gltf.scene;
          normalizeModel(mountedModel);
          scene.add(mountedModel);
        },
        undefined,
        () => {
          tryLoad(index + 1);
        },
      );
    };

    tryLoad(0);

    let startTime = performance.now();

    const animate = () => {
      const elapsed = (performance.now() - startTime) / 1000;
      const boost = intensified ? 1.2 : 1;
      renderer.toneMappingExposure = THREE.MathUtils.lerp(
        renderer.toneMappingExposure,
        (mode === "alive" ? 1.16 : 1.03) * boost,
        0.04,
      );

      if (mountedModel) {
        mountedModel.rotation.y = Math.sin(elapsed * 0.22) * (mode === "alive" ? 0.065 : 0.04);
        mountedModel.rotation.x = -0.08 + Math.sin(elapsed * 0.52) * (mode === "alive" ? 0.028 : 0.02);
        mountedModel.position.x = modelOffsetX;
        mountedModel.position.y = modelOffsetY + Math.sin(elapsed * 0.95) * (mode === "alive" ? 0.018 : 0.012);

        const beat = Math.max(0, Math.sin(elapsed * 2.4)) * 0.22;
        const baseMotion = mode === "alive" ? 0.72 : 0.5;
        const motionIntensity = intensified ? 1.3 : 1;

        for (const bar of animatedBars) {
          const waveA = Math.sin(elapsed * 4.6 + bar.phase);
          const waveB = Math.sin(elapsed * 7.8 + bar.phase * 1.7) * 0.5;
          const waveC = Math.sin(elapsed * 11.2 - bar.phase * 0.8) * 0.28;
          const composite = (waveA + waveB + waveC) / 1.78;

          // Keep movement mostly positive so bars pulse like an audio meter.
          const amplitude = THREE.MathUtils.clamp(0.58 + Math.max(0, composite) * 0.9 + beat, 0.35, 1.65);
          const targetScaleY = bar.baseScaleY * (1 + amplitude * baseMotion * bar.gain * 0.55 * motionIntensity);
          bar.mesh.scale.y = THREE.MathUtils.lerp(bar.mesh.scale.y, targetScaleY, 0.26);
        }
      }

      renderer.render(scene, camera);
      frameId = window.requestAnimationFrame(animate);
    };

    resize();
    frameId = window.requestAnimationFrame(animate);

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(host);

    return () => {
      window.cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      scene.traverse((object) => {
        if (!(object instanceof THREE.Mesh)) {
          return;
        }

        object.geometry.dispose();
        if (Array.isArray(object.material)) {
          object.material.forEach((material) => material.dispose());
          return;
        }
        object.material.dispose();
      });
      renderer.dispose();
      if (renderer.domElement.parentElement === host) {
        host.removeChild(renderer.domElement);
      }
    };
  }, [mode, intensified]);

  return (
    <div ref={hostRef} className={`relative h-full w-full bg-transparent ${className ?? ""}`}>
      {hasError ? (
        <div className="pointer-events-none absolute inset-0 grid place-items-center text-sm text-white/70">
          Model failed to load.
        </div>
      ) : null}
    </div>
  );
}