const clickButton = document.getElementsByTagName('button')[0]
let counter = 0
const container = document.getElementsByTagName('div')[0]

// Function on 'click'
clickButton.addEventListener('click', () => {
    const newElement = document.createElement('p')

    if (counter === 0 || counter % 10 === 0) {
        newElement.classList.add('weiss')
    }
    const addCounter = document.createTextNode(counter++)
    container.appendChild(newElement)
    newElement.appendChild(addCounter)
    newElement.classList.add('rechteck')
})