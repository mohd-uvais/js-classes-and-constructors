
class Pizza {
    static pizzaCount = 0;
    constructor (toppings, size, crust){
        this.toppings = toppings
        this.size = size
        this.crust = crust
        Pizza.pizzaCount++;
    }
    describe() {
        console.log(`A pizza of size ${this.size} and crust ${this.crust}`)
    }

    static getTotalPizzaCount() {
        console.log(`Total pizzas made are: ${Pizza.pizzaCount}`);
    }
}

class StuffedCrustPizza extends Pizza {
    constructor (toppings, size, crust, stuffingType) {
        super(toppings, size, crust);
        this.stuffingType = stuffingType;
    }

    describeStuffing() {
        super.describe();
        console.log(`Stuffing of pizza is ${this.stuffingType}`);
    }
}

const obj1 = new StuffedCrustPizza(['cheese', 'olive'], 'medium', 'thin', 'chicken');
const obj2 = new StuffedCrustPizza(['cheese', 'olive'], 'medium', 'thin', 'chicken');
// obj1.describeStuffing();
Pizza.getTotalPizzaCount();
