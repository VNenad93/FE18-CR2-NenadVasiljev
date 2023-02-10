import data from './data.js';

//parsed data
const parsedData = JSON.parse(data)

//Container selected
let cardCont = document.getElementById('first')

//Dinamicly rendered data based on the template below
for (let task of parsedData) {

    cardCont.innerHTML += `
    <div class="item">
        <div class="card p-4">
            <img src=${task.image} class="card-img-top" alt="${task.description}">
                <div class="card-body">
                <h3 class="card-title">${task.task_name}</h3>
                <p class="card-text" style="border-bottom: 1px solid gray; height:5rem">${task.description}</p>
                <p class="card-text">Location: ${task.location}</p>
                <p class="card-text">Duration: ${task.duration} minutes</p>
                <div class="d-flex justify-content-around align-items-center mb-4" >
                    <h4 class="flex-grow-1 prio text-success">Priority: ${task.priority}</h4>
                    <a class="btn btn-success" style="width: 3rem; margin-right: 1rem"><h4>+</h4></a>
                    <a class="btn btn-danger disabled" style="width: 3rem"><h4>-</h4></a>
                </div>
                <div class="d-grid gap-2">
                <button class="btn btn-secondary d-flex justify-content-center">Completed</button>
                <button class="btn btn-warning d-flex justify-content-center" >
                        Delete
                        <i class="material-icons">delete</i>
                        </button>
                </div>
            </div>
        </div>
    </div>`
}


// Selectors
const btnSuccess = document.querySelectorAll('.btn-success')
const btnDanger = document.querySelectorAll('.btn-danger')
const btnSecondary = document.querySelectorAll('.btn-secondary')
const btnWarning = document.querySelectorAll('.btn-warning')
const prio = document.querySelectorAll('.prio')
const cardItem = document.querySelectorAll('.item')
const foot = document.getElementById('foot')
const sort = document.getElementById('sort')

// Adding events on buttons
for (let i = 0; i < btnSuccess.length; i++) {

    // Button for incrementation
    btnSuccess[i].addEventListener('click', () => {

        parsedData[i].priority++
        prio[i].innerHTML = `Priority: ${parsedData[i].priority}`

        color(i)
        disable(i)

    })

    // Button for decrementing
    btnDanger[i].addEventListener('click', () => {

        parsedData[i].priority--
        prio[i].innerHTML = `Priority: ${parsedData[i].priority}`

        color(i)
        disable(i)
    })

    // Button checked
    btnSecondary[i].addEventListener('click', () => {
        completed(i)
    })

    // Remove Button
    btnWarning[i].addEventListener('click', () => {
        removeItem(i)
    })

}


// Function in charge for determening colors on Priority element
function color(param) {
    if (parsedData[param].priority < 2) {
        prio[param].classList.add('text-success')
        prio[param].classList.remove('text-warning')
    } else if (parsedData[param].priority < 4) {
        prio[param].classList.add('text-warning')
        prio[param].classList.remove('text-success')
        prio[param].classList.remove('text-danger')
    } else if (parsedData[param].priority <= 5) {
        prio[param].classList.add('text-danger')
        prio[param].classList.remove('text-warning')
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


// Changing color on the button if the task is completed
function completed(param) {
    btnSecondary[param].classList.add('btn-primary')
    btnSecondary[param].classList.remove('btn-secondary')
    btnSecondary[param].innerHTML = `<i class="material-icons" style="height: 1.5rem;">check</i>`
}


// Deleting tasks
function removeItem(param) {
    cardCont.removeChild(cardItem[param])
}


// Sort button event
sort.addEventListener('click', () => {

    for (let i = 0; i < parsedData.length; i++) {
        const sorted = parsedData[i].priority

        console.log(sorted.sort(compareNumbers))

    }
})

// Sort button event
sort.addEventListener('click', () => {
    parsedData.sort((a, b) => b.priority - a.priority)
    cardCont.innerHTML = ''
    for (let task of parsedData) {
        cardCont.innerHTML += `
        <div class="item">
            <div class="card p-4">
                <img src=${task.image} class="card-img-top" alt="${task.description}">
                    <div class="card-body">
                    <h3 class="card-title">${task.task_name}</h3>
                    <p class="card-text" style="border-bottom: 1px solid gray; height:5rem">${task.description}</p>
                    <p class="card-text">Location: ${task.location}</p>
                    <p class="card-text">Duration: ${task.duration} minutes</p>
                    <div class="d-flex justify-content-around align-items-center mb-4" >
                        <h4 class="flex-grow-1 prio text-success">Priority: ${task.priority}</h4>
                        <a class="btn btn-success" style="width: 3rem; margin-right: 1rem"><h4>+</h4></a>
                        <a class="btn btn-danger disabled" style="width: 3rem"><h4>-</h4></a>
                    </div>
                    <div class="d-grid gap-2">
                    <button class="btn btn-secondary d-flex justify-content-center">Completed</button>
                    <button class="btn btn-warning d-flex justify-content-center" >
                            Delete
                            <i class="material-icons">delete</i>
                            </button>
                    </div>
                </div>
            </div>
        </div>`
    }
})