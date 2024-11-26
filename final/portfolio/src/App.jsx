import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';

function App() {
  const [page, setPage] = useState('#home');

  const tabs = [
    { hash: '#home', label: 'Home' },
    { hash: '#about', label: 'About' },
    { hash: '#projects', label: 'Projects' },
    { hash: '#contact', label: 'Contact'},
  ];

  function handleTabClick(tab) {
    setPage(tab.hash);
  }

  return (
    <>
      <Header>
        <NavBar tabs={tabs} onTabClick={handleTabClick}></NavBar>
      </Header>
      <MainContent>
        {(page === '#home') && <Home />}
        {(page === '#about') && <h2>About</h2>}
        {(page === '#projects') && <h2>Projects</h2>}
        {(page === '#contact') && <h2>Contact</h2>}
      </MainContent>
      <Footer/>
    </>
  )
}

export default App
