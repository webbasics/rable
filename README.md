# Rable

A new toolkit and stylesheet for the web!

## Navigation
- [Installation](#Installation)
- _Documentation_
  * [Javascript](#Javascript)
  * [PHP](#PHP)
  * [CSS](#CSS)

## Installation

Download the file for the desired language, then include it in your script.

## Javascript

__Notes__
* _difference between an Array and an Object (examples)_
  - _An Array:_
    ```javascript
      ['This', 'is', 'an', 'example', 'of', 'an', 'Array']
    ```
  - _An Object:_
    ```javascript
      {
        key1: 'This',
        key2: 'is',
        key3: 'an',
        key4: 'example',
        key5: 'of',
        key6: 'an'
        key7: 'Object;'
      }
    ```
* _description and difference between an HTMLElement and an NodeList_
 - _An HTMLElement:_
   __Literly an HTML Element__
   ```javascript
    <div class="exampleClass" id="exampleID">Example text</div>
   ```
 - _An NodeList:_
   __A List of HTMLElements__
   ```javascript
    NodeList(2) [div.exampleClass, p#exampleID]
   ```

* _prototype functions_

    __Note: prototype function work as shown here: ```object.yourPrototypeFunction()```__

    - __.switch()__
      _Applied on Booleans_
      ```javascript
        true.switch()                         //true is switched to false
        false.switch()                        //false is switched to true
      ```
    - __.valid( String: factor = "NU" )__
      _Applied on Booleans, Strings, Numbers, Functions, Arrays and Objects_

      __Factor__
        - N/n: null
        - E/e: empty
        - U/u: undefined
        - F/f: false

        __Once an other factor has been set, the default factor will be overwritten!__

      ```javascript
        false.valid()                         //true, because the false factor has not been set.
        false.valid("F")                      //false, because the false factor has been set.

        "".valid()                            //false, because the empty factor has not been set.
        "".valid("E")                         //true, because the empty factor has been set.
      ```
    - __.is { Boolean / String / Number / Function / Array / Object / HTMLElement / NodeList }()__
      _Applied on Booleans, Strings, Numbers, Functions, Arrays, Objects, HTMLElements and NodeLists_

      __Note: Some of these examples are invalid and will first need to be defined in an variable!__

      ```javascript
        //.isBoolean
          true.isBoolean()                    //true

        //.isString
          "my string".isString()              //true

        //.isNumber
          1.isNumber()                        //true

        //.isFunction()
          function() {}.isFunction()          //true

        //.isArray()
          ['Array'].isArray()                 //true

        //.isObject()
          {test: "Object"}.isObject()         //true

        //.isHTMLElement()
          <element>.isHTMLElement()           //true

        //.isNodeList()
          NodeList(0).isNodeList()            //true

        //.is()
          "my string".is()                    //"String"
          true.is()                           //"Boolean"
      ```
    - __.isset( String: key, Boolean: search_val = false )__
      _Applied on Arrays, Objects and NodeLists_

      __Note: Some examples are invalid and will first need to be defined in an variable!__

      ```javascript
        //Array, search_val can affect the algorithm.
        ['val'].isset('val');                 //true, search_val will be true because its searching an array and input is a var
        ['val'].isset(0);                     //true, search_val will be false because its searching an array and input is a number
        ['val'].isset(0, true);               //false, search_val will be true because it has been told so. value 0 doesnt exist
        [2, 0].isset(0, true);                //true, because value 0 exists in array
        [].isset('val');                      //false, and it always will, because it's empty

        //Object, search_val cannot (yet) affect the algorithm
        {test: "test"}.isset('test');         //true
        {test: "test"}.isset('srch');         //false
        {}.isset('test');                     //false, and it always will, because it's empty

        //NodeList, search_val cannot (yet) affect the algorithm.
        NodeList(1) [div].isset(div);         //false, you cannot search by element name
        NodeList(1) [div].isset(0);           //true
        NodeList(1) [div[.isset(1);           //false
        NodeList(0).isset(0);                 //false, and it always will, because there are no elements in this case
      ```
    - __.spacing( Number: amount = 1, *NodeList* Number: item ( = Boolean: false))__
      _Applied on HTMLElements and NodeLists_

      __Note: this will add the amount of ```<br>``` elements specified in 'amount'__
      __Note: Some example are invalid and will first need to be defined in a variable!__

      ```javascript
       //HTMLElement
       <div></div>.spacing(2);                //<div><br><br></div>, placed two <br> elements

       //NodeList
       NodeList(2) [div, div].spacing(1)      //(for both divs: ) <div><br></div>
       NodeList(2) [div, div].spacing(2, 0)   //(only first div:) <div><br><br></div>, because you said it to only apply it to the first div
      ```
    - __.geth( *NodeList* Number: item ( = Boolean: false) )__
      _Applied on HTMLElements and NodeLists_

      __Note: geth stands for get html, it will return the content inside the element__

      ```javascript
       //HTMLElement
       <div>some content</div>.geth()          //"some content"

       //NodeList, the content of div 1 will be "this is content 1" and for 2 "this is content 2"
       NodeList(2) [div, div].geth()           //["this is content 1", "this is content 2"]
       NodeList(2) [div, div].geth(0)          //"this is content 1"
      ```
    - __.seth( String: content, *NodeList* Number: item ( = Boolean: false) )__
      _Applied on HTMLElements and NodeLists_

      __Note: seth stands fot set html, this will overwrite the existing content__

      ```javascript
        //HTMLElement
        <div>some content</div>.seth('new')    //<div>new</div>

        //NodeList, the content of div 1 will be "this is content 1" and for 2 "this is content 2"
        NodeList(2) [div, div].seth('new')      //NodeList(2) [div, div], where the content has been updated to 'new'
        NodeList(2) [div, div].seth('new', 0)   //Nodelist(2) [div, div] where the content of only the first div has been set to 'new'
      ```
    - __.seti( String: newid, *NodeList* Number: item ( = Boolean: false) )__
      _Applied on HTMLElements and NodeLists_

      __Note: seti stands for set id, this will overwrite the existing id__

      ```javascript
        //HTMLElement
        <div id="myId"></div>.seti('myNewId')   //<div id="myNewId"></div>

        //NodeList
        NodeList(2) [div#d, div#d].seti('n')    //NodeList(2) [div#n, div#n]
        NodeList(2) [div#d, div#d].seti('n', 0) //NodeList(2) [div#n, div#d]
      ```
    - __.addh( String: content, *NodeList* Number: item ( = Boolean: false) )__
      _Applied on HTMLElements and NodeLists_

      __Note: addh stands for add html, this will add the new content next to the existing content if set__

      ```javascript
        //HTMLElement
        <div>content</div>.addh(' and more')    //<div>content and more</div>

        //NodeList, both div's content set to 'this is'
        NodeList(2) [div, div].addh(' easy')    //NodeList(2) [div, div], where this content of both div's is 'this is easy'
        NodeList(2) [div, div].addh(' easy', 0) //NodeList(2) [div, div], where only the first div has been affected
      ```

    
