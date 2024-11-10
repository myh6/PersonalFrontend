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

  function navToHash(eventOrHash) {
    eventOrHash?.preventDefault();
    const hash = eventOrHash?.target?.hash || eventOrHash;
    setPage(hash)
  }

  return (
    <div>
      <Header>
        <NavBar navToHash={navToHash} currentPage={page} />
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
