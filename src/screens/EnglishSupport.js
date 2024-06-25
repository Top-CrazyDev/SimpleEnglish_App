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

export default function EnglishSupport(){
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
                    <TouchableOpacity  onPress={() => navigation.goBack()}>
                        <Image source={require('../../assets/image/back.png')}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../../assets/image/dots-horizontal.png')}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <Text style={{fontFamily: 'Plus Jakarta Sans', fontSize: 20, fontWeight: 800, color: '#2B8F66'}}>Customer Support</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', gap: 20, paddingLeft: windowWidth * 10 / 100}}>
                    <Image source={require('../../assets/image/robot.png')}></Image>
                    <View>
                        <Text style={{fontFamily: 'Plus Jakarta Sans', fontSize: 20, fontWeight: 600, color: '#616161'}}>Helpy</Text>
                        <Text style={{fontFamily: 'Plus Jakarta Sans', fontSize: 10, fontWeight: 600, color: '#8F8F8F', textAlign:'center'}}>online</Text>
                    </View>
                </View>
                <View
                    style={[
                    {
                        paddingTop: 10,
                        borderBottomColor: "#999999",
                        borderBottomWidth: 0.84,
                        marginHorizontal: windowWidth * 10 / 100 
                    },
                    style,
                    ]}
                />
                <ScrollView style={{height: windowHeight * 57 / 100, flexDirection:'column', paddingHorizontal: windowWidth * 10 / 100}}>
                    <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                        <View>
                            <View style={{maxWidth: 250, marginVertical: 10, borderRadius: 10, borderColor: '#2B8F6633', borderWidth: 1, backgroundColor: 'white', paddingHorizontal: 10, paddingVertical: 10}}>
                                <Text style={{color: '#8F8F8F', fontFamily: 'Plus Jakarta Sans', fontSize: 10, fontWeight: 600}}>Hi, I just wanna know that how much time you will be updated.</Text>
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                                <Text style={{ color: '#918FB7', fontFamily: 'Plus Jakarta Sans', fontSize: 10, fontWeight: 400}}>10:53</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                        <View>
                            <View style={{maxWidth: 250, marginVertical: 10, borderRadius: 10, paddingHorizontal: 10, paddingVertical: 10, backgroundColor: '#2B8F66'}}>
                                <Text style={{color: '#F5F6FA', fontFamily: 'Plus Jakarta Sans', fontSize: 10, fontWeight: 600}}>Maybe, Nearly July, 2022</Text>
                            </View>
                            <Text style={{ color: '#918FB7', fontFamily: 'Plus Jakarta Sans', fontSize: 10, fontWeight: 400}}>10:53</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                        <View>
                            <View style={{maxWidth: 250, marginVertical: 10, borderRadius: 10, borderColor: '#2B8F6633', borderWidth: 1, backgroundColor: 'white', paddingHorizontal: 10, paddingVertical: 10}}>
                                <Text style={{color: '#8F8F8F', fontFamily: 'Plus Jakarta Sans', fontSize: 10, fontWeight: 600}}>OKay, I”m Waiting....</Text>
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                                <Text style={{ color: '#918FB7', fontFamily: 'Plus Jakarta Sans', fontSize: 10, fontWeight: 400}}>10:53</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                        <View>
                            <View style={{maxWidth: 250, marginVertical: 10, borderRadius: 10, paddingHorizontal: 10, paddingVertical: 10, backgroundColor: '#2B8F66'}}>
                                <Text style={{color: '#F5F6FA', fontFamily: 'Plus Jakarta Sans', fontSize: 10, fontWeight: 600}}>Maybe, Nearly July, 2022</Text>
                            </View>
                            <Text style={{ color: '#918FB7', fontFamily: 'Plus Jakarta Sans', fontSize: 10, fontWeight: 400}}>10:53</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                        <View>
                            <View style={{maxWidth: 250, marginVertical: 10, borderRadius: 10, borderColor: '#2B8F6633', borderWidth: 1, backgroundColor: 'white', paddingHorizontal: 10, paddingVertical: 10}}>
                                <Text style={{color: '#8F8F8F', fontFamily: 'Plus Jakarta Sans', fontSize: 10, fontWeight: 600}}>OKay, I”m Waiting....</Text>
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                                <Text style={{ color: '#918FB7', fontFamily: 'Plus Jakarta Sans', fontSize: 10, fontWeight: 400}}>10:53</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                        <View>
                            <View style={{maxWidth: 250, marginVertical: 10, borderRadius: 10, paddingHorizontal: 10, paddingVertical: 10, backgroundColor: '#2B8F66'}}>
                                <Text style={{color: '#F5F6FA', fontFamily: 'Plus Jakarta Sans', fontSize: 10, fontWeight: 600}}>Maybe, Nearly July, 2022</Text>
                            </View>
                            <Text style={{ color: '#918FB7', fontFamily: 'Plus Jakarta Sans', fontSize: 10, fontWeight: 400}}>10:53</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                        <View>
                            <View style={{maxWidth: 250, marginVertical: 10, borderRadius: 10, borderColor: '#2B8F6633', borderWidth: 1, backgroundColor: 'white', paddingHorizontal: 10, paddingVertical: 10}}>
                                <Text style={{color: '#8F8F8F', fontFamily: 'Plus Jakarta Sans', fontSize: 10, fontWeight: 600}}>OKay, I”m Waiting....</Text>
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                                <Text style={{ color: '#918FB7', fontFamily: 'Plus Jakarta Sans', fontSize: 10, fontWeight: 400}}>10:53</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                        <View>
                            <View style={{maxWidth: 250, marginVertical: 10, borderRadius: 10, paddingHorizontal: 10, paddingVertical: 10, backgroundColor: '#2B8F66'}}>
                                <Text style={{color: '#F5F6FA', fontFamily: 'Plus Jakarta Sans', fontSize: 10, fontWeight: 600}}>Maybe, Nearly July, 2022</Text>
                            </View>
                            <Text style={{ color: '#918FB7', fontFamily: 'Plus Jakarta Sans', fontSize: 10, fontWeight: 400}}>10:53</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                        <View>
                            <View style={{maxWidth: 250, marginVertical: 10, borderRadius: 10, borderColor: '#2B8F6633', borderWidth: 1, backgroundColor: 'white', paddingHorizontal: 10, paddingVertical: 10}}>
                                <Text style={{color: '#8F8F8F', fontFamily: 'Plus Jakarta Sans', fontSize: 10, fontWeight: 600}}>OKay, I”m Waiting....</Text>
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                                <Text style={{ color: '#918FB7', fontFamily: 'Plus Jakarta Sans', fontSize: 10, fontWeight: 400}}>10:53</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <View style={{height: windowHeight * 10 / 100, flexDirection : 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: windowWidth * 10 / 100, paddingTop: 10}}>
                    <TouchableOpacity>
                        <Image source={require('../../assets/image/Mic(1).png')}></Image>
                    </TouchableOpacity>
                    <View style={{paddingHorizontal: 5, borderRadius: 10, borderWidth: 1, borderColor: '#2B8F6680', flexDirection: 'row', gap: 0, alignItems: 'center'}}>
                        <TextInput style={{width: windowWidth * 55 / 100}} placeholder="Write here..."></TextInput>
                        <TouchableOpacity>
                            <Image source={require('../../assets/image/Send.png')}></Image>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}