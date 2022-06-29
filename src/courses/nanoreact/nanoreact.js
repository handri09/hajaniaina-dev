import React from 'react';
import { NavClassRoom } from '../../components';
import { 
  BoxMD, Header, Introduction, 
  ReactFundamentals, ReactRedux, ReactNative
  } from './components';

function NanoReact() {
  return (
    <>
      <NavClassRoom />
      <div className={`pt-14 w-full max-w-screen-md mx-auto flex flex-col gap-3 px-3`}>
        <Header />
        <div className={`w-full flex flex-col gap-3`}>
          <Introduction />
          <ReactFundamentals />
        </div>
        <ReactRedux />
        <ReactNative />
      </div>
    </>
  );
}

export default NanoReact;
