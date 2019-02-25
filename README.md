# Rable

Usefull functions for js

## Navigation
- [Installation](#Installation)
- [Usage](#Usage)

## Installation

Download the file for the desired language, than include it in your script.

## Usage

* _prototype functions_
  
    __Note: prototype function work as shown here: ```object.yourPrototypeFunction()```__
    
    - __.switch()__
      _applied on Booleans only_
      ```javascript
        true.switch()                     //true is switched to false
        false.switch()                    //false is switched to true
      ```
    - __.valid( String: factor = "NU" )__
      _applied on Booleans, Strings, Numbers, Functions, Arrays and Objects_
      
      __Factor__
        - N/n: null
        - E/e: empty
        - U/u: undefined
        - F/f: false
        
        __Once an other factor has been set, the default factor will be overwritten!__
      
      ```javascript
        false.valid()                     //true, because the false factor has not been set.
        false.valid("F")                  //false, because the false factor has been set.
        
        "".valid()                        //false, because the empty factor has not been set.
        "".valid("E")                     //true, because the empty factor has been set.
      ```
    - __.is { Boolean / String / Number / Function / Array / Object / HTMLElement / NodeList }()__
      _Applied on Booleans, Strings, Numbers, Functions, Arrays, Objects, HTMLElements and NodeLists_
      
      __Note: Some of these examples are invalid and will first need to be defined in an variable!__
      
      ```javascript
        //.isBoolean
          true.isBoolean()                //true
        
        //.isString
          "my string".isString()          //true
          
        //.isNumber
          1.isNumber()                    //true
          
        //.isFunction()
          function() {}.isFunction()      //true
          
        //.isArray()
          ['Array'].isArray()             //true
        
        //.isObject()
          {test: "Object"}.isObject()     //true
          
        //.isHTMLElement()
          <element>.isHTMLElement()       //true
          
        //.isNodeList()
          NodeList(0).isNodeList()        //true
          
        //.is()
          "my string".is()                //"String"
          true.is()                       //"Boolean"
      ```
