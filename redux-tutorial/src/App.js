import './App.css';
import Subscribers from './components/Subscribers';
import { Provider } from 'react-redux';
import store from './redux/store';
import Display from './components/Display';
import Views from './components/Views';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Subscribers /> 
        <Views/>
        <Display/>
      </div>
    </Provider> 
  );
}

export default App;

// redux를 사용하기 위해서 <Provider>로 감싸야함
// Provider는 store를 prop으로 넘겨받음
