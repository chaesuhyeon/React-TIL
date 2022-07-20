import './App.css';
import Subscribers from './components/Subscribers';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      <Provider>
        <Subscribers />
      </Provider>
    </div>
  );
}

export default App;
