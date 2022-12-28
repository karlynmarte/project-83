import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
  Dimensions
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";
import * as Font from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
 
render() {
      return (
        <View style={styles.container}>
          <View style={styles.cardContainer}>
          <View style={syles.authorContainer}>
           <View style={syles.authorImageContainer}>
            <Image
              source={require("../assets/profile_img.png")}
              style={styles.profileImage}
            ></Image>
            </View>
            <View style={styles.authorNameContainer}>
              <Text style={styles.AuthorNameText}>{this.props.post.author}</Text>
              </View>
              <Image source ={require("../assets/post.jpeg)} style={styles.postImage}/>
              <View style={styles.captionContainer}>
               <Text style={styles.captionText}>
               {this.props.post.caption}
               </Text>
              </View>
              <View style={styles.actionContainer}>
              <View style={styles.likeButton}>
                <Ionicons name={"heart"} size={RFValue(30)} color={"white"}/>
                <Text style+{styles.likeText}>12k</Text>
                </View>
              </View>
            </View>
          </View>
              );

              
    }
  }
}