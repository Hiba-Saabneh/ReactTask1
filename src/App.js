import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Portfolio from './components/Portfolio/Portfolio';
import { Route, Routes } from 'react-router-dom';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
export default class App extends Component {
  render() {
    return (
<>

<Navbar />
<Header />
<Routes>
  <Route path='/portfolio' element={<Portfolio />}></Route>
  <Route path='/about' element={<About />}></Route>
  <Route path='/contact' element={<Contact />}></Route>
</Routes>

<Footer />
</>
    );
  }
}
