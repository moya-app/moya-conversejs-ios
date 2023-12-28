export class Storage{
    keyMap = {};

    get(key){
        return this.keyMap[key]
    }
    getItem(key){
        return this.get(key);
    }
    set(key,value){
        this.keyMap[key] = value;
    }
    setItem(key,value){
        this.set(key,value);
    }
    removeItem(key){
        delete this.keyMap[key];
    }
}


if(self['auto_init_mock']){
    
    self.localStorage = new Storage();
    self.sessionStorage = new Storage();
}