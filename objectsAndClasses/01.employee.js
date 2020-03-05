function employeee(input) {
    let objInp = {}
    for (let elem of input) {
        objInp[elem] = elem.length
    }
    for (let asd in objInp) {
        console.log(`Name: ${asd} -- Personal Number: ${objInp[asd]}`)
    }
}

employeee([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
])