const fs = require("fs");
const _ld = require("lodash");

module.exports = class Sags {

    /**
     *  Name must be a string.
     * 
     *  Folder must be a string path.
     * 
     *  Minify must be boolean. If true folder is minifying. Default minify is "true".
     */
    constructor({ name = "db", folder = "", minify = true }) {
        const folder_path = folder ? folder.toString().toLowerCase().split("/").filter(x => x != ".") : "";
        const _FOLDER_PATH_TO_STRING = folder_path ? folder_path.join("/") : "";
        if (folder && !fs.existsSync(`./${_FOLDER_PATH_TO_STRING}`)) {
            folder_path.reduce((previus, current) => {
                previus += current + "/";
                if (!fs.existsSync(`.${previus}`)) {
                    fs.mkdirSync(`.${previus}`);
                }
                return previus;
            }, "/");
        }

        const _folder_path = `${_FOLDER_PATH_TO_STRING}/${name}`;
        if (!fs.existsSync(`./${_folder_path}.json`)) {
            fs.writeFileSync(`./${_folder_path}.json`, "{}");
        }

        /**
         * @private
         */
        this.db = JSON.parse(fs.readFileSync(`./${_folder_path}.json`));
        /**
         * @private
         */
        this.saveDB = function (data) {
            const json_data = minify ? JSON.stringify(data) : JSON.stringify(data, null, 2);
            return fs.writeFileSync(`./${_folder_path}.json`, json_data);
        }
        /**
         * @private
         */
        this.dbSize = function () {
            return fs.statSync(`./${_folder_path}.json`).size;
        }

    }

    /**
     * @description Set data
     * @param {String} key Need for save data
     * @param {String|Number|Array|Object|Boolean} data Saved data
     * @returns {boolean}
     */
    set(key, data) {
        if (typeof data == "function") throw new SagsdbError("Can't save any function in database!");
        if (typeof key != "string") throw new SagsdbError("Key must be a string!");
        const json_data = _ld.set(this.db, key, data || null);
        this.saveDB(json_data);
        return true;
    }

    /**
     * @description Delete data
     * @param {String} key Need for delete data
     * @returns {Boolean}
     */
    delete(key) {
        if (typeof key != "string") throw new SagsdbError("Key must be a string!");
        const newDb = { ...this.db }
        _ld.unset(newDb, key);
        this.saveDB(newDb);
        return true;
    }

    /**
     * @description Get data
     * @param {String} key Need for get data
     * @returns {String|Number|Array|Object|Boolean}
     */
    get(key) {
        if (typeof key != "string") throw new SagsdbError("Key must be a string!");
        return _ld.get(this.db, key);
    }

    /**
     * @description Checking data type
     * @param {String} key Need for check type of data
     * @returns {String|Number|Array|Object|Boolean}
     */
    type(key) {
        if (typeof key != "string") throw new SagsdbError("Key must be a string!");
        const type = this.get(key);
        return Array.isArray(type) ? "array" : typeof type;
    }

    /**
     * @description Checking database for this data
     * @param {String} key Need for check has data
     * @returns {Boolean}
     */
    has(key) {
        if (typeof key != "string") throw new SagsdbError("Key must be a string!");
        return _ld.has(this.db, key);
    }

    /**
     * @description Get all database
     * @returns {Object}
     */
    all() {
        return this.db
    }

    /**
     * @description Delete all database
     * @returns {boolean}
     */
    deleteAll() {
        this.saveDB({});
        return true
    }

    /**
    * @description Push data to array
    * @param {String} key Need for push data
    * @param {String|Number|Array|Object|Boolean} data Pushing item
    * @returns {boolean}
    */
    push(key, data) {
        if (typeof data == "function") throw new SagsdbError("Can't save any function in database!");
        if (typeof key != "string") throw new SagsdbError("Key must be a string!");
        if (this.type(key) != "array") {
            this.set(key, [data]);
            return true;
        }
        const array = this.get(key);
        array.push(data);
        this.set(key, array);
        return true;

    }

    /**
    * @description Unpush an element from array
    * @param {String} key Need for unpush data from array
    * @param {String|Number|Array|Object|Boolean} data Unpushing item
    * @returns {boolean}
    */
    unpush(key, data) {
        if (typeof data == "function") throw new SagsdbError("Can't save any function in database!");
        if (typeof key != "string") throw new SagsdbError("Key must be a string!");
        if (this.type(key) != "array") return false;
        const array = this.get(key);
        _ld.remove(array, function (n) { return n == data });
        this.set(key, array);
        return true;
    }

    /**
     * 
     * @param {String} key Need for add number
     * @param {Number} num Number size
     * @returns {boolean}
     */
    add(key, num = 1) {
        if (typeof num != "number") throw new SagsdbError("Num must be a number!");
        if (typeof key != "string") throw new SagsdbError("Key must be a string!");
        let item = this.get(key);
        if (!item) item = 0;
        item += num;
        this.set(key, item);
        return true
    }

    /**
     * 
     * @param {String} key Need for subtract number
     * @param {Number} num Number size
     * @returns {boolean}
     */
    subtract(key, num = 1) {
        if (typeof num != "number") throw new SagsdbError("Num must be a number!");
        if (typeof key != "string") throw new SagsdbError("Key must be a string!");
        let item = this.get(key);
        if (!item) item = 0;
        item -= num;
        this.set(key, item);
        return true
    }

    /**
     * 
     * @param {String} key Need for find head
     * @returns {any}
     */
    head(key) {
        const item = this.get(key);
        if (typeof item == "string" || Array.isArray(item)) {
            return item[0];
        } else if (typeof item == "number") {
            return Number(item.toString()[0]);
        } else if (typeof item == "object" && !Array.isArray(item)) {
            return item[Object.keys(item)[0]];
        } else {
            return item;
        }
    }

    /**
     * 
     * @param {String} key Need for find tail
     * @returns {any}
     */
    tail(key) {
        const item = this.get(key);
        if (typeof item == "string" || Array.isArray(item)) {
            return item.at(-1);
        } else if (typeof item == "number") {
            return Number(item.toString().at(-1));
        } else if (typeof item == "object" && !Array.isArray(item)) {
            return item[Object.keys(item).at(-1)];
        } else {
            return item;
        }
    }

    /**
     * 
     *@param {String} key Need for find element
     * @param {Number} index Index number
     * @returns {any}
     */
    nth(key, index = 0) {
        index = Number(index)
        if (isNaN(index)) throw new SagsdbError("Index must be a number!");
        index = Math.floor(index);
        const item = this.get(key);
        if (typeof item == "string" || Array.isArray(item)) {
            return item.at(index);
        } else if (typeof item == "number") {
            return Number(item.toString().at(index));
        } else if (typeof item == "object" && !Array.isArray(item)) {
            return item[Object.keys(item).reverse().at(index)];
        } else {
            return item;
        }
    }

    /**
     * @description Database kb size
     * @returns {Number}
     */
    dbSize() {
        return Math.ceil(this.dbSize() / (1024));
    }
}


class SagsdbError extends Error {
    constructor(message) {
        super(`${message}`);
    }
}