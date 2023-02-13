/* 
1. add event handler with withdraw button
2. get the withdraw amount from the withdraw input field
2.5. also make sure to convert the input into a number by using parseFloat
3. Get previous withdraw total
4. Calculate total withdraw amount
4-5. set total withdraw amount
5. get the previous balance total
6. calculate balance total
6-5. set the new balance total
7. Clear the input field
*/

//step-1
document.getElementById('button-withdraw').addEventListener('click', function () {
    //step-2:
    const withdrawField = document.getElementById('withdraw-field');
    //get the input value as string
    const newWithdrawAmountString = withdrawField.value;
    //convert the string to number. Else it won't work.
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    //step-7: Clear the withdraw field
    withdrawField.value = '';

    if (isNaN(newWithdrawAmount) || newWithdrawAmount < 0) {
        alert('Please Provide a Valid Number')
        return;
    }

    //step-3: get the current withdraw total amount
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    //step-5: get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    if (newWithdrawAmount > previousBalanceTotal) {
        alert('Tor Bank E Eto Taka Nai! Shala Gorib!');
        return;
    }

    //step - 4: Add numbers to save the total withdraw
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    //set the withdraw total
    withdrawTotalElement.innerText = currentWithdrawTotal;

    //step-6: calculate current total balance
    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    // set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;
})