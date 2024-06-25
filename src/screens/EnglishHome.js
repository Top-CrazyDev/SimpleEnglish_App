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

const CategoryBtn = ({ category, setCategoryIndex, index, selectedIndex }) => {
    const windowWidth = Dimensions.get('window').width;
    return (
        <TouchableOpacity style={{ marginLeft: windowWidth * 10 / 480, borderRadius: windowWidth * 20 / 480, backgroundColor: selectedIndex === index ? Colors.btn : 'white', borderWidth: 1, borderColor: Colors.btn }} onPress={() => setCategoryIndex(index)}>
            <Text style={{ paddingTop: windowWidth * 1 / 480, paddingBottom: windowWidth * 2 / 480, paddingLeft: windowWidth * 20 / 480, paddingRight: windowWidth * 20 / 480, color: selectedIndex === index ? 'white' : Colors.btn, fontWeight: 600, fontSize: 16, fontFamily: 'Plus Jakarta Sans' }}>{category}</Text>
        </TouchableOpacity>
    )
}

const NewsItem = ({ news, imageIndex, setImageIndex, index }) => {
    const windowWidth = Dimensions.get('window').width;
    const MoreIcon2 = (<Icon name={"ellipsis-vertical"} color={Colors.active} size={20} />);

    const selectNews = (index) => {
        setImageIndex(index);
    }

    return (
        <TouchableOpacity onPress={() => selectNews(index)}>
            <View style={{ paddingTop: windowWidth * 20 / 480, }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ width: windowWidth * 274 / 430, fontWeight: 400, fontSize: 18, fontFamily: "Plus Jakarta Sans" }}>
                        {news.content}
                    </Text>
                    <Image style={{ width: windowWidth * 103 / 480, height: windowWidth * 78 / 480, paddingTop: windowWidth * 4 / 100 }} source={require('../../assets/image/business.png')}></Image>
                </View>
                <View style={{ paddingTop: windowWidth * 2 / 100, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ width: windowWidth * 41.6 / 100, }}>
                        <View style={{ height: windowWidth * 6 / 100, flexDirection: "row", justifyContent: "flex-start" }}>
                            <Image source={require('../../assets/image/CN.png')}></Image>
                            <Text style={{ paddingLeft: windowWidth * 4.1 / 100, color: "#444444", fontSize: 16, fontWeight: 500, fontFamily: "Plus Jakarta Sans" }}>
                                CNN News
                            </Text>
                        </View>
                        <View style={{ alignItems: 'center', flexDirection: "row", justifyContent: 'space-between' }}>
                            <View style={{ alignItems: 'center', flexDirection: "row" }}>
                                <Image source={require('../../assets/image/Vector.png')}></Image>
                                <Text>{" "}{news.date}</Text>
                            </View>
                            <View style={{ alignItems: 'center', flexDirection: "row" }}>
                                <Image source={require('../../assets/image/eye.png')}></Image>
                                <Text>{" "}{news.viewcount}</Text>
                            </View>
                            <View style={{ alignItems: 'center', flexDirection: "row" }}>
                                <Image source={require('../../assets/image/smallmessage.png')}></Image>
                                <Text>{" "}{news.replycount}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ width: windowWidth * 50 / 480, height: windowWidth * 4.1 / 100, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity style={{ paddingTop: windowWidth * 2 / 480 }}>
                            <Image source={require('../../assets/image/share.png')}></Image>
                        </TouchableOpacity>
                        <OptionsMenu
                            customButton={MoreIcon2}
                            buttonStyle={{ width: windowWidth * 15 / 480, height: windowWidth * 15 / 480, resizeMode: "contain" }}
                            destructiveIndex={1}
                            options={["Add to favorite", "Hide this", "Report this", "Send feedback"]}
                            actions={[this.editPost, this.deletePost]}
                        />
                    </View>
                </View>
                {index === imageIndex ? <Image source={require("../../assets/image/adb.png")}></Image> : <View></View>}
            </View>
        </TouchableOpacity>
    )
}

export default function EnglishHome() {
    const theme = useContext(themeContext);
    const navigation = useNavigation();
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const [categoryindex, setCategoryIndex] = useState(0);
    const [categoryContent, setCategoryContent] = useState([]);
    const [imageIndex, setImageIndex] = useState(-1);
    const MoreIcon = require('../../assets/image/more.png')
    const MoreIcon2 = (<Icon name={"ellipsis-vertical"} color={Colors.active} size={20} />);
    const category = [
        "All",
        "Politics",
        "Technology",
        "Business",
        "Sports",
        "Entertainment",
        "Science",
        "Health",
        "Travel",
        "Top_Stories",
        "Education"
    ];

    useEffect(() => {
        if (categoryindex === 0) {
            setCategoryContent(Top);
        } else {
            setCategoryContent(Top.filter(top => top.category === category[categoryindex].toLowerCase()));
        }
    }, [categoryindex]);
    return (
        <SafeAreaView style={{flex: 1, paddingBottom: windowWidth * 60 / 480 }}>
            <Image source={require('../../assets/image/background2.png')} style={{position: 'absolute', width: windowWidth,height: windowWidth * 950 / 480}}>
            </Image>
            <ScrollView style={{paddingLeft: windowWidth * 5 / 100, paddingTop: windowWidth * 6 / 100, paddingRight: windowWidth * 5 / 100 }}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{width: 50, height: 50}}>
                    <Image source={require('../../assets/image/back.png')}></Image>
                </TouchableOpacity>
                <View style={{paddingTop: 10}}>
                    <Text style={{fontFamily: 'Plus Jakarta Sans', fontSize: 15, fontWeight: 600, color: '#323142'}}>Hello Mike!</Text>
                    <Text style={{fontFamily: 'Plus Jakarta Sans', fontSize: 20, fontWeight: 800, color: '#2B8F66'}}>Lets Learn English With Ai-Assistant</Text>
                </View>
                <View
                    style={[
                    {
                        paddingTop: 10,
                        borderBottomColor: "#999999",
                        borderBottomWidth: 0.84,
                        width: windowWidth * 30 / 100,
                        marginLeft: windowWidth * 30 / 100
                    },
                    style,
                    ]}
                />
                <Text style={{paddingTop: 30, fontFamily: 'Plus Jakarta Sans', fontSize: 20, fontWeight: 800, color: '#666666'}}>
                    Speaking
                </Text>
                <ScrollView style={{ paddingTop: 20 }} nestedScrollEnabled={true}
                    horizontal
                    showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity>
                        <Image source={require('../../assets/image/F1.png')}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../../assets/image/F2.png')}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../../assets/image/F1.png')}></Image>
                    </TouchableOpacity>
                </ScrollView>
                <View
                    style={[
                    {
                        paddingTop: 10,
                        borderBottomColor: "#999999",
                        borderBottomWidth: 0.84,
                        
                    },
                    style,
                    ]}
                />
                <Text style={{paddingTop: 30, fontFamily: 'Plus Jakarta Sans', fontSize: 20, fontWeight: 800, color: '#666666'}}>
                    Chatting
                </Text>
                <View style={{paddingTop: 20, paddingLeft: windowWidth * 10 / 100}}>
                    <Image source={require('../../assets/image/F4.png')}></Image>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}