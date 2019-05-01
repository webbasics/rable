Boolean.prototype.switch = function() {
    if (this.valueOf() === false) {
        return true;
    } else {
        return false;
    }
}

Boolean.prototype.valid =
    String.prototype.valid =
    Number.prototype.valid =
    Function.prototype.valid = function(type = true) {
        return _.valid(this.valueOf(), type);
    }

Array.prototype.valid =
    Object.prototype.valid = function() {
        return true;
    }

var funcs = ['isBoolean', 'isString', 'isNumber', 'isFunction', 'isArray', 'isObject', 'isHTMLElement', 'isNodeList', 'is'];
funcs.forEach(function(func) {
    Boolean.prototype[func] =
        String.prototype[func] =
        Number.prototype[func] =
        Function.prototype[func] =
        Array.prototype[func] =
        Object.prototype[func] =
        HTMLElement.prototype[func] =
        NodeList.prototype[func] = function() {
            return _[func](this.valueOf());
        }
});

Array.prototype.isset =
    Object.prototype.isset =
    NodeList.prototype.isset = function(val, search_val = false) {
        return _.isset(val, this.valueOf(), search_val);
    }

//no specific catagorie

HTMLElement.prototype.spacing = function(amt = 1) { //spacing ~> spacing
    _.loop(amt, () => {
        this.adde('br');
    });
    return this;
}

NodeList.prototype.spacing = function(amt, item = false) {
    if (item.isNumber() && this.isset(item)) {
        this[item].spacing(amt);
    } else {
        this.forEach(function(elmnt) {
            elmnt.spacing(amt);
        });
    }
    return this;
}

//element functions for obtaining information

HTMLElement.prototype.geta = function() {
    return this.getAttribute();
}

NodeList.prototype.geta = function(item = false) {
    var list = [];
    this.forEach(function(elmnt) {
        list.push(elmnt.geta());
    });

    if (item.isNumber() && _.valid(list[item])) {
        return list[item];
    } else {
        return list;
    }
}

HTMLElement.prototype.geth = function() { //geth ~> get html
    return this.innerHTML;
}

NodeList.prototype.geth = function(item = false) {
    var list = [];
    this.forEach(function(elmnt) {
        list.push(elmnt.geth());
    });

    if (item.isNumber() && _.valid(list[item])) {
        return list[item];
    } else {
        return list;
    }
}

//element functions for updating information

HTMLElement.prototype.seta = function(attr, value) { //seta ~ set attribute
    this.setAttribute(attr, value);
    return this;
}

NodeList.prototype.seta = function(attr, value, item = false) {
    if (item.isNumber() && this.isset(item)) {
        this[item].seta(attr, value);
    } else {
        this.forEach(function(elmnt) {
            elmnt.seta(attr, value);
        })
    }
}

HTMLElement.prototype.seth = function(content = '') { //seth ~> set html
    this.innerHTML = content;
    return this;
}

NodeList.prototype.seth = function(content = '', item = false) {
    if (item.isNumber() && this.isset(item)) {
        this[item].seth(content);
    } else {
        this.forEach(function(elmnt) {
            elmnt.seth(content);
        });
    }

    return this;
}

HTMLElement.prototype.seti = function(newid) {
    this.id = newid;
    return this;
}

NodeList.prototype.seti = function(newid, item = false) {
    if (item.isNumber() && this.isset(item)) {
        this[item].seti(newid);
    } else {
        this.forEach(function(elmnt) {
            elmnt.seti(newid);
        });
    }

    return this;
}

//element functions for adding new information

HTMLElement.prototype.addh = function(content) { //addh ~> add html
    this.seth(this.geth() + content);
    return this;
}

NodeList.prototype.addh = function(content, item = false) {
    if (item.isNumber() && this.isset(item)) {
        this[item].addh(content);
    } else {
        this.forEach(function(elmnt) {
            elmnt.addh(content);
        });
    }

    return this;
}

HTMLElement.prototype.addc = function(newclass) { //addc ~> add class
    if (newclass.isArray()) {
        newclass.forEach(function(nwclss) {
            this.addc(nwclss);
        });
    } else {
        this.classList.add(newclass);
    }

    return this;
}

NodeList.prototype.addc = function(newclass, item = false) {
    if (item.isNumber() && this.isset(item)) {
        this[item].addc(newclass);
    } else {
        this.forEach(function(elmnt) {
            elmnt.addc(newclass);
        });
    }

    return this;
}

HTMLElement.prototype.adde = function(element) { //adde ~> add element
    var element = document.createElement(element);
    this.appendChild(element);
    return element;
}

NodeList.prototype.adde = function(element, item = false) {
    if (item.isNumber() && this.isset(item)) {
        return this[item].adde(element);
    } else {
        this.forEach(function(elmnt) {
            elmnt.adde(element);
        });

        return this;
    }
}

//element functions for checking information

HTMLElement.prototype.hasc = function(theclass) { //hasc ~> has class
    return this.classList.contains(theclass);
}

NodeList.prototype.hasc = function(theclass, item = false) {
    if (item.isNumber() && this.isset(item)) {
        return this[item].extc(theclass);
    } else {
        var tmp = [];
        this.forEach(function(thclss) {
            tmp.push(thclss.extc(theclass));
        });
        return tmp;
    }
}

HTMLElement.prototype.hasi = function(id = false) { //hasi ~> has id
    if (id === false) {
        return this.id.valid('neuf');
    } else {
        return this.id === id;
    }
}

//element functions for removing information

HTMLElement.prototype.rema = function(attribute) {
    this.removeAttribute(attribute);
    return this;
}

NodeList.prototype.rema = function(attribute, item = false) {
    if (item.isNumber() && this.isset(item)) {
        this[item].rema(attribute);
    } else {
        this.forEach(function(elmnt) {
            elmnt.rema(attribute);
        });
    }
}

HTMLElement.prototype.remc = function(oldclass) { //remc ~> remove class
    if (oldclass.isArray()) {
        oldclass.forEach(function(olclss) {
            this.remc(olclss);
        });
    } else {
        this.classList.remove(oldclass);
    }

    return this;
}

NodeList.prototype.remc = function(oldclass, item = false) {
    if (item.isNumber() && this.isset(item)) {
        this[item].remc(oldclass);
    } else {
        this.forEach(function(elmnt) {
            elmnt.remc(oldclass);
        });
    }

    return this;
}

HTMLElement.prototype.clean = function() { //clean the elements content
    this.seth('');
    return this;
}

NodeList.prototype.clean = function(item = false) {
    if (item.isNumber() && this.isset(item)) {
        this[item].clean();
    } else {
        this.forEach(function(elmnt) {
            elmnt.clean();
        });
    }

    return this;
}

HTMLElement.prototype.remi = function() { //remi ~> remove id
    this.id = '';
    return this;
}

NodeList.prototype.remi = function(item = false) {
    if (item.isNumber() && this.isset(item)) {
        return this[item].remi();
    } else {
        this.forEach(function(elmnt) {
            elmnt.remi();
        });

        return this;
    }
}

//element functions related to page-capturing and building

HTMLElement.prototype.capture = function() {
    return {
        content: this.outerHTML
    };
}

NodeList.prototype.capture = function(item = false) {
    if (item.isNumber() && this.isset(item)) {
        return {
            content: this[item].outerHTML
        }
    } else {
        var captures = [];
        this.forEach(function(elmnt) {
            captures.push({
                content: elmnt.outerHTML
            });
        });
        return captures;
    }
}

HTMLElement.prototype.insert = function(data) {
    if (data.isset('content') === false || data.isObject() === false) {
        return null;
    } else {
        this.seth(data.content);
    }
}

NodeList.prototype.insert = function(data, item = false) {
    if (data.isset('content') === false || data.isObject() === false) {
        return null;
    } else {
        if (item.isNumber() && this.isset(item)) {
            this[item].seth(data.content);
        } else {
            this.forEach(function(elmnt) {
                elmnt.seth(data.content);
            });
        }
    }
}

//element functions for selecting elements

HTMLElement.prototype.parent = function() { //parent ~> parent
    return this.parentElement;
}

NodeList.prototype.parent = function(item = false) {
    if (item.valid('neuf') === false || this.isset(item) === false) {
        item = 0;
    }

    if (this.isset(item) === false) {
        return null;
    } else {
        return this[item];
    }
}

HTMLElement.prototype.child = function(chld = 0) { //child ~> child
    var child = this.childNodes;
    if (chld.isNumber() && child.isset(chld)) {
        return child[chld];
    } else {
        return child;
    }
}

NodeList.prototype.child = function(chld = 0, item = false) {
    if (item.isNumber() === false) {
        item = 0;
    }

    if (this.isset(item)) {
        return this[item].child(chld);
    } else {
        return null;
    }
}

HTMLElement.prototype.hide = function() {
    var opacity = 1;
    var elmnt = this;
    var timer = setInterval(function() {
        if (opacity <= 0.1) {
            clearInterval(timer);
            elmnt.style.display = 'none';
        } else {
            elmnt.style.opacity = opacity;
            elmnt.style.filter = 'alpha(opacity=' + opacity * 100 + ')';
            opacity -= opacity * 0.1;
        }
    }, 10);
}

NodeList.prototype.hide = function(item = false) {
    if (item.isNumber() && this.isset(item)) {
        this[item].hide();
    } else {
        this.forEach(function(elmnt) {
            elmnt.hide();
        });
    }
}

HTMLElement.prototype.show = function() {
    var opacity = 0.1;
    var elmnt = this;
    elmnt.style.display = 'block';
    var timer = setInterval(function() {
        if (opacity >= 1) {
            clearInterval(timer);
        } else {
            elmnt.style.opacity = opacity;
            elmnt.style.filter = 'alpha(opacity=' + opacity * 100 + ')';
            opacity += opacity * 0.1;
        }
    }, 10);
}

NodeList.prototype.show = function(item = false) {
    if (item.isNumber() && this.isset(item)) {
        this[item].show();
    } else {
        this.forEach(function(elmnt) {
            elmnt.show();
        });
    }
}

function _(element, item = false) { //get element by name, classname or id, all means that you select all elements
    if (element === document || element === 'document' || element === 'doc') {
        return document;
    } else {
        var elements = document.querySelectorAll(element);
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

_.body = function() { //get body fast
    return _('body');
}

_.doc = _.document = function() { //get document fast
    return document;
}

_.valid = function(input, type = true) {
    type = (type.isString() === true ? type : (type === true ? 'NU' : ''));
    if (type.includes("U") === true || type.includes('u') === true) {
        if (input === undefined) {
            return false;
        }
    }

    if (type.includes("N") === true || type.includes('n') === true) {
        if (input === null) {
            return false;
        }
    }

    if (type.includes("F") === true || type.includes('f') === true) {
        if (input === false) {
            return false;
        }
    }

    if (type.includes("E") === true || type.includes('e') === true) {
        if (input === "") {
            return false;
        }
    }

    return true;
}

_.isBoolean = function(obj) {
    if (obj.is() === "Boolean") {
        return true;
    } else {
        return false;
    }
}

_.isString = function(obj) {
    if (obj.is() === "String") {
        return true;
    } else {
        return false;
    }
}

_.isNumber = function(obj) {
    if (obj.is() === "Number") {
        return true;
    } else {
        return false;
    }
}

_.isFunction = function(obj) {
    if (obj.is() === "Function") {
        return true;
    } else {
        return false;
    }
}

_.isArray = function(obj) {
    if (obj.is() === "Array") {
        return true;
    } else {
        return false;
    }
}

_.isObject = function(obj) {
    if (obj.is() === "Object") {
        return true;
    } else {
        return false;
    }
}

_.isHTMLElement = function(obj) {
    if (obj.is() === "HTMLElement") {
        return true;
    } else {
        return false;
    }
}

_.isNodeList = function(obj) {
    if (obj.is() === "NodeList") {
        return true;
    } else {
        return false;
    }
}

_.is = function(obj) {
    return obj.constructor.name;
}

_.ready = function(func, obj = false) {
    if (obj === document || obj === 'document' || obj === 'doc') {

    } else if (obj.isHTMLElement()) {

    } else if (obj.isNodeList()) {

    }

    if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

_.isset = function(key, obj, search_val = false) {
    if (obj.isObject() === true) {
        return key in obj;
    } else if (obj.isArray() === true) {
        if (key.isNumber() === false) {
            search_val = true;
        }

        if (search_val === true) {
            return obj.includes(key);
        } else {
            return key in obj;
        }
    } else if (obj.isNodeList() === true) {
        if (obj.item(key) === null) {
            return false;
        } else {
            return true;
        }
    } else {
        return null;
    }
}

_.fillObject = function(masterArr, newArr, validate = true) {
    for (var key in newArr) {
        if (!validate) {
            masterArr[key] = newArr[key];
        } else if (validate === true) {
            if (newArr[key].valid('u') === true) {
                masterArr[key] = newArr[key];
            }
        } else {
            if (newArr[key].valid(validate) === true) {
                masterArr[key] = newArr[key];
            }
        }
    }

    return masterArr;
}

_.log = function(msg, log = true) {
    if (log === true) {
        msg = '[ Toolkit.js ] ~> ' + msg;
    }

    console.log(msg);
}

_.loop = function(amt = 1, action = false) {
    if (action.isFunction() === false) {
        return null;
    } else {
        for (var i = 0; i < amt; i++) {
            action();
        }
    }
}

_.redirect = function(options = '', blank = false) {
    if (!options.isObject()) {
        options = {
            url: options,
            blank: blank
        };
    }

    options = _.fillObject({
        url: document.URL,
        data: false,
        method: "post",
        blank: blank
    }, options, 'nuf');
    options.method = (options.method.toLowerCase() !== 'post' ? (options.method.toLowerCase !== 'get' ? 'post' : 'get') : 'post');

    if (options.data.isObject()) {
        var form = document.createElement('form');
        form.action = options.url;
        form.method = options.method;
        if (options.blank === true) {
            form.target = '_blank';
        }

        for (var key in options.data) {
            if (options.data.hasOwnProperty(key)) {
                var input = document.createElement('input');
                input.type = 'text';
                input.name = key;
                input.value = options.data[key];
                form.appendChild(input);
            }
        }
        document.body.appendChild(form);
        form.submit();
    } else {
        if (options.blank === true) {
            window.open(options.url, '_blank');
        } else {
            window.location.replace(options.url);
        }
    }
}

_.request = function(options) {
    var defaultConfig = {
        url: document.URL,
        data: false,
        method: 'post',
        async: true,
        beforeSend: false,
        success: (response, status) => {
            _.log('Succesfully obtained a response!');
            _.log(response, false);
        },
        error: (status) => {
            if (status === false) {
                _.log('ERROR: Couldn\'t reach target!');
            } else {
                _.log('ERROR: The server has responded with status ' + status);
            }
        }
    };

    options = _.fillObject(defaultConfig, options, "nu");
    options.url = (!options.url ? defaultConfig.url : options.url);
    options.method = (options.method.toLowerCase() !== 'post' ? (options.method.toLowerCase() !== 'get' ? defaultConfig.method : 'get') : 'post');
    options.async = (options.async.isBoolean() ? options.async : true);

    var request = new XMLHttpRequest();

    request.onload = () => {
        if (request.status >= 200 && request.status < 400) {
            if (_.valid(options.success, 'neuf')) {
                var contentType = request.getResponseHeader("Content-Type");
                if (contentType === 'application/json') {
                    var response = JSON.parse(request.responseText);
                } else {
                    var response = request.responseText;
                }
                options.success(response, request.status);
            }
        } else {
            if (_.valid(options.error, 'neuf')) {
                options.error(request.status);
            }
        }
    }

    request.onerror = () => {
        if (_.valid(options.error, 'neuf')) {
            options.error(false);
        }
    }

    if (_.valid(options.beforeSend, 'neuf')) {
        options.beforeSend();
    }

    if (options.data.isObject()) {
        var total = "";
        for (var key in options.data) {
            if (options.data.hasOwnProperty(key)) {
                if (total === "") {
                    total = total + key + '=' + options.data[key];
                } else {
                    total = total + '&' + key + '=' + options.data[key];
                }
            }
        }

        if (options.method === 'get') {
            request.open(options.method, options.url + '?' + total, options.async);
            request.send();
        } else if (options.method === 'post') {
            request.open(options.method, options.url, options.async);
            request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
            request.send(total);
        }
    } else {
        request.open(options.method, options.url, options.async);
        request.send();
    }
}

_.random = function(min, max, maxDecimal = 0) {
    return parseFloat((Math.random() * (max - min) + min).toFixed(maxDecimal));
}

_.url = function() {
    return window.location.href;
}

_.onMobile = function() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true;
    } else {
        return false;
    }
}
