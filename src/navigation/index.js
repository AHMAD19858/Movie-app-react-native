import React from 'react';
import Main from '../screens/main';
import AddMovie from '../screens/addMovie';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()



const App = () => {

  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
        <Stack.Screen name="AddMovie" component={AddMovie} options={{
          headerShown: true, headerStyle: {
            backgroundColor: '#22273B'
          }, headerTitleStyle: { color: 'white' }, title: "Add Movie",
          headerTintColor: 'white'
        }} />




      </Stack.Navigator>
    </NavigationContainer>
  )
}




export default App;



