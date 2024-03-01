
const arr = [1,0, 1, 0, 3, 12,0,0];
let idx = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== 0 && arr[idx] === 0) {
                [arr[idx], arr[i]] = [arr[i], arr[idx]];
            }
            if (arr[idx] !== 0) {
                idx++;
            }
        
        }
console.log(...arr)