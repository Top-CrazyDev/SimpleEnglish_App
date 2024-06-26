import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import { adaptNavigationTheme, useTheme } from "react-native-paper";
import Login from "../screens/loginscreens/Login";
import TabNavigator from "./TabNavigator";
import Login2 from "../screens/loginscreens/Login2";

const Stack = createNativeStackNavigator();

export default function RootNavigator(){
    const { isLoggedin } = useSelector((state) => state.auth);
    return(
        <NavigationContainer>
            <Stack.Navigator>
                {isLoggedin ? (
                    <Stack.Screen name="TabNavigator" component={TabNavigator} options={{ headerShown: false }}>
                    </Stack.Screen>
                ) : (
                    <>
                        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}>
                        </Stack.Screen>
                        <Stack.Screen name="TabNavigator" component={TabNavigator} options={{ headerShown: false }}>
                        </Stack.Screen>
                        <Stack.Screen name="Logout" component={Login2} options={{ headerShown: false }}/>
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    )
}