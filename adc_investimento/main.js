var opContent = document.querySelector('.operation-content')
var opButton = document.getElementById('operation-button')

opButton.addEventListener('click', () => toggleOperation())



function toggleOperation() {
    opContent.hasAttribute('style') ?
        opContent.removeAttribute('style')
        : opContent.setAttribute('style', 'display:none')
}

