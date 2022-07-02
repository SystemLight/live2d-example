import './live2d/core/live2d.min'
import {Waifu} from './waifu'

let can = document.createElement('canvas')
can.width = 300
can.height = 300

new Waifu(
  can,
  {
    'type': 'Live2D Model Setting',
    'name': 'haru',
    'model': 'model/haru/haru.moc',
    'textures': [
      'model/haru/haru.1024/texture_00.png',
      'model/haru/haru.1024/texture_01.png',
      'model/haru/haru.1024/texture_02.png'
    ]
  }
).loop()

document.body.append(can)
