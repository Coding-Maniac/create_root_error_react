import { CircularProgress, Flex, Text } from '@chakra-ui/react';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Flex
        height="100vh"
        alignItems="center"
        justifyContent="center"
        flexFlow="column"
      >
        <Text fontSize={50}>createRoot Type error replica</Text>
        <CircularProgress
          textAlign="center"
          mt={10}
          isIndeterminate
          thickness="5px"
        />
      </Flex>
    </div>
  );
}

export default App;
