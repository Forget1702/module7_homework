const obj = {
    str: 'str',
    num: 15,
}

function checked(str,obj) {
    return obj.hasOwnProperty(str)
}

console.log(checked('num', obj))