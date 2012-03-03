localStorage Enhanced
=====================
LocalStorage Enhanced takes advantage HTML5 localStorage by applying a safe and powerful wrapper to it.

Features
--------
- Detected and plan for non-supported localStorage browers.
- Store and load objects from localStorage.
- Catches localStorage errors to allow for cleaner code.
- No javascript library dependencies.

API
---
> **clear()**

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