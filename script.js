function firstWord(s) {
  // your code here
	let words = s.trim().split(' ')
	return !s.length ? '' : words[0];
}

// Do not change the code below

const s = prompt("Enter String:"); 
alert(firstWord(s));
