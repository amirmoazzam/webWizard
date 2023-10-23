import './App.css';
import Homepage from './components/homepage';
import Header from './header';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Header />
      </div>
      <main id='main'>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
