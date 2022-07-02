const fs = require('fs')
const path = require('path')

let modelPackages = fs.readdirSync('../model') // 模型包列表
let patchModelPath = {
    '22': '/model/22/22.xmas.1.model.json',
    '33': '/model/33/model.2018.spring.json',
    'mashiro': '/model/mashiro/ryoufuku.model.json',
    'nep': '/model/nep/model.json',
    'rem': '/model/rem/rem.json',
    'Unitychan': '/model/Unitychan/unitychan.model.json',
    'tia': '/model/tia/model.json'
}
let modelJsonList = [] // 存取模型入口文件路径
let unknownModelJsonList = []

modelPackages.forEach((wifeModel) => {
    let modelAssetFiles = fs.readdirSync( // 读取模型包中的所有文件
        path.join(__dirname, '../model', wifeModel)
    )
    if (modelAssetFiles.includes(`${wifeModel}.model.json`)) {
        modelJsonList.push(`/model/${wifeModel}/${wifeModel}.model.json`)
    } else if (modelAssetFiles.includes(`index.json`)) {
        modelJsonList.push(`/model/${wifeModel}/index.json`)
    } else {
        if (patchModelPath[wifeModel]) {
            modelJsonList.push(patchModelPath[wifeModel])
        } else {
            unknownModelJsonList.push(wifeModel)
        }
    }
})

console.log('模型数量', modelJsonList.length)
console.log('未知模型数量', unknownModelJsonList.length)
console.log(modelJsonList)
