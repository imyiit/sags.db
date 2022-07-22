# **sagsDB**


![Image](https://img.shields.io/npm/v/sags.db?color=%2351F9C0&label=sags.db) 
![Image](https://img.shields.io/npm/dt/sags.db.svg?color=%2351FC0&maxAge=3600) 
#
![Image](https://nodei.co/npm/sags.db.png?downloads=true&downloadRank=true&stars=true)
<br>


**Sags.db** is JSON database system.

## <i class="fa-solid fa-download"></i> **Installation**

```bash
npm install sags.db
```

## <i class="fa-solid fa-bookmark"></i> **Usage**

```js
const sagsdb = require("sags");
```
Default database name is "**db**".

Db name and folder name is must be **String**.

Database folder name is optional. 

If u dont wanna minify set "**minify**" to false.
```js
const db = new sagsdb({ name: "database", folder: "foldername", minify: true });
```
**or**
```js
const db = new sagsdb({ name: "database", folder: "folder/database"});
```
**or**
```js
const db = new sagsdb({ name: "database"});
```
<br>

## You can create multi database. 
```js
const userdb = new sagsdb({ name: "userdb"});
const itemdb = new sagsdb({ name: "itemdb"});
```
<br><br>

### <i class="fa-solid fa-terminal"></i> **COMMANDS**
<br>

 ## **Set** 

Key must be a **String** or **Number**.
```js
db.set("key", "apple"); // -> true
```

Can't set **Function**.
```js
function test(){

};
db.set("key", test); // -> return Error
```
<br><br>

## **Get**

Key must be a **String** or **Number**.

```js
db.set("key", "apple"); // -> true

db.get("key"); // -> apple
```

<br><br>

## **Delete**

Delete item from database.

```js
db.set("key", "apple"); // -> true

db.delete("key"); // -> true

db.get("key"); // -> undefined
```

<br><br>

## **Type**

Check type for this key.

```js
db.set("key", "apple");
db.type("key"); // -> string

db.set("array", [1, 2, 3]);
db.type("array"); // -> array

db.set("object", { a: 1, b: 2 }); // -> true
db.type("object"); // -> object

db.set("number", 1); // -> true
db.type("number"); // -> number

```

<br><br>

## **Has**

Check database for this key.

```js
db.set("key", "apple"); // -> true
db.has("key"); // -> true

db.has("another"); // -> false
```
<br><br>

## **Push**

Push item in **Array**.

```js
db.push("array", "apple"); // -> true
db.get("array"); // -> ["apple"]

db.push("array","banana"); // -> true
db.get("array"); // -> ["apple", "banana"]
```

<br><br>

## **Unpush**

Unpush item from **Array**.

```js
db.push("array", "apple"); // -> true
db.get("array"); // -> ["apple"]

db.unpush("array", "apple"); // -> true
db.get("array"); // -> []
```

<br><br>

## **Add**

Add number to **number** value.

Value must be a **Number**.

Default number is **1**.

```js
db.set("number", 1); // -> true
db.get("number"); // -> 1

db.add("number", 3); // -> true
db.get("number"); // -> 4

db.add("number"); // -> true
db.get("number"); // 5

db.add("number", "asd"); // return Error
```
<br><br>

## **Subtract**

Subtract number to **number** value.

Value must be a **Number**.

Default number is **1**.

```js
db.set("number", 1); // -> true
db.get("number"); // -> 1

db.subtract("number", 3); // -> true
db.get("number"); // -> -2

db.subtract("number"); // -> true
db.get("number"); // -3

db.subtract("number", "asd"); // return Error
```
<br><br>

## **Head**

Get value **first** item.

```js
db.set("string", "str"); // -> true
db.head("string"); // -> "s"

db.set("number", 321); // -> true
db.head("number"); // -> 3

db.set("array", [1, 2, 3]); // -> true
db.head("array"); // -> 1

db.set("object", {a : 1, b: 2}); // -> true
db.head("object"); // -> 1

```
<br><br>

## **Tail**

Get value **last** item.

```js
db.set("string", "str"); // -> true
db.tail("string"); // -> "r"

db.set("number", 321); // -> true
db.tail("number"); // -> 1

db.set("array", [1, 2, 3]); // -> true
db.tail("array"); // -> 3

db.set("object", {a : 1, b: 2}); // -> true
db.tail("object"); // -> 2

```
<br><br>

## **Nth**

Get value with **index**.

```js
db.set("string", "str"); // -> true
db.nth("string", 1); // -> "t"

db.set("number", 321); // -> true
db.nth("number", 1); // -> 2

db.set("array", [1, 2, 3]); // -> true
db.nth("array", 1); // -> 2

db.set("object", {a : 1, b: 2}); // -> true
db.nth("object", 1); // -> 2

```

<br><br>

## **All**

Return all **Database** object.

```js
db.set("key", "apple");
db.set("number", 1);
db.all(); // -> {"key" : "apple", "number": 1}
```

<br><br>

## **DeleteAll**

Delete **all** database.

```js
db.set("key", "apple"); // -> true
db.get("key"); // -> apple
db.deleteAll(); // -> true
db.get("key"); // -> undefined
```

<br><br>

## **Dbsize**

Get database **size**.

Number type is **kilobyte** (kb).

```js
db.set("key", "apple"); // -> true
db.dbSize(); // -> 15
```

## **Extra**

U can set object in object.

```js
db.set("key.value","apple"); // -> true
db.get("key"); // => {key: { value : "apple" } }
```

## License
[MIT](https://choosealicense.com/licenses/mit/)

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />