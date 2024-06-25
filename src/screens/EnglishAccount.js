import {
    View,
    Text,
    SafeAreaView,
    ImageBackground,
    StatusBar,
    Image,
    Dimensions,
    TouchableOpacity,
    ScrollView,
    TextInput
} from "react-native";
import React, { useState, useContext, useEffect, useRef } from "react";
import style from "../theme/style";
import themeContext from "../theme/themeContex";
import { Colors } from "../theme/color";
import Icon from "react-native-vector-icons/Ionicons";
import Icon1 from "react-native-vector-icons/MaterialCommunityIcons";
import { AppBar, HStack, IconButton } from "@react-native-material/core";
// import { Avatar } from 'react-native-paper';
import { Avatar } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { store } from "../redux/store";
import Swiper from 'react-native-swiper';
import { Top } from '../json/category.json';
import OptionsMenu from "react-native-options-menu";
import { Appbar } from "react-native-paper";
import SelectDropdown from 'react-native-select-dropdown';
import Icon2 from 'react-native-vector-icons/SimpleLineIcons';
import Icon3 from "react-native-vector-icons/FontAwesome5";
import Icon4 from "react-native-vector-icons/Feather";
import Icon5 from 'react-native-vector-icons/Octicons';
import Icon6 from 'react-native-vector-icons/Entypo';
import { List } from "react-native-paper";

export default function EnglishAccount(){
    const theme = useContext(themeContext);
    const navigation = useNavigation();
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    
    return(
        <SafeAreaView style={{paddingBottom: windowWidth * 60 / 480}}>
            <Image source={require('../../assets/image/background3.png')} style={{position: 'absolute', width: windowWidth,height: windowWidth * 950 / 480}}>
            </Image>
            <ScrollView style={{paddingTop: windowWidth * 5 / 100}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',}}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={require('../../assets/image/back.png')}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../../assets/image/dots-horizontal.png')}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <Text style={{fontFamily: 'Plus Jakarta Sans', fontSize: 20, fontWeight: 600, color: '#2B8F66'}}>Profile</Text>
                </View>
                <View style={{paddingTop: 20, flexDirection: 'row', justifyContent: 'center'}}>
                    <Image source={require('../../assets/image/avatar2.png')}></Image>
                </View>
                <View style={{paddingTop: 20, flexDirection: 'row', justifyContent: 'center'}}>
                    <Text style={{fontFamily: 'Plus Jakarta Sans', fontSize: 20, fontWeight: 800, color: '#212121'}}>Lisa mandez</Text>
                </View>
                <View style={{flexDirection: 'column', gap: 20}}>
                    <TouchableOpacity style={{marginHorizontal: 20, flexDirection : 'row', justifyContent: 'space-between', alignItems: 'center', borderWidth: 1, borderRadius: 10, borderColor: '#2B8F6633', backgroundColor: 'white', padding: 5}}>
                        <View style = {{flexDirection: 'row', alignItems: 'center', gap: 20}}>
                            <Icon5
                            name="mail"
                            color={'#2B8F66'}
                            size={26}
                            ></Icon5>
                            <View >
                                <Text style={{fontFamily: 'Plus Jakarta Sans', fontSize: 20, fontWeight: 400}}>Email</Text>
                                <Text style={{fontFamily: 'Plus Jakarta Sans', fontSize: 10, fontWeight: 400, color: '#A0A0A5'}}>Lisamandez@gmail.com</Text>
                            </View>
                        </View>
                        <Icon1
                        name="chevron-right"
                        color={Colors.disable}
                        size={26}
                        ></Icon1>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginHorizontal: 20, flexDirection : 'row', justifyContent: 'space-between', alignItems: 'center', borderWidth: 1, borderRadius: 10, borderColor: '#2B8F6633', backgroundColor: 'white', padding: 5}}>
                        <View style = {{flexDirection: 'row', alignItems: 'center', gap: 20}}>
                            <Icon5
                            name="issue-reopened"
                            color={'#2B8F66'}
                            size={26}
                            ></Icon5>
                            <View >
                                <Text style={{fontFamily: 'Plus Jakarta Sans', fontSize: 20, fontWeight: 400}}>Subscription</Text>
                                <Text style={{fontFamily: 'Plus Jakarta Sans', fontSize: 10, fontWeight: 400, color: '#A0A0A5'}}>Manage your subscription</Text>
                            </View>
                        </View>
                        <Icon1
                        name="chevron-right"
                        color={Colors.disable}
                        size={26}
                        ></Icon1>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginHorizontal: 20, flexDirection : 'row', justifyContent: 'space-between', alignItems: 'center', borderWidth: 1, borderRadius: 10, borderColor: '#2B8F6633', backgroundColor: 'white', padding: 5}}>
                        <View style = {{flexDirection: 'row', alignItems: 'center', gap: 20}}>
                            <Icon6
                            name="back-in-time"
                            color={'#2B8F66'}
                            size={26}
                            ></Icon6>
                            <Text style={{fontFamily: 'Plus Jakarta Sans', fontSize: 20, fontWeight: 400}}>Restore Purchases</Text>
                        </View>
                        <Icon1
                        name="chevron-right"
                        color={Colors.disable}
                        size={26}
                        ></Icon1>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}