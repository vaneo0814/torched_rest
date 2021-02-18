const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Posts collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reserv");

const menuSeed = [
    {
        title: "Coffee",
        price: "$2.50",
        body:
            "Available milk options: whole milk, 2%, almond, soy, oat. Chocolate, Caramel, or vanilla + $0.50"
    },
    {
        title: "Latte",
        price: "$6.00",
        body:
            "Available milk options: whole milk, 2%, almond, soy, oat. Chocolate, Caramel, or vanilla + $0.50"
    },
    {
        title: "Cappucino",
        price: "$6.00",
        body:
            "Available milk options: whole milk, 2%, almond, soy, oat. Chocolate, Caramel, or vanilla + $0.50"
    },
    {
        title: "Juice",
        price: "$3.00",
        body: "Guava, Passsion fruit, OJ, Pineapple, Lemonade"
    },
    {
        title: "BLT",
        price: "$9.00",
        body: "Bacon, lettuce and tomato, served on sourdough with aoli and spicy mustard"
    },
    {
        
    }
];

db.Menu.remove({})
    .then(() => db.Menu.collection.insertMany(menuSeed))
    .then(data => {
        console.log(data.result.n + "menu item inserted");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
