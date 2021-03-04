export default class Arraylist {
    constructor() {
        this.list = []
        this.size = 0
    }
    insert(item) {
        this.list.push(item)
        this.size++
    }
    toSring() {
        return this.list.join("-")
    }

    // 交换两个数据
    swap(m, n) {
        // 基础版
        let temp = this.list[m]
        this.list[m] = this.list[n]
        this.list[n] = temp
    }
    // 冒泡
    bubbleSort() {
        // 实现用冒泡的思路简单将最大的数放到末尾
        // for (let i = 0; i < this.size - 1; i++) {
        //     if (this.list[i] > this.list[i + 1]) {
        //         this.swap(i, i + 1)
        //     }
        // }
        for (let i = this.size - 1; i >= 0; i--) {
            for (let j = 0; j < i; j++) {
                if (this.list[j] > this.list[j + 1]) {
                    this.swap(j, j + 1)
                }
            }
        }
    }
    // 选择
    // 插入
    // 希尔
    // 快排 
}
