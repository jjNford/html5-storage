Local Storage Enhanced
=====================
LocalStorage Enhanced takes advantage HTML5 localStorage by applying a safe and powerful wrapper to it.

Features
--------
- Detected and plan for non-supported localStorage browers.
- Store and load objects from localStorage.
- Catches localStorage errors to allow for cleaner code.
- No javascript library dependencies.

How To Use
----------
Just include storage.js into your project and you are ready to being using it.  Here is an example.

    if(Storage.isSupported() === true) {
    
        var myPoint = {x: 3, y: 2, info: {name: "point"}};
        Storage.save("point", myPoint);
        
        var myPoint2 = Storage.load("point");
        console.log(myPoint2.info.name); // Will print "point" to the console.
        
        Storage.remove("point");
        var myPoint3 = Storage.load("point");
        console.log(myPoint3); // Will print "null" to console.
        
        Storage.setExeptions(true);
        try {
            var myPoint4 = Storage.load("point");
        }
        catch(StorageException) {
            console.log("There is nothing stored under point!"); // This will print to the console.
        }
        
        Storage.save("X", 3);
        Storage.clear();
        
        console.log(Storage.size()); // This will print "0" to the console.
    }


API
---
> **clear()** <br/><br/>
`Returns true if localStorage is cleared, false if not` <br/>
`Throws StorageException if exceptions have been set to true.`

Removes all data from localStorage.


> **isSupported( fn )** <br/><br/>
`fn - Callback function to be triggered if localStorage is not supported (optional).` <br/> 
`Returns true if localStorage is supported by browser, false if not.` <br/>
`Throws StorageException if exceptions have been set to true.`

Determines if the current browser supported localStorage

> **load( key )** <br/><br/>
`key - The hash key to load localStorage data from.` <br/>
`Returns data from localStorage, null if no data is found` <br/>
`Throws StorageException if exceptions have been set to true.`

Loads data from the localStorage (variables and objects).

> **remove( key )** <br/><br/>
`key - The hash key in localStorage where the data to remove is being stored.` <br/>
`Returns true if data is succesfully removed from localStorage, false if it fails.` <br/>
`Throws StorageException if exceptions have been set to true.`

Removes data from localStorage.

> **save( key, data )** <br/><br/>
`key - The has key to save data to in localStorage.` <br/>
`data - The data to be saved.` <br/>
`Returns true if data is saved successfully to localStorage, false if not.` <br/>
`Throws StorageException if exceptions have been set to true.`

Saves data to localStorage (variables and objects).

> **setExceptions( bool )** <br/><br/>
`bool - If true all localStorage errors will be thrown globally as StorageException.`

Turn localStorage exceptions on/off. If on a StorageException will be thrown on all localStorage errors.

> **size()** <br/><br/>
`Returns the number of entried currently stored in localStroage` <br/>
`Throws StorageException if exceptions have been set to true.`

Gets the number of items currently being stored in localStorage.



License
-------
- [MIT](http://www.opensource.org/licenses/mit-license.php)

Changelog
---------
- 03-03-2012 Initial release.