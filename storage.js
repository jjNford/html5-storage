(function() {
    window.storage = {

        /**
         * Clears the browsers local storage.
         */
         clear: function() {
             window.localStorage.clear();
         },

        /**
         * Retrieves and item from the browsers local storage.
         *
         * @param key Key to get data from.
         * @return Data stored under the given key.
         */
        getItem: function(key) {
            var data = localStorage.getItem(key);
            if(data !== undefined) {
                try {
                    return JSON.parse(data);
                } catch(exception) {
                    return null;
                }
            }
            return data;
        },

        /**
         * Determines if the browser supports local storage.
         *
         * @param successful Callback triggered if the browswer has local storage.
         * @param failure Callback triggered if the browswer does not have local storage.
         */
        isSupported: function(successful, failure) {
            if("localStorage" in window) {
                if(typeof successful === 'function') {
                    successful();
                }
                return true;
            } else {
                if(typeof failure === 'function') {
                    failure();
                }
                return false;
            }
        },

        /**
         * Returns the number of entries that are saved to the browswers local storage. 
         *
         * @return The number of entries in the local storage.
         */
        length: function() {
            return window.localStorage.length;
        },

        /**
         * Removes the data associated from the key from the browsers local storage.
         *
         * @param key Key to delete.
         */
        removeItem: function(key) {
            window.localStorage.removeItem(key);
        },

        /**
         * Saves an item to the browsers local storage.
         *
         * @param key Key to save data in.
         * @param data Data to be saved.
         */
        setItem: function(key, data) {
            if(typeof data === 'object') {
                data = JSON.stringify(data);
            }
            window.localStorage.setItem(key, data);
        }
    }
})();