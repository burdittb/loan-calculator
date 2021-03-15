import CalculatorForm from './CalculatorForm';
import CalculatorResults from './CalculatorResults';
import '../stylesheets/Calculator.css';

const Calculator = () => {
  return (
    <div className="calculator">
      <div className="calculator-left">
        <CalculatorForm />
      </div>
      <div className="calculator-right">
        <CalculatorResults />
      </div>
    </div>
  );
};

export default Calculator;
