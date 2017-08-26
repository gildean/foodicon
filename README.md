Foodicon
========

Wraps [serve-favicon](https://github.com/expressjs/serve-favicon) to serve favicons. If no icon is provided, a random foodicon is served instead.

Example:
```js
const app = require('express')();
const foodicon = require('foodicon');
app.use(foodicon());
```

<sub>Icons taken from [google noto](https://www.google.com/get/noto/help/emoji/food-drink.html)</sub>
