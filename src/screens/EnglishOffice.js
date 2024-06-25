import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    TextInput,
    Image,
    ScrollView,
    StatusBar,
    Dimensions,
} from "react-native";
import React, { useState, useContext, useEffect, useRef } from "react";
import { AppBar } from "@react-native-material/core";
import Icon from "react-native-vector-icons/Ionicons";
import { Avatar } from "react-native-paper";
import { Colors } from "../theme/color";
import theme from "../theme/theme";
import themeContext from "../theme/themeContex";
import style from "../theme/style";
import { useNavigation } from "@react-navigation/native";
import { login } from "../redux/actions/auth";
import { useSelector, useDispatch } from "react-redux";
import { store } from "../redux/store";
import { CheckBoxIcon } from "@rneui/base/dist/CheckBox/components/CheckBoxIcon";
import { Top } from '../json/category.json';
import OptionsMenu from "react-native-options-menu";
import RBSheet from "react-native-raw-bottom-sheet";
import {useNetInfo} from "@react-native-community/netinfo";
import SelectDropdown from 'react-native-select-dropdown';
import Icon2 from 'react-native-vector-icons/SimpleLineIcons';

export default function EnglishOffice(){
    const theme = useContext(themeContext);
    const navigation = useNavigation();
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    
    const emojisWithIcons = [
        {title: 'Begineer'},
        {title: 'Intermediate'},
        {title: 'Advanced'},
        
    ];
    return(
        <SafeAreaView style={{flex: 1,  paddingBottom: windowWidth * 60 / 480}}>
            <Image source={require('../../assets/image/background2.png')} style={{position: 'absolute', width: windowWidth,height: windowWidth * 950 / 480}}>
            </Image>
            <ScrollView style={{paddingTop: windowWidth * 6 /100}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={require('../../assets/image/back.png')}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../../assets/image/dots-horizontal.png')}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <Image source={require('../../assets/image/office.png')}></Image>
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
                <View style={{flexDirection: 'row', gap: 20, alignItems: 'center', paddingHorizontal: windowWidth * 5 / 100, paddingTop: 20}}>
                    <Image source={require('../../assets/image/SE.png')}></Image>
                    <View style={{padding: 10, backgroundColor: 'white', borderWidth: 1, borderColor: '#2B8F661A', borderTopRightRadius: 10, borderBottomLeftRadius:10, borderBottomRightRadius: 10}}>
                        <Text style={{fontFamily: 'Plus Jakarta Sans', fontSize: 12, fontWeight: 400}}>Hello!</Text>
                    </View>
                    <TouchableOpacity>
                        <Image source={require('../../assets/image/Speaker.png')}></Image>
                    </TouchableOpacity>
                </View>
                
                <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'center', paddingTop: 300}}>
                    <Image source={require('../../assets/image/F5.png')}></Image> 
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}