import './App.css';
import { Header } from './components/Header';
import { Balence } from  './components/Balence';
import { IncomeExpences } from './components/IncomeExpences';
import React, { TransactionList } from './components/TransactionList'
import { AddTransaction } from './components/AddTransaction';

function App() {
  return (
    <div>
      <Header />
      <div className='container'>
        <Balence />
        <IncomeExpences />
        <TransactionList />
        <AddTransaction />
      </div>
      
    </div>
    
  );
}

export default App;
