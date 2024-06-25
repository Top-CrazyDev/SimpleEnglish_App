import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EnglishHome from "../../../screens/EnglishHome";
const Stack = createNativeStackNavigator();

export default function HomeNavigator(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="EnglishHome"
                component={EnglishHome}
                options={{ headerShown: false }}
              />
        </Stack.Navigator>
    )
}