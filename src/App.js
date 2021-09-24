import "./App.scss";
import React, { useState } from "react";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Homepage from "./pages/Homepage/Homepage";
import StartAtTop from "./components/StartAtTop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [isNotAtTop, setIsNotAtTop] = useState(false);

  return (
    <Router>
      <StartAtTop>
        <Switch>
          <Route path="/" exact>
            <Homepage isNotAtTop={isNotAtTop} setIsNotAtTop={setIsNotAtTop} />
          </Route>

          <Route path="/about" exact>
            <About isNotAtTop={isNotAtTop} setIsNotAtTop={setIsNotAtTop} />
          </Route>

          <Route path="/contact" exact>
            <Contact isNotAtTop={isNotAtTop} setIsNotAtTop={setIsNotAtTop} />
          </Route>
        </Switch>
      </StartAtTop>
    </Router>
  );
}

export default App;
