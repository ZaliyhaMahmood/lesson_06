const assert = require("assert")

describe("TSC Test", function() {
    it("Calculator exists", function() {
        const Calculator = require("../app").Calculator
        assert(Calculator, "Calculator exists")
    })

       it("Calculator can add", function() {
        const Calculator = require("../app").Calculator
        assert(Calculator, "Calculator exists")
        let calc = new Calculator(3)
        assert(calc, "Exemplar created")
        assert(calc.x === 3, "Parameter received")
        assert(calc.add(2) === 5, "Sum is correct")
    })

       it("Calculator can subtract", function() {
        const Calculator = require("../app").Calculator
        assert(Calculator, "Calculator exists")
        let calc = new Calculator(3)
        assert(calc, "Exemplar created")
        assert(calc.x === 3, "Parameter received")
        assert(calc.subtract(2) === 1, "subtract is correct")
    })

        it("Calculator can multiply", function() {
        const Calculator = require("../app").Calculator
        assert(Calculator, "Calculator exists")
        let calc = new Calculator(3)
        assert(calc, "Exemplar created")
        assert(calc.x === 3, "Parameter received")
        assert(calc.multiply(2) === 6, "multiply is correct")
    })

        it("Calculator can divide", function() {
        const Calculator = require("../app").Calculator
        assert(Calculator, "Calculator exists")
        let calc = new Calculator(3)
        assert(calc, "Exemplar created")
        assert(calc.x === 3, "Parameter received")
        assert(calc.divide(2) === 1.5, "divide is correct")
    })
})