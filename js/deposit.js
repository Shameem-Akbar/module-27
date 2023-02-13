//step - 1: add event listener with deposit button

document.getElementById('button-deposit').addEventListener('click', function(){
    // step - 2: get the deposit amount from deposit input field
    // For input field/textarea use .value to get the value
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    //step -3: get the current deposit total amount
    //For non-input(Excluding input/textarea)
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    //step - 4: Add numbers to save the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount; 
    //set the deposit total
    depositTotalElement.innerText = currentDepositTotal;

   //step-5: get balance current total
   const balanceTotalElement = document.getElementById('balance-total');
   const previousBalanceTotalString = balanceTotalElement.innerText;
   const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    //step-6: calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    // set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;

    //Step-7: Clear thee deposit field
    depositField.value ='';
})