// function reverse(str) {
//   var x = str.split('').reverse().join('');
//   console.log(x);
// }

// reverse("Balls");


function swapCase(str) {
		newstring = []
	for (var i=0; i<str.length; i++) {
		if (str[i].match(/[A-Z]/)) {
			newstring[i] = str[i].toLowerCase();
		} else if (str[i].match(/[a-z]/)) {
			newstring[i] = str[i].toUpperCase();
		}
	}
	console.log(newstring.join(''));
}

swapCase('Hello');