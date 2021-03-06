import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './routes/home/Home';
import Details from './routes/details/Details';
import About from './routes/about/About';
import NoMatch from './routes/no-match/noMatch';
import PlanetDetails from './routes/planet-details/planetDetails';
import SearchResults from './routes/search-results/searchResults';

function App() {
  return (
    <div className="flex flex-col gap-2 w-full min-h-screen justify-between font-body bg-main text-white text-xl">
      <div className="flex flex-col gap-3">
        <Header />
        <main className="bg-main">
          <Routes>
            <Route index element={<Home />} />
            <Route path="search" element={<SearchResults />} />
            <Route path="details" element={<Details />}>
              <Route index element={<NoMatch />} />
              <Route path=":bodyId" element={<PlanetDetails />} />
            </Route>
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
