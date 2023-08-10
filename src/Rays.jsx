import * as THREE from "three";
import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import {Clone, useGLTF } from "@react-three/drei";
import { useControls } from "leva";

export const Rays = () => {
  const ref = useRef();
  const model = useGLTF("/box.glb");
  const { aNumber, bNumber, cNumber, nNumber } = useControls({
    nNumber: {
      value: 0.8,
      min: 0.0,
      max: 1.2,
      step: 0.01,
    }
  });

  useFrame(() => {
    // ref.current.scale.y *= aNumber;
  });

  return (
    <>
      <Clone object={model.scene} position={[-1.5, 0, 0]} scale={[0.009, 1.55 * nNumber, 0.009]} rotation={[((2 * Math.PI) / 1) * 0.71,((2 * Math.PI) / 1) * 0.1,((2 * Math.PI) / 1) * 0.39]} />
      <Clone object={model.scene} position={[-1.2, - 0.01, 0]} scale={[0.009, 1.55 * nNumber, 0.009]} rotation={[((2 * Math.PI) / 1) * 0.71,((2 * Math.PI) / 1) * 0.1,((2 * Math.PI) / 1) * 0.39]} />
      <Clone object={model.scene} position={[-0.9, - 0.02, 0]} scale={[0.009, 1.55 * nNumber, 0.009]} rotation={[((2 * Math.PI) / 1) * 0.71,((2 * Math.PI) / 1) * 0.1,((2 * Math.PI) / 1) * 0.39]} />
      <Clone object={model.scene} position={[-0.6,- 0.045, 0]} scale={[0.009, 1.55 * nNumber, 0.009]} rotation={[((2 * Math.PI) / 1) * 0.71,((2 * Math.PI) / 1) * 0.1,((2 * Math.PI) / 1) * 0.39]} />
      <Clone object={model.scene} position={[-0.3, - 0.08, 0]} scale={[0.009, 1.58 * nNumber, 0.009]} rotation={[((2 * Math.PI) / 1) * 0.71,((2 * Math.PI) / 1) * 0.1,((2 * Math.PI) / 1) * 0.39]} />
      <Clone object={model.scene} position={[-0, - 0.14, 0]} scale={[0.009, 1.65 * nNumber, 0.009]} rotation={[((2 * Math.PI) / 1) * 0.71,((2 * Math.PI) / 1) * 0.1,((2 * Math.PI) / 1) * 0.39]} />
      <Clone object={model.scene} position={[0.35, -0.25, 0]} scale={[0.009, 1.78 * nNumber, 0.009]} rotation={[((2 * Math.PI) / 1) * 0.71,((2 * Math.PI) / 1) * 0.1,((2 * Math.PI) / 1) * 0.39]} />
      <Clone object={model.scene} position={[0.8,-0.37 , 0]} scale={[0.009, 1.91 * nNumber, 0.009]} rotation={[((2 * Math.PI) / 1) * 0.71,((2 * Math.PI) / 1) * 0.1,((2 * Math.PI) / 1) * 0.39]} />
      <Clone object={model.scene} position={[1.25, -0.55, 0]} scale={[0.009, 2.13 * nNumber, 0.009]} rotation={[((2 * Math.PI) / 1) * 0.71,((2 * Math.PI) / 1) * 0.1,((2 * Math.PI) / 1) * 0.39]} />
      <Clone object={model.scene} position={[1.7, -0.72, 0]} scale={[0.009, 2.33 * nNumber, 0.009]} rotation={[((2 * Math.PI) / 1) * 0.71,((2 * Math.PI) / 1) * 0.1,((2 * Math.PI) / 1) * 0.39]} />
      <Clone object={model.scene} position={[2.3, -0.92, 0]} scale={[0.009, 2.57 * nNumber, 0.009]} rotation={[((2 * Math.PI) / 1) * 0.71,((2 * Math.PI) / 1) * 0.1,((2 * Math.PI) / 1) * 0.39]} />

      <Clone object={model.scene} position={[-1.5, -0.17, 0]} scale={[0.009, - 1.51 * nNumber, 0.009]} rotation={[((2 * Math.PI) / 1) * 0.17,((2 * Math.PI) / 1) * 0.05,((2 * Math.PI) / 1) * 0.61]} />
      <Clone object={model.scene} position={[-1.2, -0.26, 0]} scale={[0.009, - 1.54 * nNumber, 0.009]} rotation={[((2 * Math.PI) / 1) * 0.17,((2 * Math.PI) / 1) * 0.05,((2 * Math.PI) / 1) * 0.61]} />
      <Clone object={model.scene} position={[-0.9, -0.35, 0]} scale={[0.009, - 1.58 * nNumber, 0.009]} rotation={[((2 * Math.PI) / 1) * 0.17,((2 * Math.PI) / 1) * 0.05,((2 * Math.PI) / 1) * 0.61]} />
      <Clone object={model.scene} position={[-0.6, -0.43, 0]} scale={[0.009, - 1.63 * nNumber, 0.009]} rotation={[((2 * Math.PI) / 1) * 0.17,((2 * Math.PI) / 1) * 0.05,((2 * Math.PI) / 1) * 0.61]} />
      <Clone object={model.scene} position={[-0.3, -0.5, 0]} scale={[0.009, - 1.71 * nNumber, 0.009]} rotation={[((2 * Math.PI) / 1) * 0.17,((2 * Math.PI) / 1) * 0.05,((2 * Math.PI) / 1) * 0.61]} />
      <Clone object={model.scene} position={[-0, -0.57, 0]} scale={[0.009, - 1.78 * nNumber, 0.009]} rotation={[((2 * Math.PI) / 1) * 0.17,((2 * Math.PI) / 1) * 0.05,((2 * Math.PI) / 1) * 0.61]} />
      <Clone object={model.scene} position={[0.35, -0.64, 0]} scale={[0.009, - 1.88 * nNumber, 0.009]} rotation={[((2 * Math.PI) / 1) * 0.17,((2 * Math.PI) / 1) * 0.05,((2 * Math.PI) / 1) * 0.61]} />
      <Clone object={model.scene} position={[0.8,-0.73 , 0]} scale={[0.009, - 2.02 *nNumber, 0.009]} rotation={[((2 * Math.PI) / 1) * 0.17,((2 * Math.PI) / 1) * 0.05,((2 * Math.PI) / 1) * 0.61]} />
      <Clone object={model.scene} position={[1.27, -0.82, 0]} scale={[0.009, - 2.16 * nNumber, 0.009]} rotation={[((2 * Math.PI) / 1) * 0.17,((2 * Math.PI) / 1) * 0.05,((2 * Math.PI) / 1) * 0.61]} />
      <Clone object={model.scene} position={[1.7, -0.89, 0]} scale={[0.009, - 2.32 * nNumber, 0.009]} rotation={[((2 * Math.PI) / 1) * 0.17,((2 * Math.PI) / 1) * 0.05,((2 * Math.PI) / 1) * 0.61]} />
      <Clone object={model.scene} position={[2.3, -1.05, 0]} scale={[0.009, - 2.42 * nNumber, 0.009]} rotation={[((2 * Math.PI) / 1) * 0.17,((2 * Math.PI) / 1) * 0.05,((2 * Math.PI) / 1) * 0.61]} />
    </>
  );
};
