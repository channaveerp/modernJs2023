const arr = [22,55,23,77,99,47,45]
let x ;
// x= arr.shift() 
// it rmopves firt element and return chnaged array

// slice is just gives u idia which is elelements are require from , img its doesnot modified original arr
x = arr.slice(1,2)

// it works as slice only but its modified original arr and rturns it 
// x= arr.splice(1,2)

// it refers to index fo elements i arr if itrs not available return -1 
x= arr.indexOf(23)

// it refers to elements in arr if itrs not available false 
x=arr.includes(230)

// it removes last ele & its changes  length of arr
x = arr.pop()

// it added ele at last & its changes  length of arr
x = arr.push(250)

// basicallye it reverse arr ele & its changes original arr 
x = arr.reverse()



console.log(x,arr)