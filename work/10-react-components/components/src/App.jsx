import './App.css';
import Header from './Header';
import MainArea from './MainArea';
import Home from './Home';
import Card from './Card';
import DottiePanel from './DottiePanel';
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
        {(page === '#cards') && <Card />}
        {(page === '#panels') && <DottiePanel />}
      </MainArea>
      <Footer />
    </div>
  );
}

export default App;
