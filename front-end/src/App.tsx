import React, {useState, useEffect} from 'react';
import Navigation from "./components/Navigation";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import SignupFormPage from "./components/SignupFormPage";
import Home from './components/Home'
import { useAppDispatch, RootState } from './store/index'
import { getUserWorlds } from './store/worlds'
import { useSelector } from 'react-redux'
import WorldPage from './components/WorldPage'

function App() {
  const dispatch = useAppDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const currentUserId = useSelector((state: RootState)  => state.session?.user?.id)

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getUserWorlds(currentUserId))
  }, [dispatch, currentUserId])

  const userWorlds = useSelector((state: RootState )=> state.worlds.userWorlds)

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
          <Route exact path='/'>
            <Home userWorlds={userWorlds} />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
