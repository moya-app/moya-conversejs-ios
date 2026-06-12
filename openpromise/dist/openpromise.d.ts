type OpenPromise<T> = Promise<T> & {
    isResolved: boolean;
    isPending: boolean;
    isRejected: boolean;
    resolve: (value: T | PromiseLike<T>) => void;
    reject: (reason?: any) => void;
};
export declare function getOpenPromise<T>(): OpenPromise<T>;
export {};
//# sourceMappingURL=openpromise.d.ts.map