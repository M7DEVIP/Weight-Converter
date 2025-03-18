// script.js
document.addEventListener('DOMContentLoaded', function() {
    const kilogramsInput = document.getElementById('kilograms');
    const gramsInput = document.getElementById('grams');
    const poundsInput = document.getElementById('pounds');
    const milligramsInput = document.getElementById('milligrams');
    const convertButton = document.getElementById('convertButton');
    const clearButton = document.getElementById('clearButton');

    function clearAllInputsExcept(elementToExclude) {
        if (elementToExclude !== kilogramsInput) kilogramsInput.value = '';
        if (elementToExclude !== gramsInput) gramsInput.value = '';
        if (elementToExclude !== poundsInput) poundsInput.value = '';
        if (elementToExclude !== milligramsInput) milligramsInput.value = '';
    }

    kilogramsInput.addEventListener('input', function() {
        clearAllInputsExcept(kilogramsInput);
        const kg = parseFloat(kilogramsInput.value);
        if (!isNaN(kg)) {
            gramsInput.value = (kg * 1000).toFixed(2);
            poundsInput.value = (kg * 2.20462).toFixed(2);
            milligramsInput.value = (kg * 1000000).toFixed(2);
        }
    });

    gramsInput.addEventListener('input', function() {
        clearAllInputsExcept(gramsInput);
        const g = parseFloat(gramsInput.value);
        if (!isNaN(g)) {
            kilogramsInput.value = (g / 1000).toFixed(2);
            poundsInput.value = (g * 0.00220462).toFixed(2);
            milligramsInput.value = (g * 1000).toFixed(2);
        }
    });

    poundsInput.addEventListener('input', function() {
        clearAllInputsExcept(poundsInput);
        const lbs = parseFloat(poundsInput.value);
        if (!isNaN(lbs)) {
            kilogramsInput.value = (lbs / 2.20462).toFixed(2);
            gramsInput.value = (lbs / 0.00220462).toFixed(2);
            milligramsInput.value = (lbs * 453592.37).toFixed(2);
        }
    });

    milligramsInput.addEventListener('input', function() {
        clearAllInputsExcept(milligramsInput);
        const mg = parseFloat(milligramsInput.value);
        if (!isNaN(mg)) {
            kilogramsInput.value = (mg / 1000000).toFixed(2);
            gramsInput.value = (mg / 1000).toFixed(2);
            poundsInput.value = (mg / 453592.37).toFixed(2);
        }
    });

    convertButton.addEventListener('click', function() {
        // The input event listeners already handle the conversion in real-time.
        // This button could be repurposed for something else or removed.
        alert("Conversions are now real-time as you type!");
    });

    clearButton.addEventListener('click', function() {
        kilogramsInput.value = '';
        gramsInput.value = '';
        poundsInput.value = '';
        milligramsInput.value = '';
    });
});