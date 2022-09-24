import React, {useState}from 'react';
import {View, Image, Pressable, StyleSheet, FlatList, useWindowDimensions} from 'react-native';
import products from '../../data/products';



const ImageCarousle = ({images} : {images: [string]}) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const windowWidth = useWindowDimensions().width;
    return (
        <View style={style.root}>
            {/* display a list of image */}
            <FlatList data={images} renderItem={({item}) => (
                <Image style={[style.image, {width: windowWidth-40}]} source={{uri:item}} />
                )} horizontal 
                showsHorizontalScrollIndicator={false} 
                snapToInterval={windowWidth-20}
                snapToAlignment={'center'}
                decelerationRate={'fast'}
                viewabilityConfig={{
                    viewAreaCoveragePercentageThreshold : 50,
                }}
                onViewableItemsChanged={({viewableItems}) => {
                    console.log(viewableItems)
                }}
            />
            <View style={style.dots}>
                {images.map((image, index) => (
                <View style={[style.dot, {backgroundColor: index === activeIndex? '#c9c9c9' : '#ededed'}]} />
            ))}
            </View>
        </View>
    )
}

const style = StyleSheet.create(
    {
        root:{},
        image:{
            margin:10,
            height:250,
            resizeMode :'contain',
        },
        dot:{
            width:10,
            height:10,
            borderRadius:25,
            borderWidth:1,
            borderColor:'#c9c9c9',
            margin:5,
            backgroundColor:'#ededed',

        },
        dots:{
            flexDirection:'row',
            justifyContent:'center',
        }
    }
)

export default ImageCarousle;