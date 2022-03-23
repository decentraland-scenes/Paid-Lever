import { PaidLever } from './paidLever'
import { buildScene } from './builderContent'
import MovingBridge from './movingBridge'

export const sceneMessageBus = new MessageBus()

buildScene()

const bridge = new MovingBridge(
  {
    position: new Vector3(11.2, 2.2, 6.9),
    rotation: new Quaternion(
      -9.158600493394588e-15,
      -0.41761070489883423,
      4.978307543979099e-8,
      -0.9086260795593262
    )
  },
  {
    position: new Vector3(4, 2.2, 6.5),
    rotation: new Quaternion(
      -1.5265747641888378e-15,
      0.8520362377166748,
      -1.0157062746429801e-7,
      0.5234828591346741
    )
  },
  sceneMessageBus
)

const lever = new PaidLever(
  { position: new Vector3(7, 2.3, 11), rotation: Quaternion.Euler(0, 0, 0) },
  '0xe2b6024873d218B2E83B462D3658D8D7C3f55a18',
  10,
  'Move bridge',
  () => {
    sceneMessageBus.emit('moveBridgeRight', {})
    log('moving bridge right')
  },
  () => {
    sceneMessageBus.emit('moveBridgeLeft', {})
    log('moving bridge left')
  }
)
