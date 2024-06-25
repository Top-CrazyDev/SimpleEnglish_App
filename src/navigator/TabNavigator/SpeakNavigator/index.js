import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EnglishSpeak from "../../../screens/EnglishSpeak";
import EnglishOffice from "../../../screens/EnglishOffice";
const Stack = createNativeStackNavigator();

export default function SpeakNavigator(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="EnglishSpeak"
                component={EnglishSpeak}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="EnglishOffice"
                component={EnglishOffice}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}