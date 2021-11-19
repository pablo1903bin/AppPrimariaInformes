import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import TopReports from "../screens/TopReports";

const Stack = createStackNavigator();

export default function TopReportesStack(){
  return (
      <Stack.Navigator>
          <Stack.Screen
          name ="reportes"
          component={TopReports}
          options={{title:"Mejores Informes"}}
          />
      </Stack.Navigator>
  )
}
