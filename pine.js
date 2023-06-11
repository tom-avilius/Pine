
// getting html DOM elements

// day, date time section => today
const todaySection = document.getElementById('today');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const day = document.getElementById('day');
const dateDom = document.getElementById('date');

// -----------------------------------------------



// all functions and classes are defined below

// function to start time
function startTime() {

    const date  = new Date();

    setTime(date);

    setTimeout(startTime, 1000);
}

// function to set time by changing the displaying it in desktop
function setTime(date) {

    // setting hours
    const hour = date.getHours()+'';
    if (hours.innerText != hour) {

        hours.innerText = hour+'';
    }

    // setting minutes
    const min = date.getMinutes()+'';
    if (minutes.innerText != min) {

        minutes.innerText = min+'';
    }

    // setting day
    const dayy = date.getDay()+'';
    if (day.innerText != dayy) {

        day.innerText = dayy+'';
    }

    // setting date 
    const datte = date.getDate()+'';
    if (dateDom.innerText != datte) {

        dateDom.innerText = datte+' '+date.getMonth()+'';
    }
}

// ----------------------------------------------



// Actual execution flow

// calling functions below
// starting time
startTime();


// making elements draggable below
// today section
element.draggable(todaySection, 'today');
