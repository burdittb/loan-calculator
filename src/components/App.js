import Navbar from './Navbar';
import Header from './Header';
import Calculator from './Calculator';
import '../stylesheets/App.css';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Calculator />
    </div>
  );
};

export default App;
