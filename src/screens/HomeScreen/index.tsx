import React from 'react';
import {View,FlatList, Text, StyleSheet, Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import style from '../../components/ProductItem/style'
import ProductItem from '../../components/ProductItem';
import products from '../../data/products';
const HomeScreen = () => {
    return (
        <View style={style.page}>
            <FlatList data={products} renderItem={({item}) => <ProductItem item={item} />} />


        </View>
    )
}

export default HomeScreen;