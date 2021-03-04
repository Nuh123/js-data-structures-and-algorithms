import Sort from './sort';

// ---------------- 封装的排序测试 ---------------- //
console.log('// ----- 排序测试 START -----//');
const list = new Sort();
console.log(list)

// 插入元素
list.insert(33)
list.insert(56)
list.insert(53)
list.insert(3465)
list.insert(32343)
list.insert(777)
list.insert(8)
list.insert(67)
console.log(list.toSring())    // 33-56-53-3465-32343-777-8-67

// 冒泡测试
list.bubbleSort()
console.log(list.toSring())



console.log('// ----- 排序测试 END -----//');


