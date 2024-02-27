function KeysAndValue(obj) {
    for (let [key, value] of Object.entries(obj)) {
        console.log(`${key}: ${value}`);
    }
}

const obj = {
    a: 12,
    b: 15,
}
KeysAndValue(obj)