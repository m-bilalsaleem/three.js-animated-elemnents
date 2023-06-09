/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 letterbox.gltf
Author: holtkamp (https://sketchfab.com/holtkamp)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/letter-block-d628bf4c2215423ab717382d20a04c5b
Title: Letter Block
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/letterbox.gltf");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Cube_1.geometry} material={materials.Edges} />
        <mesh geometry={nodes.Cube_2.geometry} material={materials.Faces} />
        <mesh geometry={nodes.Cube_3.geometry} material={materials.Letters1} />
        <mesh geometry={nodes.Cube_4.geometry} material={materials.Letters2} />
        <mesh geometry={nodes.Cube_5.geometry} material={materials.Letters3} />
      </group>
    </group>
  );
}

useGLTF.preload("/letterbox.gltf");
