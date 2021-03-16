const CalculatorResults = (props) => {
  return (
    <div className="calculator-results">
      <div className="calculator-results-monthly">
        <header>Monthly Payments</header>
        <p>${props.monthlyPayments}</p>
      </div>
      <div className="calculator-results-totals">
        <table>
          <tbody>
            <tr>
              <td>Total Principle Paid</td>
              <td>${props.principal}</td>
            </tr>
            <tr>
              <td>Total Interest Paid</td>
              <td>${props.totalInterestPaid}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="calculator-results-details">
        <button>COMPARE LOAN RATES</button>
        {/* <p>Show amortization schedule</p> */}
      </div>
    </div>
  );
};

export default CalculatorResults;
