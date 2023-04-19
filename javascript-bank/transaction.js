/* exported Transaction */
function Transaction(type, amount) {
  this.type = type;
  this.amount = amount;
}

Transaction.prototype.getWithdrawal = function () {
  // const depositTransaction = new Transaction('deposit', 100);
  // const withdrawalTransaction = new Transaction('withdrawal', 50);
};
