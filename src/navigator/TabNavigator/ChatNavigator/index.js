import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EnglishChat from "../../../screens/EnglishChat";

const Stack = createNativeStackNavigator();

export default function ChatNavigator(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="EnglishChat"
                component={EnglishChat}
                options={{ headerShown: false }}
              />
        </Stack.Navigator>
    )
}