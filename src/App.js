import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import NewsContainer from './Components/NewsContainer/NewsContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <NewsContainer />
    </div>
  );
}

export default App;
