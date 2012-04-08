/*
 * HTML5 Storage
 * <https://github.com/jjNford/html5-storage>
 * 
 * Copyright (C) 2012, JJ Ford (jj.n.ford@gmail.com)
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
 * of the Software, and to permit persons to whom the Software is furnished to do
 * so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */
(function() {
	
	var _ = window.Storage;
	
	window.Storage = {
		
		init: function() {
			this._ = _;
			this.name = "html5-localStorage";
			this.supported = Storage.isSupported();
		},

		/**
		 * @return True if localStorage is cleared, false if localStorage is not supported.
		 */
		clear: function() {
			if(Storage.supported) {
				window.localStorage.clear();
				return true;
			} else {
				return false;
			}
		},
		
		/**
		 * @param success Callback function that is triggered if localStorage is supported by browser.
		 * @param error Callback function that is triggered if localStorage is not supported by browser.
		 * @return True if localStorage is supported, false if not.
		 */
		isSupported: function(success, error) {
			if("localStorage" in window) {
				if(typeof success === 'function') {
					success();
				}
				return true;
			} else {
				if(typeof error === 'function') {
					error();
				}
				return false;
			}
		},
		
		/**
		 * @param key The key to load data from in localStorage.
		 * @return The data in localStorage (primitive and object), null if no data is found.
		 */
		load: function(key) {
			if(Storage.supported) {
				var data = window.localStorage[key];
				if(data === undefined) {
					return null;
				}
				try {
					return JSON.parse(data);
				} catch(nonobject) {
					return data;
				}
			} else {
				return null;
			}
		},
		
		/**
		 * @param key The hash key the data to remove is stored under.
		 * @return True if the data is found and removed, false if not.
		 * @throws StorageException
		 */
		remove: function(key) {
			try {
				delete window['localStorage'][key];
				return true;
			}
			catch(error) {
				if(this._throw === true) {
					throw this._exception;
				}
				return false;
			}
		},
		
		/**
		 * @param key The key data will be saved under in the localStorage.
		 * @param data The data to be saved to localStorage (primitives or objects).
		 * @return True is data is saved successfully, false if not.
		 */
		save: function(key, data) {
			if(Storage.supported) {
				if(typeof data === 'object') {
					data = JSON.stringify(data);
				}
				window.localStorage[key] = data;
				return true;
			} else {
				return false;
			}
		},
		
		/**
		 * @return The number of elements currently in localStorage, 0 if localStorage is not supported.
		 */
		size: function() {
			if(Storage.supported) {
				return window.localStorage.length;
			} else {
				return 0;
			}
		}
	};
	
	Storage.init();
	
})();