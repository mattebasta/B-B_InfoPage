// This is gonna be a script to make appear a different div on the restaurant page
// depending in which days the system is, then there will be an "open" div if the restaurant
// is in an open day or a "close" div if is a closing day

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
let day = weekday[d.getDay()];
alert(day);