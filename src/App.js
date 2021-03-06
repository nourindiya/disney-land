import './App.css';
import Home from './components/Home/Home';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Notfound from './components/Notfound/Notfound';
import Login from './components/LogIn/Login';
import Register from './components/Register/Register';
import MyOrder from './components/MyOrder/MyOrder';
import Add from './components/Add/Add';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Booking from './components/Booking/Booking';
import DashBoard from './components/DashBoard/DashBoard';
import Allorders from './components/Allorders/Allorders';

function App() {
  return (
    <div className="App">
      <AuthProvider>

        <Router>
          <Header></Header>
          <Switch>

            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>


            <PrivateRoute path="/myOrder">
              <MyOrder></MyOrder>
            </PrivateRoute>

            <PrivateRoute path="/allOrders">
              <Allorders></Allorders>
            </PrivateRoute>

            <PrivateRoute path="/dashBoard">
              <DashBoard></DashBoard>
            </PrivateRoute>


            <PrivateRoute path="/booking/:id">
              <Booking></Booking>
            </PrivateRoute>

            <PrivateRoute path="/add">
              <Add></Add>
            </PrivateRoute>


            <Route path="/login">
              <Login></Login>
            </Route>


            <Route path="/register">
              <Register></Register>
            </Route>


            <Route path="*">
              <Notfound></Notfound>
            </Route>

          </Switch>

          <div className="footer">
            <Footer></Footer>
          </div>

        </Router>

      </AuthProvider>
    </div>
  );
}

export default App;
