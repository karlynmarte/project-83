import React from 'react';
import { StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from "../screens/Feed";
import CreatePost from "../screens/CreatePost";

const Tab= createBottomTabNavigator();

const BottomTabNavigator =() =>{
  return(
    <Tab.Navigator
    screenOptions={({route })=>({
      tabBarIcon: ({focused, color, size })=>{
        let iconName;
        if(route.name==='Feed') {
          iconName=focused
          ?'book'
          :'book-outline';
        } else if (route.name==='CreatePost'){
          iconName=focysed
          ?'create'
          :'create-outine';
        } return <Ionicons name={iconName} size={size} color={color} />;
      }
    })}
    tabBarOptions={{
      activeTintColor:'tomato'
      inactiveTintColor:'gray'
    }}
    >
    <Tab.Screen name="Feed" component={Feed}/>
    <Tab.Screen name="Create Post" component={CreatePost}/>
    </Tab.Navigator>
  );
}
export default BottomTabNavigator
