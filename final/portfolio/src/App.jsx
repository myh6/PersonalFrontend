import { useState } from 'react';
import { useTheme } from './components/ThemeContext/ThemeContext';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import ThemeModal from './components/ThemeModal/ThemeModal';
import ThemeForm from './components/ThemeForm/ThemeForm';

function App() {
  const [page, setPage] = useState('#home');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { theme, setTheme } = useTheme();

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

  function saveTheme(newTheme) {
    setTheme(newTheme);
    closeModal();
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <div className={`app ${theme}`}>
      <Header>
        <NavBar tabs={tabs} onTabClick={handleTabClick} currentPage={page}></NavBar>
      </Header>
      <MainContent>
        {(page === '#home') && <Home />}
        {(page === '#about') && <h2>About</h2>}
        {(page === '#projects') && <h2>Projects</h2>}
        {(page === '#contact') && <Contact />}
        { isModalOpen && (
        <ThemeModal onClose={closeModal}>
          <ThemeForm initialTheme={theme} onSave={saveTheme} onCancel={closeModal}/>
        </ThemeModal>
        )
        }
      </MainContent>
      <Footer />
    </div>
  )
}

export default App
