import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { ConsoleModel } from "./ConsoleModel";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";

const ConsoleModelContainer = () => {
  return (
    <Canvas>
      <Suspense fallback="loading...">
        <Stage environment="night" intensity={0.5}>
          <ConsoleModel />
        </Stage>
        <OrbitControls enableZoom={true} autoRotate/>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      </Suspense>
    </Canvas>
  );
};

export default ConsoleModelContainer;
