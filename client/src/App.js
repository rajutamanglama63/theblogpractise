import {useState} from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Brand from './components/brand/Brand';
import Backdrop from './components/backdrop/Backdrop';
import SideDrawer from './components/sidedrawer/SideDrawer';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Home from './pages/homePage/Home';
import Literature from './pages/literature/Literature';
import Education from './pages/education/Education';
import Arts from './pages/arts/Arts';
import Tourism from './pages/tourism/Tourism';
import Politics from './pages/politics/Politics';
import Technology from './pages/technology/Technology';
import Economics from './pages/economics/Economics';
import Register from './pages/authPage/register/Register';
import Login from './pages/authPage/login/Login';
import Admin from './pages/admin/Admin';
import Detail from './pages/detail/Detail';
import Form from './pages/form/Form';
import SingleArts from './pages/arts/SingleArts';
import SingleEconomics from './pages/economics/SingleEconomics';

function App() {
  const [sideToggle, setSideToggle] = useState(false);
  return (
    <div>
      <Header click={() => setSideToggle(true)}/>
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Brand />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/literature" component={Literature} />
        <Route exact path="/education" component={Education} />
        <Route exact path="/arts" component={Arts} />
        <Route exact path="/tourism" component={Tourism} />
        <Route exact path="/politics" component={Politics} />
        <Route exact path="/technology" component={Technology} />
        <Route exact path="/economics" component={Economics} />
        <Route exact path="/signup" component={Register} />
        <Route exact path="/signin" component={Login} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/detail" component={Detail} />
        <Route exact path="/form" component={Form} />
        <Route exact path="/singleart" component={SingleArts} />
        <Route exact path="/singleeco" component={SingleEconomics} />
      </Switch>
    </div>
  );
}

export default App;
