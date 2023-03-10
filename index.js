// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
const copyOfCats = [...cats]
function destructivelyAppendCat(name) {
const destructivelyAppendCat = [...cats, name]
cats.push("Ralph")}
function destructivelyPrependCat(name) {
    const destructivelyPrependCat = [name, ...cats]
    cats.unshift("Bob")}
    function destructivelyRemoveLastCat(name) {
        cats.pop(-1)
    }
    function destructivelyRemoveFirstCat(name) {
        cats.shift()
    }
    function appendCat(name) {
        const copyOfCats = [...cats]
        return appendCat = [...cats, "Broom"]
    }
    function prependCat(name) {
        return prependCat = ["Arnold", ...cats]
    }
    function removeLastCat(name) {
        return removeLastCat = cats.slice(0, 2)
    }
    function removeFirstCat(name) {
        return removeFirstCat = cats.slice(1)
    }