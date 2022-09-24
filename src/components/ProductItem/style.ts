import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    root : {
        flexDirection: 'row',
        borderWidth : 1,
        borderColor: '#d1d1d1',
        borderRadius : 10,
        backgroundColor: '#fff',
        marginVertical:5,
    },
    image : {
        flex:2,
        height: 150,
        resizeMode:'contain',
    },
    title : {
        fontSize: 18,
    },
    price : {
        fontSize:18,
        fontWeight:'bold',
    },
    rightContainer : {
        padding:10,
        flex:3,
    },
    page :{
        padding:10,
    },
    ratingContainer :{
        flexDirection: 'row',
        alignItems:'center',
        marginVertical:5,
    },
    star :{
        margin:2,
    },
    oldprice :{
        fontSize:12,
        fontWeight:'normal',
        textDecorationLine:'line-through',
    }
    })

    export default style;