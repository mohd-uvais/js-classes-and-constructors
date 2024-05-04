class Pizza {
    // private class properties 
    #secretIngredient;
    constructor (toppings, size, crust){
        this.toppings = toppings
        this.size = size
        this.crust = crust
        this.#secretIngredient = 'Pine Apple';
    }
    desribe() {
        console.log(`A pizza of size ${this.size} and crust ${this.crust}`)
    }

    secret() {
        console.log(`The length of secret ingredient is ${this.#secretIngredient.length}`)
    }
}

const order1 = new Pizza(['cheese', 'olive'], 'medium', 'thin')
order1.secret();