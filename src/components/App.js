import Navbar from './Navbar';
import Header from './Header';
import Calculator from './Calculator';
import Description from './Description';
import '../stylesheets/App.css';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Calculator />
      <Description />
    </div>
  );
};

export default App;
