pivot(arr1)  // 3
pivot(arr2)  // 4
pivot(arr3, strLength)  // 1
arr1.slice(0, 3).sort((a, b) => a - b)  // [2, 3, 4]
arr1.slice(3).sort((a, b) => a - b)  // [5, 7, 8, 9, 10, 20]
arr2.slice(0, 4).sort((a, b) => a - b)  // [0, 2, 4, 5]
arr2.slice(4).sort((a, b) => a - b)  // [8, 10, 11, 12, 13, 16]
arr3.slice(0, 1).sort(strLength)  // ["Blue"]
arr3.slice(1).sort(strLength)  // ["LilBub", "Grumpy", "Garfield", "Heathcliff"]
