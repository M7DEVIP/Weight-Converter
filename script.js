// script.js
document.addEventListener('DOMContentLoaded', function() {
    const kilogramsInput = document.getElementById('kilograms');
    const poundsInput = document.getElementById('pounds');
    const convertButton = document.getElementById('convertButton');
    const clearButton = document.getElementById('clearButton');

    convertButton.addEventListener('click', function() {
        const kilograms = parseFloat(kilogramsInput.value);
        if (!isNaN(kilograms)) {
            const pounds = kilograms * 2.20462;
            poundsInput.value = pounds.toFixed(2);
        } else {
            poundsInput.value = '';
        }
    });

    poundsInput.addEventListener('input', function() {
        const pounds = parseFloat(poundsInput.value);
        if (!isNaN(pounds)) {
            const kilograms = pounds / 2.20462;
            kilogramsInput.value = kilograms.toFixed(2);
        } else {
            kilogramsInput.value = '';
        }
    });

    kilogramsInput.addEventListener('input', function() {
        poundsInput.value = ''; // Clear the other input when one is being typed into
    });

    poundsInput.addEventListener('input', function() {
        kilogramsInput.value = ''; // Clear the other input when one is being typed into
    });

    clearButton.addEventListener('click', function() {
        kilogramsInput.value = '';
        poundsInput.value = '';
    });
});