import './App.css';
import { Header } from './components/Header';
import { Balence } from  './components/Balence';
import { IncomeExpences } from './components/IncomeExpences';

function App() {
  return (
    <div>
      <Header />
      <div className='container'>
        <Balence />
        <IncomeExpences />
      </div>
      
    </div>
    
  );
}

export default App;
