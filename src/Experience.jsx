import { Environment, Shadow, useGLTF } from "@react-three/drei";
import { Rays } from "./Rays";
import { EffectComposer, Vignette } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

export default function Experience() {
  return (
    <>
      <color args={["#243B74"]} attach="background" />
      {/* <Environment preset="city" /> */}
      <ambientLight intensity={0.5} />

      {/* <EffectComposer>
        <Vignette
          offset={0} // vignette offset
          darkness={0.5} // vignette darkness
          eskil={false} // Eskil's vignette technique
          blendFunction={BlendFunction.NORMAL} // blend mode
        />
      </EffectComposer> */}
      <fog attach="fog" args={["#172547", 16, - 4.5]} />
      <Rays />
    </>
  );
}
