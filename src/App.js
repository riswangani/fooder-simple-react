import React from 'react';

import Header from './components/layout/Header';
import Meals from './components/Meals/Meals';

function App() {
  return (
    <>
      <Header />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
