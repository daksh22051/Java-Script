//create a function to find the min number in an array
function getMin() {
    let arr = [7, 8, 6, 5]
    let min = arr[0]
    let ans = arr.reduce((min, ele) => {
        if (min > ele) {
            return ele
        }
        else {
            return min
        }
    })
    console.log(ans);
}
getMin()