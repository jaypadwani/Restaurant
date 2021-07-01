import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

import {Restaurant} from './src/Restaurant';


const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Restaurant" component={Restaurant} options={{ title: 'Restaurant' }}/>
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;