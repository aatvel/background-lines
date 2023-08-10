import { useRef, useEffect } from "react";
import { Rays } from "./Rays";

export default function Experience() {
  useEffect((state, delta) => {
    console.log(delta);
  }, []);
  return (
    <>
      <color args={["#000000"]} attach="background" />

      <ambientLight intensity={1} />

      <fog attach="fog" args={["#000000", 16, - 5]} />
      <Rays />
    </>
  );
}
