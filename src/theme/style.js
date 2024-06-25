import { StyleSheet } from "react-native";
import { theme } from "../theme/theme";
import { Colors } from "./color";
import themeContext from "./themeContex";

export default StyleSheet.create({
  area: {
    flex: 1,
    // paddingHorizontal: 20,
    // fontFamily:'Itim-Regular'
  },
  main: {
    flex: 1,
    backgrondColor: "white",
    marginHorizontal: 20,
    fontFamily:"Plus Jakarta Sans"
  },
  title: {
    // fontSize: 32,
    // fontWeight: "700",
    // color: Colors.secondary,
    fontFamily: 'Plus Jakarta Sans',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 32,
    color:Colors.secondary,
    fontWeight: 700,
    lineHeight: 40,
    letterSpacing: 1.3,
    textAlign: 'left',
  },
  txt: {
    // fontSize: 16,
    // fontWeight: "400",
    // color: Colors.secondary,
    // fontFamily: "Plus Jakarta Sans",
    fontFamily: 'Plus Jakarta Sans',
    fontStyle: 'normal',
    color: Colors.secondary,
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 30,
    letterSpacing: 0.08,
  },
  btn: {
    backgroundColor: "#25A2E8",
    alignItems: "center",
    paddingVertical: 15,
    borderRadius: 25,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    // fontFamily:'Itim-Regular'
  },
  btntxt: {
    fontSize: 16,
    color: Colors.secondary,
    fontFamily:"Plus Jakarta Sans",
  },
  indicator: {
    borderColor: "#BDBDBD",
    borderWidth: 1,
    padding: 4,
    borderRadius: 20,
    backgroundColor: "#BDBDBD",
    marginHorizontal: 5,
  },
  logintitle: {
    fontSize: 26,
    textAlign: "center",
    fontWeight: "600",
    fontFamily:"Plus Jakarta Sans",
  },
  txt1: {
    fontSize: 16,
    color: Colors.disable,
    fontFamily:"Plus Jakarta Sans",
    lineHeight: 30,
  },
  txtinput: {
    // backgroundColor:'white',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 20,
    borderColor: Colors.bord,
    color: Colors.disable,
    height: 50,
    fontFamily:"Plus Jakarta Sans"
  },

  radio: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    borderColor: Colors.bord,
    color: Colors.disable,
    fontFamily:"Plus Jakarta Sans"
  },

  radioYesNo: {
    borderWidth: 0,
    borderRadius: 10,
    paddingHorizontal: 10,
    borderColor: Colors.bord,
    color: Colors.disable,
    fontFamily:"Plus Jakarta Sans"
  },

  divider: {
    height: 1,
    backgroundColor: Colors.disable,
    width: 80,
  },

  divider1: {
    height: 1,
    backgroundColor: Colors.bord,
    marginTop: 20,
    marginBottom: 25,
  },

  dividertxt: {
    color: Colors.disable,
    fontFamily: "Plus Jakarta Sans",
  },

  btn1: {
    alignItems: "center",
    paddingVertical: 15,
    borderRadius: 25,
    flexDirection: "row",
    // justifyContent: "center",
  },
  btntxt1: {
    fontSize: 16,
    color: Colors.active,
    paddingLeft: 15,
    fontFamily: "Plus Jakarta Sans",
  },
  title1: {
    fontSize: 40,
    fontWeight: 800,
    fontStyle:'italic',
    fontFamily: "Plus Jakarta Sans",
    lineHeight: 48,
    letterSpacing: 0.08,
  },
  title2: {
    fontFamily: 'Plus Jakarta Sans',  
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.08,

  },
  subtitle: {
    // fontSize: 20,
    // fontWeight: "600",
    // fontFamily: "Plus Jakarta Sans",
    fontFamily: 'Plus Jakarta Sans',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 24,
    lineHeight: 32,
    alignItems: 'center',
    letterSpacing: 0.08,
  },
  subtxt: {
    fontSize: 14,
    color: Colors.disable,
    lineHeight: 20,
    fontFamily: "Plus Jakarta Sans",
  },
  categoryTextSelected: {
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: "#227C70",
    // fontFamily:'Itim-Regular'
  },
  categoryText: {
    fontSize: 14,
    fontWeight: "600",
    // fontFamily:'Itim-Regular'
  },
  categorycontainer: {
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 30,
    justifyContent: "space-between",
    // fontFamily:'Itim-Regular'
  },
  inputContainer: {
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: Colors.bord,
    flex: 1,
    marginTop: 10,
    borderRadius: 20,
    paddingHorizontal: 10,
    height: 50,
    // fontFamily:'Itim-Regular'
  },
  btn3: {
    marginLeft: 10,
    height: 50,
    width: 50,
    backgroundColor: "#227C70",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    borderRadius: 10,
    // fontFamily:'Itim-Regular'
    // paddingHorizontal:10
  },
  verticaldivider: {
    height: "40%",
    width: 1,
  },
  modalcontainer: {
    // display: 'flex',
    // flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'flex-end',
    // flex: 1,
    borderRadius: 20,
    paddingHorizontal: 30 ,
    marginVertical: 140,
    paddingTop: 50,
    paddingBottom: 5,
    marginHorizontal: -10,
    alignSelf: "center",
    // fontFamily:'Itim-Regular'
  },
  btnoutline: {
    borderColor: Colors.bord,
    borderWidth: 1,
    alignItems: "center",
    paddingVertical: 14,
    borderRadius: 10,
    // fontFamily:'Itim-Regular'
  },
  txtInbox: {
    justifyContent: "space-between",
    alignItems: 'flex-start',
    marginVertical: 20,
    paddingHorizontal: 1,
    marginLeft:2,
    marginRight:2,
    borderWidth: 1,
    padding:10,
    borderColor: Colors.bord,
    color: Colors.disable,
  },
  txtList: {
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 16,
    lineHeight: 24,
    alignItems: 'center',
    letterSpacing: 0.08,
  }
});
