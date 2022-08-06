import pX from '../assets/environment_map/px.jpg'
import nX from '../assets/environment_map/nx.jpg'
import pY from '../assets/environment_map/py.jpg'
import nY from '../assets/environment_map/ny.jpg'
import pZ from '../assets/environment_map/pz.jpg'
import nZ from '../assets/environment_map/nz.jpg'

import cr_pX from '../assets/crystal_environment_map/px.jpg'
import cr_nX from '../assets/crystal_environment_map/nx.jpg'
import cr_pY from '../assets/crystal_environment_map/py.jpg'
import cr_nY from '../assets/crystal_environment_map/ny.jpg'
import cr_pZ from '../assets/crystal_environment_map/pz.jpg'
import cr_nZ from '../assets/crystal_environment_map/nz.jpg'

import floorMap from '../assets/floor.jpg'
import leftWallMap from '../assets/left_wall.jpg'
import rightWallMap from '../assets/right_wall.jpg'
import backWallMap from '../assets/back_wall.jpg'
import frontWallMap from '../assets/front_wall.jpg'
import columnsMap from '../assets/columns.jpg'
import cellingMap from '../assets/ceiling.jpg'
import lightCellingMap from '../assets/light_ceiling.jpg'
import p0Map from '../assets/posters0.jpg'
import p1Map from '../assets/posters1.jpg'
import p2Map from '../assets/posters2.jpg'
import p3Map from '../assets/posters3.jpg'
import cubeMap from '../assets/cube.jpg'
import ribbon1Map from '../assets/ribbon1.jpg'
import drops1Map from '../assets/drops.jpg'
import luminousMap from '../assets/luminous_Cube.jpg'
import stoneMap from '../assets/stone1.jpg'

import hangarGlb from '../assets/hangar.glb'

export const ASSETS_TO_LOAD = [
    { type: 'cubeTexture', src: [pX, nX, pY, nY, pZ, nZ], key: 'environmentMap' },
    { type: 'cubeTexture', src: [cr_pX, cr_nX, cr_pY, cr_nY, cr_pZ, cr_nZ], key: 'cristalEnvironmentMap' },
    { type: 'img', src: floorMap, key: 'floorMap' },
    { type: 'img', src: leftWallMap, key: 'leftWallMap' },
    { type: 'img', src: rightWallMap, key: 'rightWallMap' },
    { type: 'img', src: backWallMap, key: 'backWallMap' },
    { type: 'img', src: frontWallMap, key: 'frontWallMap' },
    { type: 'img', src: columnsMap, key: 'columnsMap' },
    { type: 'img', src: cellingMap, key: 'ceilingMap' },
    { type: 'img', src: lightCellingMap, key: 'lightCellingMap' },
    { type: 'img', src: p0Map, key: 'p0Map' },
    { type: 'img', src: p1Map, key: 'p1Map' },
    { type: 'img', src: p2Map, key: 'p2Map' },
    { type: 'img', src: p3Map, key: 'p3Map' },
    { type: 'img', src: cubeMap, key: 'cubeMap' },
    { type: 'img', src: ribbon1Map, key: 'ribbon1Map' },
    { type: 'img', src: drops1Map, key: 'drops1Map' },
    { type: 'img', src: luminousMap, key: 'luminousMap' },
    { type: 'img', src: stoneMap, key: 'stoneMap' },
    { type: 'glb', src: hangarGlb, key: 'hangarGlb' },
]