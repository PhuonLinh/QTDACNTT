import React, { useState, useEffect } from 'react'
import { Text, View, FlatList, TouchableOpacity, ScrollView, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import * as Font from 'expo-font';
import numeral from 'numeral'
import request from '../config/axiosConfig';
import styles from '../styles/HomePage.Style';

const HomePage = ({ navigation }) => {
    const [brand, setBrand] = useState('Sản phẩm');
    const [category, setCategory] = useState(0);
    const [radioClick, setRadioClick] = useState(0);
    const [categoryName, setCategoryName] = useState('');
    const [brandName, setBrandName] = useState('');
    let [data, setData] = useState([]);
    const [newShoes, setNewShoes] = useState([]);
    const [popularShoes, setPopularShoes] = useState([]);

    const handleSetBrand = async (click, brandName) => {
        await setRadioClick(click);
        await setBrand(brandName);
        await setBrandName(brandName);
    }

    const handleFavorite = async (id) => {
        try {
            const res = await request.post('favorite', { id });
            if (res.data) {
                const updatedNewShoes = newShoes.map((item) =>
                    item.id === id ? { ...item, favorite: !item.favorite } : item
                );
                setNewShoes(updatedNewShoes);
            }
            else
                alert('Lỗi yêu thích!');
        } catch (err) {
            console.log("Loi them yeu thich", err);
        }
    }

    useEffect(() => {
        loadFont();
        const goBack = navigation.addListener('focus', () => {
            getData();
        });
        return goBack;
    }, [categoryName, brandName, navigation])

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
            const res = await request.get(`shoes/${categoryName}/${brandName}`);
            const newData = res.data;
            setData(newData);
            setNewShoes(newData.sort((a, b) => new Date(b.time) - new Date(a.time)).slice(0, 5));
            setPopularShoes(newData.filter(item => item.popular === true));
        } catch (err) {
            console.log("Loi lay du lieu HomePage: ", err);
        }
    };

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity activeOpacity={0.5}
                onPress={() => navigation.navigate('Details', { item })}>
                <View style={styles.popularBox}>
                    <View style={{ width: '65%', height: '60%', display: 'flex', justifyContent: 'space-between' }}>
                        <Text style={{ fontFamily: 'OutfitBold', fontSize: 25 }}>{item.brand}</Text>
                        <Text style={{ fontFamily: 'OutfitMedium', fontSize: 20, color: '#aaaaaa' }} ellipsizeMode='tail' numberOfLines={1}>{item.name}</Text>
                        <Text style={{ fontFamily: 'OutfitBold', fontSize: 20 }}>{numeral(item.price).format('0,0').replace(/,/g, '.')}₫</Text>
                    </View>
                    <Image style={styles.image}
                        src={item.image} />
                </View>
            </TouchableOpacity>
        )
    }

    const renderNewShoeItem = ({ item }) => {
        const isFavorite = item.favorite;
        return (
            <View style={{ width: 180 }}>
                <TouchableOpacity activeOpacity={0.5}
                    onPress={() => navigation.navigate('Details', { item })}>
                    <View style={styles.latestBoxImage}>
                        <Image style={styles.latestImage}
                            src={item.image} />
                    </View>
                    <Text style={{ fontFamily: 'OutfitMedium', fontSize: 18, marginTop: 5 }} ellipsizeMode='tail' numberOfLines={1}>{item.name}</Text>
                    <Text style={{ fontFamily: 'OutfitBold', fontSize: 18 }}>{numeral(item.price).format('0,0').replace(/,/g, '.')}₫</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.favoriteIcon}
                    onPress={() => handleFavorite(item.id)}>
                    {isFavorite
                        ? <FontAwesomeIcon icon={solidHeart} size={30} color='red' />
                        : <FontAwesomeIcon icon={regularHeart} size={30} color='#cfcfcf' />}
                </TouchableOpacity>
            </View>
        )
    }

    const renderPopularShoeItem = ({ item }) => {
        return (
            <TouchableOpacity activeOpacity={0.5}
                onPress={() => navigation.navigate('Details', { item })}>
                <View style={styles.popularBox}>
                    <View style={{ width: '65%', height: '60%', display: 'flex', justifyContent: 'space-between' }}>
                        <Text style={{ fontFamily: 'OutfitBold', fontSize: 25 }}>{item.brand}</Text>
                        <Text style={{ fontFamily: 'OutfitMedium', fontSize: 20, color: '#aaaaaa' }} ellipsizeMode='tail' numberOfLines={1}>{item.name}</Text>
                        <Text style={{ fontFamily: 'OutfitBold', fontSize: 20 }}>{numeral(item.price).format('0,0').replace(/,/g, '.')}₫</Text>
                    </View>
                    <Image style={styles.image}
                        src={item.image} />
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView style={{ flex: 1 }}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: 15, paddingVertical: 15 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 23, marginBottom: 10 }}>Chọn danh mục</Text>
                    <View>
                        <ScrollView horizontal={true}
                            contentContainerStyle={{ display: 'flex', flexDirection: 'row', gap: 15 }}
                            showsHorizontalScrollIndicator={false}>
                            <TouchableOpacity activeOpacity={0.5} onPress={() => { setCategory(1), setCategoryName('men') }}>
                                {category === 1 ? <LinearGradient
                                    colors={['#eccd5f', '#caf877']}
                                    locations={[0.5, 1]}
                                    style={styles.categoryBoxClicked}>
                                    <Text style={{ fontFamily: 'OutfitMedium', fontSize: 20 }}>Men</Text>
                                    <Icon name="male" size={60} color="#2f2828" style={styles.genderIcon} />
                                </LinearGradient>
                                    : <View style={styles.categoryBox}>
                                        <Text style={{ fontFamily: 'OutfitMedium', fontSize: 20 }}>Men</Text>
                                        <Icon name="male" size={60} color="#2f2828" style={styles.genderIcon} />
                                    </View>}
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.5} onPress={() => { setCategory(2), setCategoryName('women') }}>
                                {category === 2 ? <LinearGradient
                                    colors={['#eccd5f', '#caf877']}
                                    locations={[0.5, 1]}
                                    style={styles.categoryBoxClicked}>
                                    <Text style={{ fontFamily: 'OutfitMedium', fontSize: 20 }}>Women</Text>
                                    <Icon name="female" size={60} color="#2f2828" style={styles.genderIcon} />
                                </LinearGradient>
                                    : <View style={styles.categoryBox}>
                                        <Text style={{ fontFamily: 'OutfitMedium', fontSize: 20 }}>Women</Text>
                                        <Icon name="female" size={60} color="#2f2828" style={styles.genderIcon} />
                                    </View>}
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.5} onPress={() => { setCategory(3), setCategoryName('unisex') }}>
                                {category === 3 ? <LinearGradient
                                    colors={['#eccd5f', '#caf877']}
                                    locations={[0.5, 1]}
                                    style={styles.categoryBoxClicked}>
                                    <Text style={{ fontFamily: 'OutfitMedium', fontSize: 20 }}>Unisex</Text>
                                    <Icon name="venus-mars" size={60} color="#2f2828" style={styles.genderIcon} />
                                </LinearGradient>
                                    : <View style={styles.categoryBox}>
                                        <Text style={{ fontFamily: 'OutfitMedium', fontSize: 20 }}>Unisex</Text>
                                        <Icon name="venus-mars" size={60} color="#2f2828" style={styles.genderIcon} />
                                    </View>}
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                    <View style={{ marginTop: 25, marginBottom: 5, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 23 }}>Chọn hãng</Text>
                    </View>
                    <View style={styles.singleBrandBox}>
                        <TouchableOpacity style={radioClick === 1 ? styles.brandBoxClick : styles.brandBox}
                            onPress={() => handleSetBrand(1, 'adidas')}>
                            <Text style={radioClick === 1 ? styles.brandNameClick : styles.brandName}>adidas</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={radioClick === 2 ? styles.brandBoxClick : styles.brandBox}
                            onPress={() => handleSetBrand(2, 'Gucci')}>
                            <Text style={radioClick === 2 ? styles.brandNameClick : styles.brandName}>Gucci</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.singleBrandBox}>
                        <TouchableOpacity style={radioClick === 3 ? styles.brandBoxClick : styles.brandBox}
                            onPress={() => handleSetBrand(3, 'Nike')}>
                            <Text style={radioClick === 3 ? styles.brandNameClick : styles.brandName}>Nike</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={radioClick === 4 ? styles.brandBoxClick : styles.brandBox}
                            onPress={() => handleSetBrand(4, 'MLB')}>
                            <Text style={radioClick === 4 ? styles.brandNameClick : styles.brandName}>MLB</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 25, marginBottom: 15, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 23 }}>{brand}</Text>
                        <TouchableOpacity style={styles.seeMoreBox}
                            onPress={() => navigation.navigate('BrandPage', { categoryName, brandName })}>
                            <Text style={{ fontWeight: '500', fontSize: 12, color: '#ffffff' }}>Xem thêm</Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList data={data}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        initialNumToRender={10}
                        maxToRenderPerBatch={5}
                        horizontal={true}
                        contentContainerStyle={{ display: 'flex', flexDirection: 'row', gap: 15 }}
                        showsHorizontalScrollIndicator={false} />
                    <Text style={{ marginTop: 25, marginBottom: 15, fontWeight: 'bold', fontSize: 23 }}>Giày mới nhất</Text>
                    <FlatList data={newShoes}
                        renderItem={renderNewShoeItem}
                        keyExtractor={(item) => item.id}
                        initialNumToRender={10}
                        maxToRenderPerBatch={5}
                        horizontal={true}
                        contentContainerStyle={{ display: 'flex', flexDirection: 'row', gap: 15 }}
                        showsHorizontalScrollIndicator={false} />
                    <View style={{ marginTop: 25, marginBottom: 15, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 23 }}>Phổ biến</Text>
                        <TouchableOpacity style={styles.seeMoreBox}
                            onPress={() => navigation.navigate('Popular', { categoryName, brandName })}>
                            <Text style={{ fontWeight: '500', fontSize: 12, color: '#ffffff' }}>Xem thêm</Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList data={popularShoes}
                        renderItem={renderPopularShoeItem}
                        keyExtractor={(item) => item.id}
                        initialNumToRender={10}
                        maxToRenderPerBatch={5}
                        horizontal={true}
                        contentContainerStyle={{ display: 'flex', flexDirection: 'row', gap: 15 }}
                        showsHorizontalScrollIndicator={false} />
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}
export default HomePage;