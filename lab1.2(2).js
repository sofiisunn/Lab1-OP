const arr = [true, 'hello', 5, 12, -200, false, false, 'word', null, undefined, [1, 6, 3], {a: 10} ];

let new_arr = {};

for(const item of arr) {
    const type = typeof item;
    if (!(new_arr[type])) {
        new_arr[type] = 0
    }
    new_arr[type]++; 
}

console.dir(new_arr); 
