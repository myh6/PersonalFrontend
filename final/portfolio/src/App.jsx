import { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import Header from './components/Header/Header';

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
    </>
  )
}

export default App
