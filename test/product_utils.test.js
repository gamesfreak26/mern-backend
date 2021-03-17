const utilities = require("../utilities/product_util")
const Product = require("../Models/product")
const { connectToDb, disconnectFromDb } = require("../test/config")
let expect = require("chai").expect;

let product_id = null;

before((done) => {
    console.log("Connect to DB in ")
    connectToDb(done)
})

// Setup and tear down functions
function setupData() {
    let testProduct = {}
    testProduct.name = 'Test label 1'
    testProduct.description = 'testing description'
    testProduct.price = 3.5
    testProduct.category = 'Mobility'
    testProduct.currentCondition = 'Poor'
    testProduct.brand = "Test Brand"
    return Product.create(testProduct);
}

beforeEach(async () => {
    console.log("Before Each")
    let product = await setupData()
    product_id = product._id
})

after((done) => {
    console.log("Disconnect from database")
    disconnectFromDb(done)
})

function tearDownData() {
    return Product.deleteMany();
}

// Delete test data after each test
afterEach((done) => {
    console.log("Teardown")
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

            if (err) {
                console.log("Error:" + err.message)
                console.log(err.stack)
            }
            else {
                let lengthOfObject = Object.keys(product).length
                console.log(`Product: ${product}`)
                console.log(`Length of Object: ${lengthOfObject}`)
                expect(lengthOfObject).to.equal(expectedLength)
                done()
            }
            
        })
    })

    // it('should get a status code of OK', function (done)) {
    //     let req = {
    //         query: {}
    //     }

    //     utilities.getAllProducts(req).exec((err, product) => {
    //         res
    //     })
    // }
})