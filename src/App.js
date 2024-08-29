import logo from './logo.svg';
import './App.css';
import Sidebar from './component/sidebar/sidebar';
import Header from './component/header/header';
import Menu from './component/menu/menu';

function App() {
  return (
    <div className="App">
    <Sidebar />
    <div className="main-content">
      <Header />
      <Menu />
    </div>
    </div>
  );
}

export default App;
