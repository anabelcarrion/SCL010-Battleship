import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';

//importando material-iu
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';

//importando los componentes
import Register from './Components/Register';
import GameRoom from './Components/GameRoom';

function LinkTab(props) {
  return ( 
    <Tab component={Link} {...props}/>
  );
}
 
const App=()=> {
  return (
    <div>
    <Grid container spacing={12}>
     <Router>
      <div>
      <Grid item xs={12}>
      <AppBar position="static">
        <Tabs>
          <LinkTab label="registro" to="/registro"/>
          <LinkTab label="Sala de Juego" to="/sala-de-juego"/>
        </Tabs>
      </AppBar>
      </Grid>
        <Route path="/registro" component={Register}/>
        <Route path="/sala-de-juego" component={GameRoom}/>
      </div>
    </Router>
      </Grid>
      </div>
  );
}
export default App;