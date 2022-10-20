import React from 'react';
import Header from './components/screens/Header';
import { Flex } from '@chakra-ui/react'
import Body from './components/screens/Body';

function App() {

    return (
      <Flex direction='column'>
        <Header />
        <Body />
      </Flex>
    );
  }

  export default App;
