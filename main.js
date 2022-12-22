var opContent = document.querySelector('.operation-content')
var opButton = document.getElementById('operation-button')

opButton.addEventListener('click', () => toggleOperation())



function toggleOperation() {
    if (opContent.hasAttribute('style')) {
        // opContent.setAttribute('style', 'display:none;')
        opContent.removeAttribute('style')
    opButton.setAttribute('style', 'background-color:rgb(56,21,46)')
} else {
    opButton.setAttribute('style', 'background-color:rgb(38, 50, 16)')
    opContent.setAttribute('style', 'display:flex;')

} 
}
