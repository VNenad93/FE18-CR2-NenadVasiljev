import data from './data.js';

const parsedData = JSON.parse(data)

console.log(parsedData)

for (let i = 0; i < parsedData.length; i++) {

    const object = parsedData[i]

    for (let task in object) {
        console.log(object[task])
    }
}