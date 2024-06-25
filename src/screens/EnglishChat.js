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

export default function EnglishChat(){
    const theme = useContext(themeContext);
    const navigation = useNavigation();
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    return(
        <SafeAreaView style={{paddingBottom: windowWidth * 60 / 480}}>
            <Image source={require('../../assets/image/background3.png')} style={{position: 'absolute', width: windowWidth,height: windowWidth * 950 / 480}}>
            </Image>
            <ScrollView style={{paddingTop: windowWidth * 6 /100}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <TouchableOpacity onPress={() => navigation.navigate('EnglishHome')}>
                        <Image source={require('../../assets/image/back.png')}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../../assets/image/dots-horizontal.png')}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <Text style={{fontFamily: 'Plus Jakarta Sans', fontSize: 20, fontWeight: 600, color: '#2B8F66'}}>Simply English</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center', paddingTop: 20}}>
                    <Text style={{fontFamily: 'Plus Jakarta Sans', fontSize: 20, fontWeight: 400, color: '#8F8F8F'}}>Grammer</Text>
                </View>
                <View
                    style={[
                    {
                        paddingTop: 10,
                        borderBottomColor: "#999999",
                        borderBottomWidth: 0.84,
                        width: windowWidth * 30 / 100,
                        marginHorizontal: windowWidth * 35 / 100
                    },
                    style,
                    ]}
                />
                <ScrollView style={{ padding: 20}} nestedScrollEnabled={true}
                    horizontal
                    showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'center', marginRight:10, padding: 10, borderRadius: 20, borderWidth: 1, borderColor: '#2B8F6680',}}>
                        <Text style={{fontFamily: 'Plus Jakarta Sans', fontSize: 15, fontWeight: 300, color: '#A0A0A5'}}>
                            Grammer
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'center', marginRight:10, padding: 10, borderRadius: 20, borderWidth: 1, borderColor: '#2B8F6680',}}>
                        <Text style={{fontFamily: 'Plus Jakarta Sans', fontSize: 15, fontWeight: 300, color: '#A0A0A5'}}>
                            Translation
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'center', marginRight:10, padding: 10, borderRadius: 20, borderWidth: 1, borderColor: '#2B8F6680',}}>
                        <Text style={{fontFamily: 'Plus Jakarta Sans', fontSize: 15, fontWeight: 300, color: '#A0A0A5'}}>
                            Text to speech
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'center', marginRight:10, padding: 10, borderRadius: 20, borderWidth: 1, borderColor: '#2B8F6680',}}>
                        <Text style={{fontFamily: 'Plus Jakarta Sans', fontSize: 15, fontWeight: 300, color: '#A0A0A5'}}>
                            Speech to text
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
                <ScrollView style={{height: windowHeight * 46.8 / 100}}>
                    <View>
                        <View style={{flexDirection: 'row', gap: 20, paddingHorizontal: windowWidth * 5 / 100, paddingTop: 20}}>
                            <Image source={require('../../assets/image/SE.png')}></Image>
                            <View style={{padding: 10, backgroundColor: 'white', borderWidth: 1, borderColor: '#2B8F661A', borderTopRightRadius: 10, borderBottomLeftRadius:10, borderBottomRightRadius: 10}}>
                                <Text style={{fontFamily: 'Plus Jakarta Sans', fontSize: 12, fontWeight: 400, color: '#8F8F8F'}}>Hello!</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center', gap: 20, paddingHorizontal: windowWidth * 20 / 100, paddingVertical: 10}}>
                            <TouchableOpacity>
                                <Image source={require('../../assets/image/Speaker.png')}></Image>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image source={require('../../assets/image/Copy.png')}></Image>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', gap: 20, alignItems: 'center', justifyContent: 'flex-end', paddingHorizontal: windowWidth * 5 / 100, paddingTop: 20}}>
                        <View style={{padding: 10, backgroundColor: 'white', borderWidth: 1, borderColor: '#2B8F661A', borderTopLeftRadius: 10, borderBottomLeftRadius:10, borderBottomRightRadius: 10}}>
                            <Text style={{fontFamily: 'Plus Jakarta Sans', fontSize: 12, fontWeight: 400, color: '#8F8F8F'}}>Hello!</Text>
                        </View>
                        <Image source={require('../../assets/image/Avatar.png')}></Image>
                    </View>
                    <View>
                        <View style={{flexDirection: 'row', gap: 20, paddingHorizontal: windowWidth * 5 / 100, paddingTop: 20}}>
                            <Image source={require('../../assets/image/SE.png')}></Image>
                            <View style={{padding: 10, backgroundColor: 'white', borderWidth: 1, borderColor: '#2B8F661A', borderTopRightRadius: 10, borderBottomLeftRadius:10, borderBottomRightRadius: 10}}>
                                <Text style={{fontFamily: 'Plus Jakarta Sans', fontSize: 12, fontWeight: 400, color: '#8F8F8F', maxWidth: windowWidth * 50 / 100}}>The sentence has a tense inconsistency. It should be: "I will go to school tomorrow." Is there anything else you would like to correct?</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center', gap: 20, paddingHorizontal: windowWidth * 20 / 100, paddingVertical: 10}}>
                            <TouchableOpacity>
                                <Image source={require('../../assets/image/Speaker.png')}></Image>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image source={require('../../assets/image/Copy.png')}></Image>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', gap: 20, alignItems: 'center', justifyContent: 'flex-end', paddingHorizontal: windowWidth * 5 / 100, paddingTop: 20}}>
                        <View style={{padding: 10, backgroundColor: 'white', borderWidth: 1, borderColor: '#2B8F661A', borderTopLeftRadius: 10, borderBottomLeftRadius:10, borderBottomRightRadius: 10}}>
                            <Text style={{fontFamily: 'Plus Jakarta Sans', fontSize: 12, fontWeight: 400, color: '#8F8F8F'}}>Hello!</Text>
                        </View>
                        <Image source={require('../../assets/image/Avatar.png')}></Image>
                    </View>
                    <View>
                        <View style={{flexDirection: 'row', gap: 20, paddingHorizontal: windowWidth * 5 / 100, paddingTop: 20}}>
                            <Image source={require('../../assets/image/SE.png')}></Image>
                            <View style={{padding: 10, backgroundColor: 'white', borderWidth: 1, borderColor: '#2B8F661A', borderTopRightRadius: 10, borderBottomLeftRadius:10, borderBottomRightRadius: 10}}>
                                <Text style={{fontFamily: 'Plus Jakarta Sans', fontSize: 12, fontWeight: 400, color: '#8F8F8F', maxWidth: windowWidth * 50 / 100}}>The sentence has a tense inconsistency. It should be: "I will go to school tomorrow." Is there anything else you would like to correct?</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center', gap: 20, paddingHorizontal: windowWidth * 20 / 100, paddingVertical: 10}}>
                            <TouchableOpacity>
                                <Image source={require('../../assets/image/Speaker.png')}></Image>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image source={require('../../assets/image/Copy.png')}></Image>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
                <View style={{ marginHorizontal: windowWidth * 5 / 100, marginVertical: 10,  padding: 5, borderRadius: 10, borderWidth: 1, borderColor: '#2B8F6680', flexDirection: 'row', gap: 0, alignItems: 'center'}}>
                    <TextInput style={{width: windowWidth * 75 / 100}} placeholder="Write here..."></TextInput>
                    <TouchableOpacity>
                        <Image source={require('../../assets/image/mic.png')} ></Image>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../../assets/image/Send.png')} ></Image>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}