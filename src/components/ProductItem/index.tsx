import React from 'react';
import { View, Text, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import style from './style'
interface ProductItemProps {
    item: {
        id: string,
        title : string,
        image : string,
        avgRating: number,
        ratings: number,
        price: number,
        oldPrice?: number
    }
}

const ProductItem = (props: ProductItemProps) => {
    const {item} = props;
    return (
        <View>
            <View style={style.root}>
                <Image style={style.image} 
                source={{uri: item.image}} />
                <View style={style.rightContainer}>
                    {/* product title */}
                    <Text style={style.title} 
                    numberOfLines={3}>{item.title}</Text>
                    {/* rattings */}
                    <View style={style.ratingContainer}>
                        {
                            [0,0,0,0,0].map((el, i) => 
                                <FontAwesome style={style.star}
                                key={`${item.id}-${i}`} 
                                name={i < Math.floor(item.avgRating) ? 'star' : 'star-o'} 
                                size={18} 
                                color={'#e47911'} />
                            )
                        }
                       
                        <Text>{item.ratings}
                            
                        </Text>
                    </View>
                    {/* price */}
                    <Text style={style.price}>from ${item.price}
                    {item.oldPrice && (<Text style={style.oldprice}> {item.oldPrice} </Text>)}
                    </Text>
                </View>
                </View>
        </View>
    )
}
export default ProductItem;