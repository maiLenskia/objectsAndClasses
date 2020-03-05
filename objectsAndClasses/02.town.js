function towns(input) {
    let obj = {};
    for (let property of input) {
        let arr = property.split(' | ');
        obj['town'] = arr[0];
        obj['latitude'] = Number(arr[1]).toFixed(2);
        obj['longitude'] = Number(arr[2]).toFixed(2)
        console.log(obj)
    }
}
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'
])