import React, { useEffect, useState } from 'react'
import { Text, View, TouchableOpacity, ScrollView, Image, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from "expo-linear-gradient";
import Icon from 'react-native-vector-icons/FontAwesome5';
import request from '../config/axiosConfig';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import * as Font from 'expo-font';
import numeral from 'numeral'
import styles from '../styles/Details.Style';

const Details = ({ navigation, route }) => {
    const [sizeClicked, setSizeClicked] = useState(0);
    const [colorClicked, setColorClicked] = useState(0);
    const [size, setSize] = useState('');
    const [isCart, setCart] = useState(false);
    const [color, setColor] = useState('');
    let { item } = route.params;
    const [favorite, setFavorite] = useState(item.favorite);

    useEffect(() => {
        getData();
        loadFont();
    }, [])

    const handleFavorite = async (id) => {
        try {
            const res = await request.post('favorite', { id });
            if (res.data) {
                setFavorite(!item.favorite);
            }
            else
                alert('Lỗi yêu thích!');
        } catch (err) {
            console.log("Loi them yeu thich", err);
        }
    }

    const loadFont = async () => {
        await Font.loadAsync({
            OutfitBold: require('../assets/fonts/Outfit-Bold.ttf'),
            OutfitMedium: require('../assets/fonts/Outfit-Medium.ttf'),
            PoppinsMedium: require('../assets/fonts/Poppins-Medium.ttf'),
            PoppinsLight: require('../assets/fonts/Poppins-Light.ttf')
        })
    }

    const getData = async () => {
        try {
            const res = await request.get(`cart/${item.id}`);
            if (res.data) {
                setCart(true);
            } else {
                setCart(false);
            }
        } catch (err) {
            setCart(false);
            console.log("Loi kiem tra gio hang:", err);
        }
    }

    const handleSetSize = (clicked, size) => {
        setSizeClicked(clicked);
        setSize(size);
    }

    const handleSetColor = (clicked, color) => {
        setColorClicked(clicked);
        setColor(color);
    }

    const handleAddToCart = async () => {
        if (size === '' || color === '') {
            Alert.alert(
                "Thông báo",
                `Vui lòng chọn kích thước và màu sắc!`,
                [
                    {
                        text: "Đã hiểu", onPress: () => { },
                        style: 'default'
                    }
                ]
            );
            return;
        }
        try {
            route.params = { ...route.params, size, color };
            const res = await request.post('cart', route.params)
            if (res.data) {
                Alert.alert(
                    "Thông báo",
                    `Thêm vào giỏ hàng thành công!`,
                    [
                        {
                            text: "Ok", onPress: () => { },
                            style: 'default'
                        }
                    ]
                );
                getData();
            }
        } catch (err) {
            console.log("Loi them vao gio hang:", err);
        }
    }

    const handleRemoveFromCart = (id) => {
        Alert.alert(
            "Cảnh báo",
            `Bạn có muốn xóa khỏi giỏ hàng không?`,
            [
                {
                    text: "Không",
                    onPress: () => { },
                    style: "cancel"
                },
                {
                    text: "Có", onPress: async () => {
                        await request
                            .post('cart/remove', { id })
                            .then((res) => {
                                if (res.data) {
                                    alert('Xóa thành công');
                                    getData();
                                }
                            }).catch((err) => {
                                alert('Xóa thất bại');
                                console.log("Loi xoa khoi gio hang: ", err);
                            })
                    },
                    style: 'default'
                }
            ]
        );
    }

    return (
        <View style={styles.container}>
            <SafeAreaView style={[styles.container]}>
                <View style={styles.headerBox}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name="chevron-left" size={30} color="#2f2828" style={styles.genderIcon} />
                    </TouchableOpacity>
                    <Text style={{ width: '70%', fontFamily: 'OutfitBold', fontSize: 22 }} ellipsizeMode='tail' numberOfLines={1}>{item.name}</Text>
                    <TouchableOpacity style={styles.favoriteIcon}
                        onPress={() => handleFavorite(item.id)}>
                        {favorite
                            ? <FontAwesomeIcon icon={solidHeart} size={30} color='red' />
                            : <FontAwesomeIcon icon={regularHeart} size={30} color='#cfcfcf' />}
                    </TouchableOpacity>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.imageBox}>
                        <Image style={styles.image}
                            src={item.image} />
                        <View style={styles.sizeBox}>
                            <Text style={{ fontFamily: 'OutfitBold', fontSize: 22, marginBottom: 7 }}>Size</Text>
                            <TouchableOpacity activeOpacity={0.5}
                                onPress={() => handleSetSize(1, 39)}>
                                {sizeClicked === 1
                                    ? <LinearGradient
                                        colors={['#eccd5f', '#caf877']}
                                        locations={[0.5, 1]}
                                        style={styles.sizeNumberBox}>
                                        <Text style={{ fontFamily: 'OutfitMedium', fontSize: 15 }}>39</Text>
                                    </LinearGradient>
                                    : <View
                                        style={styles.sizeNumberBox}>
                                        <Text style={{ fontFamily: 'OutfitMedium', fontSize: 15 }}>39</Text>
                                    </View>}
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.5}
                                onPress={() => handleSetSize(2, 40)}>
                                {sizeClicked === 2
                                    ? <LinearGradient
                                        colors={['#eccd5f', '#caf877']}
                                        locations={[0.5, 1]}
                                        style={styles.sizeNumberBox}>
                                        <Text style={{ fontFamily: 'OutfitMedium', fontSize: 15 }}>40</Text>
                                    </LinearGradient>
                                    : <View
                                        style={styles.sizeNumberBox}>
                                        <Text style={{ fontFamily: 'OutfitMedium', fontSize: 15 }}>40</Text>
                                    </View>}
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.5}
                                onPress={() => handleSetSize(3, 41)}>
                                {sizeClicked === 3
                                    ? <LinearGradient
                                        colors={['#eccd5f', '#caf877']}
                                        locations={[0.5, 1]}
                                        style={styles.sizeNumberBox}>
                                        <Text style={{ fontFamily: 'OutfitMedium', fontSize: 15 }}>41</Text>
                                    </LinearGradient>
                                    : <View
                                        style={styles.sizeNumberBox}>
                                        <Text style={{ fontFamily: 'OutfitMedium', fontSize: 15 }}>41</Text>
                                    </View>}
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.5}
                                onPress={() => handleSetSize(4, 42)}>
                                {sizeClicked === 4
                                    ? <LinearGradient
                                        colors={['#eccd5f', '#caf877']}
                                        locations={[0.5, 1]}
                                        style={styles.sizeNumberBox}>
                                        <Text style={{ fontFamily: 'OutfitMedium', fontSize: 15 }}>42</Text>
                                    </LinearGradient>
                                    : <View
                                        style={styles.sizeNumberBox}>
                                        <Text style={{ fontFamily: 'OutfitMedium', fontSize: 15 }}>42</Text>
                                    </View>}
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.5}
                                onPress={() => handleSetSize(5, 43)}>
                                {sizeClicked === 5
                                    ? <LinearGradient
                                        colors={['#eccd5f', '#caf877']}
                                        locations={[0.5, 1]}
                                        style={styles.sizeNumberBox}>
                                        <Text style={{ fontFamily: 'OutfitMedium', fontSize: 15 }}>43</Text>
                                    </LinearGradient>
                                    : <View
                                        style={styles.sizeNumberBox}>
                                        <Text style={{ fontFamily: 'OutfitMedium', fontSize: 15 }}>43</Text>
                                    </View>}
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.5}
                                onPress={() => handleSetSize(6, 44)}>
                                {sizeClicked === 6
                                    ? <LinearGradient
                                        colors={['#eccd5f', '#caf877']}
                                        locations={[0.5, 1]}
                                        style={styles.sizeNumberBox}>
                                        <Text style={{ fontFamily: 'OutfitMedium', fontSize: 15 }}>44</Text>
                                    </LinearGradient>
                                    : <View
                                        style={styles.sizeNumberBox}>
                                        <Text style={{ fontFamily: 'OutfitMedium', fontSize: 15 }}>44</Text>
                                    </View>}
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.circleRadius}>
                        <View style={styles.decriptionBox}>
                            <View style={styles.priceAndTagBox}>
                                <Text style={{ fontFamily: 'OutfitBold', fontSize: 35 }}>{numeral(item.price).format('0,0').replace(/,/g, '.')}₫<Text style={{ fontFamily: 'OutfitBold', fontSize: 25 }}></Text></Text>
                                <View style={styles.tagBox}>
                                    <Text style={{ fontFamily: 'OutfitMedium', fontSize: 20, color: '#333333' }}>In stock</Text>
                                </View>
                            </View>
                        </View>
                        <Text style={styles.decription} ellipsizeMode='tail' numberOfLines={2}>{item.detail}</Text>
                        <View style={styles.colorsBox}>
                            <View style={colorClicked === 1 ? styles.colorBoxClicked : styles.colorBox}>
                                <TouchableOpacity style={[styles.color, { backgroundColor: '#000000' }]}
                                    onPress={() => handleSetColor(1, '#000000')}>
                                </TouchableOpacity>
                            </View>
                            <View style={colorClicked === 2 ? styles.colorBoxClicked : styles.colorBox}>
                                <TouchableOpacity style={[styles.color, { backgroundColor: '#b4b3b3' }]}
                                    onPress={() => handleSetColor(2, '#b4b3b3')}>
                                </TouchableOpacity>
                            </View>
                            <View style={colorClicked === 3 ? styles.colorBoxClicked : styles.colorBox}>
                                <TouchableOpacity style={[styles.color, { backgroundColor: '#ffffff' }]}
                                    onPress={() => handleSetColor(3, '#ffffff')}>
                                </TouchableOpacity>
                            </View>
                            <View style={colorClicked === 4 ? styles.colorBoxClicked : styles.colorBox}>
                                <TouchableOpacity style={[styles.color, { backgroundColor: '#eb0909' }]}
                                    onPress={() => handleSetColor(4, '#eb0909')}>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                {isCart
                    ? <TouchableOpacity style={styles.addToCartButton}
                        onPress={() => handleRemoveFromCart(item.id)}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#ffffff' }}>Xóa khỏi giỏ hàng</Text>
                    </TouchableOpacity>
                    : <TouchableOpacity style={styles.addToCartButton}
                        onPress={() => handleAddToCart(item)}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#ffffff' }}>Thêm vào giỏ hàng</Text>
                    </TouchableOpacity>}
            </SafeAreaView>
        </View>
    )
}
export default Details;