// Import Express
 const express = require('express')

// Create an Express app
const app = express()

// Define routes here (we'll add them soon)

// // // Listen for requests on port 3000
app.listen(3000, () => {
    console.log('Listening on port 3000')
       })


// question 1
app.get('/greetings/:Name', (req, res) => {
     res.send(`<h1>Hello there, ${req.params.Name}!</h1>`);
   });


// question 2


app.get('/roll/:number', (req, res) => {
    const number = parseInt(req.params.number);
    if (Number.isInteger(number)) {
    const max = number+1;
    const random = Math.floor(Math.random() * (max));
    res.send(`You rolled a ${random}.`);
        }else{
        res.send("You must specify a number.");

        }
    
    
});

// question 3


const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];



app.get('/collectibles/:index', (req, res) => {
    const index = parseInt(req.params.index); 


    if (Number.isInteger(index) && (index >= 0 && index < collectibles.length)) {
    const item = collectibles[index];
    res.send(`So, you want the ${item.name}? For ${item.price}, it can be yours!`);
       
    }else{
     res.send("This item is not yet in stock. Check back soon!");

    }

    
});


 // question 4


 const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];

app.get('/shoes', (req, res) => {
    let ShoesFilter = shoes;

    const minPrice = req.query['min-price'];
    const maxPrice = req.query['max-price'];
    const type  = req.query['type'];
    
 
if (minPrice) {
    ShoesFilter= ShoesFilter.filter(
        function(shoe) {
        return shoe.price >= Number(minPrice);
    });
}


if (maxPrice) {
    ShoesFilter = ShoesFilter.filter(
        function(shoe) {
        return shoe.price <= Number(maxPrice);
    });
}

if (type) {
    ShoesFilter = ShoesFilter.filter(
        function(shoe) {
        return shoe.type === type;
    });
}

    let result = "<h1>Shoes:</h1><ul>";
   result +=  ShoesFilter.map(shoe => 
        `<li>Name: ${shoe.name}  |price: ${shoe.price} |Type: ${shoe.type}</li>`
    ).join('');
    
    result += "</ul>";
    res.send(result);
    
});