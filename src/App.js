import logo from './logo.svg';
import './App.scss';
import React from 'react';
import Background from './components/Background';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';

function App() {
  return (
    <main>
      <Background />
      <Header />
      <Section />
      <Footer />
    </main>
  );
}

export default App;
