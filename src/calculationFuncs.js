const calculateUnroundedMonthlyPayment = (principal, months, interestRate) => {
  principal = parseFloat(principal);
  months = parseFloat(months);
  // Convert interest from a percentage to a decimal
  interestRate = parseFloat(interestRate) / 100 / 12;

  const powers = Math.pow(1 + interestRate, months);

  const unroundedMonthlyPayment =
    (principal * powers * interestRate) / (powers - 1);

  return unroundedMonthlyPayment;
};

export const calculateMonthlyPayment = (principal, months, interestRate) => {
  const unroundedMonthlyPayment = calculateUnroundedMonthlyPayment(
    principal,
    months,
    interestRate
  );

  const monthlyPayment = unroundedMonthlyPayment.toFixed(2);

  console.log('monthly payment???', monthlyPayment);

  return monthlyPayment;
};

export const calculateTotalInterestPaid = (principal, months, interestRate) => {
  const unroundedMonthlyPayment = calculateUnroundedMonthlyPayment(
    principal,
    months,
    interestRate
  );

  const totalInterestPaid = (
    unroundedMonthlyPayment * months -
    principal
  ).toFixed(2);
  console.log('totalInterestPaid??', totalInterestPaid);
  return totalInterestPaid;
};
