import React, {useState} from 'react';
import {View, Text} from 'react-native';
import style from './style';
import product from '../../data/product';
import {Picker} from '@react-native-picker/picker';
import QuantitySelector from '../../components/QuantitySelector'
import Button from '../../components/Buttom';
import ImageCarousle from '../../components/ImageCarousle';

const ProductScreen = () => {   
    const [selectedOption, setSelectedOption]= useState(product.options ? product.options[0] : null);
    const [quantity, setQuantity] = useState(1);

    return (
        <View style={style.root}>
            <Text>{product.title}</Text>
            {/* image carousel */}
            <ImageCarousle images={product.images} />
            {/* option selector */}
            <Picker selectedValue={selectedOption} onValueChange={(itemValue) => setSelectedOption(itemValue)}>
                {product.options.map((op) => (<Picker.Item label={op} value={op} />))}                                
            </Picker>

            {/* price */}
            <Text style={style.price}>from ${product.price}
                    {product.oldPrice && (<Text style={style.oldprice}> {product.oldPrice} </Text>)}
                    </Text>
            {/* description */}
            <Text style={style.description}>
                {product.description}
            </Text>
            {/* quantity selector */}
            <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
            <View>

            </View>

            {/* button */}
            <Button onPress={() => console.warn("add")} containerStyles={{backgroundColor:'#e3c905'}} text="Add to Cart"/>
            <Button onPress={() => console.warn("buy")} text="Buy Now"/>
        </View>
    )
}

export default ProductScreen;