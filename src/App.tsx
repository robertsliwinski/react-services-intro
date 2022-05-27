import React from 'react';
import { Provider } from 'react-redux';
import { RecoilRoot } from 'recoil';
import RecoilNexus from 'recoil-nexus';
import './App.css';
import { MainContainer } from './components/MainContaier';
import { storeReduxToolkit } from './redux-toolkit/store';
// import storeRedux from './redux/store/store';

function App() {
  return (
    <RecoilRoot>
      <RecoilNexus />
      {/* <Provider store={storeRedux}> */}
      <Provider store={storeReduxToolkit}>
        <MainContainer />
      </Provider>
      {/* </Provider> */}
    </RecoilRoot>
  );
}

export default App;
