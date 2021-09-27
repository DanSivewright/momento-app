import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import * as React from 'react';
import Onboarding from './src/Auth/Onboarding';

const fonts = {
  "SFProText-Bold": require("./assets/fonts/SF-Pro-Text-Bold.otf"),
  "SFProText-Semibold": require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
  "SFProText-Regular": require("./assets/fonts/SF-Pro-Text-Regular.otf"),
};


const AuthStack = createStackNavigator()
const AuthNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen  options={{ headerShown: false }}  name='Onboarding' component={Onboarding} />
    </AuthStack.Navigator>
  )
}

export default function App() {
  let [fontsLoaded] = useFonts(fonts)

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer>
    )
  }
}