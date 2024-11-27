import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import ThemeModal from './components/ThemeModal/ThemeModal';

function App() {
  const [page, setPage] = useState('#home');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tabs = [
    { hash: '#home', label: 'Home' },
    { hash: '#about', label: 'About' },
    { hash: '#projects', label: 'Projects' },
    { hash: '#contact', label: 'Contact' },
    { hash: '#setting', label: 'Setting' },
  ];

  function handleTabClick(tab) {
    if (tab.hash === '#setting') {
      setIsModalOpen(true);
    } else {
      setPage(tab.hash);
    }
  }

  function saveTheme() {
    
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      <Header>
        <NavBar tabs={tabs} onTabClick={handleTabClick} currentPage={page}></NavBar>
      </Header>
      <MainContent>
        {(page === '#home') && <Home />}
        {(page === '#about') && <h2>About</h2>}
        {(page === '#projects') && <h2>Projects</h2>}
        {(page === '#contact') && <Contact />}
        { isModalOpen && (
        <ThemeModal onSave={saveTheme} onClose={closeModal}>
          <h1>Hello</h1>
        </ThemeModal>
        )
        }
      </MainContent>
      <Footer />
    </>
  )
}

export default App
