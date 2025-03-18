// script.js
document.addEventListener('DOMContentLoaded', function() {
    const kilogramsInput = document.getElementById('kilograms');
    const poundsInput = document.getElementById('pounds');
    const convertButton = document.getElementById('convertButton');

    convertButton.addEventListener('click', function() {
        const kilograms = parseFloat(kilogramsInput.value);
        if (!isNaN(kilograms)) {
            const pounds = kilograms * 2.20462;
            poundsInput.value = pounds.toFixed(2);
        } else {
            poundsInput.value = '';
        }
    });
});