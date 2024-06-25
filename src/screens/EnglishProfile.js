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
import Icon5 from 'react-native-vector-icons/Entypo';
import Icon6 from 'react-native-vector-icons/Octicons';
import { List } from "react-native-paper";

export default function EnglishProfile(){
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
            {/* <Image source={require('../../assets/image/background3.png')} style={{position: 'absolute', width: windowWidth,height: windowWidth * 950 / 480}}>
            </Image> */}
            <ScrollView style={{paddingTop: windowWidth * 5 / 100}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',}}>
                    <TouchableOpacity onPress={() => navigation.navigate("EnglishHome")}>
                        <Image source={require('../../assets/image/back.png')}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../../assets/image/dots-horizontal.png')}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <Text style={{fontFamily: 'Plus Jakarta Sans', fontSize: 20, fontWeight: 800, color: '#2B8F66'}}>Profile</Text>
                </View>
                <View style={{paddingTop: 20, flexDirection: 'row', justifyContent: 'center'}}>
                    <Image source={require('../../assets/image/avatar2.png')}></Image>
                </View>
                <View style={{paddingTop: 20, flexDirection: 'row', justifyContent: 'center'}}>
                    <Text style={{fontFamily: 'Plus Jakarta Sans', fontSize: 20, fontWeight: 800, color: '#212121'}}>Lisa mandez</Text>
                </View>
                <View style={{flexDirection: 'column', gap: 20, paddingBottom: 50}}>
                    <TouchableOpacity onPress={() => navigation.navigate("EnglishAccount")} style={{marginHorizontal: 20, flexDirection : 'row', justifyContent: 'space-between', alignItems: 'center', borderWidth: 1, borderRadius: 10, borderColor: '#2B8F6633', backgroundColor: 'white', padding: 5}}>
                        <View style = {{flexDirection: 'row', alignItems: 'center', gap: 20}}>
                            <Icon3
                            name="user"
                            color={'#2B8F66'}
                            size={26}
                            ></Icon3>
                            <View >
                                <Text style={{fontFamily: 'Plus Jakarta Sans', fontSize: 20, fontWeight: 400}}>Account</Text>
                                <Text style={{fontFamily: 'Plus Jakarta Sans', fontSize: 10, fontWeight: 400, color: '#A0A0A5'}}>Change your Account Preferences</Text>
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
                            <Icon4
                            name="mic"
                            color={'#2B8F66'}
                            size={26}
                            ></Icon4>
                            <View >
                                <Text style={{fontFamily: 'Plus Jakarta Sans', fontSize: 20, fontWeight: 400}}>Voice</Text>
                                <Text style={{fontFamily: 'Plus Jakarta Sans', fontSize: 10, fontWeight: 400, color: '#A0A0A5'}}>Cove</Text>
                            </View>
                        </View>
                        {/* <OptionsMenu
                        customButton={MoreIcon2}
                        buttonStyle={{width: windowWidth * 15 / 480, height: windowWidth * 15 / 480, resizeMode: "contain"}}
                        destructiveIndex={1}
                        options={["Cove", "Lara", "Dean"]}
                        actions={[this.editPost, this.deletePost]}
                        /> */}
                        <Icon1
                        name="chevron-right"
                        color={Colors.disable}
                        size={26}
                        ></Icon1>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginHorizontal: 20, flexDirection : 'row', justifyContent: 'space-between', alignItems: 'center', borderWidth: 1, borderRadius: 10, borderColor: '#2B8F6633', backgroundColor: 'white', padding: 5}}>
                        <View style = {{flexDirection: 'row', alignItems: 'center', gap: 20}}>
                            <Icon
                            name="globe-outline"
                            color={'#2B8F66'}
                            size={26}
                            ></Icon>
                            <View >
                                <Text style={{fontFamily: 'Plus Jakarta Sans', fontSize: 20, fontWeight: 400}}>Language</Text>
                                <Text style={{fontFamily: 'Plus Jakarta Sans', fontSize: 10, fontWeight: 400, color: '#A0A0A5'}}>Select your language</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image source={require('../../assets/image/flagUK.png')}></Image>
                            {/* <OptionsMenu
                            customButton={MoreIcon2}
                            buttonStyle={{width: windowWidth * 15 / 480, height: windowWidth * 15 / 480, resizeMode: "contain"}}
                            destructiveIndex={1}
                            options={["", "", ""]}
                            // actions={[this.editPost, this.deletePost]}
                            /> */}
                            <Icon1
                            name="chevron-right"
                            color={Colors.disable}
                            size={26}
                            ></Icon1>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("ProfileNavigator",{screen: "EnglishAbout"})} style={{marginHorizontal: 20, flexDirection : 'row', justifyContent: 'space-between', alignItems: 'center', borderWidth: 1, borderRadius: 10, borderColor: '#2B8F6633', backgroundColor: 'white', padding: 5}}>
                        <View style = {{flexDirection: 'row', alignItems: 'center', gap: 20}}>
                            <Icon5
                            name="info"
                            color={'#2B8F66'}
                            size={26}
                            ></Icon5>
                            <Text style={{fontFamily: 'Plus Jakarta Sans', fontSize: 20, fontWeight: 400}}>About</Text>
                        </View>
                        <Icon1
                        name="chevron-right"
                        color={Colors.disable}
                        size={26}
                        ></Icon1>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("ProfileNavigator",{screen: "EnglishVersion"})} style={{marginHorizontal: 20, flexDirection : 'row', justifyContent: 'space-between', alignItems: 'center', borderWidth: 1, borderRadius: 10, borderColor: '#2B8F6633', backgroundColor: 'white', padding: 5}}>
                        <View style = {{flexDirection: 'row', alignItems: 'center', gap: 20}}>
                            <Icon6
                            name="versions"
                            color={'#2B8F66'}
                            size={26}
                            ></Icon6>
                            <Text style={{fontFamily: 'Plus Jakarta Sans', fontSize: 20, fontWeight: 400}}>Version</Text>
                        </View>
                        <Icon1
                        name="chevron-right"
                        color={Colors.disable}
                        size={26}
                        ></Icon1>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("ProfileNavigator",{screen: "EnglishPrivacy"})} style={{marginHorizontal: 20, flexDirection : 'row', justifyContent: 'space-between', alignItems: 'center', borderWidth: 1, borderRadius: 10, borderColor: '#2B8F6633', backgroundColor: 'white', padding: 5}}>
                        <View style = {{flexDirection: 'row', alignItems: 'center', gap: 20}}>
                            <Icon
                            name="document-outline"
                            color={'#2B8F66'}
                            size={26}
                            ></Icon>
                            <Text style={{fontFamily: 'Plus Jakarta Sans', fontSize: 20, fontWeight: 400}}>Privacy Policy</Text>
                        </View>
                        <Icon1
                        name="chevron-right"
                        color={Colors.disable}
                        size={26}
                        ></Icon1>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("ProfileNavigator",{screen: "EnglishSupport"})} style={{marginHorizontal: 20, flexDirection : 'row', justifyContent: 'space-between', alignItems: 'center', borderWidth: 1, borderRadius: 10, borderColor: '#2B8F6633', backgroundColor: 'white', padding: 5}}>
                        <View style = {{flexDirection: 'row', alignItems: 'center', gap: 20}}>
                            <Icon6
                            name="question"
                            color={'#2B8F66'}
                            size={26}
                            ></Icon6>
                            <Text style={{fontFamily: 'Plus Jakarta Sans', fontSize: 20, fontWeight: 400}}>Customer Support</Text>
                        </View>
                        <Icon1
                        name="chevron-right"
                        color={Colors.disable}
                        size={26}
                        ></Icon1>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("ProfileNavigator",{screen: "EnglishRate"})} style={{marginHorizontal: 20, flexDirection : 'row', justifyContent: 'space-between', alignItems: 'center', borderWidth: 1, borderRadius: 10, borderColor: '#2B8F6633', backgroundColor: 'white', padding: 5}}>
                        <View style = {{flexDirection: 'row', alignItems: 'center', gap: 20}}>
                            <Icon6
                            name="thumbsup"
                            color={'#2B8F66'}
                            size={26}
                            ></Icon6>
                            <Text style={{fontFamily: 'Plus Jakarta Sans', fontSize: 20, fontWeight: 400}}>Rate App</Text>
                        </View>
                        <Icon1
                        name="chevron-right"
                        color={Colors.disable}
                        size={26}
                        ></Icon1>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("ProfileNavigator",{screen: "EnglishInvite"})} style={{marginHorizontal: 20, flexDirection : 'row', justifyContent: 'space-between', alignItems: 'center', borderWidth: 1, borderRadius: 10, borderColor: '#2B8F6633', backgroundColor: 'white', padding: 5}}>
                        <View style = {{flexDirection: 'row', alignItems: 'center', gap: 20}}>
                            <Icon6
                            name="pencil"
                            color={'#2B8F66'}
                            size={26}
                            ></Icon6>
                            <View >
                                <Text style={{fontFamily: 'Plus Jakarta Sans', fontSize: 20, fontWeight: 400}}>Invite Friend</Text>
                                <Text style={{fontFamily: 'Plus Jakarta Sans', fontSize: 10, fontWeight: 400, color: '#A0A0A5'}}>Get $3 For Each Invitation!</Text>
                            </View>
                        </View>
                        <Icon1
                        name="chevron-right"
                        color={Colors.disable}
                        size={26}
                        ></Icon1>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width: windowWidth * 30 / 100, marginLeft: windowWidth * 35 / 100, borderWidth: 1, borderColor: '#FF705C80', borderRadius: 20, flexDirection: 'row', justifyContent:'center', alignItems: 'center', padding: 10, gap: 10}}>
                        <Image source={require('../../assets/image/logout.png')}></Image>
                        <Text style={{fontFamily: 'Plus Jakarta Sans', fontSize: 15, fontWeight: 400, color: '#424242'}}>
                            Logout
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}