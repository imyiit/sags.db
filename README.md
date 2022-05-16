# sagsDB


![Image](https://img.shields.io/npm/v/sags.db?color=%2351F9C0&label=electus-db) 
![Image](https://img.shields.io/npm/dt/sags.db.svg?color=%2351FC0&maxAge=3600) 
#
![Image](https://nodei.co/npm/sags.db.png?downloads=true&downloadRank=true&stars=true)
<br>


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