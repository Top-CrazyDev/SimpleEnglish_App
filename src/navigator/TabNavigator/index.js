import * as React from "react";
import {
    Text,  
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeNavigator from "./HomeNavigator";
import SpeakNavigator from "./SpeakNavigator";
import ChatNavigator from "./ChatNavigator";
import ProfileNavigator from "./ProfileNavigator";
import Icon2 from "react-native-vector-icons/Feather";
import Icon from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function TabNavigator(){
    return(
        <Tab.Navigator 
        screenOptions={{
            // BottomTabBarHeight:30,
            tabBarStyle: { position: "absolute", height: 60, backgroundColor: '#2B8F66' },
            tabBarLabelStyle: {
            fontSize: 15,
            
            },
        }}
        >
            <Tab.Screen
                name="HomeNavigator"
                component={HomeNavigator}
                options={{
                tabBarShowLabel: true,
                tabBarLabel: ({ focused, color }) => (
                    <Text
                    style={{
                        color: focused ? 'white' : '#bfbfbf',
                        fontFamily: "Plus Jakarta Sans",
                    }}
                    >
                    Home
                    </Text>
                ),
                tabBarIcon: ({ focused, color }) => {
                    return (
                    <Icon2
                        name="home"
                        size={23}
                        color={focused ? 'white' : '#bfbfbf'}
                    />
                    );
                },
                headerShown: false,
                }}
            />
            <Tab.Screen
                name="SpeakNavigator"
                component={SpeakNavigator}
                options={{
                tabBarShowLabel: true,
                tabBarLabel: ({ focused, color }) => (
                    <Text
                    style={{
                        color: focused ? 'white' : '#bfbfbf',
                        fontFamily: "Plus Jakarta Sans",
                    }}
                    >
                    Speak
                    </Text>
                ),
                tabBarIcon: ({ focused, color }) => {
                    return (
                    <Icon2
                        name="mic"
                        size={23}
                        color={focused ? 'white' : '#bfbfbf'}
                    />
                    );
                },
                headerShown: false,
                }}
            />
            <Tab.Screen
                name="ChatNavigator"
                component={ChatNavigator}
                options={{
                tabBarShowLabel: true,
                tabBarLabel: ({ focused, color }) => (
                    <Text
                    style={{
                        color: focused ? 'white' : '#bfbfbf',
                        fontFamily: "Plus Jakarta Sans",
                    }}
                    >
                    Chat
                    </Text>
                ),
                tabBarIcon: ({ focused, color }) => {
                    return (
                    <Ionicons
                        name="chatbox-ellipses-outline"
                        size={23}
                        color={focused ? 'white' : '#bfbfbf'}
                    />
                    );
                },
                headerShown: false,
                }}
            />
            <Tab.Screen
                name="ProfileNavigator"
                component={ProfileNavigator}
                options={{
                tabBarShowLabel: true,
                tabBarLabel: ({ focused, color }) => (
                    <Text
                    style={{
                        color: focused ? 'white' : '#bfbfbf',
                        fontFamily: "Plus Jakarta Sans",
                    }}
                    >
                    Profile
                    </Text>
                ),
                tabBarIcon: ({ focused, color }) => {
                    return (
                    <Icon
                        name="user"
                        size={23}
                        color={focused ? 'white' : '#bfbfbf'}
                    />
                    );
                },
                headerShown: false,
                }}
            />
        </Tab.Navigator>
    )
}