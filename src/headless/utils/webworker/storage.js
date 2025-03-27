/**
 * storage.js - Web Storage API for WebWorkers
 * 
 * This module provides mock implementations of the localStorage and sessionStorage
 * interfaces that are not natively available in WebWorker contexts.
 * 
 * The implementation provides the standard Storage interface methods:
 * - getItem(key)
 * - setItem(key, value)
 * - removeItem(key)
 */

export class Storage{
    keyMap = {};

    /**
     * Retrieves a value by key
     * @param {string} key - The key to look up
     * @returns {string|null} The stored value or null if not found
     */
    get(key){
        return this.keyMap[key]
    }
    
    /**
     * Standard Storage.getItem implementation
     * @param {string} key - The key to look up
     * @returns {string|null} The stored value or null if not found
     */
    getItem(key){
        return this.get(key);
    }
    
    /**
     * Sets a value by key
     * @param {string} key - The key to set
     * @param {string} value - The value to store
     */
    set(key,value){
        this.keyMap[key] = value;
    }
    
    /**
     * Standard Storage.setItem implementation
     * @param {string} key - The key to set
     * @param {string} value - The value to store
     */
    setItem(key,value){
        this.set(key,value);
    }
    
    /**
     * Removes an item from storage
     * @param {string} key - The key to remove
     */
    removeItem(key){
        delete this.keyMap[key];
    }
}

// Initialize storage objects in the global context if auto_init_mock is enabled
if(self['auto_init_mock']){
    self.localStorage = new Storage();
    self.sessionStorage = new Storage();
}