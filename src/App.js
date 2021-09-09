import './App.css';
import Header from "./components/layout/Header"
import Router from "./routes/app-router"
function App() {
  return (
    <div className="App">
      <Header />
      <Router />
    </div>
  );
}

export default App;
