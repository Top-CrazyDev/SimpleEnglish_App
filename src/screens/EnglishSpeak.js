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
import Icon3 from 'react-native-vector-icons/Feather';
import Icon4 from 'react-native-vector-icons/Octicons';
import Icon5 from 'react-native-vector-icons/SimpleLineIcons';

export default function EnglishSpeak(){
    const theme = useContext(themeContext);
    const navigation = useNavigation();
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const MoreIcon2 = (<Icon name={"ellipsis-vertical"} color={Colors.active} size={20} />);
    const emojisWithIcons = [
        {title: 'Begineer'},
        {title: 'Intermediate'},
        {title: 'Advanced'},
        
    ];
    

    return(
        <SafeAreaView style={{paddingBottom: windowWidth * 60 / 480}}>
            <Image source={require('../../assets/image/background2.png')} style={{position: 'absolute', width: windowWidth,height: windowWidth * 950 / 480}}>
            </Image>
            <ScrollView style={{paddingTop: windowWidth * 6 /100}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <TouchableOpacity  onPress={() => navigation.navigate("EnglishHome")}>
                        <Image source={require('../../assets/image/back.png')}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../../assets/image/dots-horizontal.png')}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <Text style={{fontFamily: 'Plus Jakarta Sans', fontSize: 20, fontWeight: 600, color: '#2B8F66'}}>Simply English</Text>
                </View>
                <SelectDropdown
                    data={emojisWithIcons}
                    onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
                    }}
                    renderButton={(selectedItem, isOpened) => {
                    return (
                        <View style={{
                            width: windowWidth * 200 / 480,
                            height: 50,
                            borderRadius: 12,
                            marginHorizontal: windowWidth * 30 / 100,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingHorizontal: 12,

                        }}>
                            <Text style={{
                                flex: 1,
                                fontSize: 15,
                                fontWeight: '400',
                                color: '#8F8F8F',
                                
                            }}>
                                {(selectedItem && selectedItem.title) || 'Beginner'}
                            </Text>
                            <Icon name={isOpened ? 'chevron-up' : 'chevron-down'} style={{fontSize: 28, opacity: 0.5}} />
                        </View>
                    );
                    }}
                    renderItem={(item, index, isSelected) => {
                    return (
                        <View style={{...({
                            width: '100%',
                            flexDirection: 'row',
                            paddingHorizontal: 12,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderBottomColor: '#2B8F6680',
                            borderBottomWidth: 1,
                            paddingVertical: 8,}), ...(isSelected && {backgroundColor: '#2B8F6614'})}}>
                            <Text style={{flex: 1,
                                fontSize: 15,
                                fontWeight: '300',
                                color: '#8F8F8F',
                                
                            }}>{item.title}</Text>
                        </View>
                    );
                    }}
                    showsVerticalScrollIndicator={false}
                    dropdownStyle={{backgroundColor: '#E9ECEF', borderRadius: 8,}}
                />
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
                <View style={{paddingTop: 20, paddingHorizontal: windowWidth * 5 / 100, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <View style={{width: windowWidth * 20 /100, height: 40, paddingHorizontal: 15, borderRadius: 20, borderWidth: 1, borderColor: '#2B8F6680', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                            <Text style={{fontFamily: 'Plus Jakarta Sans', fontSize: 10, fontWeight: 300}}>
                                School
                            </Text>
                            <Icon2 name="graduation" size={15}/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <View style={{width: windowWidth * 20 /100, height: 40, paddingHorizontal: 15, borderRadius: 20, borderWidth: 1, borderColor: '#2B8F6680', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                            <Text style={{fontFamily: 'Plus Jakarta Sans', fontSize: 10, fontWeight: 300}}>
                                Music
                            </Text>
                            <Icon3 name="volume-2" size={15}/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("SpeakNavigator",{screen: 'EnglishOffice'})} style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <View style={{width: windowWidth * 20 /100, height: 40, paddingHorizontal: 15, borderRadius: 20, borderWidth: 1, borderColor: '#2B8F6680', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                            <Text style={{fontFamily: 'Plus Jakarta Sans', fontSize: 10, fontWeight: 300}}>
                                Office
                            </Text>
                            <Icon5 name="bag" size={15}/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <View style={{width: windowWidth * 20 /100, height: 40, paddingHorizontal: 15, borderRadius: 20, borderWidth: 1, borderColor: '#2B8F6680', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                            <Text style={{fontFamily: 'Plus Jakarta Sans', fontSize: 10, fontWeight: 300}}>
                                Cinema
                            </Text>
                            <Icon4 name="device-camera-video" size={15}/>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row', justifyContent:'center', paddingTop: 40}}>
                    <Text style={{fontFamily: 'Plus Jakarta Sans', fontSize: 20, fontWeight: 400, color: '#2B8F66'}}>
                        Speak this sentence
                    </Text>
                </View>
                <View style={{backgroundColor: 'white' , marginTop: 20, paddingTop: 20, paddingHorizontal: windowWidth * 5 / 100}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <View>
                            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                                <Text style={{fontFamily: 'Plus Jakarta Sans', fontSize: 20, fontWeight: 400, color: '#0066ff'}}>My</Text>
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                                <Text style={{fontFamily: 'Plus Jakarta Sans', fontSize: 10, fontWeight: 400, color: '#666666'}}>9.5</Text>
                            </View>
                        </View>
                        <View>
                            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                                <Text style={{fontFamily: 'Plus Jakarta Sans', fontSize: 20, fontWeight: 400, color: '#0066ff'}}>friend</Text>
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                                <Text style={{fontFamily: 'Plus Jakarta Sans', fontSize: 10, fontWeight: 400, color: '#666666'}}>9.5</Text>
                            </View>
                        </View>
                        <View>
                            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                                <Text style={{fontFamily: 'Plus Jakarta Sans', fontSize: 20, fontWeight: 400, color: '#0066ff'}}>sits</Text>
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                                <Text style={{fontFamily: 'Plus Jakarta Sans', fontSize: 10, fontWeight: 400, color: '#666666'}}>9.5</Text>
                            </View>
                        </View>
                        <View>
                            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                                <Text style={{fontFamily: 'Plus Jakarta Sans', fontSize: 20, fontWeight: 400, color: '#0066ff'}}>next</Text>
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                                <Text style={{fontFamily: 'Plus Jakarta Sans', fontSize: 10, fontWeight: 400, color: '#666666'}}>9.5</Text>
                            </View>
                        </View>
                        <View>
                            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                                <Text style={{fontFamily: 'Plus Jakarta Sans', fontSize: 20, fontWeight: 400, color: '#0066ff'}}>to</Text>
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                                <Text style={{fontFamily: 'Plus Jakarta Sans', fontSize: 10, fontWeight: 400, color: '#666666'}}>9.5</Text>
                            </View>
                        </View>
                        <View>
                            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                                <Text style={{fontFamily: 'Plus Jakarta Sans', fontSize: 20, fontWeight: 400, color: '#0066ff'}}>me</Text>
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                                <Text style={{fontFamily: 'Plus Jakarta Sans', fontSize: 10, fontWeight: 400, color: '#666666'}}>9.5</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{flexDirection:'row', justifyContent: 'center', paddingTop: 10}}>
                        <Text style={{fontFamily: 'Plus Jakarta Sans', fontSize: 15, fontWeight: 400, color: '#ff9933'}}>/mai frend sits nekst tu mi/</Text>
                    </View>
                    <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'center', paddingTop: 10}}>
                        <Image style={{width: windowWidth * 15 / 100, height: windowWidth * 15 / 100}} source={require('../../assets/image/speaker2.png')}></Image>
                    </TouchableOpacity>
                    <View style={{flexDirection: 'row', justifyContent: 'center', paddingBottom: 10}}>
                        <Text style={{fontFamily: 'Plus Jakarta Sans', fontSize: 20, fontWeight: 400, color: '#666666'}}>Diem:</Text>
                        <Text style={{fontFamily: 'Plus Jakarta Sans', fontSize: 20, fontWeight: 400, color: '#009933'}}>9.7</Text>
                    </View>
                </View>
                <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'center', paddingTop: 5}}>
                    <Image source={require('../../assets/image/F5.png')}></Image> 
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}