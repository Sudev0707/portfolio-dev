/// <reference types="vite/client" />

declare module "*.glb" {
  const src: string;
  export default src;
}

declare module "*.png" {
  const src: string;
  export default src;
}

declare module "meshline" {
  import type { BufferGeometry, Material, Texture, Vector3 } from "three";

  export class MeshLineGeometry extends BufferGeometry {
    setPoints(
      points: Vector3[] | Vector3[][] | number[] | Float32Array,
      wcb?: (p: number) => number,
    ): void;
  }

  export class MeshLineMaterial extends Material {
    lineWidth?: number;
    resolution?: [number, number];
    useMap?: boolean;
    map?: Texture;
    repeat?: [number, number];
  }
}
