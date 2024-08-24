function storeAndIterate(array, object) {
    const storedArray = [...array];
    const storedObject = { ...object };

    console.log('Stored Array:', storedArray);
    console.log('Stored Object:', storedObject);
    console.log('Iterating over Array using for...of:');
    for (const item of storedArray) {
        console.log(item);
    }
    console.log('Iterating over Object using for...in:');
    for (const key in storedObject) {
        if (storedObject.hasOwnProperty(key)) {
            console.log(`${key}: ${storedObject[key]}`);
        }
    }
}
