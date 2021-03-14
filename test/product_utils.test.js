const utilities = require("../utilities/product_util")
const Product = require("../Models/product")
const { connectToDb, disconnectFromDb } = require("../test/config")
let expect = require("chai").expect;

let product_id = null;

before((done) => {
    connectToDb(done)
})

// Setup and tear down functions
function setupData() {
    let testProduct = {}
    testProduct.name = 'Test label 1'
    testProduct.description = 'testing description'
    testProduct.price = 3.5
    testProduct.category = ['test1', 'test2', 'test3']
    testProduct.currentCondition = 5;
    testProduct.brand = "Test Brand"
    return Product.create(testProduct);
}

beforeEach(async function () {
    let product = setupData()
    product_id = product._id
})

after((done) => {
    disconnectFromDb(done)
})

function tearDownData() {
    return Product.deleteMany();
}

// Delete test data after each test
afterEach((done) => {
    // Execute the deleteMany query
    tearDownData().exec(() => done());
});


describe('get all products', (done) => {
    it('should get all posts that exist', function (done) {
        expectedLength = 1

        let req = {
            query: {}
        }

        utilities.getAllProducts(req).exec((err, product) => {
            let lengthOfObject = Object.keys(product).length
            console.log(`Length of Object: ${lengthOfObject}`)
            expect(lengthOfObject).to.equal(expectedLength)
            done()
        })
    })
})