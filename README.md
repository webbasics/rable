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
        true.switch()     //true is switched to false
        false.switch()    //false is switched to true
      ```
    - __.valid( String: factor = "NU" )__
      _applied on Booleans, Strings, Numbers and Functions_
      
      __Factor__
        - N/n: null
        - E/e: empty
        - U/u: undefined
        - F/f: false
        
        __Once an other factor has been set, the default factor will be overwritten!__
      
      ```javascript
        false.valid()       //true, because the false factor has not been set.
        false.valid("F")    //false, because the false factor has been set.
        
        "".valid()          //false, because the empty factor has not been set.
        "".valid("E")       //true, because the empty factor has been set.
      ```
