const fs = require('fs');
const path = require('path');

function addProduct(req, res, next) {
    const name = req.body.name;
    const category = req.body.category;
    const price = req.body.price;
    const currency = req.body.currency;
    const stock = req.body.stock;
    const image = req.file.filename;
    const description = req.body.description;

    const product = {
        name: name,
        category: category,
        price: price,
        currency: currency,
        stock: stock,
        image: image,
        description: description,
    };

    fs.readFile(path.join(__dirname, '../products.json'), 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Server error');
        }

        let products = JSON.parse(data);
        products.push(product);

        fs.writeFile(path.join(__dirname, '../products.json'), JSON.stringify(products, null, 4), (err) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Server error');
            }
            
            res.sendStatus(200);
        });
    });
}

function getProducts(req, res, next) {
    fs.readFile(path.join(__dirname, '../products.json'), 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Server error');
        }
        res.json(JSON.parse(data));
    });
}

function updateStock(req, res, next) {
    const productId = req.params.productId;
    const newStock = req.body.stock;

    fs.readFile(path.join(__dirname, '../products.json'), 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Server error');
        }

        let products = JSON.parse(data);
        let product = products.find(p => p.name === productId);

        if (product) {
            product.stock = newStock;

            fs.writeFile(path.join(__dirname, '../products.json'), JSON.stringify(products, null, 4), (err) => {
                if (err) {
                    console.error(err);
                    return res.status(500).send('Server error');
                }
                
                res.sendStatus(200);
            });
        } else {
            res.status(404).send('Product not found');
        }
    });
}

function updateProduct(req, res, next) {
    const productId = req.params.productId;
    const newName = req.body.name;
    const newPrice = req.body.price;
    const newDescription = req.body.description;

    fs.readFile(path.join(__dirname, '../products.json'), 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Server error');
        }

        let products = JSON.parse(data);
        let product = products.find(p => p.name === productId);

        if (product) {
            product.name = newName;
            product.price = newPrice;
            product.description = newDescription;

            fs.writeFile(path.join(__dirname, '../products.json'), JSON.stringify(products, null, 4), (err) => {
                if (err) {
                    console.error(err);
                    return res.status(500).send('Server error');
                }
                
                res.sendStatus(200);
            });
        } else {
            res.status(404).send('Product not found');
        }
    });
}

function deleteProduct(req, res, next) {
    const productId = req.params.productId;

    fs.readFile(path.join(__dirname, '../products.json'), 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Server error');
        }

        let products = JSON.parse(data);
        let updatedProducts = products.filter(product => product.name !== productId);

        fs.writeFile(path.join(__dirname, '../products.json'), JSON.stringify(updatedProducts, null, 4), (err) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Server error');
            }
            
            res.sendStatus(200);
        });
    });
}

module.exports = { addProduct, getProducts, updateStock, updateProduct, deleteProduct };
