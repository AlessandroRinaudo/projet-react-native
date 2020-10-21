import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Products from './screens/Products';
import Bateaux from './screens/Bateaux';
import Restaurants from './screens/Restaurants';
import ProductList from './screens/ProductList';
import Cart from './screens/Cart';
import { NavigationContainer } from '@react-navigation/native';
import {Provider} from 'react-redux'
import store from './store/configureStore'
const Stack = createStackNavigator();



export default function App() {
  return (
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Products" component={Products}/>
                <Stack.Screen name="Bateaux" component={Bateaux}/>
                <Stack.Screen name="Restaurants" component={Restaurants}/>
                <Stack.Screen name="ProductList" component={ProductList}/>
                <Stack.Screen name="Cart" component={Cart}/>
  
              </Stack.Navigator>
          </NavigationContainer>
  );
}