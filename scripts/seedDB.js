
const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reserv");

const menuSeed = [
    {
        title: "Coffee",
        price: "2.5",
        body:
            "Available milk options: whole milk, 2%, almond, soy, oat. Chocolate, Caramel, or vanilla + $0.50"
    },
    {
        title: "Latte",
        price: "5",
        body:
            "Available milk options: whole milk, 2%, almond, soy, oat. Chocolate, Caramel, or vanilla + $0.50"
    },
    {
        title: "Cappucino",
        price: "5",
        body:
            "Available milk options: whole milk, 2%, almond, soy, oat. Chocolate, Caramel, or vanilla + $0.50"
    },
    {
        title: "Juice",
        price: "3",
        body: "Guava, Passsion fruit, OJ, Pineapple, Lemonade"
    },
    {
        title: "BLT",
        price: "9",
        body: "Bacon, lettuce and tomato, served on sourdough with aoli and spicy mustard"
    },
    {
        title: "The Kevin",
        price: "10",
        body: "Since Kevin just sounds like a healthy guy kinda name (maybe someone who would ride a static bike under his desk while he works, but he's not trying to run an ironman at 4am you know what we mean?), we made a sandwhich that embodies that. We combine grilled chicken with avocado, arugula, sun dried tomato,artichokes, and garlic aoli and balsamic reduction, all pananini grilled on whole grain bread."
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
