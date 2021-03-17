const {
    getAllProducts
} = require("../utilities/product_util")

// get all products
const getItems = (req, res) => {
    if (req.error) {
        res.status(req.error.status)
        res.send(req.error.status)
    }
    else {
        getAllProducts()
        .exec((err, products) => {
            if (err) {
                res.status(404)
                res.json({
                    error: err.message
                })
            }
            else {
                res.send(products)
            }
        })
    }
}