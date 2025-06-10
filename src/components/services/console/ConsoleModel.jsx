import { useGLTF } from '@react-three/drei'

export function ConsoleModel(props) {
  const { nodes, materials } = useGLTF("/carr.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1.112}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh
        castShadow
        receiveShadow
        geometry={nodes.body_ask_dod001.geometry}
        material={materials.Rims}
      />
       <mesh
        castShadow
        receiveShadow
        geometry={nodes.wheelFtL_Tires001.geometry}
        material={materials.Rims}
      />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/carr.glb')
