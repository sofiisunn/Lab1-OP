const arr = [true, 'hello', 5, 12, -200, false, false, 'word', null, undefined, [1, 6, 3], {a: 10} ];

let new_arr = {
    number: 0,
    string: 0,
    boolean: 0,
    object: 0,
    undefined: 0
};

for(const item of arr) {
    const type = typeof item;
    new_arr[type]++; 
}

console.dir(new_arr); 
