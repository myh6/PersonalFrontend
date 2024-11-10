import Header from './Header';
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
      <Header />
      <NavBar navToHash={navToHash} />
      {(page === '#home') && <Home />}
      {(page === '#secondPage') && <SecondPage />}
      {(page === '#thirdPage') && <ThirdPage />}
      <Footer />
    </div>
  );
}

export default App;
