import React, {useRef} from "react";
import * as THREE from "three";

import { Line } from "@react-three/drei";
import { extend,  useFrame, useThree } from '@react-three/fiber'
import { useControls } from "leva";
import { MeshLineGeometry, MeshLineMaterial } from 'meshline'

extend({ MeshLineGeometry, MeshLineMaterial })

const Lines = () => {
  const lines = [];
  const { aNumber } = useControls({
        aNumber: {
          value: 1,
          min: 0.01,
          max: 3,
          step: 0.01,
        },
      });

  for (let i = 0; i < 20; i++) {
    const curve = [
      [0, 0, 0],
      [(Math.random() * 2 - 1) * aNumber, (Math.random() * 2 - 1) * aNumber, (Math.random() * 2 - 1) * aNumber],
    ];

    const material = useRef();

    useFrame(() => {
      // material.current.uniforms.dashOffset.value *= aNumber;
    });

    lines.push(
      <mesh key={i}>
        <meshLineGeometry attach="geometry" points={curve} />
        <meshLineMaterial
          ref={material}
          transparent
          // depthTest={false}
          lineWidth={0.005}
          color={0xffff00}
          dashArray={0.01}
          dashRatio={0.01}
        />
      </mesh>
    );
  }

  return <>{lines}</>;
};

export default Lines;

// const Lines = () => {
//   const { aNumber } = useControls({
//     aNumber: {
//       value: 1,
//       min: 0.01,
//       max: 3,
//       step: 0.01,
//     },
//   });

//   const generateLine = (startX, startY, endX, endY) => {
//     const startPoint = new THREE.Vector3(startX, startY, 0);
//     const endPoint = new THREE.Vector3(endX, endY, 0);
//     return [startPoint, endPoint];
//   };

//   const lines = [
//     generateLine(-2.5, 0.17, -3, 1 + aNumber),
//     generateLine(-2.1, 0.255, -2.5, 1 + aNumber),
//     generateLine(-1.7, 0.26, -2.0, 1 + aNumber),
//     generateLine(-1.3, 0.265, -1.5, 1 + aNumber),
//     generateLine(-0.9, 0.27, -1.05, 1 + aNumber),
//     generateLine(-0.5, 0.271, -0.6, 1 + aNumber),
//     generateLine(0, 0.2, 0, 1 + aNumber),
//     generateLine(0.5, 0.11, 0.65, 1 + aNumber),
//     generateLine(1.0, -0.05, 1.4, 1 + aNumber),
//     generateLine(1.7, -0.28, 2.5, 1 + aNumber),
//     generateLine(2.7, -0.6, 3.9, 1 + aNumber),
//     generateLine(4.2, -1.1, 6.5, 1 + aNumber),
//     generateLine(5.9, -1.8, 10, 1 + aNumber),
//   ];

//   return (
//     <>
//       {lines.map((points, index) => (
//         <Line key={index} points={points} color="yellow" lineWidth={0.8} />
//       ))}
//     </>
//   );
// };

// export default Lines;
