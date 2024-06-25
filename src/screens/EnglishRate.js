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

export default function EnglishRate(){
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
                    <Text style={{fontFamily: 'Plus Jakarta Sans', fontSize: 20, fontWeight: 800, color: '#2B8F66'}}>Rate App</Text>
                </View>
                <View style={{margin: windowWidth * 20 / 100,  padding: 20, borderWidth: 1, borderColor: '#2B8F6633', borderRadius: 10, backgroundColor: 'white'}}>
                    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                        <Image source={require('../../assets/image/amico.png')}></Image>
                    </View>
                    <Text style={{textAlign: 'center', fontFamily: 'Plus Jakarta Sans', fontSize: 20, fontWeight: 400, color: '#2B8F66'}}>Rate Your Experience</Text>
                    <Text style={{textAlign: 'center', fontFamily: 'Plus Jakarta Sans', fontSize: 10, fontWeight: 400}}>Tell us how was your experience</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 10}}>
                        <Image source={require('../../assets/image/Star1.png')}></Image>
                        <Image source={require('../../assets/image/Star1.png')}></Image>
                        <Image source={require('../../assets/image/Star1.png')}></Image>
                        <Image source={require('../../assets/image/Star1.png')}></Image>
                        <Image source={require('../../assets/image/Star2.png')}></Image>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                        <TouchableOpacity>
                            <Text style={{fontFamily : 'Plus Jakarta Sans', fontSize: 10, fontWeight: 400, color: '#2B8F66'}}>Skip</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity style={{backgroundColor: '#2B8F66', borderRadius: 20, paddingVertical:10,width: windowWidth * 30 / 100, marginHorizontal: windowWidth * 35 / 100}}>
                    <Text style={{textAlign: 'center', fontFamily: 'Plus Jakarta Sans', fontSize: 20, fontWeight: 400, color: 'white'}}>SUBMIT</Text>
                </TouchableOpacity>
                
            </ScrollView>
        </SafeAreaView>
    )
}