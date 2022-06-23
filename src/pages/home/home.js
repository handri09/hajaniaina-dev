import React from 'react';
import { Editors, Footer } from '../../components';

function Home() {
  return (
    <>
      <div className={`w-full max-w-screen-2xl mx-auto my-5 px-5`}>
        <Editors />
      </div>
      <Footer />
    </>
  )
}

export default Home;