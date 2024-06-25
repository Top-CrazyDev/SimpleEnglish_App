import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    TextInput,
    Image,
    ScrollView,
    StatusBar,
    ImageBackground,
    Dimensions
  } from "react-native";
  import React, { useState, useContext, useEffect } from "react";
  import { AppBar } from "@react-native-material/core";
  import Icon from "react-native-vector-icons/Ionicons";
  import { Avatar } from "react-native-paper";
  import { Colors } from "../../theme/color";
  import theme from "../../theme/theme";
  import themeContext from "../../theme/themeContex";
  import style from "../../theme/style";
  import { useNavigation } from "@react-navigation/native";
  import { login } from "../../redux/actions/auth";
  import { useSelector, useDispatch } from "react-redux";
  import { store } from "../../redux/store";
  import { CheckBoxIcon } from "@rneui/base/dist/CheckBox/components/CheckBoxIcon";
  import Svg, { Defs, Rect, LinearGradient, Stop } from 'react-native-svg';
  
  const FROM_COLOR = '#2b9066';
  const TO_COLOR = '#4cc392';

  export default function Login2() {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const theme = useContext(themeContext);
    const [darkMode, setDarkMode] = useState(false);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const { isLoading, error, message } = useSelector((state) => state.common);
    const { user } = useSelector((state) => state.auth);
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const handleLogin = async () => {
      try {
        if (isLoading) return;
        await store.dispatch(login({ email, password }));
      } catch (err) {
        console.log(err);
      }
    };
  
    return (
      <SafeAreaView
        style={[style.area, {paddingTop: 40 }]}
      >
        <Image source={require('../../../assets/image/background.png')} style={{position: 'absolute', width: windowWidth,height: windowWidth * 600 / 480}}>
        </Image>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ flex: 1, marginHorizontal: windowWidth * 15 / 100 }}>
            <View>
                <Text style={{ textAlign: "center", color: "#2C9168", fontSize:30, fontWeight: 600, fontFamily: "Plus Jakarta Sans", paddingTop: 50}}>
                    Welcome to!
                </Text>
            </View>
            <View>
                <Text style={{ textAlign: "center", color: '#49BF8E', fontSize:50, fontWeight: 800, fontFamily: "Plus Jakarta Sans", paddingTop: 20}}>
                    SIMPLY ENGLISH
                </Text>
            </View>
            
            <View style={{paddingTop: 50, gap: 50}}>
              <View>
                <Svg height={50} width="100%" style={{position:'absolute'}}>
                  <Defs>
                      <LinearGradient id="grad" x1="0%" y1="100%" x2="100%" y2="0%">
                          <Stop offset="0" stopColor={ FROM_COLOR }/>
                          <Stop offset="1" stopColor={ TO_COLOR }/>
                      </LinearGradient>
                  </Defs>
                  <Rect rx={25} ry={25} width="100%" height="100%" fill="url(#grad)"/>
                </Svg>
                <TouchableOpacity onPress={() => navigation.navigate("BottomNavigator")} style={{paddingTop: 12}}>
                  <Text style={[style.btntxt, {textAlign: 'center'}]}>Get Started</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={{marginHorizontal: windowWidth * 25 / 100}}>
                <Text style={{textAlign: 'center', fontFamily: 'Plus Jakarta Sans', fontSize: 20, fontWeight: 600, color: '#2B8F66'}}>Login</Text>
              </TouchableOpacity>
            </View>
            <View style={{paddingTop: 100, gap: 20}}>
              <View>
                <TouchableOpacity onPress={() => navigation.navigate("TabNavigator",{screen: 'HomeNavigator'})} style={{marginHorizontal: windowWidth * 5 / 100, paddingHorizontal: windowWidth * 5 / 100, paddingVertical: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderRadius: 20, borderColor: '#2B8F6633', borderWidth: 1, backgroundColor: 'white'}}>
                    <Image
                    source={require("../../../assets/image/Apple.png")}
                    ></Image>
                  <Text style={[style.btntxt, {textAlign: 'center', color: '#616161'}]}>Continue with Google</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity style={{marginHorizontal: windowWidth * 5 / 100, paddingHorizontal: windowWidth * 5 / 100, paddingVertical: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderRadius: 20, borderColor: '#2B8F6633', borderWidth: 1, backgroundColor: 'white'}}>
                  <Image
                    source={require("../../../assets/image/Google.png")}
                  ></Image>
                  <Text style={[style.btntxt, {width:windowWidth * 180/ 480, color: '#616161'}]}>Continue with Gpple</Text>
                </TouchableOpacity>
              </View>
            </View>
           
            <View style={{paddingTop: 100}}>
              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Text style={[style.txt1, {fontSize: 10}]}>By registering you Agree with</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                  <Text
                    style={[
                      style.txt,
                      { color: '#49BF8E', fontSize: 12, fontWeight: "500"},
                    ]}
                  >
                    {" "}
                    Our Terms,
                  </Text>
                </TouchableOpacity>
                <Text style={[style.txt1, {fontSize: 10}]}>learn how</Text>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Text style={[style.txt1, {fontSize: 10}]}>collect, use and share your data in</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                  <Text
                    style={[
                      style.txt,
                      { color: '#49BF8E',fontSize: 12, fontWeight: "500"},
                    ]}
                  >
                    {" "}
                    Privacy Policy
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
  
          </View>
        </ScrollView>
      </SafeAreaView>
      
    );
  }
  