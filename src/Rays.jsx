import * as THREE from "three";

import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Clone, useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import { gsap } from "gsap";

export const Rays = () => {
  const ref = useRef();
  const clones = useRef([]);
  const clonesDown = useRef([]);
  const model = useGLTF("/box.glb");
  const { aNumber, bNumber, cNumber, nNumber } = useControls({
    nNumber: {
      value: 0.8,
      min: 0.0,
      max: 5,
      step: 0.01,
    },
  });


  useEffect(() => {
    clones.current.forEach((clone) => {
      gsap.to(clone.scale, {
        y: 1.6 * nNumber * Math.random(),
        duration: 0.5,
        ease: "power2.out",
      });
    });
    clonesDown.current.forEach((clone) => {
      gsap.to(clone.scale, {
        y: - 1.6 * nNumber * Math.random(),
        duration: 0.5,
        ease: "power2.out",
      });
    });
  }, [nNumber]);

  return (
    <>
      <Clone
        object={model.scene}
        ref={(node) => (clones.current[0] = node)}
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
        ref={(node) => (clones.current[1] = node)}
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
        ref={(node) => (clones.current[2] = node)}
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
        ref={(node) => (clones.current[3] = node)}
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
        ref={(node) => (clones.current[4] = node)}
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
        ref={(node) => (clones.current[5] = node)}
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
        ref={(node) => (clones.current[6] = node)}
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
        ref={(node) => (clones.current[7] = node)}
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
        ref={(node) => (clones.current[8] = node)}
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
        ref={(node) => (clones.current[9] = node)}
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
        ref={(node) => (clones.current[10] = node)}
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
        ref={(node) => (clonesDown.current[0] = node)}
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
        ref={(node) => (clonesDown.current[1] = node)}
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
        ref={(node) => (clonesDown.current[2] = node)}
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
        ref={(node) => (clonesDown.current[3] = node)}
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
        ref={(node) => (clonesDown.current[4] = node)}
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
        ref={(node) => (clonesDown.current[5] = node)}
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
        ref={(node) => (clonesDown.current[6] = node)}
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
        ref={(node) => (clonesDown.current[7] = node)}
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
        ref={(node) => (clonesDown.current[8] = node)}
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
        ref={(node) => (clonesDown.current[9] = node)}
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
        ref={(node) => (clonesDown.current[10] = node)}
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
