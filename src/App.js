import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.scss';
import "react-multilevel-sidebar/src/Sidebar.css";
import { NavLink } from 'react-router-dom';
import { Header } from './components/Header'; 
import {SideBar} from './components/SideBar';
import { TheComponent } from './components/TheComponent';


function App() {
  return (
    <div className="App">
      <div>
      <Header/>
      <TheComponent/>
      </div>
      <SideBar/>
    </div>
  );
  
} 

export default App;
