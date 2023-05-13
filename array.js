// const arr2 = function (param) {
//     let max = param[0]
//     let min = param[0]
//     for (let i = 0; i < param.length; i++) {
//         if (param[i] > max) max = param[i]
//         if (param[i] < min) min = param[i]


//     }
//     console.log(max)
//     console.log(min)
//     console.log(max - min)
// }
// arr2([2, 3, 6, 9])

console.log('--------------------------------------')
const arr2 = function (param1, param2) {
    const box = param1.concat(param2)l
    console.log(box)
    let max = box[0]
    let min = box[0]
    for (let i = 0; i < box.length; i++) {
        if (box[i] == 'str') continue
        if (box[i] > max) max = box[i]
        if (box[i] < min) min = box[i]


    }
    console.log(max)
    console.log(min)
    console.log(max - min)
}
arr2([2, 3, 6, 9], [4, 6, 8, 1, 'absabsa'])