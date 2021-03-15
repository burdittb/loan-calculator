const CalculatorForm = () => {
  return (
    <form>
      <label>Loan amount</label>
      <input
        type="number"
        name="loan-amount"
        className="loan-amount"
        placeholder="$"
        min="1"
        max="99999"
        step=".01"
      />
      <label>Loan term in years</label>
      <input required type="number" name="loan-term-years" min="1" step="1" />
      <p>Or</p>
      <label>Loan term in months</label>
      <input type="number" required name="loan-term-months" min="1" step="1" />
      <label>Interest rate per year</label>
      <input
        type="number"
        required
        name="yearly-interest-rate"
        placeholder="%"
        min=".01"
        max="30"
        step=".01"
      />
      <button type="submit">Calculate</button>
    </form>
  );
};

export default CalculatorForm;
