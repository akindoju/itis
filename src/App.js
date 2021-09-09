import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import "./App.scss";
import About from "./pages/About/About";

function App() {
  const [isNotAtTop, setIsNotAtTop] = useState(false);

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Homepage isNotAtTop={isNotAtTop} setIsNotAtTop={setIsNotAtTop} />
        </Route>

        <Route path="/about" exact>
          <About isNotAtTop={isNotAtTop} setIsNotAtTop={setIsNotAtTop} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
