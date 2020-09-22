import { auth } from "./firebase";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Chat from "./Chat";
import Header from "./Header";
import Login from "./Login";
import { actionTypes } from "./reducer";
import Sidebar from "./Sidebar";
import { useStateValue } from "./StateProvider";

function App() {
  useEffect(() => {
    //will only run once the app component loads...
    auth.onAuthStateChanged((authUser) => {
      // console.log("The user is >>>>", authUser);

      if (authUser) {
        //the user just logged in the user was logged in
        dispatch({
          type: actionTypes.SET_USER,
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: actionTypes.SET_USER,
          user: null,
        });
      }
    });
    // return () => {
    //   cleanup
    // }
  }, []);
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className="app__body">
              <Sidebar />

              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>

                <Route path="/">
                  <h1>Welcome</h1>
                </Route>

                <h1>Hello</h1>
              </Switch>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
