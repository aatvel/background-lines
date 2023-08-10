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
      max: 5,
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
        position={[-2.1, -0.3, -3]}
        scale={[0.009, 1.6 * nNumber, 0.009]}
        rotation={[
          ((2 * Math.PI) / 1) * 1.01,
          ((2 * Math.PI) / 1) * 0.76,
          ((2 * Math.PI) / 1) * 0.82,
        ]}
      />
      <Clone
        object={model.scene}
        position={[-1.8, -0.29, -3]}
        scale={[0.009, 1.6 * nNumber, 0.009]}
        rotation={[
          ((2 * Math.PI) / 1) * 1.01,
          ((2 * Math.PI) / 1) * 0.76,
          ((2 * Math.PI) / 1) * 0.82,
        ]}
      />
      <Clone
        object={model.scene}
        position={[-1.5, -0.28, -3]}
        scale={[0.009, 1.6 * nNumber, 0.009]}
        rotation={[
          ((2 * Math.PI) / 1) * 1.01,
          ((2 * Math.PI) / 1) * 0.76,
          ((2 * Math.PI) / 1) * 0.82,
        ]}
      />
      <Clone
        object={model.scene}
        position={[-1.2, -0.27, -3]}
        scale={[0.009, 1.6 * nNumber, 0.009]}
        rotation={[
          ((2 * Math.PI) / 1) * 1.01,
          ((2 * Math.PI) / 1) * 0.76,
          ((2 * Math.PI) / 1) * 0.82,
        ]}
      />
      <Clone
        object={model.scene}
        position={[-0.9, - 0.26, -3]}
        scale={[0.009, 1.6* nNumber, 0.009]}
        rotation={[
          ((2 * Math.PI) / 1) * 1.01,
          ((2 * Math.PI) / 1) * 0.76,
          ((2 * Math.PI) / 1) * 0.82,
        ]}
      />
      <Clone
        object={model.scene}
        position={[-0.6, -0.25, -3]}
        scale={[0.009, 1.6* nNumber, 0.009]}
        rotation={[
          ((2 * Math.PI) / 1) * 1.01,
          ((2 * Math.PI) / 1) * 0.76,
          ((2 * Math.PI) / 1) * 0.82,
        ]}
      />
      <Clone
        object={model.scene}
        position={[ - 0.3, -0.26, -3]}
        scale={[0.009, 1.6* nNumber, 0.009]}
        rotation={[
          ((2 * Math.PI) / 1) * 1.01,
          ((2 * Math.PI) / 1) * 0.76,
          ((2 * Math.PI) / 1) * 0.82,
        ]}
      />
      <Clone
        object={model.scene}
        position={[0, -0.27, -3]}
        scale={[0.009, 1.6* nNumber, 0.009]}
        rotation={[
          ((2 * Math.PI) / 1) * 1.01,
          ((2 * Math.PI) / 1) * 0.76,
          ((2 * Math.PI) / 1) * 0.82,
        ]}
      />
      <Clone
        object={model.scene}
        position={[0.3, -0.28, -3]}
        scale={[0.009, 1.6* nNumber, 0.009]}
        rotation={[
          ((2 * Math.PI) / 1) * 1.01,
          ((2 * Math.PI) / 1) * 0.76,
          ((2 * Math.PI) / 1) * 0.82,
        ]}
      />
      <Clone
        object={model.scene}
        position={[0.6, -0.29, -3]}
        scale={[0.009, 1.6* nNumber, 0.009]}
        rotation={[
          ((2 * Math.PI) / 1) * 1.01,
          ((2 * Math.PI) / 1) * 0.76,
          ((2 * Math.PI) / 1) * 0.82,
        ]}
      />
      <Clone
        object={model.scene}
        position={[0.9, -0.3, -3]}
        scale={[0.009, 1.6* nNumber, 0.009]}
        rotation={[
          ((2 * Math.PI) / 1) * 1.01,
          ((2 * Math.PI) / 1) * 0.76,
          ((2 * Math.PI) / 1) * 0.82,
        ]}
      />





      <Clone
        object={model.scene}
        position={[-2.1, -0.5, -3]}
        scale={[0.009, -1.6* nNumber, 0.009]}
        rotation={[
          ((2 * Math.PI) / 1) * 0.62,
          ((2 * Math.PI) / 1) * 0.73,
          ((2 * Math.PI) / 1) * 0.85,
        ]}
      />
      <Clone
        object={model.scene}
        position={[-1.8, -0.51, -3]}
        scale={[0.009, -1.6* nNumber, 0.009]}
        rotation={[
          ((2 * Math.PI) / 1) * 0.62,
          ((2 * Math.PI) / 1) * 0.73,
          ((2 * Math.PI) / 1) * 0.85,
        ]}
      />
      <Clone
        object={model.scene}
        position={[-1.5, -0.52, -3]}
        scale={[0.009, -1.6* nNumber, 0.009]}
        rotation={[
          ((2 * Math.PI) / 1) * 0.62,
          ((2 * Math.PI) / 1) * 0.73,
          ((2 * Math.PI) / 1) * 0.85,
        ]}
      />
      <Clone
        object={model.scene}
        position={[-1.2, -0.53, -3]}
        scale={[0.009, -1.6* nNumber, 0.009]}
        rotation={[
          ((2 * Math.PI) / 1) * 0.62,
          ((2 * Math.PI) / 1) * 0.73,
          ((2 * Math.PI) / 1) * 0.85,
        ]}
      />
      <Clone
        object={model.scene}
        position={[-0.9, -0.54, -3]}
        scale={[0.009, -1.6* nNumber, 0.009]}
        rotation={[
          ((2 * Math.PI) / 1) * 0.62,
          ((2 * Math.PI) / 1) * 0.73,
          ((2 * Math.PI) / 1) * 0.85,
        ]}
      />
      <Clone
        object={model.scene}
        position={[-0.6, -0.55, -3]}
        scale={[0.009, -1.6* nNumber, 0.009]}
        rotation={[
          ((2 * Math.PI) / 1) * 0.62,
          ((2 * Math.PI) / 1) * 0.73,
          ((2 * Math.PI) / 1) * 0.85,
        ]}
      />
      <Clone
        object={model.scene}
        position={[-0.3, -0.56, -3]}
        scale={[0.009, -1.6* nNumber, 0.009]}
        rotation={[
          ((2 * Math.PI) / 1) * 0.62,
          ((2 * Math.PI) / 1) * 0.73,
          ((2 * Math.PI) / 1) * 0.85,
        ]}
      />
      <Clone
        object={model.scene}
        position={[0, -0.55, -3]}
        scale={[0.009, -1.6* nNumber, 0.009]}
        rotation={[
          ((2 * Math.PI) / 1) * 0.62,
          ((2 * Math.PI) / 1) * 0.73,
          ((2 * Math.PI) / 1) * 0.85,
        ]}
      />
      <Clone
        object={model.scene}
        position={[0.3, -0.54, -3]}
        scale={[0.009, -1.6* nNumber, 0.009]}
        rotation={[
          ((2 * Math.PI) / 1) * 0.62,
          ((2 * Math.PI) / 1) * 0.73,
          ((2 * Math.PI) / 1) * 0.85,
        ]}
      />
      <Clone
        object={model.scene}
        position={[0.6, -0.53, -3]}
        scale={[0.009, -1.6* nNumber, 0.009]}
        rotation={[
          ((2 * Math.PI) / 1) * 0.62,
          ((2 * Math.PI) / 1) * 0.73,
          ((2 * Math.PI) / 1) * 0.85,
        ]}
      />
      <Clone
        object={model.scene}
        position={[0.9, -0.52, -3]}
        scale={[0.009, -1.6* nNumber, 0.009]}
        rotation={[
          ((2 * Math.PI) / 1) * 0.62,
          ((2 * Math.PI) / 1) * 0.73,
          ((2 * Math.PI) / 1) * 0.85,
        ]}
      />
    </>
  );
};
