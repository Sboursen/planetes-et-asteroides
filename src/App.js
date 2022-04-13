import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './routes/home/Home';
import Details from './routes/details/Details';
import About from './routes/about/About';
import NoMatch from './routes/no-match/noMatch';
import PlanetDetails from './routes/planet-details/planetDetails';

function App() {
  return (
    <div className="flex flex-col gap-2 w-full h-full font-body bg-main text-white text-xl">
      <Header />
      <main className="bg-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="details" element={<Details />}>
            <Route index element={<NoMatch />} />
            <Route path=":planetId" element={<PlanetDetails />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
