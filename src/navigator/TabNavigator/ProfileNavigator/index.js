import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EnglishProfile from "../../../screens/EnglishProfile";
import EnglishAbout from "../../../screens/EnglishAbout";
import EnglishAccount from "../../../screens/EnglishAccount";
import EnglishInvite from "../../../screens/EnglishInvite";
import EnglishPrivacy from "../../../screens/EnglishPrivacy";
import EnglishRate from "../../../screens/EnglishRate";
import EnglishSupport from "../../../screens/EnglishSupport";
import EnglishVersion from "../../../screens/EnglishVersion";

const Stack = createNativeStackNavigator();

export default function ProfileNavigator(){
    return(
        <Stack.Navigator>

            <Stack.Screen
                name="EnglishProfile"
                component={EnglishProfile}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="EnglishAccount"
                component={EnglishAccount}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="EnglishAbout"
                component={EnglishAbout}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="EnglishPrivacy"
                component={EnglishPrivacy}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="EnglishRate"
                component={EnglishRate}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="EnglishInvite"
                component={EnglishInvite}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="EnglishSupport"
                component={EnglishSupport}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="EnglishVersion"
                component={EnglishVersion}
                options={{ headerShown: false }}
            />
            
        </Stack.Navigator>
    )
}