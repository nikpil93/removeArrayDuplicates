function removeArrayDuplicates(doublesArray) {
    var uniquesArray = [];
    var purifiedArray = doublesArray;
    purifiedArray.forEach(function (element) {
        // save the unique values in uniqueArray
        if (uniquesArray.indexOf(element) === -1) {
            uniquesArray.push(element);
        }
    });
    return uniquesArray;
}
