var opContent = document.querySelector('.operation-content')
var opButton = document.querySelector('.op-button')

opButton.addEventListener('click', () => toggleOperation())



function toggleOperation() {
    opContent.hasAttribute('style') ?
        (opContent.removeAttribute('style'),
            opButton.setAttribute('style', 'background-color:rgb(56,21,46)'))
        : (opButton.setAttribute('style','background-color:rgb(38, 50, 16)'),
        opContent.setAttribute('style', 'display:flex;'))
}
