
const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/torchreserv", //mongodb name
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  });
  
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
        title: "The Kevin Sandwich",
        price: "10",
        body: "Since Kevin just sounds like a healthy guy kinda name (maybe someone who would ride a static bike under his desk while he works, but he's not trying to run an ironman at 4am you know what we mean?), we made a sandwhich that embodies that. We combine grilled chicken with avocado, arugula, sun dried tomato,artichokes, and garlic aoli and balsamic reduction, all pananini grilled on whole grain bread."
    },
    {
        title: "Kristin Board",
        price: "10",
        body: "It isn't a charcuterie board, it's a Kristin board, because it has a little bit of everything, but you never reallllyyyyy know what's going to be on there, you just know it's good."
    },
    {
        title: "Francisco Disco Crab(ok sorry)",
        price: "9",
        body: "Crabs are kinda grummpy, but not this one! (I can already tell this description is going downhill...) Here we have a dungeness crab steamed and served with a sauce trio of sauce verte, garlic butter, and a smoky aoli. Pretty good if you ask me, and always helpful with a variety of options/solutions."
    },
    {
        title: "Josh Boss A Whole@$$ Meal",
        price: "17",
        body: "Alight, Josh rymhmes with boss and that's as sophisticated as this logic goes. Anyway can't be a boss food wthout having it all so here we have a surf and turf and your choice of two sides, just ask what it all comes with and you're sure to find something that suits you."
    },
    {
        title: "Manoli Canoli (you knew it was coming)",
        price: "6",
        body: "Since this is the only dessert we offer apparently, you better believe its the best canoli you've ever had. Oh, and it's Greek, somehow. Don't ask it just is."
    },
    {
        title: "Honorary mention: Kris",
        price: "7",
        body: "Here we have the ever so reliable IPA (apparently we only offer one alcoholic drink as well, don't worry, you can roast us about that) its delightful. Order it."
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
