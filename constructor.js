function Pizza(toppings, size, crust){
    this.toppings = toppings
    this.size = size
    this.crust = crust

    this.desribe = function() {
        console.log(`A pizza of size ${this.size} and crust ${this.crust}`)
    }
}


const order1 = new Pizza(['cheese', 'olive'], 'medium', 'thin')
const order2 = new Pizza(["veggies"], "small", "thin")
order1.desribe()
order2.desribe()

class Pizza {
    constructor (toppings, size, crust){
        this.toppings = toppings
        this.size = size
        this.crust = crust
    }
    desribe = function() {
        console.log(`A pizza of size ${this.size} and crust ${this.crust}`)
    }
}

const order3 = new Pizza(['cheese', 'olive'], 'medium', 'thin')
const order4 = new Pizza(["veggies"], "small", "thin")
order1.desribe()
order2.desribe()

class MyClass {
    constructor (prop1, prop2) {
        this.prop1 = prop1;
        this.prop2 = prop2;    
    }

    myMethod = () => {
        console.log(`My properties are ${this.prop1} and ${this.prop2}`)
    }
}

const obj = new MyClass('mohd', 'uvais');
obj.myMethod();
