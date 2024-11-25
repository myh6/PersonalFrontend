import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';

function App() {
  const [page, setPage] = useState('#home');

  const tabs = [
    { hash: '#home', label: 'Home' },
    { hash: '#about', label: 'About' },
    { hash: '#resume', label: 'Resume' },
  ];

  function handleTabClick(tab) {
    setPage(tab.hash);
  }

  return (
    <>
      <Header>
        <NavBar tabs={tabs} onTabClick={handleTabClick} currentPage={page}></NavBar>
      </Header>
      <MainContent>
        {(page === '#home') && <h2>Home</h2>}
        {(page === '#about') && <h2>About</h2>}
        {(page === '#resume') && <h2>Resume</h2>}
      </MainContent>
    </>
  )
}

export default App
