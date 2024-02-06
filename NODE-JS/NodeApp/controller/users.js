const fs = require('fs');
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const users = data.users;


exports.createproducts = (req, res) => {
    console.log(req.body);
    users.push(req.body);
    res.json(req.body);
};

exports.getallproducts = (req, res) => {
    res.json(users);
};

exports.getproduct = (req, res) => {
    const id = +req.params.id;
    const product = users.find(p => p.id === id);
    res.json(users);
}

exports.replaceproduct = (req, res) => {
    const id = +req.params.id;
    const productIndex = users.findIndex(p => p.id === id);
users.splice(productIndex, 1, { ...req.body, id: id })
    res.status(201).json();
}

exports.updateproduct =  (req, res) => {
    const id = +req.params.id;
    const productIndex = users.findIndex(p => p.id === id);
    const product = users[productIndex];
    users.splice(productIndex, 1, { ...product, ...req.body })
    res.status(201).json();
}


exports.deleteproduct = (req, res) => {
    const id = +req.params.id;
    const productIndex = users.findIndex(p => p.id === id);
    const product = users[productIndex];
    users.splice(productIndex, 1);
    res.status(201).json(product);
}