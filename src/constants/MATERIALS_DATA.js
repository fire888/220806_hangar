import * as THREE from "three";

export const MATERIALS_DATA = [
    {
        name: 'floorMaterial',
        type: 'MeshStandardMaterial',
        data: { map: 'floorMap', roughness: 0.0, side: THREE.DoubleSide, },
    },
    {
        name: 'leftWallMaterial',
        type: 'MeshStandardMaterial',
        data: { map: 'leftWallMap', roughness: 0.0, side: THREE.DoubleSide, },
    },
    {
        name: 'rightWallMaterial',
        type: 'MeshStandardMaterial',
        data: { map: 'rightWallMap', roughness: 0.0, side: THREE.DoubleSide, },
    },
    {
        name: 'backWallMaterial',
        type: 'MeshStandardMaterial',
        data: { map: 'backWallMap', roughness: 0.0, side: THREE.DoubleSide, },
    },
    {
        name: 'frontWallMaterial',
        type: 'MeshStandardMaterial',
        data: { map: 'frontWallMap', roughness: 0.0, side: THREE.DoubleSide, },
    },
    {
        name: 'columnsMaterial',
        type: 'MeshStandardMaterial',
        data: { map: 'columnsMap', roughness: 0.0, side: THREE.DoubleSide, },
    },
    {
        name: 'ceilingMaterial',
        type: 'MeshStandardMaterial',
        data: { map: 'ceilingMap', roughness: 0.0, side: THREE.DoubleSide, },
    },
    {
        name: 'lightCeilingMaterial',
        type: 'MeshStandardMaterial',
        data: { map: 'lightCellingMap', roughness: 0.0, side: THREE.DoubleSide, },
    },
    {
        name: 'posters0Material',
        type: 'MeshBasicMaterial',
        data: { map: 'p0Map', roughness: 0.0, side: THREE.DoubleSide, },
    },
    {
        name: 'posters1Material',
        type: 'MeshBasicMaterial',
        data: { map: 'p1Map', roughness: 0.0, side: THREE.DoubleSide, },
    },
    {
        name: 'posters2Material',
        type: 'MeshBasicMaterial',
        data: { map: 'p2Map', roughness: 0.0, side: THREE.DoubleSide, },
    },
    {
        name: 'posters3Material',
        type: 'MeshBasicMaterial',
        data: { map: 'p3Map', roughness: 0.0, side: THREE.DoubleSide, },
    },
    {
        name: 'cubeMaterial',
        type: 'MeshStandardMaterial',
        data: { color: 0xffffff, roughness: 0.0, metalness: 0.5 },
    },
    {
        name: 'discDropMaterial',
        type: 'MeshStandardMaterial',
        data: { color: 0xffffff, roughness: 0.0, metalness: 1.0 },
    },
    {
        name: 'ribbon1Material',
        type: 'MeshBasicMaterial',
        data: { map: 'ribbon1Map' },
    },
    {
        name: 'dropsMaterial',
        type: 'MeshBasicMaterial',
        data: { map: 'drops1Map' },
    },
    {
        name: 'luminousСubeMaterial',
        type: 'MeshStandardMaterial',
        data: { map: 'luminousMap' },
    },
    {
        name: 'cubeBottomMaterial',
        type: 'MeshStandardMaterial',
        data: { color: 0xffffff, roughness: 0.0, metalness: 0.1 },
    },
    {
        name: 'k2Material',
        type: 'MeshStandardMaterial',
        data: { color: 0xffffff, roughness: 0.0, metalness: 1.0, envMap: 'cristalEnvironmentMap', envMapIntensity: 2.5 },
    },
    {
        name: 'stoneMaterial',
        type: 'MeshStandardMaterial',
        data: { map: 'stoneMap', roughness: 0.0 },
    },
    {
        name: 'crystallMaterial',
        type: 'MeshPhysicalMaterial',
        data: { transmission: 1, thickness: 1.5, roughness: 0.07, envMap: 'cristalEnvironmentMap', envMapIntensity: 3.5},
    },
    {
        name: 'crystallGridMaterial',
        type: 'MeshStandardMaterial',
        data: { color: 0x000000, roughness: 0.0, metalness: 1.0 },
    },
    {
        name: 'cntrMaterial',
        type: 'MeshStandardMaterial',
        data: { emissive: 0xffffff },
    },
    {
        name: 'kMaterial',
        type: 'MeshStandardMaterial',
        data: { color: 0xffffff, roughness: 0.0, metalness: 1.0, envMap: 'environmentMap', envMapIntensity: 1.0 },
    },
    {
        name: 'sculptureMaterial',
        type: 'MeshPhysicalMaterial',
        data: { color: 0xD75C2F, roughness: 0.0, metalness: 1.0 },
    },
    {
        name: 'poster_noiseMaterial',
        type: 'MeshStandardMaterial',
        data: { color: 0xffffff, roughness: 0.0, metalness: 1.0 },
    },
]
//
//
// // K material
// const kMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.0, metalness: 1.0, envMap: environmentMap, envMapIntensity: 1.0 })
//
// // Sculpture material
// const sculptureMaterial = new THREE.MeshPhysicalMaterial({ color: 0xD75C2F, roughness: 0.0, metalness: 1.0 })
//
// // Poster Noise material
// const poster_noiseMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.0, metalness: 1.0 })