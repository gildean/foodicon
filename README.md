Foodicon
========

Wraps [serve-favicon](https://github.com/expressjs/serve-favicon) to serve favicons. If no icon is provided, a random foodicon is served instead.

Example:
--------
```js
const app = require('express')();
const foodicon = require('foodicon');
// pick a random icon at startup
app.use(foodicon());
```

Icons
-----

<table>
<tr>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Aubergine.ico" alt="Aubergine" title="Aubergine"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Avocado.ico" alt="Avocado" title="Avocado"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Baby_Bottle.ico" alt="Baby Bottle" title="Baby Bottle"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Bacon.ico" alt="Bacon" title="Bacon"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Baguette_Bread.ico" alt="Baguette Bread" title="Baguette Bread"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Banana.ico" alt="Banana" title="Banana"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Bento_Box.ico" alt="Bento Box" title="Bento Box"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Birthday_Cake.ico" alt="Birthday Cake" title="Birthday Cake"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Bread.ico" alt="Bread" title="Bread"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Burrito.ico" alt="Burrito" title="Burrito"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Candy.ico" alt="Candy" title="Candy"></td>
</tr><tr>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Carrot.ico" alt="Carrot" title="Carrot"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Cheese_Wedge.ico" alt="Cheese Wedge" title="Cheese Wedge"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Cherries.ico" alt="Cherries" title="Cherries"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Chestnut.ico" alt="Chestnut" title="Chestnut"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Chocolate_Bar.ico" alt="Chocolate Bar" title="Chocolate Bar"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Cooked_Rice.ico" alt="Cooked Rice" title="Cooked Rice"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Cookie.ico" alt="Cookie" title="Cookie"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Cooking.ico" alt="Cooking" title="Cooking"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Croissant.ico" alt="Croissant" title="Croissant"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Cucumber.ico" alt="Cucumber" title="Cucumber"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Curry_And_Rice.ico" alt="Curry And Rice" title="Curry And Rice"></td>
</tr><tr>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Custard.ico" alt="Custard" title="Custard"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Dango.ico" alt="Dango" title="Dango"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Doughnut.ico" alt="Doughnut" title="Doughnut"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Ear_Of_Maize.ico" alt="Ear Of Maize" title="Ear Of Maize"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Egg.ico" alt="Egg" title="Egg"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Fish_Cake_With_Swirl_Design.ico" alt="Fish Cake With Swirl Design" title="Fish Cake With Swirl Design"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/French_Fries.ico" alt="French Fries" title="French Fries"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Fried_Shrimp.ico" alt="Fried Shrimp" title="Fried Shrimp"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Glass_Of_Milk.ico" alt="Glass Of Milk" title="Glass Of Milk"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Grapes.ico" alt="Grapes" title="Grapes"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Green_Apple.ico" alt="Green Apple" title="Green Apple"></td>
</tr><tr>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Green_Salad.ico" alt="Green Salad" title="Green Salad"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Hamburger.ico" alt="Hamburger" title="Hamburger"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Honey_Pot.ico" alt="Honey Pot" title="Honey Pot"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Hot_Beverage.ico" alt="Hot Beverage" title="Hot Beverage"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Hot_Dog.ico" alt="Hot Dog" title="Hot Dog"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Hot_Pepper.ico" alt="Hot Pepper" title="Hot Pepper"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Ice_Cream.ico" alt="Ice Cream" title="Ice Cream"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Kiwifruit.ico" alt="Kiwifruit" title="Kiwifruit"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Lemon.ico" alt="Lemon" title="Lemon"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Lollipop.ico" alt="Lollipop" title="Lollipop"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Meat_On_Bone.ico" alt="Meat On Bone" title="Meat On Bone"></td>
</tr><tr>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Melon.ico" alt="Melon" title="Melon"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Mushroom.ico" alt="Mushroom" title="Mushroom"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Oden.ico" alt="Oden" title="Oden"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Pancakes.ico" alt="Pancakes" title="Pancakes"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Peach.ico" alt="Peach" title="Peach"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Peanuts.ico" alt="Peanuts" title="Peanuts"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Pear.ico" alt="Pear" title="Pear"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Pineapple.ico" alt="Pineapple" title="Pineapple"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Popcorn.ico" alt="Popcorn" title="Popcorn"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Potato.ico" alt="Potato" title="Potato"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Pot_Of_Food.ico" alt="Pot Of Food" title="Pot Of Food"></td>
</tr><tr>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Poultry_Leg.ico" alt="Poultry Leg" title="Poultry Leg"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Red_Apple.ico" alt="Red Apple" title="Red Apple"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Rice_Ball.ico" alt="Rice Ball" title="Rice Ball"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Rice_Cracker.ico" alt="Rice Cracker" title="Rice Cracker"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Roasted_Sweet_Potato.ico" alt="Roasted Sweet Potato" title="Roasted Sweet Potato"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Shallow_Pan_Of_Food.ico" alt="Shallow Pan Of Food" title="Shallow Pan Of Food"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Shaved_Ice.ico" alt="Shaved Ice" title="Shaved Ice"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Shortcake.ico" alt="Shortcake" title="Shortcake"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Slice_Of_Pizza.ico" alt="Slice Of Pizza" title="Slice Of Pizza"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Soft_Ice_Cream.ico" alt="Soft Ice Cream" title="Soft Ice Cream"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Spaghetti.ico" alt="Spaghetti" title="Spaghetti"></td>
</tr><tr>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Steaming_Bowl.ico" alt="Steaming Bowl" title="Steaming Bowl"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Strawberry.ico" alt="Strawberry" title="Strawberry"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Stuffed_Flatbread.ico" alt="Stuffed Flatbread" title="Stuffed Flatbread"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Sushi.ico" alt="Sushi" title="Sushi"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Taco.ico" alt="Taco" title="Taco"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Tangerine.ico" alt="Tangerine" title="Tangerine"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Teacup_Without_Handle.ico" alt="Teacup Without Handle" title="Teacup Without Handle"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Tomato.ico" alt="Tomato" title="Tomato"></td>
<td><img src="https://raw.githubusercontent.com/gildean/foodicon/HEAD/favicons/Watermelon.ico" alt="Watermelon" title="Watermelon"></td>
</tr>
</table>


<sub>Icons taken from [google noto](https://www.google.com/get/noto/help/emoji/food-drink.html)</sub>
