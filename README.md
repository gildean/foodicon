Foodicon
========

Wraps [serve-favicon](https://github.com/expressjs/serve-favicon) to serve favicons. If no icon is provided, a random foodicon is served instead.

Example:
--------
```js
const app = require('express')();
const foodicon = require('foodicon');
// foodicon picks a random icon at startup when called with no arguments
app.use(foodicon());
```

Icons
-----

<table>
<tr>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Aubergine.ico"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Avocado.ico"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Baby_Bottle.ico"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Bacon.ico"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Baguette_Bread.ico"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Banana.ico"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Bento_Box.ico"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Birthday_Cake.ico"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Bread.ico"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Burrito.ico"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Candy.ico"></td>
</tr><tr>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Carrot.ico"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Cheese_Wedge.ico"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Cherries.ico"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Chestnut.ico"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Chocolate_Bar.ico"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Cooked_Rice.ico"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Cookie.ico"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Cooking.ico"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Croissant.ico"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Cucumber.ico"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Curry_And_Rice.ico"></td>
</tr><tr>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Custard.ico"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Dango.ico"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Doughnut.ico"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Ear_Of_Maize.ico"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Egg.ico"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Fish_Cake_With_Swirl_Design.ico"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/French_Fries.ico"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Fried_Shrimp.ico"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Glass_Of_Milk.ico"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Grapes.ico"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Green_Apple.ico"></td>
</tr><tr>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Green_Salad.ico"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Hamburger.ico"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Honey_Pot.ico"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Hot_Beverage.ico"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Hot_Dog.ico"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Hot_Pepper.ico"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Ice_Cream.ico"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Kiwifruit.ico"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Lemon.ico"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Lollipop.ico"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Meat_On_Bone.ico"></td>
</tr><tr>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Melon.ico"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Mushroom.ico"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Oden.ico"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Pancakes.ico"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Peach.ico"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Peanuts.ico"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Pear.ico"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Pineapple.ico"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Popcorn.ico"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Potato.ico"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Pot_Of_Food.ico"></td>
</tr><tr>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Poultry_Leg.ico"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Red_Apple.ico"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Rice_Ball.ico"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Rice_Cracker.ico"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Roasted_Sweet_Potato.ico"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Shallow_Pan_Of_Food.ico"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Shaved_Ice.ico"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Shortcake.ico"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Slice_Of_Pizza.ico"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Soft_Ice_Cream.ico"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Spaghetti.ico"></td>
</tr><tr>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Steaming_Bowl.ico"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Strawberry.ico"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Stuffed_Flatbread.ico"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Sushi.ico"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Taco.ico"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Tangerine.ico"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Teacup_Without_Handle.ico"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Tomato.ico"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Watermelon.ico"></td>
</tr>
</table>


<sub>Icons taken from [google noto](https://www.google.com/get/noto/help/emoji/food-drink.html)</sub>
