/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}
Account.prototype.deposit = function (amount) {
  if (typeof amount === 'number' && amount > 0 && Number.isInteger(amount)) {
    const transaction = new Transaction('deposit', amount);
    this.transactions.push(transaction);
    return true;
  } else {
    return false;
  }
};
Account.prototype.withdraw = function (amount) {
  if (typeof amount === 'number' && amount > 0 && Number.isInteger(amount)) {
    const transaction = new Transaction('withdrawal', amount);
    this.transactions.push(transaction);
    return true;
  } else {
    return false;
  }

};

Account.prototype.getBalance = function () {
  let balance = 0;
  for (const transaction of this.transactions) {
    if (transaction.type === 'deposit') {
      balance += transaction.amount;
    } else {
      balance -= transaction.amount;
    }
  }
  return balance;
};
