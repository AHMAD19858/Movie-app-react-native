import React from 'react';
import { MyContextProvider } from './src/context/myContext';
import AppNavigator from './src/navigation/index';

const App = () => {

  return (
    <MyContextProvider >
      <AppNavigator />
    </MyContextProvider>


  )
}

export default App


