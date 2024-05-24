function reverse(str) {
    var reversed = "";
    for (var i = str.length - 1; i >= 0; i--) {
        const b = str[i];
        reversed += b;
    }

    return reversed;
}

var original = "mesud";
var reversed = reverse(original);
console.log(reversed);


///Given a string, return a new string with thre reversed order of characters
///mesud = dusem