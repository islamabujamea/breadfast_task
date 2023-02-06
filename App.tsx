import React, {FC} from 'react';
import {Provider as PaperProvider} from 'react-native-paper';

import AppStack from './src/routes/AppStack';

const App: FC = () => {
  return (
    <PaperProvider>
      <AppStack />
    </PaperProvider>
  );
};

export default App;
