// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import TaskDetails from './src/screens/TaskDetails';
import HistoryScreen from './src/screens/HistoryScreen';
import AddTaskScreen from './src/screens/AddTaskScreen';
import { Ionicons } from '@expo/vector-icons';
import { TaskProvider } from './src/contexts/TaskContext';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tarefas" component={HomeScreen} />
      <Stack.Screen name="Detalhes" component={TaskDetails} />
      <Stack.Screen name="Adicionar" component={AddTaskScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <TaskProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = 'list';
              } else if (route.name === 'Histórico') {
                iconName = 'time';
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="Home" component={HomeStack} options={{ headerShown: false }} />
          <Tab.Screen name="Histórico" component={HistoryScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </TaskProvider>
  );
}
