const array1 = [1, 2, 3, 4];

function myEach(array, alert) {
    if (Array.isArray(array)) {
        array.forEach(element => alert(element));
    } else {
        let objectValues = Object.values(array);
        objectValues.forEach(element => alert(element));
    }
    return array;
}

function myMap(collection) {
    let result;
    if (Array.isArray(collection)) {
         result = collection.map((num) => num * 3)
    } else {
        let objectValues = Object.values(collection);
        result = objectValues.map((num) => num * 3);
    };
    return result;
}

function myReduce(collection, callback, initialValue) {
    let accumulator;
    let startIndex;

    if (Array.isArray(collection)) {
        if (initialValue === undefined) {
            accumulator = collection[0];
            startIndex = 1;
        } else {
            accumulator = initialValue;
            startIndex = 0;
        }
        for (let i = startIndex; i < collection.length; i++) {
            accumulator = callback(accumulator, collection[i], i, collection);
        }
    } else {
        const objectValues = Object.values(collection);
        if (initialValue === undefined) {
            accumulator = objectValues[0];
            startIndex = 1;
        } else {
            accumulator = initialValue;
            startIndex = 0;
        }
        for (let i = startIndex; i < objectValues.length; i++) {
            accumulator = callback(accumulator, objectValues[i], i, objectValues);
        }
    }

    return accumulator;
}

function myFind(collection, callback) {
    if (Array.isArray(collection)) {
    return collection.find(callback)
    } else {
    return Object.values(collection).find(callback);
    }
}

function myFilter(collection, callback) {
    if (Array.isArray(collection)) {
        return collection.filter(callback)
        } else {
        return Object.values(collection).filter(callback);
        }
    }

function mySize(collection) {
    if (Array.isArray(collection)) {
        return collection.length;
    } else {
        return Object.values(collection).length;
    }
}

function myFirst(collection, num) {
    if (num === undefined) {
        if (Array.isArray(collection)) {
            return collection[0];
        } else {
            return Object.values(collection)[0];
        }
    } else {
        if (Array.isArray(collection)) {
            return collection.slice(0, num);
        } else {
            return Object.values(collection).slice(0, num);
        }
    }
}

function myLast(collection, num) {
    if (num === undefined) {
        if (Array.isArray(collection)) {
            return collection[collection.length-1];
        } else {
            return Object.values(collection)[collection.length-1];
        }
    } else {
        if (Array.isArray(collection)) {
            return collection.slice(-num);
        } else {
            return Object.values(collection).slice(-num);
        }
    }
}

function myKeys(object) {
    return Object.keys(object);
}

function myValues(object) {
    return Object.values(object);
}