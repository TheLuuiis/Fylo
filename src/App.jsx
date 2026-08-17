import './css/globals.css';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Access from './components/Access';
import Productive from './components/Productive';

function App() {

  return (
    <div className="container__app">
      <Header />
      <Welcome/>
      <div className="container__all">
        <Access />
        <Productive />
      </div>
    </div>
  )
}

export default App;