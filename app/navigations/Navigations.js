import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";

import ReportesStack from "./ReportesStack";
import FavoritesStack from "./FavoritesStack";
import AccountStack from "./AccountStack";
import SearchStack from "./SearchStack";

import TopReportesStack from "./TopReportesStack";


const Tab = createBottomTabNavigator();

export default function Navigation(){
    return(
        <NavigationContainer>
            <Tab.Navigator 
            initialRouteName="reportes"
            tabBarOptions={{
               inactiveTintColor:"#646464",
               activeTintColor:"#00a680"
            }}
            screenOptions={({route}) =>({
               tabBarIcon:({color})=>screenOptions(route, color)
            }) }
            >
               
                <Tab.Screen
                   name = "reportes"
                   component={ReportesStack}
                   options={{title:"Informes"}}
                />
                <Tab.Screen
                   name = "favoritoss"
                   component = {FavoritesStack}
                   options = {{title:"Favoritos"}}
                />
                <Tab.Screen
                   name = "busqueda"
                   component={SearchStack}
                   options={{title:"Buscar"}}
                />
                 <Tab.Screen
                   name = "topreportes"
                   component={TopReportesStack}
                   options={{title:"Top Informes"}}
                />
                <Tab.Screen
                   name = "cuenta"
                   component={AccountStack}
                   options={{title:"Mi Cuenta"}}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

function screenOptions(route, color){
   let iconName;
   switch(route.name){
      case "reportes":
        iconName="compass-outline"
        break;
      case "favoritoss":
         iconName="heart-outline"
         break; 
      case "busqueda":
         iconName="magnify"
         break;
      case "topreportes":
         iconName="star-outline"
         break;
      case "cuenta":
         iconName="home-outline"
         break;          
      default:
        break;
   }
   return(
      <Icon type="material-community" name={iconName} size={22} color={color} />
   )

}