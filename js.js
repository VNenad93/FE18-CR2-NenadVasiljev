import data from './data.js';

//parsed data
const parsedData = JSON.parse(data)

for (let task of parsedData) {

    document.getElementById('first').innerHTML += `
    <div>
        <div class="card p-4">
        <img src=${task.image} class="card-img-top" alt="${task.description}">
        <div class="card-body">
        <h3 class="card-title">${task.task_name}</h3>
        <p class="card-text" style="border-bottom: 1px solid gray; height: 8rem; padding: 2rem 0">${task.description}</p>
        <p class="card-text">Location: ${task.location}</p>
        <p class="card-text">Duration: ${task.duration}</p>
        <div class="d-flex justify-content-around align-items-center">
            <h4 class="flex-grow-1 prio">Priority: ${task.priority}</h4>
            <a href="#" class="btn btn-success" style="width: 3rem; margin-right: 1rem"><h4>+</h4></a>
            <a href="#" class="btn btn-danger disabled" style="width: 3rem"><h4>-</h4></a>
        </div>
        </div>
        </div>
    </div>`
}

let btnSuccess = document.querySelectorAll('.btn-success')
let btnDanger = document.querySelectorAll('.btn-danger')
let prio = document.querySelectorAll('.prio')

for (let i = 0; i < btnSuccess.length; i++) {
    btnSuccess[i].addEventListener('click', () => {

        parsedData[i].priority++
        prio[i].innerHTML = `Priority: ${parsedData[i].priority}`

        color(i)
        disable(i)

    })

    btnDanger[i].addEventListener('click', () => {

        parsedData[i].priority--
        prio[i].innerHTML = `Priority: ${parsedData[i].priority}`

        color(i)
        disable(i)
    })
}


// Function in charge for determening colors on Priority element

function color(param) {
    if (parsedData[param].priority < 2) {
        prio[param].style.color = 'lightgreen'
    } else if (parsedData[param].priority < 4) {
        prio[param].style.color = 'goldenrod'
    } else if (parsedData[param].priority <= 5) {
        prio[param].style.color = 'tomato'
    }
}

// Disabling buttons when the limits are reached

function disable(param) {
    if (parsedData[param].priority === 5) {
        btnSuccess[param].classList.add('disabled')
    } else {
        btnSuccess[param].classList.remove('disabled')
    }

    if (parsedData[param].priority > 0) {
        btnDanger[param].classList.remove('disabled')
    } else {
        btnDanger[param].classList.add('disabled')
    }
}