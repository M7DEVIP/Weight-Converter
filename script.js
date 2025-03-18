// script.js
document.addEventListener('DOMContentLoaded', function() {
    const kilogramsInput = document.getElementById('kilograms');
    const gramsInput = document.getElementById('grams');
    const poundsInput = document.getElementById('pounds');
    const milligramsInput = document.getElementById('milligrams');
    const convertButton = document.getElementById('convertButton');
    const clearButton = document.getElementById('clearButton');
    const highlightDuration = 300; // milliseconds

    function saveConversion() {
        localStorage.setItem('lastKilograms', kilogramsInput.value);
        localStorage.setItem('lastGrams', gramsInput.value);
        localStorage.setItem('lastPounds', poundsInput.value);
        localStorage.setItem('lastMilligrams', milligramsInput.value);
    }

    function loadLastConversion() {
        const lastKilograms = localStorage.getItem('lastKilograms');
        const lastGrams = localStorage.getItem('lastGrams');
        const lastPounds = localStorage.getItem('lastPounds');
        const lastMilligrams = localStorage.getItem('lastMilligrams');

        if (lastKilograms !== null) kilogramsInput.value = lastKilograms;
        if (lastGrams !== null) gramsInput.value = lastGrams;
        if (lastPounds !== null) poundsInput.value = lastPounds;
        if (lastMilligrams !== null) milligramsInput.value = lastMilligrams;

        if (lastKilograms) kilogramsInput.dispatchEvent(new Event('input'));
        else if (lastGrams) gramsInput.dispatchEvent(new Event('input'));
        else if (lastPounds) poundsInput.dispatchEvent(new Event('input'));
        else if (lastMilligrams) milligramsInput.dispatchEvent(new Event('input'));
    }

    function clearAllInputsExcept(elementToExclude) {
        if (elementToExclude !== kilogramsInput) kilogramsInput.value = '';
        if (elementToExclude !== gramsInput) gramsInput.value = '';
        if (elementToExclude !== poundsInput) poundsInput.value = '';
        if (elementToExclude !== milligramsInput) milligramsInput.value = '';
    }

    function highlightInput(inputElement) {
        inputElement.classList.add('conversion-highlight');
        setTimeout(() => {
            inputElement.classList.remove('conversion-highlight');
        }, highlightDuration);
    }

    kilogramsInput.addEventListener('input', function() {
        clearAllInputsExcept(kilogramsInput);
        const kg = parseFloat(kilogramsInput.value);
        if (!isNaN(kg)) {
            gramsInput.value = (kg * 1000).toFixed(2);
            poundsInput.value = (kg * 2.20462).toFixed(2);
            milligramsInput.value = (kg * 1000000).toFixed(2);
            highlightInput(gramsInput);
            highlightInput(poundsInput);
            highlightInput(milligramsInput);
            saveConversion();
        } else {
            saveConversion();
        }
    });

    gramsInput.addEventListener('input', function() {
        clearAllInputsExcept(gramsInput);
        const g = parseFloat(gramsInput.value);
        if (!isNaN(g)) {
            kilogramsInput.value = (g / 1000).toFixed(2);
            poundsInput.value = (g * 0.00220462).toFixed(2);
            milligramsInput.value = (g * 1000).toFixed(2);
            highlightInput(kilogramsInput);
            highlightInput(poundsInput);
            highlightInput(milligramsInput);
            saveConversion();
        } else {
            saveConversion();
        }
    });

    poundsInput.addEventListener('input', function() {
        clearAllInputsExcept(poundsInput);
        const lbs = parseFloat(poundsInput.value);
        if (!isNaN(lbs)) {
            kilogramsInput.value = (lbs / 2.20462).toFixed(2);
            gramsInput.value = (lbs / 0.00220462).toFixed(2);
            milligramsInput.value = (lbs * 453592.37).toFixed(2);
            highlightInput(kilogramsInput);
            highlightInput(gramsInput);
            highlightInput(milligramsInput);
            saveConversion();
        } else {
            saveConversion();
        }
    });

    milligramsInput.addEventListener('input', function() {
        clearAllInputsExcept(milligramsInput);
        const mg = parseFloat(milligramsInput.value);
        if (!isNaN(mg)) {
            kilogramsInput.value = (mg / 1000000).toFixed(2);
            gramsInput.value = (mg / 1000).toFixed(2);
            poundsInput.value = (mg / 453592.37).toFixed(2);
            highlightInput(kilogramsInput);
            highlightInput(gramsInput);
            highlightInput(poundsInput);
            saveConversion();
        } else {
            saveConversion();
        }
    });

    convertButton.addEventListener('click', function() {
        alert("Conversions are now real-time as you type!");
    });

    clearButton.addEventListener('click', function() {
        kilogramsInput.value = '';
        gramsInput.value = '';
        poundsInput.value = '';
        milligramsInput.value = '';
        saveConversion();
    });

    loadLastConversion();
});