const CalculatorResults = () => {
  return (
    <div className="calculator-results">
      <div className="calculator-results-monthly">
        <header>Monthly Payments</header>
        <p>$93.22</p>
      </div>
      <div className="calculator-results-totals">
        <table>
          <tbody>
            <tr>
              <td>Total Principle Paid</td>
              <td>$5000</td>
            </tr>
            <tr>
              <td>Total Interest Paid</td>
              <td>$592.91</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="calculator-results-details">
        <button>COMPARE LOAN RATES</button>
        <p>Show amortization schedule</p>
      </div>
    </div>
  );
};

export default CalculatorResults;
