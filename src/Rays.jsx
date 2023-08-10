import * as THREE from "three";

import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Clone, useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import { gsap } from "gsap";

export const Rays = () => {
  const ref = useRef();
  const model = useGLTF("/box.glb");
  const { aNumber, bNumber, cNumber, nNumber } = useControls({
    nNumber: {
      value: 0.8,
      min: 0.0,
      max: 1.2,
      step: 0.01,
    },
    // aNumber: {
    //   value: 0.8,
    //   min: 0.0,
    //   max: 1.2,
    //   step: 0.01,
    // },
    // bNumber: {
    //   value: 0.8,
    //   min: 0.0,
    //   max: 1.2,
    //   step: 0.01,
    // },
    // cNumber: {
    //   value: 0.8,
    //   min: 0.0,
    //   max: 1.2,
    //   step: 0.01,
    // },
  });


  return (
    <>
      <Clone
        ref={ref}
        object={model.scene}
        position={[-2.1, -0.3, 0]}
        scale={[0.009, 1.55 * nNumber, 0.009]}
        rotation={[
          ((2 * Math.PI) / 1) * 1.01,
          ((2 * Math.PI) / 1) * 0.76,
          ((2 * Math.PI) / 1) * 0.82,
        ]}
      />
      <Clone
        object={model.scene}
        position={[-1.8, -0.29, 0]}
        scale={[0.009, 1.55 * nNumber, 0.009]}
        rotation={[
          ((2 * Math.PI) / 1) * 1.01,
          ((2 * Math.PI) / 1) * 0.76,
          ((2 * Math.PI) / 1) * 0.82,
        ]}
      />
      <Clone
        object={model.scene}
        position={[-1.5, -0.28, 0]}
        scale={[0.009, 1.55 * nNumber, 0.009]}
        rotation={[
          ((2 * Math.PI) / 1) * 1.01,
          ((2 * Math.PI) / 1) * 0.76,
          ((2 * Math.PI) / 1) * 0.82,
        ]}
      />
      <Clone
        object={model.scene}
        position={[-1.2, -0.27, 0]}
        scale={[0.009, 1.55 * nNumber, 0.009]}
        rotation={[
          ((2 * Math.PI) / 1) * 1.01,
          ((2 * Math.PI) / 1) * 0.76,
          ((2 * Math.PI) / 1) * 0.82,
        ]}
      />
      <Clone
        object={model.scene}
        position={[-0.9, - 0.26, 0]}
        scale={[0.009, 1.58* nNumber, 0.009]}
        rotation={[
          ((2 * Math.PI) / 1) * 1.01,
          ((2 * Math.PI) / 1) * 0.76,
          ((2 * Math.PI) / 1) * 0.82,
        ]}
      />
      <Clone
        object={model.scene}
        position={[-0.6, -0.25, 0]}
        scale={[0.009, 1.65* nNumber, 0.009]}
        rotation={[
          ((2 * Math.PI) / 1) * 1.01,
          ((2 * Math.PI) / 1) * 0.76,
          ((2 * Math.PI) / 1) * 0.82,
        ]}
      />
      <Clone
        object={model.scene}
        position={[ - 0.3, -0.26, 0]}
        scale={[0.009, 1.78* nNumber, 0.009]}
        rotation={[
          ((2 * Math.PI) / 1) * 1.01,
          ((2 * Math.PI) / 1) * 0.76,
          ((2 * Math.PI) / 1) * 0.82,
        ]}
      />
      <Clone
        object={model.scene}
        position={[0, -0.27, 0]}
        scale={[0.009, 1.91* nNumber, 0.009]}
        rotation={[
          ((2 * Math.PI) / 1) * 1.01,
          ((2 * Math.PI) / 1) * 0.76,
          ((2 * Math.PI) / 1) * 0.82,
        ]}
      />
      <Clone
        object={model.scene}
        position={[0.3, -0.28, 0]}
        scale={[0.009, 2.13* nNumber, 0.009]}
        rotation={[
          ((2 * Math.PI) / 1) * 1.01,
          ((2 * Math.PI) / 1) * 0.76,
          ((2 * Math.PI) / 1) * 0.82,
        ]}
      />
      <Clone
        object={model.scene}
        position={[0.6, -0.29, 0]}
        scale={[0.009, 2.33* nNumber, 0.009]}
        rotation={[
          ((2 * Math.PI) / 1) * 1.01,
          ((2 * Math.PI) / 1) * 0.76,
          ((2 * Math.PI) / 1) * 0.82,
        ]}
      />
      <Clone
        object={model.scene}
        position={[0.9, -0.3, 0]}
        scale={[0.009, 2.57* nNumber, 0.009]}
        rotation={[
          ((2 * Math.PI) / 1) * 1.01,
          ((2 * Math.PI) / 1) * 0.76,
          ((2 * Math.PI) / 1) * 0.82,
        ]}
      />

      <Clone
        object={model.scene}
        position={[-2.1, -0.5, 0]}
        scale={[0.009, -1.51* nNumber, 0.009]}
        rotation={[
          ((2 * Math.PI) / 1) * 0.62,
          ((2 * Math.PI) / 1) * 0.73,
          ((2 * Math.PI) / 1) * 0.85,
        ]}
      />
      <Clone
        object={model.scene}
        position={[-1.8, -0.51, 0]}
        scale={[0.009, -1.54* nNumber, 0.009]}
        rotation={[
          ((2 * Math.PI) / 1) * 0.62,
          ((2 * Math.PI) / 1) * 0.73,
          ((2 * Math.PI) / 1) * 0.85,
        ]}
      />
      <Clone
        object={model.scene}
        position={[-1.5, -0.52, 0]}
        scale={[0.009, -1.58* nNumber, 0.009]}
        rotation={[
          ((2 * Math.PI) / 1) * 0.62,
          ((2 * Math.PI) / 1) * 0.73,
          ((2 * Math.PI) / 1) * 0.85,
        ]}
      />
      <Clone
        object={model.scene}
        position={[-1.2, -0.53, 0]}
        scale={[0.009, -1.63* nNumber, 0.009]}
        rotation={[
          ((2 * Math.PI) / 1) * 0.62,
          ((2 * Math.PI) / 1) * 0.73,
          ((2 * Math.PI) / 1) * 0.85,
        ]}
      />
      <Clone
        object={model.scene}
        position={[-0.9, -0.54, 0]}
        scale={[0.009, -1.71* nNumber, 0.009]}
        rotation={[
          ((2 * Math.PI) / 1) * 0.62,
          ((2 * Math.PI) / 1) * 0.73,
          ((2 * Math.PI) / 1) * 0.85,
        ]}
      />
      <Clone
        object={model.scene}
        position={[-0.6, -0.55, 0]}
        scale={[0.009, -1.78* nNumber, 0.009]}
        rotation={[
          ((2 * Math.PI) / 1) * 0.62,
          ((2 * Math.PI) / 1) * 0.73,
          ((2 * Math.PI) / 1) * 0.85,
        ]}
      />
      <Clone
        object={model.scene}
        position={[-0.3, -0.56, 0]}
        scale={[0.009, -1.88* nNumber, 0.009]}
        rotation={[
          ((2 * Math.PI) / 1) * 0.62,
          ((2 * Math.PI) / 1) * 0.73,
          ((2 * Math.PI) / 1) * 0.85,
        ]}
      />
      <Clone
        object={model.scene}
        position={[0, -0.55, 0]}
        scale={[0.009, -2.02* nNumber, 0.009]}
        rotation={[
          ((2 * Math.PI) / 1) * 0.62,
          ((2 * Math.PI) / 1) * 0.73,
          ((2 * Math.PI) / 1) * 0.85,
        ]}
      />
      <Clone
        object={model.scene}
        position={[0.3, -0.54, 0]}
        scale={[0.009, -2.16* nNumber, 0.009]}
        rotation={[
          ((2 * Math.PI) / 1) * 0.62,
          ((2 * Math.PI) / 1) * 0.73,
          ((2 * Math.PI) / 1) * 0.85,
        ]}
      />
      <Clone
        object={model.scene}
        position={[0.6, -0.53, 0]}
        scale={[0.009, -2.32* nNumber, 0.009]}
        rotation={[
          ((2 * Math.PI) / 1) * 0.62,
          ((2 * Math.PI) / 1) * 0.73,
          ((2 * Math.PI) / 1) * 0.85,
        ]}
      />
      <Clone
        object={model.scene}
        position={[0.9, -0.52, 0]}
        scale={[0.009, -2.42* nNumber, 0.009]}
        rotation={[
          ((2 * Math.PI) / 1) * 0.62,
          ((2 * Math.PI) / 1) * 0.73,
          ((2 * Math.PI) / 1) * 0.85,
        ]}
      />
    </>
  );
};
