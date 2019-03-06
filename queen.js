// 总共有多少种方法
let total = 0
// 当前排列 (index = row; ele = col)
let c = []
// 所有排列
let all = []
// 皇后个数
let n = 8

const queen = function (row = 0) {
    if (row === n) {
        total++
        all.push([...c])
    } else {
        for (let col = 0; col < n; col++) {
            c[row] = col
            if (check(row)) {
                // console.log(col, ' ------ ' , row, c)
                queen(row + 1)
            }
        }
    }
}

const check = function (row) {
    for (let i = 0; i < row; i++){
        // 纵向
        // console.log('row: ', row, 'i: ', i, 'c[row]: ', c[row], 'c[i]: ', c[i], c)
        if (c[row] === c[i]) return false
        // 斜向相减
        if (c[row] - row === c[i] - i) return false
        // 斜向相加
        if (c[row] + row === c[i] + i) return false
    }
    return true
}

queen()

console.log(total, all)