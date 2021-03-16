import { useEffect, useState } from 'react';
import CalculatorForm from './CalculatorForm';
import CalculatorResults from './CalculatorResults';
import ExtraPayments from './ExtraPayments';
import '../stylesheets/Calculator.css';

import {
  calculateMonthlyPayment,
  calculateTotalInterestPaid,
} from '../calculationFuncs';

const Calculator = () => {
  const [state, setState] = useState({
    principal: 5000,
    months: 60,
    interestRate: 4.5,
    monthlyPayments: 93.22,
    totalInterestPaid: 595.91,
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedMonthly = calculateMonthlyPayment(
      state.principal,
      state.months,
      state.interestRate
    );
    const updatedInterest = calculateTotalInterestPaid(
      state.principal,
      state.months,
      state.interestRate
    );
    setState({
      ...state,
      monthlyPayments: updatedMonthly,
      totalInterestPaid: updatedInterest,
    });
  };

  return (
    <div className="calculator">
      <div className="calculator-container">
        <div className="calculator-left">
          <CalculatorForm
            {...state}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </div>
        <div className="calculator-right">
          <CalculatorResults {...state} />
        </div>
      </div>
      {/* <div>
        <ExtraPayments />
      </div> */}
    </div>
  );
};

export default Calculator;
