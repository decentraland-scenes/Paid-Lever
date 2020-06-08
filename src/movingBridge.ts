import utils from '../node_modules/decentraland-ecs-utils/index'

let bridgeSound = new AudioClip('sounds/bridgeMoving.mp3')

export default class MovingBridge extends Entity {
  open: boolean = false
  startingPos: TranformConstructorArgs
  endingPos: TranformConstructorArgs

  constructor(
    startingPos: TranformConstructorArgs,
    endingPos: TranformConstructorArgs,
    messageBus: MessageBus,
    open?: boolean
  ) {
    super()
    this.addComponent(new Transform(startingPos))

    this.startingPos = startingPos
    this.endingPos = endingPos

    this.addComponent(new GLTFShape('models/Log_Bridge_01/Log_Bridge_01.glb'))
    this.getComponent(Transform).scale = new Vector3(2.23, 1.23, 1)

    this.addComponent(new AudioSource(bridgeSound))

    engine.addEntity(this)

    if (open) {
      this.open = open
    }

    messageBus.on('moveBridgeRight', ({ sender }) => {
      if (!this.open) {
        this.toggle(true)
      }
    })
    messageBus.on('moveBridgeLeft', ({ sender }) => {
      if (this.open) {
        this.toggle(false)
      }
    })
  }

  toggle(value: boolean, playSound = true) {
    if (this.open === value) return
    this.open = value
    this.getComponent(AudioSource).playOnce()

    if (value) {
      this.addComponentOrReplace(
        new utils.MoveTransformComponent(
          this.startingPos.position,
          this.endingPos.position,
          5
        )
      )
      this.addComponentOrReplace(
        new utils.RotateTransformComponent(
          this.startingPos.rotation,
          this.endingPos.rotation,
          5
        )
      )
    } else {
      this.addComponentOrReplace(
        new utils.MoveTransformComponent(
          this.endingPos.position,
          this.startingPos.position,
          3
        )
      )
      this.addComponentOrReplace(
        new utils.RotateTransformComponent(
          this.endingPos.rotation,
          this.startingPos.rotation,
          3
        )
      )
    }
  }
}
