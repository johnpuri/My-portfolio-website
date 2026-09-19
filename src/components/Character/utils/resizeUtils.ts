import * as THREE from "three";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function updateCameraProjection(
  camera: THREE.PerspectiveCamera,
  width: number,
  height: number
) {
  if (!camera || height === 0) return;
  const aspect = width / height;
  camera.aspect = aspect;

  const baseFov = 14.5;
  const baseAspect = 16 / 9;

  if (width > 1024) {
    if (aspect < baseAspect) {
      // Scale vertical FOV to preserve horizontal framing on narrower desktop screens
      const hFovRad = 2 * Math.atan(Math.tan((baseFov * Math.PI) / 360) * baseAspect);
      const vFovRad = 2 * Math.atan(Math.tan(hFovRad / 2) / aspect);
      const calculatedFov = (vFovRad * 180) / Math.PI;
      camera.fov = Math.min(Math.max(calculatedFov, 14.5), 21.5);
    } else {
      camera.fov = baseFov;
    }
    camera.position.set(0, 13.1, 24.7);
    camera.zoom = 1.1;
  } else {
    // Tablet & mobile view: comfortable framing centered in upper hero area
    camera.fov = Math.min(Math.max(15 / Math.max(aspect, 0.5), 15), 22);
    camera.position.set(0, 13.5, 25.5);
    camera.zoom = 1.05;
  }

  camera.updateProjectionMatrix();
}

let resizeTimeout: ReturnType<typeof setTimeout> | null = null;

export default function handleResize(
  renderer: THREE.WebGLRenderer,
  camera: THREE.PerspectiveCamera,
  canvasDiv: React.RefObject<HTMLDivElement>,
  character?: THREE.Object3D | null
) {
  if (!canvasDiv.current || !renderer || !camera) return;
  const canvas3d = canvasDiv.current.getBoundingClientRect();
  const width = canvas3d.width || window.innerWidth;
  const height = canvas3d.height || window.innerHeight;

  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  updateCameraProjection(camera, width, height);

  // Debounce ScrollTrigger refresh to avoid lag during continuous window drag
  if (resizeTimeout) clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    ScrollTrigger.refresh();
  }, 150);
}
