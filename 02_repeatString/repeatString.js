const number = Math.floor(Math.random() * 1000)
const repeatString = function(word, times) {
let string = "";
if (times < 0) return "ERROR";
for (let i = 1; i <= times; i++) {
string += word;  
}
return string;


};

repeatString('hey', 3);
repeatString('hey', 10);
repeatString('hey', 1);
repeatString('hey', 0);
repeatString('hey', -1);
repeatString('hey', number);
repeatString('', 10);




// Do not edit below this line
module.exports = repeatString;
