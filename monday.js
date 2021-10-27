var arr = [1, 2, 3, 5, 8, 10, 11, 12, 15]

function bookIndex(arr) {
    var book = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] + 1 == arr[i + 1]) {
            var start = arr[i];
            while (arr[i] + 1 == arr[i + 1]) {
                i++;
            }
            var end = arr[i];
            book.push(start + "-" + end);
        } else {
            book.push(arr[i]);
        }
    }
    var newstring = book.join(',');
    return newstring
}

console.log(bookIndex(arr));

