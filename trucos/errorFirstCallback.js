function asincrona(callback) {
    setTimeout(() => {
       try {
            let a = 3 + z;
            callback(null, a)
       } catch (error) {
            callback(error)
       } 
    }, 1000);
}

asincrona((error, dato) => {
    if (error) {
        console.error(`Tenemos un error: ${error}`);
        // Forma 1
        throw error;

        // Forma 2
        return false;
    }
});