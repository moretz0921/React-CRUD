import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from './pages/Main';
import AddPage from './pages/Add';
import EditPage from './pages/Edit';
import DetalPage from './pages/Detail';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/add" element={<AddPage />} />
          <Route path="/edit/:id" element={<EditPage />} />
          <Route path="/detail/:id" element={<DetalPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
