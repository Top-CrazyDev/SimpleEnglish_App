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

export default function EnglishInvite(){
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
                    <Text style={{fontFamily: 'Plus Jakarta Sans', fontSize: 20, fontWeight: 800, color: '#2B8F66'}}>Invite Friends</Text>
                </View>
                <View style={{margin: windowWidth * 20 / 100,  padding: 20, borderWidth: 1, borderColor: '#2B8F6633', borderRadius: 10, backgroundColor: 'white'}}>
                    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                        <Image source={require('../../assets/image/Illustration.png')}></Image>
                    </View>
                    <Text style={{textAlign: 'center', fontFamily: 'Plus Jakarta Sans', fontSize: 20, fontWeight: 400, color: '#2B8F66', marginTop: 20}}>Refer A Friend</Text>
                    <Text style={{textAlign: 'center', fontFamily: 'Plus Jakarta Sans', fontSize: 10, fontWeight: 400}}>Give your love ones 7 days using app free.</Text>
                </View>
                <View style={{marginHorizontal: windowWidth * 20 / 100, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20, borderWidth: 1, borderColor: '#2B8F66', borderRadius: 10, backgroundColor: 'white'}}>
                    <Text style={{fontFamily: 'Plus Jakarta Sans', fontSize: 15, fontWeight: 400, color: '#2B8F66'}}>BrainAiPartnerMR</Text>
                    <TouchableOpacity>
                        <Image source={require('../../assets/image/copy2.png')}></Image>
                    </TouchableOpacity>
                </View>
                
            </ScrollView>
        </SafeAreaView>
    )
}