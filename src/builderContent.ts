import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import Script1 from '../ed36149f-76c5-45c4-a678-d4b31c4ed9ca/src/item'
import Script2 from '../1dc0345a-f5dd-43b6-bf14-30e7752101b4/src/item'

export function buildScene() {
  const _scene = new Entity('_scene')
  engine.addEntity(_scene)
  const transform = new Transform({
    position: new Vector3(0, 0, 0),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1),
  })
  _scene.addComponentOrReplace(transform)

  const entity = new Entity('entity')
  engine.addEntity(entity)
  entity.setParent(_scene)
  const gltfShape = new GLTFShape(
    'models/FloorFantasyRocks_03/FloorFantasyRocks_03.glb'
  )
  gltfShape.withCollisions = true
  gltfShape.isPointerBlocker = true
  gltfShape.visible = true
  entity.addComponentOrReplace(gltfShape)
  const transform2 = new Transform({
    position: new Vector3(8, 0, 8),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1),
  })
  entity.addComponentOrReplace(transform2)

  const smallStoneStair = new Entity('smallStoneStair')
  engine.addEntity(smallStoneStair)
  smallStoneStair.setParent(_scene)
  const transform3 = new Transform({
    position: new Vector3(9, 0, 15.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(
      3.7663958072662354,
      4.651392459869385,
      3.7663958072662354
    ),
  })
  smallStoneStair.addComponentOrReplace(transform3)
  const gltfShape2 = new GLTFShape(
    'models/Module_Stair_Straight_1M/Module_Stair_Straight_1M.glb'
  )
  gltfShape2.withCollisions = true
  gltfShape2.isPointerBlocker = true
  gltfShape2.visible = true
  smallStoneStair.addComponentOrReplace(gltfShape2)

  const stoneTopBlock = new Entity('stoneTopBlock')
  engine.addEntity(stoneTopBlock)
  stoneTopBlock.setParent(_scene)
  const transform4 = new Transform({
    position: new Vector3(3, 0, 3.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1.4962525367736816, 0.9856662750244141),
  })
  stoneTopBlock.addComponentOrReplace(transform4)
  const gltfShape3 = new GLTFShape(
    'models/Pillar_Top_Stones_Corner_01/Pillar_Top_Stones_Corner_01.glb'
  )
  gltfShape3.withCollisions = true
  gltfShape3.isPointerBlocker = true
  gltfShape3.visible = true
  stoneTopBlock.addComponentOrReplace(gltfShape3)

  const stoneTopBlock3 = new Entity('stoneTopBlock3')
  engine.addEntity(stoneTopBlock3)
  stoneTopBlock3.setParent(_scene)
  stoneTopBlock3.addComponentOrReplace(gltfShape3)
  const transform5 = new Transform({
    position: new Vector3(9, 0, 12),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(
      1.245723843574524,
      1.434235692024231,
      0.7579238414764404
    ),
  })
  stoneTopBlock3.addComponentOrReplace(transform5)

  const stoneTopBlock2 = new Entity('stoneTopBlock2')
  engine.addEntity(stoneTopBlock2)
  stoneTopBlock2.setParent(_scene)
  stoneTopBlock2.addComponentOrReplace(gltfShape3)
  const transform6 = new Transform({
    position: new Vector3(16, 0, 4),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1.4962525367736816, 0.9856662750244141),
  })
  stoneTopBlock2.addComponentOrReplace(transform6)

  const dogStatue = new Entity('dogStatue')
  engine.addEntity(dogStatue)
  dogStatue.setParent(_scene)
  const transform9 = new Transform({
    position: new Vector3(
      1.301210880279541,
      2.4656124114990234,
      2.1973533630371094
    ),
    rotation: new Quaternion(
      1.108018303742572e-15,
      -0.7071068286895752,
      8.429369557916289e-8,
      -0.7071068286895752
    ),
    scale: new Vector3(1.0000016689300537, 1, 1.0000016689300537),
  })
  dogStatue.addComponentOrReplace(transform9)
  const gltfShape5 = new GLTFShape('models/PillarDog_01/PillarDog_01.glb')
  gltfShape5.withCollisions = true
  gltfShape5.isPointerBlocker = true
  gltfShape5.visible = true
  dogStatue.addComponentOrReplace(gltfShape5)

  const catStatue = new Entity('catStatue')
  engine.addEntity(catStatue)
  catStatue.setParent(_scene)
  const transform10 = new Transform({
    position: new Vector3(
      14.51323413848877,
      2.4653825759887695,
      2.5529298782348633
    ),
    rotation: new Quaternion(
      -2.4085271740892887e-15,
      0.7071068286895752,
      -8.429369557916289e-8,
      0.7071068286895752
    ),
    scale: new Vector3(1.0000030994415283, 1, 1.0000030994415283),
  })
  catStatue.addComponentOrReplace(transform10)
  const gltfShape6 = new GLTFShape('models/PillarCat_01/PillarCat_01.glb')
  gltfShape6.withCollisions = true
  gltfShape6.isPointerBlocker = true
  gltfShape6.visible = true
  catStatue.addComponentOrReplace(gltfShape6)
}
