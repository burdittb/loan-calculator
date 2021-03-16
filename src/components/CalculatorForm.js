const CalculatorForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <label>Loan amount</label>
      <input
        type="number"
        name="principal"
        value={props.principal}
        min="1"
        max="99999"
        step=".01"
        onChange={props.handleChange}
      />
      {/* <label>Loan term in years</label>
      <input required type="number" name="loan-term-years"         value={props.months/12} min="1" step="1" />
      <p>Or</p> */}
      <label>Loan term in months</label>
      <input
        type="number"
        required
        name="months"
        value={props.months}
        min="1"
        step="1"
        onChange={props.handleChange}
      />
      <label>Interest rate per year</label>
      <input
        type="number"
        required
        name="interestRate"
        value={props.interestRate}
        min=".01"
        max="30"
        step=".01"
        onChange={props.handleChange}
      />
      <button type="submit">Calculate</button>
    </form>
  );
};

export default CalculatorForm;
