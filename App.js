import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Ionicons} from '@expo/vector-icons'

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import About from './screens/About';
import Contact from './screens/ContactUs'
import LoginScreen from './screens/LoginScreen';
import SignUp from './screens/SignUpScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator(){
  return  <Drawer.Navigator screenOptions={{
    headerStyle: { backgroundColor: '#351401' },
    headerTintColor: 'white',
    sceneContainerStyle: { backgroundColor: '#3f2f25' },
  }}>
    <Drawer.Screen name='Categories' component={CategoriesScreen} options={{drawerIcon: ({color, size})=>
    <Ionicons name='list' color={color} size={size}/>
  }}/>
    <Drawer.Screen name='Favorites' component={FavoritesScreen} options={{drawerIcon: ({color, size})=>
    <Ionicons name='star' color={color} size={size}/>
  }}/>
  <Drawer.Screen name='About' component={About}/>
  <Drawer.Screen name='ContactUs' component={Contact}/>
  <Drawer.Screen name='LogOut' component={LoginScreen}/>
  </Drawer.Navigator>
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#3f2f25' },
          }}
        >
          
          
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{
              headerShown:false
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
          />
          <Stack.Screen 
            name='MealDetail' 
            component={MealDetailScreen} 
            options={{title:'About the Meal'}} 
          />
          <Stack.Screen initialScreen='SignUp'
            name='SignUp'
            component={SignUp}
          />
          

        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  
});