function ObjectWithoutPrototype() {
    return Object.create(null)
}

console.log(ObjectWithoutPrototype())