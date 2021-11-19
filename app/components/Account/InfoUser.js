import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Avatar, ListItem } from 'react-native-elements';
//import * as firebase from "firebase";
//import * as Permissions from "expo-permissions";
//import * as ImagePicker from "expo-image-picker";

export default function InfoUser(props){
     const {userInfo} = props;
    return(
        <View style={styles.viewUserInfo}>
         
          <Avatar
             rounded
             size="large"
             showEditButton
             containerStyle={styles.userInfoAvatar}
          />

          <View>
            <Text style={styles.displayName}>
               Pablo Rosas
            </Text>
            <Text>
               pablo@gmail.com
            </Text>
          </View>
        </View>
    )
}


const styles = StyleSheet.create({
    viewUserInfo: {
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      backgroundColor: "#f2f2f2",
      paddingTop: 30,
      paddingBottom: 30,
    },
    userInfoAvatar: {
      marginRight: 20,
    },
    displayName: {
      fontWeight: "bold",
      paddingBottom: 5,
    },
  });