HTML5 Storage
=============
An HTML5 local storage wrapper that adds the ability to save and retrieve objects from local storage.


How To Use
----------
1. Include the storage script in your project:

	```html
	<html>
	...
	...
	<body>
		...
		...
		
		<script src="libs/html-storage/storage.js"></script>
		
		...
		...
	</body>
	</html>
	```

2. Use `window.storage` to access the browsers local storage:

	```javascript
	function Person(name, gender) {
		this.name = name;
		this.gender = gender;
	}
	
	var user = window.storage.getItem("user");
	
	if(user === null) {
		user = new Person("JJ Ford", "male");
		window.storage.setItem("user", user);
	}
	
	```

3. Include attribution to library.

API
---

>**clear()**
><br><br>
>Clears browsers local storage.

<br>

>**getItem(key)**
><br><br>
>Retrieves the item associated with the given key from the browsers local storage.

<br>

>**isSupported()**
><br><br>
>Determines if the browser supports local storage.

<br>

>**length**
><br><br>
>Returns the size of the browsers local storage.

<br>

>**removeItem(key)**
><br><br>
>Removes the item associated with the given key from the browsers local storage.

<br>

>**setItem(key, data)**
><br><br>
>Saves the given data to the browsers local storage under the given key.