import { useRef, useEffect } from "react";
import { Rays } from "./Rays";

export default function Experience() {
  useEffect((state, delta) => {
    console.log(delta);
  }, []);
  return (
    <>
      <color args={["#1F3E78"]} attach="background" />

      <ambientLight intensity={1} />

      <fog attach="fog" args={["#1F3E78", 15, - 5]} />
      <Rays />
    </>
  );
}
