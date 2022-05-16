# sagsDB

Sags.db is JSON database system.

## Installation

```bash
npm install sags.db
```

## Usage

```js
const sags = require("sags");
//Default Database name is "db". Database folder name is optional. If u dont wanna minify set "minify" false.
const db = new sags({ name: "db", folder: "folder_path", minify: true });

//Set any string or number in database.
db.set("sags", "database"); // true

// Get database element from id.
db.get("sags"); // database

//Add number.
db.add("number", 1); // 1
//Substract number.
db.subtract("number", 1); // 0

//Push element into the array.
db.push("array", 1); // [1]
//Unpush element from array.
db.unpush("array", 1); // []

//Asset control.
db.has("sags"); // true

//Get all database element.
db.all(); // {sags : "database", number: 1, array: []}

//Delete one element.
db.delete("sags"); // true
//Delete all element.
db.deleteAll(); // true

//Get element value type.
db.type("sags"); //String

```
#### Extra

```js
db.set("sags.db", "json"); // {sags : {db: "json"} }
```


## License
[MIT](https://choosealicense.com/licenses/mit/)