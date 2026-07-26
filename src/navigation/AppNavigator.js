import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';

import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import MatkulDetailScreen from '../screens/MatkulDetailScreen';
import ProgresScreen from '../screens/ProgresScreen';
import ProfileScreen from '../screens/ProfileScreen';
import colors from '../constants/colors';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: () => {
          let icon = '📖';
          if (route.name === 'Beranda') icon = '📖';
          if (route.name === 'Progres') icon = '📈';
          if (route.name === 'Profil') icon = '👤';
          return <Text style={{ fontSize: 18 }}>{icon}</Text>;
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.subtext,
      })}
    >
      <Tab.Screen name="Beranda" component={HomeScreen} options={{ title: 'Mata Kuliah', headerShown: true }} />
      <Tab.Screen name="Progres" component={ProgresScreen} options={{ title: 'Upload Tugas', headerShown: true }} />
      <Tab.Screen name="Profil" component={ProfileScreen} options={{ title: 'Profil Mahasiswa', headerShown: true }} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="MainTab" component={MainTabNavigator} />
      <Stack.Screen name="MatkulDetail" component={MatkulDetailScreen} options={{ title: 'Detail Mata Kuliah', headerShown: true }} />
    </Stack.Navigator>
  );
}