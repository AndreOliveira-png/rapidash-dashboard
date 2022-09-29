import React from 'react';
import Header from './components/Header';
import { Flex } from '@chakra-ui/react'
import Body from './components/Body';

function App() {
  return (
    <Flex direction='column'>
      <Header />
      <Body />
    </Flex>
  );
}

export default App;
