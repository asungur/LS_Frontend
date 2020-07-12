let invoices = {
  unpaid: [],
  paid: [],
  add: function(name, amount) {
    this.unpaid.push({
       name,
       amount,
      });
  },
  totalDue: function() {
    let total = 0;
  
    for (let i = 0; i < this.unpaid.length; i += 1) {
      total += this.unpaid[i].amount;
    }
  
    return total;
  },
  payInvoice: function(name) {
    let unpaid = [];
    for (let i = 0; i < this.unpaid.length; i += 1) {
      if (name === this.unpaid[i].name) {
        this.paid.push(this.unpaid[i]);
      } else {
        unpaid.push(this.unpaid[i]);
      }
    }

    this.unpaid = unpaid;
  },
  totalPaid: function() {
    let total = 0;
  
    for (let i = 0; i < this.paid.length; i += 1) {
      total += this.paid[i].amount;
    }
  
    return total;
  },
};

invoices.add('Due North Development', 250);
invoices.add('Moonbeam Interactive', 187.50);
invoices.add('Slough Digital', 300);
// console.log(invoices.totalDue());
invoices.payInvoice('Due North Development');
invoices.payInvoice('Slough Digital');
console.log(invoices.totalPaid());
console.log(invoices.totalDue());