function memoize(fn) {
    const cache = new Map();
    let callCount = 0;

    function getKey(args) {
        return args.join(','); // Create a unique key based on args array
    }

    const memoizedFn = function(...args) {
        const key = getKey(args);
        if (cache.has(key)) {
            return cache.get(key);
        } else {
            const result = fn(...args);
            cache.set(key, result);
            callCount++;
            return result;
        }
    };

    memoizedFn.getCallCount = function() {
        return callCount;
    };

    return memoizedFn;
}

