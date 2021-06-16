import React, {useState, useEffect} from 'react';
import Navigation from "./components/Navigation";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import SignupFormPage from "./components/SignupFormPage";
import Home from './components/Home'
import { useAppDispatch } from './store/index'
import WorldPage from './components/WorldPage'
import CreateNewWorld from './components/CreateNewWorld'

function App() {
  const dispatch = useAppDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path='/world/:worldId'>
            <WorldPage />
          </Route>
          <Route exact path='/create-new-world'>
            <CreateNewWorld />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
