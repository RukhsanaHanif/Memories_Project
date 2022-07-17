import React from "react";
import { Container } from "@material-ui/core";
import Navbar from "./components/Navbar/Navbar";

import { BrowserRouter, Routes, Switch, Outlet, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";

const AppContainer = () => {
  return (
    <Container maxidth="lg">
      <Navbar />
      <Outlet />
    </Container>
  );
};

const App = () => {
  return (
    //     <BrowserRouter>
    //       <Container maxidth='lg'>
    //    <Navbar/>
    //    <Switch>
    //     <Route path='/' exact component={Home}/>
    //     <Route path='/auth' exact component={Auth}/>
    //    </Switch>
    //    </Container>
    //     </BrowserRouter>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppContainer />}>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
