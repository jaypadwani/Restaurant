import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Restaurant} from './src/Restaurant';
import {SecondTab} from './src/SecondTab';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        activeColor="#20b2aa"
        barStyle={{backgroundColor: 'white'}}>
        <Tab.Screen
          name="Restaurant"
          component={Restaurant}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={20} />
            ),
          }}
      
        />
        <Tab.Screen name="SecondTab" component={SecondTab} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
