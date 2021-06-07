// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 
//add nut free abd lactose free//
var products = [
	{
		name: "broccoli",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		nutFree: true,
		lactoseFree: true,
		fruit: false,
		vegetable: true,
		dairy: false,
		beverages: false,
		meat: false,
		img: "./images/broccoli.jpg", //https://www.freepik.com/premium-photo/fresh-broccoli-blocks-cooking-isolated-white-background_4038781.htm
		price: 1.99
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		nutFree: true,
		lactoseFree: false,
		fruit: false,
		vegetable: false,
		dairy: false,
		beverages: false,
		meat: false,
		img: "./images/bread.jpg", //https://www.dreamstime.com/royalty-free-stock-photo-fresh-sliced-bread-white-background-image4798485
		price: 2.35
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		nutFree: true,
		lactoseFree: true,
		fruit: false,
		vegetable: false,
		dairy: false,
		beverages: false,
		meat: true,
		img: "./images/salmon.jpg", //https://www.freepik.com/free-photo/salmon-white-background_1171136.htm
		price: 10.00
	},
	{
		name: "chicken",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		nutFree: true,
		lactoseFree: true,
		fruit: false,
		vegetable: false,
		dairy: false,
		beverages: false,
		meat:true,
		img: "./images/chicken.jpg", //https://www.dreamstime.com/whole-roasted-chicken-white-background-whole-roasted-chicken-white-background-copy-space-image169564279
		price: 8.00
	},
	{
		name: "yoghurt",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		nutFree: true,
		lactoseFree: false,
		fruit:false,
		vegetable: false,
		dairy:true,
		beverages: false,
		meat:false,
		img: "./images/yoghurt.jpg", //https://www.freepik.com/premium-photo/fresh-greek-yogurt-isolated-white-background_9811449.htm
		price: 4.99
	},
	{
		name: "milk",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		nutFree: true,
		lactoseFree: false,
		fruit: false,
		vegetable: false,
		dairy:true,
		beverages:true,
		meat:false,
		img: "./images/milk.jpg", //https://www.freepik.com/premium-photo/glass-bottle-fresh-milk-isolated-white-background_9089689.htm
		price: 3.79
	},
	{
		name: "apples",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		nutFree: true,
		lactoseFree: true,
		fruit: true,
		vegetable: false,
		dairy:false,
		beverages:false,
		meat:false,
		img: "./images/apple.jpg", //https://www.art.com/products/p48213463762-sa-i10833384/alex-staroseltsev-red-apple-on-white-background.htm
		price: 5.99
	},
	{
		name: "bananas",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		nutFree: true,
		lactoseFree: true,
		fruit:true,
		vegetable: false,
		dairy: false,
		beverages:false,
		meat:false,
		img: "./images/banana.jpg", //https://en.wikipedia.org/wiki/File:Bananas_(white_background).jpg
		price: 4.99
	},
	{
		name: "cucumber",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		nutFree: true,
		lactoseFree: true,
		fruit:false,
		vegetable:true,
		dairy:false,
		beverages:false,
		meat:false,
		img: "./images/cucumber.jpg", //https://www.freepik.com/premium-photo/cucumber-isolated-white-background_5462688.htm
		price: 2.99
	},
	{
		name: "pistachios",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		nutFree: false,
		lactoseFree: true,
		fruit:false,
		vegetable:false,
		dairy:false,
		beverages:false,
		meat:false,
		img: "./images/pistachio.jpg", //https://www.123rf.com/photo_51350903_pistachio-nuts-isolated-on-a-white-background-.html
		price: 2.50
	},
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push([prods[i].name, prods[i].price, prods[i].fruit, prods[i].vegetable, prods[i].meat, prods[i].dairy, prods[i].beverages, prods[i].img]);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push([prods[i].name, prods[i].price, prods[i].fruit, prods[i].vegetable, prods[i].meat, prods[i].dairy, prods[i].beverages, prods[i].img]);
		}
		else if ((restriction == "GlutenFree&Vegetarian") && ((prods[i].glutenFree == true) && (prods[i].vegetarian == true))){
			product_names.push([prods[i].name, prods[i].price, prods[i].fruit, prods[i].vegetable, prods[i].meat, prods[i].dairy, prods[i].beverages, prods[i].img]);
		}
		else if ((restriction == "NutFree") && (prods[i].nutFree == true)){
			product_names.push([prods[i].name, prods[i].price, prods[i].fruit, prods[i].vegetable, prods[i].meat, prods[i].dairy, prods[i].beverages, prods[i].img]);
		}
		else if ((restriction == "LactoseFree") && (prods[i].lactoseFree == true)){
			product_names.push([prods[i].name, prods[i].price, prods[i].fruit, prods[i].vegetable, prods[i].meat, prods[i].dairy, prods[i].beverages, prods[i].img]);
		}
		else if ((restriction == "Organic") && (prods[i].organic == true)){
			product_names.push([prods[i].name, prods[i].price, prods[i].fruit, prods[i].vegetable, prods[i].meat, prods[i].dairy, prods[i].beverages, prods[i].img]);
		}
		/*
		else if ((restriction == "fruit") && (prods[i].fruit == true)){
			product_names.push([prods[i].name, prods[i].price]);
		}
		else if ((restriction == "vegetable") && (prods[i].vegetable == true)){
			product_names.push([prods[i].name, prods[i].price]);
		}
		else if ((restriction == "dairy") && (prods[i].dairy == true)){
			product_names.push(prods[i]);
		}
		else if ((restriction == "beverages") && (prods[i].beverages == true)){
			product_names.push(prods[i]);
		}
		else if ((restriction == "meat") && (prods[i].meat == true)){
			product_names.push(prods[i]);
		}
		*/
		else if (restriction == "None"){
			product_names.push([prods[i].name, prods[i].priceprods[i].price, prods[i].fruit, prods[i].vegetable, prods[i].meat, prods[i].dairy, prods[i].beverages, prods[i].img]);
		}
	}

	
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return "$" + totalPrice.toFixed(2);
}