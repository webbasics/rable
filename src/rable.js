// +--------------------------------------------------------------------------------------------+
// | Thanks for choosing Rable.js!                                                              |
// | We hope you will enjoy our product.                                                        |
// | Note that Rable.js belongs to the Webbasics department of Mystem                           |
// | Websites are currently to be made.                                                         |
// | Licenses, Agreements and Docs can currently be found at https://github.com/webbasics/Rable |
// +--------------------------------------------------------------------------------------------+

//basic preparations to make sure we can define everything without making a mess.

var rablesysvars = {};
rablesysvars.twovaldecision = (val1, val2) => {
    if (val1 === undefined) {
        item = other = false;
    } else if (val1.isNumber() && val2 === undefined) {
        item = val1;
        other = false;
    } else {
        item = val2;
        other = val1;
    }

    return {item: item, other: other};
}

// Section one, phase one: prototype String, Boolean, Number and relatives functions.

Boolean.prototype.switch = () => { //switch a bool (true ~> false | false ~> true)
    if (this.valueOf() === false) {
        return true;
    } else {
        return false;
    }
}

Boolean.prototype.valid =
String.prototype.valid =
Number.prototype.valid =
Function.prototype.valid = (validator = true) => { //Check if value is valid (null, empty, etc...)
    return _.valid(this.valueOf(), validator);
}

Array.prototype.valid =
Object.prototype.valid = () => { return true; } //returns true, because if invalid, code would have halted already.

rablesysvars.isFuncs = ['is', 'isBoolean', 'isString', 'isNumber', 'isFunction', 'isArray', 'isObject', 'isHTMLElement', 'isNodeList', 'isHTMLCollection'];
rablesysvars.isFuncs.forEach((func) => { //functions to check if var is something
    Boolean.prototype[func] =
    String.prototype[func] =
    Number.prototype[func] =
    Function.prototype[func] =
    Array.prototype[func] =
    Object.prototype[func] =
    HTMLElement.prototype[func] =
    NodeList.prototype[func] =
    HTMLCollection.prototype[func] = () => {
        return _[func](this.valueOf());
    }
});

Array.prototype.isset =
Object.prototype.isset =
NodeList.prototype.isset =
HTMLCollection.prototype.isset = (value, searchValue = false) => {
    return _.isset(value, this.valueOf(), searchValue);
}

// Section one, phase two: prototype DOM Element functions.

// Section one, phase two, part one: prototype attribute functions.

//add / set

HTMLElement.prototype.geta = (attribute = false) => {
    if (!attribute) {
        var list = {};
        this.getAttributeNames().forEach((attribute) => {
            list[attribute] = this.getAttribute(attribute);
        });
        return list;
    } else {
        return this.getAttribute(attribute);
    }
}

NodeList.prototype.geta =
HTMLCollection.prototype.geta = (val1, val2) => {
    var item = rablesysvars.twovaldecision(val1, val2).item;
    var attribute = rablesysvars.twovaldecision(val1, val2).other;

    console.log(item);
    console.log(attribute);

    if (!item) {
        var list = [];
        this.forEach((elmnt) => {
            list.push(elmnt.geta(attribute));
        });
        console.log(list)
        return list;
    } else {
        if (this.isset(item)) {
            console.log(this[item]);
            return this[item].geta(attribute);
        }
    }
}

//has
//rem / clean

// Section one, phase two, part two: prototype class functions.

//add / set
//get
//has
//rem / clean

// Section one, phase two, part three: prototype element functions.

//add / set
//get
//has
//rem / clean

// Section one, phase two, part four: prototype html (contents of element) functions.

//add / set
//get
//has
//rem / clean

// Section one, phase two part five: prototype id functions.

//add / set
//get
//has
//rem / clean

function _(input, item = false) { //get element by name, classname or id, all means that you select all elements
    if (input === document || input === 'document' || input === 'doc') {
        return document;
    } else if (input.isFunction()) {
        document.addEventListener('DOMContentLoaded', input);
    } else {
        var elements = document.querySelectorAll(input);
        if (item.isNumber() && elements.isset(item)) {
            return elements[item];
        } else {
            if (elements.length === 1) {
                return elements[0];
            } else {
                return elements;
            }
        }
    }
}

rablesysvars.isFuncs.forEach((func) => { //functions to check if var is something
    if (func === 'is') {
        _.is = (object) => { return object.constructor.name; };
    } else {
        _[func] = function(object) {
            return object.is() === func.slice(2);
        }
    }
});

_.isset = (key, object, searchValue = false) => {
    if (object.isObject() === true) {
        return key in object;
    } else if (object.isArray() === true) {
        if (key.isNumber() === false) {
            searchValue = true;
        }

        if (searchValue === true) {
            return object.includes(key);
        } else {
            return key in object;
        }
    } else if (object.isNodeList() === true || object.isHTMLCollection() === true) {
        if (object.item(key) === null) {
            return false;
        } else {
            return true;
        }
    } else {
        return null;
    }
}
