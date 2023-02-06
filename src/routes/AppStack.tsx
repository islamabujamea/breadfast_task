import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {IRootStack} from '../screens/types/navgations.types';
import Splash from '../screens/splash/Splash';
import Home from '../screens/home/Home';
import Details from '../screens/details/Details';

const AppStack: FC = () => {
  const AppNavigationStack = createNativeStackNavigator<IRootStack>();

  return (
    <AppNavigationStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Splash">
      <AppNavigationStack.Screen name="Splash" component={Splash} />
      <AppNavigationStack.Screen name="Home" component={Home} />
      <AppNavigationStack.Screen name="Details" component={Details} />
    </AppNavigationStack.Navigator>
  );
};

export default AppStack;
