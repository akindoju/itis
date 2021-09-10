import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import About from "./pages/About/About";
import Contact from "./components/Contact/Contact";
import "./App.scss";

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

        <Route path="/contact" exact>
          <Contact isNotAtTop={isNotAtTop} setIsNotAtTop={setIsNotAtTop} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
