const str = 'Mozilla';

console.log(str.substr(1, 2));

console.log(str.substr(2));


//split url
let url = "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split";
let segments = url.split("/");

console.log(segments[segments.length-1]);

segments.forEach(element => console.log(element));
