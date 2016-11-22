function makeIterable(object) {
    let objKeys = Object.keys(object);
    objKeys.sort(function(a,b){ return b.localeCompare(a)});
    let index = 0;
    return {
        next: function () {
            if (index <= objKeys.length-1)
                return {
                    value: objKeys[index++],
                    done: false
                };
            else
                return {
                    done: true
                };
        }
    }
}
let obj = {name: "gosho", "13": true, book: "Lord of the Drinks", 2: 2, age: 15, passportNumber: 12345678};
let iterator = makeIterable(obj);
iterator.next();