

// firstReverse = function(a) {
// 	myArray = a.split("");
// 	console.log(myArray);
// 	newArray = myArray.sort(function(a, b){

// 	if ( a[0] > b[1] ) { return 1 }
//     if ( a[0] < b[1] ) { return -1 }
//     if ( a[0] === b[1] ) { return 0 }

// 	})
// 	console.log(newArray);

// }

// firstReverse("Balls");


function reverse(str) {
  var x = str.split('').reverse().join('');
  console.log(x);
}

reverse("Balls");