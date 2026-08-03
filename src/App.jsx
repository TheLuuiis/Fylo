import './css/globals.css';
import Header from './components/Header';
import Welcome from './components/Welcome';

function App() {

  return (
    <div className="container__app">
      <Header />
      <Welcome/>
    </div>
  )
}

export default App;