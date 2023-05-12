// const a = [
//     'nandu',
//     'gangireddy',
//     78,
//     'teacher',
//     ['sdf', 'ghj', 'gj'],
//     true
// ]


// for (i = 0; i < a.length; i++) {
//     console.log(a[i], typeof a[i])

// }
// console.log("------------------------------------")
// const ab = [1990, 1992, 1995, 1993]
// const age = []
// for (i = 0; i <= ab.length - 1; i++) {
//     age.push(2023 - ab[i]);


// }
// console.log(age)
//continue and break
// console.log('only strings using continue')
// const a = [
//     'nandu',
//     'gangireddy',
//     78,
//     98,
//     'teacher',
//     ['sdf', 'ghj', 'gj'],
//     true
// ]
// for (i = 0; i < a.length - 1; i++) {
//     if (typeof a[i] != 'string') continue
//     console.log(a[i], typeof a[i])
// }
// console.log('only strings using break')
// for (i = 0; i < a.length - 1; i++) {
//     if (typeof a[i] === 'number') break
//     console.log(a[i], typeof a[i])
// }

//for loop in for loop
for (i = 0; i <= 3; i++) {
    console.log(`im outer loop ${i}`)
    for (j = 0; j <= 4; j++) {
        console.log(` hlooooooooooooooooo im inner loop ${j}`)
    }
}

