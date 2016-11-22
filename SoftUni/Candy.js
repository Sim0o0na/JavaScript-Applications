function makeCandy(arr) {
    class Candy {
        constructor(topping, filling, spice) {
            this.topping = topping;
            this.filling = filling;
            this.spice = spice;
        }
    }
    let result = [];
    let fillingOptions = ['hazelnut', 'caramel', 'strawberry', 'blueberry', 'yogurt', 'fudge', ''];
    let toppingOptions = ['milk chocolate', 'white chocolate', 'dark chocolate'];

    for (let element of arr) {
        if(element.length!=''){
            element = element.split(':');
            let isValid = true;

            let topping = element[0];
            if (!toppingOptions.includes(topping)) {
                isValid = false;
            }

            let filling = element[1].split(',');
            if (!fillingOptions.includes(...filling) || filling.length > 3) {
                isValid = false;
            }
            if (filling == "") {
                filling = null;
            }
            else {
                filling = filling.join(',');
            }

            let spice = element[2];
            if (spice == 'poison' || spice == 'asbestos') {
                isValid = false;
            }
            if (spice == '') {
                spice = null;
            }
            if (isValid) {
                result.push(new Candy(topping, filling, spice));
            }
        }
    }
    return result;
}