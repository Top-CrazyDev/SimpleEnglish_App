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
import { List } from "react-native-paper";

export default function EnglishPrivacy(){
    const theme = useContext(themeContext);
    const navigation = useNavigation();
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const MoreIcon2 = (
        <Icon1
        name="chevron-right"
        color={Colors.disable}
        size={26}
        ></Icon1>
    );
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
                    <Text style={{fontFamily: 'Plus Jakarta Sans', fontSize: 20, fontWeight: 800, color: '#2B8F66'}}>Privacy Policy</Text>
                </View>
                <View style = {{backgroundColor: 'white', marginHorizontal: windowWidth * 10 / 100, marginTop: 20, paddingHorizontal: windowWidth * 10 / 100, paddingVertical: 20, borderWidth: 1, borderColor : '#2B8F6633', borderRadius: 20}}>
                    <View style={{marginBottom: 10}}>
                        <View style={{flexDirection: 'row', justifyContent:'center'}}>
                            <Text style = {{fontFamily: 'Plus Jakarta Sans', fontSize: 15, fontWeight: 800, color: '#2B8F66', }}>
                                INTRODUCTION:
                            </Text>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent:'center'}}>
                            <Text style = {{textAlign: 'center', fontFamily: 'Plus Jakarta Sans', fontSize: 10, fontWeight: 600, color: '#616161', alignItems: 'center'}}>
                            Briefly describe the purpose of the app and the importance of privacy.
                            </Text>
                        </View>
                    </View>
                    <View style={{marginBottom: 10}}>
                        <View style={{flexDirection: 'row', justifyContent:'center'}}>
                            <Text style = {{fontFamily: 'Plus Jakarta Sans', fontSize: 15, fontWeight: 800, color: '#2B8F66', }}>
                                Data Collection: 
                            </Text>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent:'center'}}>
                            <Text style = {{textAlign: 'center', fontFamily: 'Plus Jakarta Sans', fontSize: 10, fontWeight: 600, color: '#616161', alignItems: 'center'}}>
                                List the types of data the app collects (e.g., personal information, usage data).
                            </Text>
                        </View>
                    </View>
                    <View style={{marginBottom: 10}}>
                        <View style={{flexDirection: 'row', justifyContent:'center'}}>
                            <Text style = {{fontFamily: 'Plus Jakarta Sans', fontSize: 15, fontWeight: 800, color: '#2B8F66', }}>
                                Data Usage:
                            </Text>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent:'center'}}>
                            <Text style = {{textAlign: 'center', fontFamily: 'Plus Jakarta Sans', fontSize: 10, fontWeight: 600, color: '#616161', alignItems: 'center'}}>
                                Explain how the collected data will be used (e.g., to improve services, personalize user experience).
                            </Text>
                        </View>
                    </View>
                    <View style={{marginBottom: 10}}>
                        <View style={{flexDirection: 'row', justifyContent:'center'}}>
                            <Text style = {{fontFamily: 'Plus Jakarta Sans', fontSize: 15, fontWeight: 800, color: '#2B8F66', }}>
                                Data Sharing:
                            </Text>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent:'center'}}>
                            <Text style = {{textAlign: 'center', fontFamily: 'Plus Jakarta Sans', fontSize: 10, fontWeight: 600, color: '#616161', alignItems: 'center'}}>
                                Clarify if any data is shared with third parties and under what circumstances.
                            </Text>
                        </View>
                    </View>
                    <View style={{marginBottom: 10}}>
                        <View style={{flexDirection: 'row', justifyContent:'center'}}>
                            <Text style = {{fontFamily: 'Plus Jakarta Sans', fontSize: 15, fontWeight: 800, color: '#2B8F66', }}>
                                User Rights: 
                            </Text>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent:'center'}}>
                            <Text style = {{textAlign: 'center', fontFamily: 'Plus Jakarta Sans', fontSize: 10, fontWeight: 600, color: '#616161', alignItems: 'center'}}>
                                Inform users of their rights regarding their data (e.g., access, correction, deletion).
                            </Text>
                        </View>
                    </View>
                    <View style={{marginBottom: 10}}>
                        <View style={{flexDirection: 'row', justifyContent:'center'}}>
                            <Text style = {{fontFamily: 'Plus Jakarta Sans', fontSize: 15, fontWeight: 800, color: '#2B8F66', }}>
                            Security Measures:
                            </Text>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent:'center'}}>
                            <Text style = {{textAlign: 'center', fontFamily: 'Plus Jakarta Sans', fontSize: 10, fontWeight: 600, color: '#616161', alignItems: 'center'}}>
                            Outline the measures taken to protect user data from unauthorized access or breaches.
                            </Text>
                        </View>
                    </View>
                    <View style={{marginBottom: 10}}>
                        <View style={{flexDirection: 'row', justifyContent:'center'}}>
                            <Text style = {{fontFamily: 'Plus Jakarta Sans', fontSize: 15, fontWeight: 800, color: '#2B8F66', }}>
                            Policy Updates: 
                            </Text>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent:'center'}}>
                            <Text style = {{textAlign: 'center', fontFamily: 'Plus Jakarta Sans', fontSize: 10, fontWeight: 600, color: '#616161', alignItems: 'center'}}>
                            State how users will be informed of any changes to the privacy policy.
                            </Text>
                        </View>
                    </View>
                    <View style={{marginBottom: 10}}>
                        <View style={{flexDirection: 'row', justifyContent:'center'}}>
                            <Text style = {{fontFamily: 'Plus Jakarta Sans', fontSize: 15, fontWeight: 800, color: '#2B8F66', }}>
                            Contact Information:
                            </Text>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent:'center'}}>
                            <Text style = {{textAlign: 'center', fontFamily: 'Plus Jakarta Sans', fontSize: 10, fontWeight: 600, color: '#616161', alignItems: 'center'}}>
                            Provide a way for users to contact you with questions or concerns about their privacy.
                            </Text>
                        </View>
                    </View>
                </View>
                
            </ScrollView>
        </SafeAreaView>
    )
}