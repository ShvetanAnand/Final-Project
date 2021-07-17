import * as React from 'react';
import { Button, Text, View,StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Todo from './src/Todo';

function MyWorkScreen({navigation}) {
  return (
    <Todo/>
  );
}


function LobbyScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'black'}}>
      <StatusBar backgroundColor = 'deeppink' />
      
      <Text style={{ fontSize: 20, color: 'cyan',justifyContent: 'center' }}>Feeling active ? Let's see what tasks you have pending</Text>
      <Button
        title="My work "
        color='deeppink'
        onPress={() => navigation.navigate('My Work')}
      />
    </View>
  );
}



const LobbyStack = createStackNavigator();

function LobbyStackScreen() {
  return (
    <LobbyStack.Navigator>
      <LobbyStack.Screen name="Shvetan's TODO App" component={LobbyScreen} options ={{ headerStyle: {backgroundColor: 'black',},headerTintColor: 'cyan',}} />
    </LobbyStack.Navigator>
  );
}


const MyWorkStack =createStackNavigator();
function MyWorkStackScreen() {
  return (
    <MyWorkStack.Navigator>
      <MyWorkStack.Screen name="My Pending Work" component={MyWorkScreen}options ={{ headerStyle: {backgroundColor: 'black',},headerTintColor: 'cyan',}} />
    </MyWorkStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      initialRouteName={'MyWork'}
      tabBarOptions={{
             style: {
                   backgroundColor: 'black',
                   paddingBottom: 3
             }
      }} >
        <Tab.Screen name="Lobby" component={LobbyStackScreen}
         options={{
            tabBarIcon: ({}) => (
            <Ionicons name="desktop-outline" color={'cyan'} size= {20} />
            ),
          }} />
        <Tab.Screen name="My Work" component={MyWorkStackScreen}
         options={{
            tabBarIcon: ({}) => (
            <Ionicons name="bicycle-outline" color={'deeppink'} size= {20} />
            ),
          }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}