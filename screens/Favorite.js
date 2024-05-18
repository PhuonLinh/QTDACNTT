import React, { useState, useEffect } from 'react'
import { Text, View, TouchableOpacity, ScrollView, Image, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import request from '../config/axiosConfig';
import numeral from 'numeral';
import * as Font from 'expo-font';
import styles from '../styles/Favorite.Style'

const Favortite = ({ navigation }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        loadFont();
        const goBack = navigation.addListener('focus', () => {
            getData();
        });
        return goBack;
    }, [navigation])

    const loadFont = async () => {
        await Font.loadAsync({
            OutfitBold: require('../assets/fonts/Outfit-Bold.ttf'),
            OutfitMedium: require('../assets/fonts/Outfit-Medium.ttf'),
            PoppinsMedium: require('../assets/fonts/Poppins-Medium.ttf'),
            PoppinsLight: require('../assets/fonts/Poppins-Light.ttf')
        })
    }

    const handleFavorite = async (id) => {
        try {
            const res = await request.post('favorite', { id });
            if (res.data) {
                const updatedNewShoes = data.filter(item => item.id !== id);
                setData(updatedNewShoes);
            }
            else
                alert('Lỗi yêu thích!');
        } catch (err) {
            console.log("Loi them yeu thich", err);
        }
    }

    const getData = async () => {
        try {
            const res = await request.get(`shoes`);
            let newData = res.data;
            newData = newData.filter(item => item.favorite === true);
            setData(newData);
        } catch (err) {
            console.log('Loi lay danh sach yeu thich:', err);
        }
    }

    const renderItem = ({ item }) => {
        return (
            <View style={{ width: 170, maxWidth: '45%' }}>
                <TouchableOpacity activeOpacity={0.5}
                    onPress={() => navigation.navigate('Details', { item })}>
                    <View style={styles.imageBox}>
                        <Image style={styles.image}
                            src={item.image} />
                    </View>
                    <Text style={{ fontFamily: 'OutfitMedium', fontSize: 18, marginTop: 5 }} ellipsizeMode='tail' numberOfLines={1}>{item.name}</Text>
                    <Text style={{ fontFamily: 'OutfitBold', fontSize: 18 }}>{numeral(item.price).format('0,0').replace(/,/g, '.')}₫</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.favoriteIcon}
                    onPress={() => handleFavorite(item.id)}>
                    <FontAwesomeIcon icon={solidHeart} size={30} color='red' />
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <LinearGradient
            colors={['#eccd5f', '#caf877']}
            locations={[0.5, 1]}
            style={styles.container}>
            <SafeAreaView style={styles.container}>
                <View style={styles.headerBox}>
                    <Text style={{ fontWeight: 'bold', fontSize: 22 }}>Yêu thích</Text>
                    <TouchableOpacity>
                        <Icon name="ellipsis-v" size={25} color="#2f2828" />
                    </TouchableOpacity>
                </View>
                <FlatList data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                    columnWrapperStyle={{ justifyContent: 'space-between', paddingHorizontal: 15 }}
                    contentContainerStyle={styles.contentScrollBox}
                    showsVerticalScrollIndicator={false} />
            </SafeAreaView>
        </LinearGradient>
    )
}
export default Favortite;