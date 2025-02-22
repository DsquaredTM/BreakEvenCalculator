function calculateBreakEven() {
    // Get input values
    const fixedCosts = parseFloat(document.getElementById('fixedCosts').value);
    const sellingPrice = parseFloat(document.getElementById('sellingPrice').value);
    const variableCost = parseFloat(document.getElementById('variableCost').value);

    // Check if inputs are valid
    if (isNaN(fixedCosts) || isNaN(sellingPrice) || isNaN(variableCost)) {
        alert("Please enter valid numbers in all fields.");
        return;
    }

    // Calculate break-even point
    const breakEvenPoint = fixedCosts / (sellingPrice - variableCost);

    // Display result
    document.getElementById('result').innerText = `Break-Even Point: ${breakEvenPoint.toFixed(2)} units`;
}