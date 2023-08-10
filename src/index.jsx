import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import Experience from "./Experience.jsx";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <Canvas
    dpr={[1, 1.5]}
    onCreated={(state) => (state.gl.toneMappingExposure = 1.25)}
  >
    <PerspectiveCamera
      position={[-0.28, 0, 4.5]}
      fov={45}
      near={1}
      far={200}
      makeDefault
    />
    <Experience />
  </Canvas>
);
