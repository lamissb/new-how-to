import React from 'react'
import GetInTouch from '../pages/Home-components/GetInTouch';
import GetStarted from '../pages/Home-components/GetStarted';
import Header from '../pages/Home-components/Header';

export const Home = () => {
  return (
    <div id="home">
    <Header />
    <GetStarted />
    <GetInTouch />
    </div>

  )
}

