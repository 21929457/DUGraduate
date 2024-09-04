import './css/initialized.scss'
import './css/App.css';
import Header from "./components/Header"
import Main from "./components/./main/Main"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;