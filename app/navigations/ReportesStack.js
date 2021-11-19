import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Reports from "../screens/Reports";

const Stack = createStackNavigator();

export default function ReportesStack(){
  return (
      <Stack.Navigator>
         
          <Stack.Screen
          name ="reportesillos"
          component={Reports}
          options={{title:"Informes"}}
          />
      </Stack.Navigator>
  )
}
