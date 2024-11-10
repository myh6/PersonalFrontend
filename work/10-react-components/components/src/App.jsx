import './App.css';
import Header from './Header';
import MainArea from './MainArea';
import Home from './Home';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import Footer from './Footer';
import NavBar from './NavBar';
import { useState } from 'react';

function App() {

  const [page, setPage] = useState('#home');

  function navTo(event) {
    setPage(event)
  }

  return (
    <div>
      <Header>
        <NavBar navTo={navTo} currentPage={page} />
      </Header>
      <MainArea>
        {(page === '#home') && <Home />}
        {(page === '#secondPage') && <SecondPage />}
        {(page === '#thirdPage') && <ThirdPage />}
      </MainArea>
      <Footer />
    </div>
  );
}

export default App;
