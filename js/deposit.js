//step - 1: add event listener with deposit button

document.getElementById('button-deposit').addEventListener('click', function(){
    // step - 2: get the deposit amount from deposit input field
    // For input field/textarea use .value to get the value
    const depositField = document.getElementById('deposit-field');
    const depositAmount = depositField.value;

    //step -3: get the current deposit total amount
    //For non-input(Excluding input/textarea)
    const depositTotalElement = document.getElementById('deposit-total');
    const depositTotal = depositTotalElement.innerText;
    depositTotalElement.innerText = depositAmount;

})