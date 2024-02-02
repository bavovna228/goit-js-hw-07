const textInput = document.querySelector('#name-input');

const textOutput = document.querySelector("#name-output");



textInput.addEventListener("input", onInputValue);


function onInputValue() {
    const enteredName = textInput.value.trim();

    if (enteredName === '') {
        textOutput.textContent = 'Anonymous';
    }
    else {
        textOutput.textContent = enteredName;
    }
}
