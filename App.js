import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import SignInScreen from './src/SignIn/index'
import SignUpScreen from './src/SignUp/index'
import PasswordForgetScreen from './src/PasswordForget'
import HomeScreen from './src/Home'
import ProfileScreen from './src/Profile';
import { createDrawerNavigator,DrawerContentScrollView,DrawerItemList,DrawerItem, } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import * as firebase from 'firebase';

const Drawer = createDrawerNavigator();
 
const Tab = createBottomTabNavigator();
 
const HomeTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen}  options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),

        }}/>
      <Tab.Screen name="Profile" component={ProfileScreen} options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}/>
    </Tab.Navigator>
  );
};

const ProfileTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen}  options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}/>
      <Tab.Screen name="Profile" component={ProfileScreen} options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}/>
    </Tab.Navigator>
  );
};
 
const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Log Out" onPress={() => firebase.auth().signOut()} />
    </DrawerContentScrollView>
  );
}

firebaseConfig = {
  apiKey: "AIzaSyDWbb4C6vA2KjbApjlcsoPIGetvAiUeiJo",
  authDomain: "vhitara-ffcad.firebaseapp.com",
  projectId: "vhitara-ffcad",
  storageBucket: "vhitara-ffcad.appspot.com",
  messagingSenderId: "826543310682",
  appId: "1:826543310682:web:8428386bdec52fc36dd563",
  measurementId: "G-L7N9ZBXWZF"
};

const HomeDrawer = ({onSignOut}) => {
  return (
    <Drawer.Navigator  drawerContent={props => <CustomDrawerContent {...props} onSignOut={onSignOut} />} >
      <Drawer.Screen name="Home" component={HomeTabs} />  
    </Drawer.Navigator>
  );
};

const RootStack = createStackNavigator();
 
const App = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [isAuthenticatedReady, setIsAuthenticatedReady] = React.useState(false);
  const Hshown = 
  isAuthenticated ? ( false ) : ( true );

  const handleSignIn = () => {
 
    setIsAuthenticated(true);
  };

  const handleSignOut = () => {
 
    setIsAuthenticated(false);
  };

  const handleSignUp = () => {
 
    setIsAuthenticated(true);
  };

  const onAuthStateChanged = (user) => {
    setIsAuthenticatedReady(true);
    setIsAuthenticated(!!user);
  }
  if (!firebase.apps.length) {firebase.initializeApp(firebaseConfig);}
  firebase.auth().onAuthStateChanged(onAuthStateChanged);
  //firebase.initializeApp(firebaseConfig);


  return (
    <NavigationContainer>
    <RootStack.Navigator
      screenOptions={{
        headerShown: Hshown
      }}
    >
      
      {isAuthenticated ? (
       <RootStack.Screen name="Home">
       {(props) => (
         <HomeDrawer {...props} onSignOut={handleSignOut} />
       )}
     </RootStack.Screen>
      ) : (
        <>
          <RootStack.Screen name="Sign In">
            {(props) => (
              <SignInScreen {...props} onSignIn={handleSignIn}/>
            )}
          </RootStack.Screen>
          <RootStack.Screen name="Sign Up">
            {(props) => (
              <SignUpScreen {...props} onSignUp={handleSignUp} />
            )}
          </RootStack.Screen>
          <RootStack.Screen name="Password Forget">
              
            {(props) => (
              <PasswordForgetScreen {...props} onSignIn={handleSignIn}/>
            )}
          </RootStack.Screen>
          
          
        </>
      )}
    </RootStack.Navigator>
  </NavigationContainer>
  );
};
 
export default App;
   