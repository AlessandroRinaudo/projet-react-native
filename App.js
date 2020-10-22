import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Products from './screens/Products';
import Bateaux from './screens/Bateaux';
import Restaurants from './screens/Restaurants';
import ProductList from './screens/ProductList';
import Cart from './screens/Cart';
import Contact from './screens/Contact'
import Recettes from './screens/Recettes'
import RestaurantsAffichage from './screens/Restaurants-affichage'
import RecettesAffichage from './screens/Recettes-affichage'
import BatauxAffichage from './screens/Bateaux-affichage'
import { NavigationContainer } from '@react-navigation/native';
import {Provider} from 'react-redux'
import store from './store/configureStore'
const Stack = createStackNavigator();



export default function App() {
  return (
    <Provider store ={store}>
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
                <Stack.Screen name="Contact" component={Contact}/>
                <Stack.Screen name="Recettes" component={Recettes}/>
                <Stack.Screen name="Restaurants-affichage" component={RestaurantsAffichage}/>
                <Stack.Screen name="Recettes-affichage" component={RecettesAffichage}/>
                <Stack.Screen name="Bateaux-affichage" component={BatauxAffichage}/>
  
              </Stack.Navigator>
          </NavigationContainer>
        </Provider>
  );
}