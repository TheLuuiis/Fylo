import './css/globals.css';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Access from './components/Access';
import Productive from './components/Productive';
import Testimony from './components/Testimony';
import Today from './components/Today';
import Footer from './components/Footer';

function App() {

  return (
    <div className="container__app">
      <Header />
      <Welcome/>
      <div className="container__all">
        <Access />
        <Productive />
        <Testimony />
        <Today />
      </div>
      <Footer />
    </div>
  )
}

export default App;