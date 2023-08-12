import React from "react";
import { GlobalStyled } from './Styles/global';

import Header from './Components/Header'
import Carousel from './Components/Carousel';
import Card from './Components/Card'

function App() {
  return (
    <>
      <Header />
      <Carousel/>
      <Card />
      <GlobalStyled />
    </>
  );
}

export default App;
