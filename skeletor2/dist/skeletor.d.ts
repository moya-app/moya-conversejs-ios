import localForage from 'localforage';

/**
 * @public
 */
export declare class BrowserStorage {
    storeInitialized: Promise<void>;
    store: LocalForageWithExtensions;
    name: string;
    static sessionStorageInitialized: Promise<void>;
    static localForage: typeof localForage;
    constructor(id: string, type: 'local' | 'session' | 'indexed' | 'in_memory' | LocalForageWithExtensions, batchedWrites?: boolean);
    /**
     * @param type - The storage type: 'local', 'session', 'indexed', or 'in_memory'
     * @param batchedWrites - Whether to enable batched writes
     */
    initStore(type: 'local' | 'session' | 'indexed' | 'in_memory', batchedWrites: boolean): Promise<void>;
    flush(): void;
    clear(): Promise<void>;
    sync(): {
        (method: SyncOperation, model: Model, options: SyncOptions): Promise<void>;
        __name__: string;
    };
    removeCollectionReference(model: Model, collection: Collection | undefined): Promise<any> | undefined;
    addCollectionReference(model: Model, collection: Collection | undefined): Promise<any> | undefined;
    getCollectionReferenceData(model: Model): Record<string, string[]>;
    save(model: Model): Promise<any>;
    create(model: Model, options: SyncOptions): Promise<any>;
    update(model: Model): Promise<any>;
    find(model: Model): Promise<any>;
    findAll(): Promise<any[]>;
    destroy(model: Model, collection: Collection | undefined): Promise<Model>;
    getStorageSize(): Promise<number>;
    getItemName(id: string | number): string;
}

/**
 * @public
 */
export declare type ClassConstructor<T = any> = new (...args: any[]) => T;

/**
 * @public
 * If models tend to represent a single row of data, a Collection is
 * more analogous to a table full of data ... or a small slice or page of that
 * table, or a collection of rows that belong together for a particular reason
 * -- all of the messages in this particular folder, all of the documents
 * belonging to this particular author, and so on. Collections maintain
 * indexes of their models, both in order, and for lookup by `id`.
 */
export declare class Collection<T extends Model = Model> extends EventEmitterObject {
    [key: symbol]: () => CollectionIterator<T>;
    _browserStorage?: BrowserStorage;
    _comparator?: Comparator<T>;
    _url: string;
    models: T[];
    protected _byId: Record<string, T>;
    protected _model?: new (attributes?: Partial<ModelAttributes>, options?: ModelOptions) => T;
    /**
     * Create a new **Collection**, perhaps to contain a specific type of `model`.
     * If a `comparator` is specified, the Collection will maintain
     * its models in sort order, as they're added and removed.
     */
    constructor(models?: T[] | ModelAttributes[] | T | ModelAttributes, options?: CollectionOptions<T>);
    get comparator(): Comparator<T>;
    set comparator(c: Comparator<T>);
    set browserStorage(storage: BrowserStorage);
    get browserStorage(): BrowserStorage | undefined;
    /**
     * The default model for a collection is just a **Model**.
     * This should be overridden in most cases.
     */
    get model(): new (attributes?: Partial<ModelAttributes>, options?: ModelOptions) => T | Model;
    set model(model: new (attributes?: Partial<ModelAttributes>, options?: ModelOptions) => T);
    get length(): number;
    get url(): string;
    set url(url: string);
    /**
     * preinitialize is an empty function by default. You can override it with a function
     * or object.  preinitialize will run before any instantiation logic is run in the Collection.
     */
    preinitialize(..._args: any[]): void;
    /**
     * Initialize is an empty function by default. Override it with your own
     * initialization logic.
     */
    initialize(..._args: any[]): void;
    /**
     * The JSON representation of a Collection is an array of the
     * models' attributes.
     */
    toJSON(): any[];
    sync(method: SyncOperation, model: Model | Collection<any>, options?: Options): any;
    /**
     * Add a model, or list of models to the set. `models` may be
     * Models or raw JavaScript objects to be converted to Models, or any
     * combination of the two.
     */
    add(models: T[] | T | ModelAttributes | ModelAttributes[], options?: Options): T | T[];
    /**
     * Remove a model, or a list of models from the set.
     */
    remove(models: T | ObjectWithId | (T | ObjectWithId)[], options?: Options): T | T[];
    /**
     * Update a collection by `set`-ing a new list of models, adding new ones,
     * removing models that are no longer present, and merging models that
     * already exist in the collection, as necessary. Similar to **Model#set**,
     * the core operation for updating the data contained by the collection.
     */
    set(models: T[] | T | ModelAttributes | ModelAttributes[], options?: Options): T | T[];
    clearStore(options?: Options, filter?: (model: T) => boolean): Promise<void>;
    /**
     * When you have more items than you want to add or remove individually,
     * you can reset the entire set with a new list of models, without firing
     * any granular `add` or `remove` events. Fires `reset` when finished.
     * Useful for bulk operations and optimizations.
     */
    reset(models?: T[] | T | ModelAttributes | ModelAttributes[], options?: Options): T | T[];
    /**
     * Add a model to the end of the collection.
     */
    push(model: T | ModelAttributes, options?: Options): T;
    /**
     * Remove a model from the end of the collection.
     */
    pop(options?: Options): T | undefined;
    /**
     * Add a model to the beginning of the collection.
     */
    unshift(model: T | ModelAttributes, options?: Options): T;
    /**
     * Remove a model from the beginning of the collection.
     */
    shift(options?: Options): T | undefined;
    /** Slice out a sub-array of models from the collection. */
    slice(start?: number, end?: number): T[];
    filter(callback: ((model: T) => boolean) | string | Partial<ModelAttributes>, thisArg?: any): T[];
    every(pred: ((attrs: ModelAttributes) => boolean) | Options): boolean;
    difference(values: T[]): T[];
    max(): number;
    min(): number;
    drop(n?: number): T[];
    some(pred: ((attrs: ModelAttributes) => boolean) | Options): boolean;
    sortBy(iteratee: string | ((model: T) => any)): T[];
    isEmpty(): boolean;
    keyBy(iteratee: string | ((model: T) => string)): Record<string, T>;
    each(callback: (model: T, index: number, array: T[]) => void, thisArg?: any): void;
    forEach(callback: (model: T, index: number, array: T[]) => void, thisArg?: any): void;
    includes(item: T): boolean;
    size(): number;
    countBy(f: string | ((model: T) => string) | Partial<ModelAttributes>): Record<string, number>;
    groupBy(pred: string | ((model: T) => string | number)): Record<string, T[]>;
    indexOf(model: T, fromIndex?: number): number;
    findLastIndex(pred: ((model: T) => boolean) | string | Partial<ModelAttributes>, fromIndex?: number): number;
    lastIndexOf(model: T, fromIndex?: number): number;
    findIndex(pred: ((model: T) => boolean) | string | Partial<ModelAttributes>): number;
    last(): T | undefined;
    head(): T | undefined;
    first(): T | undefined;
    map<U>(cb: string | ((model: T) => U) | Partial<ModelAttributes>, thisArg?: any): U[];
    reduce<U = T>(callback: (accumulator: U, model: T, index: number, array: T[]) => U, initialValue?: U): U | T;
    reduceRight<U = T>(callback: (accumulator: U, model: T, index: number, array: T[]) => U, initialValue?: U): U | T;
    toArray(): T[];
    /**
     * Get a model from the set by id, cid, model object with id or cid
     * properties, or an attributes object that is transformed through modelId.
     */
    get(obj?: string | number | ModelAttributes | T | null): T | undefined;
    /**
     * Returns `true` if the model is in the collection.
     */
    has(obj: string | number | ModelAttributes | T | null): boolean;
    /**
     * Get the model at the given index.
     */
    at(index: number): T | undefined;
    /**
     * Return models with matching attributes. Useful for simple cases of
     * `filter`.
     */
    where(attrs: ModelAttributes | Partial<ModelAttributes>, first?: boolean): T[] | T | undefined;
    /**
     * Return the first model with matching attributes. Useful for simple cases
     * of `find`.
     */
    findWhere(attrs: ModelAttributes): T | undefined;
    find(predicate: ((model: T) => boolean) | Partial<ModelAttributes> | string, fromIndex?: number): T | undefined;
    /**
     * Force the collection to re-sort itself. You don't need to call this under
     * normal circumstances, as the set will maintain sort order as each item
     * is added.
     */
    sort(options?: Options): this;
    /**
     * Pluck an attribute from each model in the collection.
     */
    pluck(attr: string): any[];
    /**
     * Fetch the default set of models for this collection, resetting the
     * collection when they arrive. If `reset: true` is passed, the response
     * data will be passed through the `reset` method instead of `set`.
     */
    fetch(options?: Options): Promise<any> | any;
    /**
     * Create a new instance of a model in this collection. Add the model to the
     * collection immediately, unless `wait: true` is passed, in which case we
     * wait for the server to agree.
     */
    create(model: T | ModelAttributes, options?: FetchOrCreateOptions): Promise<T> | T;
    /**
     * **parse** converts a response into a list of models to be added to the
     * collection. The default implementation is just to pass it through.
     */
    parse(resp: any, _options?: Options): any;
    /**
     * Define how to uniquely identify models in the collection.
     */
    modelId(attrs: ModelAttributes): string | number | undefined;
    /** Get an iterator of all models in this collection. */
    values(): CollectionIterator<T>;
    /**
     * @public
     * Enable for...of iteration over the collection.
     */
    [Symbol.iterator]: () => CollectionIterator<T>;
    /** Get an iterator of all model IDs in this collection. */
    keys(): CollectionIterator<T>;
    /** Get an iterator of all [ID, model] tuples in this collection. */
    entries(): CollectionIterator<T>;
    /**
     * Private method to reset all internal state. Called when the collection
     * is first initialized or reset.
     */
    _reset(): void;
    createModel(attrs: ModelAttributes, options?: Options): T;
    /**
     * Prepare a hash of attributes (or other model) to be added to this
     * collection.
     */
    _prepareModel(attrs: ModelAttributes | T, options?: Options): T | null;
    /**
     * Internal method called by both remove and set.
     */
    _removeModels(models: (T | ObjectWithId)[], options?: Options): T[];
    /**
     * Method for checking whether an object should be considered a model for
     * the purposes of adding to the collection.
     */
    _isModel(model: any): model is T;
    /**
     * Internal method to create a model's ties to a collection.
     */
    _addReference(model: T, _options?: Options): void;
    /**
     * Internal method to sever a model's ties to a collection.
     */
    _removeReference(model: T, _options?: Options): void;
    /**
     * Internal method called every time a model in the set fires an event.
     * Sets need to update their indexes when models change ids. All other
     * events simply proxy through. "add" and "remove" events that originate
     * in other collections are ignored.
     */
    _onModelEvent(event: string, model: T, collection: Collection<T>, options?: Options): void;
}

/**
 * @public
 */
export declare class CollectionIterator<T extends Model> {
    private _collection;
    private _kind;
    private _index;
    /**
     * A CollectionIterator implements JavaScript's Iterator protocol, allowing the
     * use of `for of` loops in modern browsers and interoperation between
     * Collection and other JavaScript functions and third-party libraries
     * which can operate on Iterables.
     */
    constructor(collection: Collection<T>, kind: number);
    next(): IteratorResult<any>;
    [Symbol.iterator](): IterableIterator<any>;
}

/**
 * @public
 */
export declare type CollectionOptions<T extends Model = Model> = Options & {
    model?: new (attributes?: Partial<ModelAttributes>, options?: ModelOptions) => T;
    comparator?: Comparator<T>;
    previousModels?: Model[];
};

/**
 * @public
 */
export declare type Comparator<T extends Model = Model> = string | boolean | ((a: T, b: T) => number) | ((a?: T) => string);

/**
 * @public
 */
export declare type EventCallback = (...args: any[]) => void;

/**
 * @public
 */
export declare type EventCallbackMap = Record<string, EventCallback>;

/**
 * @public
 */
export declare type EventContext = unknown;

/**
 * @public
 */
export declare function EventEmitter<T extends ClassConstructor>(Base: T): {
    new (...args: any[]): {
        [x: string]: any;
        _events?: EventHandlersMap;
        _listeners?: EventListenerMap;
        _listeningTo?: EventListenerMap;
        _listenId?: string;
        /**
         * Bind an event to a `callback` function. Passing `"all"` will bind
         * the callback to all events fired.
         */
        on(name: string | EventCallbackMap, callback?: EventCallback | EventContext, context?: EventContext): /*elided*/ any;
        /**
         * Inversion-of-control versions of `on`. Tell *this* object to listen to
         * an event in another object... keeping track of what it's listening to
         * for easier unbinding later.
         */
        listenTo(obj: ObjectListenedTo, name: string | EventCallbackMap, callback?: EventCallback): /*elided*/ any;
        /**
         * Remove one or many callbacks. If `context` is null, removes all
         * callbacks with that function. If `callback` is null, removes all
         * callbacks for the event. If `name` is null, removes all bound
         * callbacks for all events.
         */
        off(name?: string | EventCallbackMap | null, callback?: EventCallback | EventContext | null, context?: EventContext): /*elided*/ any;
        /**
         * Tell this object to stop listening to either specific events ... or
         * to every object it's currently listening to.
         */
        stopListening(obj?: any, name?: string | EventCallbackMap, callback?: EventCallback): /*elided*/ any;
        /**
         * Bind an event to only be triggered a single time. After the first time
         * the callback is invoked, its listener will be removed. If multiple events
         * are passed in using the space-separated syntax, the handler will fire
         * once for each event, not once for a combination of all events.
         */
        once(name: string | EventCallbackMap, callback?: EventCallback | EventContext, context?: EventContext): /*elided*/ any;
        /**
         * Inversion-of-control versions of `once`.
         */
        listenToOnce(obj: any, name: string | EventCallbackMap, callback?: EventCallback): /*elided*/ any;
        /**
         * Trigger one or many events, firing all bound callbacks. Callbacks are
         * passed the same arguments as `trigger` is, apart from the event name
         * (unless you're listening on `"all"`, which will cause your callback to
         * receive the true name of the event as the first argument).
         */
        trigger(name: string, ...args: any[]): /*elided*/ any;
    };
} & T;

/**
 * @public
 */
export declare const EventEmitterObject: {
    new (...args: any[]): {
        [x: string]: any;
        _events?: EventHandlersMap;
        _listeners?: EventListenerMap;
        _listeningTo?: EventListenerMap;
        _listenId?: string;
        /**
         * Bind an event to a `callback` function. Passing `"all"` will bind
         * the callback to all events fired.
         */
        on(name: string | EventCallbackMap, callback?: EventCallback | EventContext, context?: EventContext): /*elided*/ any;
        /**
         * Inversion-of-control versions of `on`. Tell *this* object to listen to
         * an event in another object... keeping track of what it's listening to
         * for easier unbinding later.
         */
        listenTo(obj: ObjectListenedTo, name: string | EventCallbackMap, callback?: EventCallback): /*elided*/ any;
        /**
         * Remove one or many callbacks. If `context` is null, removes all
         * callbacks with that function. If `callback` is null, removes all
         * callbacks for the event. If `name` is null, removes all bound
         * callbacks for all events.
         */
        off(name?: string | EventCallbackMap | null, callback?: EventCallback | EventContext | null, context?: EventContext): /*elided*/ any;
        /**
         * Tell this object to stop listening to either specific events ... or
         * to every object it's currently listening to.
         */
        stopListening(obj?: any, name?: string | EventCallbackMap, callback?: EventCallback): /*elided*/ any;
        /**
         * Bind an event to only be triggered a single time. After the first time
         * the callback is invoked, its listener will be removed. If multiple events
         * are passed in using the space-separated syntax, the handler will fire
         * once for each event, not once for a combination of all events.
         */
        once(name: string | EventCallbackMap, callback?: EventCallback | EventContext, context?: EventContext): /*elided*/ any;
        /**
         * Inversion-of-control versions of `once`.
         */
        listenToOnce(obj: any, name: string | EventCallbackMap, callback?: EventCallback): /*elided*/ any;
        /**
         * Trigger one or many events, firing all bound callbacks. Callbacks are
         * passed the same arguments as `trigger` is, apart from the event name
         * (unless you're listening on `"all"`, which will cause your callback to
         * receive the true name of the event as the first argument).
         */
        trigger(name: string, ...args: any[]): /*elided*/ any;
    };
} & ObjectConstructor;

/**
 * @public
 */
export declare interface EventHandler {
    callback: EventCallback;
    context: any;
    ctx: any;
    listening?: ListeningType | null;
}

/**
 * @public
 */
export declare interface EventHandlersMap {
    all?: EventHandler[];
    [name: string]: EventHandler[];
}

/**
 * @public
 */
export declare type EventListenerMap = Record<string, ListeningType>;

export declare type FetchOrCreateOptions = Options & {
    promise?: boolean;
    success?: (m: Model, resp: any, callbackOpts: Options) => void;
};

/**
 * @public
 */
export declare interface IEventEmitter {
    _events?: Record<string, any>;
    _listeners?: ListeningMap;
    _listeningTo?: ListeningMap;
    _listenId?: string;
    on(name: string | EventCallbackMap, callback?: EventCallback | EventContext, context?: EventContext): this;
    off(name?: string | EventCallbackMap | null, callback?: EventCallback | EventContext | null, context?: EventContext): this;
    trigger(name: string, ...args: any[]): this;
    stopListening(obj?: any, name?: string | EventCallbackMap, callback?: EventCallback): this;
    once(name: string | EventCallbackMap, callback?: EventCallback | EventContext, context?: EventContext): this;
    listenTo(obj: ObjectListenedTo, name: string | EventCallbackMap, callback?: EventCallback): this;
    listenToOnce(obj: any, name: string | EventCallbackMap, callback?: EventCallback): this;
}

/**
 * @public
 */
export declare type ListeningMap = Record<string, ListeningType>;

/**
 * @public
 */
export declare interface ListeningType {
    _events?: EventCallbackMap;
    cleanup(): void;
    count: number;
    id: string;
    interop: boolean;
    listener: IEventEmitter;
    obj: any;
    start(name: string | EventCallbackMap, callback: EventCallback, context: any, _listening: ListeningType): this;
    stop(name: string | EventCallbackMap, callback: EventCallback): void;
}

/**
 * @public
 */
export declare interface LocalForageWithExtensions {
    setItem(key: string, value: any): Promise<any>;
    getItem(key: string): Promise<any>;
    removeItem(key: string): Promise<void>;
    clear(): Promise<void>;
    length(): Promise<number>;
    key(keyIndex: number): Promise<string>;
    keys(): Promise<string[]>;
    setItems?(items: Record<string, any>): Promise<void>;
    getItems?(keys: string[]): Promise<Record<string, any>>;
    debouncedSetItems?: {
        (items: Record<string, any>): Promise<void>;
        flush?: () => void;
    };
}

/**
 * @public
 * **Models** are the basic data object in the framework --
 * frequently representing a row in a table in a database on your server.
 * A discrete chunk of data and a bunch of useful, related methods for
 * performing computations and transformations on that data.
 */
export declare class Model<T extends ModelAttributes = ModelAttributes> extends EventEmitterObject {
    _browserStorage?: BrowserStorage;
    _changing: boolean;
    _pending: boolean | ModelOptions;
    _previousAttributes?: T;
    _url: string;
    _urlRoot: string;
    attributes: T;
    changed: Partial<T>;
    cid: string;
    collection?: Collection;
    id: string | number;
    validationError: string | number | null;
    /**
     * Create a new model with the specified attributes. A client id (`cid`)
     * is automatically generated and assigned for you.
     */
    constructor(attributes?: Partial<T>, options?: ModelOptions);
    set browserStorage(storage: BrowserStorage);
    get browserStorage(): BrowserStorage | undefined;
    /**
     * The default name for the JSON `id` attribute is `"id"`. MongoDB and
     * CouchDB users may want to set this to `"_id"` (by overriding this getter
     * in a subclass).
     */
    get idAttribute(): string;
    /**
     * The prefix is used to create the client id which is used to identify models locally.
     * You may want to override this if you're experiencing name clashes with model ids.
     */
    get cidPrefix(): string;
    /**
     * preinitialize is an empty function by default. You can override it with a function
     * or object.  preinitialize will run before any instantiation logic is run in the Model.
     */
    preinitialize(...args: any[]): void;
    /**
     * Initialize is an empty function by default. Override it with your own
     * initialization logic.
     */
    initialize(attrs?: Partial<T>, options?: ModelOptions): void;
    validate(attrs: Partial<T> | ObjectWithId, options?: ModelOptions): string | number | null | void;
    /**
     * Return a hash of defaults for the model's attributes.
     */
    defaults(): Partial<T>;
    /**
     * Return a copy of the model's `attributes` object.
     */
    toJSON(): T;
    /**
     * Override this if you need custom syncing semantics for *this* particular model.
     */
    sync(method: SyncOperation, model: Model<any>, options: Options): any;
    /**
     * Get the value of an attribute.
     */
    get<K extends keyof T>(attr: K): T[K];
    keys(): string[];
    values(): T[keyof T][];
    pairs(): [keyof T, T[keyof T]][];
    entries(): [keyof T, T[keyof T]][];
    invert(): Record<string, keyof T>;
    pick<K extends keyof T>(...args: K[]): Pick<T, K>;
    omit<K extends keyof T>(...args: K[]): Omit<T, K>;
    isEmpty(): boolean;
    /**
     * Returns `true` if the attribute contains a value that is not null
     * or undefined.
     */
    has(attr: keyof T): boolean;
    /**
     * Special-cased proxy to lodash's `matches` method.
     */
    matches(attrs: Partial<T>): boolean;
    /**
     * Set a hash of model attributes on the object, firing `"change"`. This is
     * the core primitive operation of a model, updating the data and notifying
     * anyone who needs to know about the change in state. The heart of the beast.
     */
    set(key: string | Partial<T> | ObjectWithId, val?: any, options?: ModelOptions): this;
    /**
     * Remove an attribute from the model, firing `"change"`. `unset` is a noop
     * if the attribute doesn't exist.
     */
    unset(attr: keyof T, options?: ModelOptions): this;
    /**
     * Clear all attributes on the model, firing `"change"`.
     */
    clear(options?: ModelOptions): this;
    /**
     * Determine if the model has changed since the last `"change"` event.
     * If you specify an attribute name, determine if that attribute has changed.
     */
    hasChanged(attr?: keyof T): boolean;
    /**
     * Return an object containing all the attributes that have changed, or
     * false if there are no changed attributes. Useful for determining what
     * parts of a view need to be updated and/or what attributes need to be
     * persisted to the server. Unset attributes will be set to undefined.
     * You can also pass an attributes object to diff against the model,
     * determining if there *would be* a change.
     */
    changedAttributes(diff?: Partial<T>): Partial<T> | false;
    /**
     * Get the previous value of an attribute, recorded at the time the last
     * `"change"` event was fired.
     */
    previous<K extends keyof T>(attr: K): T[K] | null;
    /**
     * Get all of the attributes of the model at the time of the previous
     * `"change"` event.
     */
    previousAttributes(): T | undefined;
    /**
     * Fetch the model from the server, merging the response with the model's
     * local attributes. Any changed attributes will trigger a "change" event.
     */
    fetch(options?: Options): any;
    /**
     * Set a hash of model attributes, and sync the model to the server.
     * If the server returns an attributes hash that differs, the model's
     * state will be `set` again.
     */
    save(key?: string | null | Partial<T>, val?: any, options?: ModelOptions): any;
    /**
     * Destroy this model on the server if it was already persisted.
     * Optimistically removes the model from its collection, if it has one.
     * If `wait: true` is passed, waits for the server to respond before removal.
     */
    destroy(options?: ModelOptions): any;
    get urlRoot(): string;
    set urlRoot(root: string);
    /**
     * Default URL for the model's representation on the server -- if you're
     * using Backbone's restful methods, override this to change the endpoint
     * that will be called.
     */
    get url(): string;
    set url(url: string);
    /**
     * **parse** converts a response into the hash of attributes to be `set` on
     * the model. The default implementation is just to pass the response along.
     */
    parse(resp: any, options?: ModelOptions): Partial<T> | null | void;
    /**
     * A model is new if it has never been saved to the server, and lacks an id.
     */
    isNew(): boolean;
    /**
     * Check if the model is currently in a valid state.
     */
    isValid(options?: ModelOptions): boolean;
    /**
     * Run validation against the next complete set of model attributes,
     * returning `true` if all is well. Otherwise, fire an `"invalid"` event.
     */
    _validate(attrs: Partial<T> | ObjectWithId, options?: ModelOptions): boolean;
}

/**
 * @public
 */
export declare type ModelAttributes = Record<string | number, any> & {
    id?: string | number;
};

/**
 * @public
 */
export declare type ModelOptions = Options & {
    collection?: Collection;
    parse?: boolean;
    unset?: boolean;
    silent?: boolean;
    validate?: boolean;
};

/**
 * @public
 */
export declare function noConflict(): any;

/**
 * @public
 */
export declare type ObjectListenedTo = object & {
    _listenId?: string;
};

/**
 * @public
 */
export declare type ObjectWithId = Record<string, any> & {
    id: string | number;
};

/**
 * @public
 */
export declare type Options = Record<string, any>;

/**
 * @public
 */
declare const skeletor: SkeletorType;
export default skeletor;

/**
 * @public
 */
export declare interface SkeletorType {
    Collection: typeof Collection;
    EventEmitter: typeof EventEmitter;
    Model: typeof Model;
    sync: typeof sync;
    VERSION?: string;
    noConflict?: () => SkeletorType;
}

/**
 * Override this function to change the manner in which Backbone persists
 * models to the server. You will be passed the type of request, and the
 * model in question. By default makes a `fetch()` API call
 * to the model's `url()`.
 *
 * Some possible customizations could be:
 *
 * - Use `setTimeout` to batch rapid-fire updates into a single request.
 * - Persist models via WebSockets instead of Ajax.
 * - Persist models to browser storage
 */
/**
 * @public
 */
export declare function sync(method: SyncOperation, model: Model | Collection<any>, options?: SyncOptions): Promise<any>;

/**
 * @public
 */
export declare type SyncOperation = 'create' | 'update' | 'patch' | 'delete' | 'read';

/**
 * @public
 */
export declare interface SyncOptions {
    url?: string;
    data?: any;
    attrs?: any;
    success?: (data?: any, options?: SyncOptions) => void;
    error?: (error: any) => void;
    xhr?: any;
    wait?: boolean;
}

export { }
