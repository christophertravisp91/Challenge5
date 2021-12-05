setInterval(function(){ 
    var currentDay = moment().format('MMMM Do YYYY, h:mm:ss a');
    document.getElementById ("currentDay").innerText = currentDay;
}, 1000);



// saving to localStorage
localStorage.setItem('firstName', 'Michell');

// getting a value from localStorage
console.log(localStorage.getItem('firstName'));


let names = ['Jane', "Eric", "Sarah"];
//convert array to string because localStorage only takes a string
localStorage.setItem('names', JSON.stringify(names));


// convert string back into an array that we got from localStorage
let namesVal = JSON.parse(localStorage.getItem('names'));
console.log(namesVal);
