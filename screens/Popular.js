import React, { useEffect, useState } from 'react'
import { Text, View, TouchableOpacity, ScrollView, Image, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from "expo-linear-gradient";
import Icon from 'react-native-vector-icons/FontAwesome5';
import numeral from 'numeral';
import request from '../config/axiosConfig';
import * as Font from 'expo-font';
import styles from '../styles/Popular.Style';

const Popular = ({ navigation, route }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
        loadFont();
    }, [])

    const loadFont = async () => {
        await Font.loadAsync({
            OutfitBold: require('../assets/fonts/Outfit-Bold.ttf'),
            OutfitMedium: require('../assets/fonts/Outfit-Medium.ttf'),
            PoppinsMedium: require('../assets/fonts/Poppins-Medium.ttf'),
            PoppinsLight: require('../assets/fonts/Poppins-Light.ttf')
        })
    }
    const handleOpenDetails = () => {
        navigation.navigate('Details');
    }

    const getData = async () => {
        const { brandName, categoryName } = route.params;
        try {
            let newData = [];
            if (brandName === '' && categoryName === '') {
                const res = await request.get(`shoes`);
                newData = res.data.filter(item => item.popular === true);;
            } else if (brandName === '') {
                const res = await request.get(`shoes`);
                newData = res.data.filter(item => item.category === categoryName && item.popular === true);
            } else if (categoryName === '') {
                const res = await request.get(`shoes`);
                newData = res.data.filter(item => item.brand === brandName.toLowerCase() && item.popular === true);
            } else if (brandName !== '' && categoryName !== '') {
                const res = await request.get(`shoes/${categoryName}/${brandName}`);
                newData = res.data.filter(item => item.brand === brandName && item.category === categoryName && item.popular === true);
            }
            await setData(newData);
        } catch (err) {
            console.log("Loi lay du lieu Popular: ", err);
        }
    }

    const renderItem = ({ item }) => {
        return (
            <View style={{ width: 170 }}>
                <TouchableOpacity activeOpacity={0.5}
                    onPress={() => navigation.navigate('Details', { item })}>
                    <View style={styles.imageBox}>
                        <Image style={styles.image}
                            src={item.image} />
                    </View>
                    <Text style={{ fontFamily: 'OutfitMedium', fontSize: 18, marginTop: 5 }} ellipsizeMode='tail' numberOfLines={1}>{item.name}</Text>
                    <Text style={{ fontFamily: 'OutfitBold', fontSize: 18 }}>{numeral(item.price).format('0,0').replace(/,/g, '.')}₫</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.favoriteIcon}>
                    <Icon name="heart" size={30} color="#cfcfcf" />
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
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name="chevron-left" size={30} color="#2f2828" />
                    </TouchableOpacity>
                    <Text style={{ fontWeight: 'bold', fontSize: 22 }}>Phổ biến</Text>
                    <TouchableOpacity>
                        <Icon name="ellipsis-v" size={25} color="#2f2828" />
                    </TouchableOpacity>
                </View>
                <FlatList data={data}
                    renderItem={renderItem}
                    numColumns={2}
                    columnWrapperStyle={{ justifyContent: 'space-between', paddingHorizontal: 10 }}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.contentScrollBox}
                    showsHorizontalScrollIndicator={false} />
            </SafeAreaView>
        </LinearGradient>
    )
}
export default Popular;