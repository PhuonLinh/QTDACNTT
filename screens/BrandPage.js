import React, { useState, useRef, useEffect } from 'react'
import { Text, View, TouchableOpacity, ScrollView, Image, Dimensions, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from "expo-linear-gradient";
import Icon from 'react-native-vector-icons/FontAwesome5';
import request from '../config/axiosConfig';
import numeral from 'numeral'
import { useFonts } from 'expo-font'
import styles from '../styles/BrandPage.Style';

const BrandPage = ({ navigation, route }) => {
    const [brand, setBrand] = useState('Tất cả');
    const [typeName, setTypeName] = useState('');
    const innerScrollViewRef = useRef(null);
    const [radioClick, setRadioClick] = useState(0);
    const [scrollEnabled, setScrollEnabled] = useState(true);
    const [sonScrollEnabled, setSonScrollEnabled] = useState(false);
    const screenHeight = Dimensions.get('window').height;
    let [data, setData] = useState([]);

    const handleOpenDetails = () => {
        navigation.navigate('Details');
    }

    const handleSetBrand = (click, typeName) => {
        setRadioClick(click);
        setBrand(typeName);
        setTypeName(typeName);
    }

    const handleScroll = (event) => {
        const offsetY = event.nativeEvent.contentOffset.y;

        // Kiểm tra điều kiện để vô hiệu hóa cuộn dọc của ScrollView cha
        if (offsetY > 200) {
            setScrollEnabled(false);
            setSonScrollEnabled(true);
        }
        else {
            setScrollEnabled(true);
            setSonScrollEnabled(false);
        }
    };

    const handleInnerScroll = (event) => {
        const offsetY = event.nativeEvent.contentOffset.y;

        // Nếu ScrollView con cuộn đến đầu tiên, mở lại cuộn cho ScrollView cha
        if (offsetY <= 0) {
            setScrollEnabled(true);
        }
    };

    useEffect(() => {
        getData();
    }, [typeName])

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

    const getData = async () => {
        const { brandName, categoryName } = route.params;
        console.log(typeName);
        try {
            let newData = [];
            if (brandName === '' && categoryName === '') {
                const res = await request.get(`shoes`);
                newData = res.data;
            } else if (brandName === '') {
                const res = await request.get(`shoes`);
                newData = res.data.filter(item => item.category === categoryName && item.type === typeName);
            } else if (categoryName === '') {
                const res = await request.get(`shoes`);
                newData = res.data.filter(item => item.brand === brandName.toLowerCase() && item.type === typeName);
            } else if (brandName !== '' && categoryName !== '') {
                const res = await request.get(`shoes/${categoryName}/${brandName}`);
                if (typeName !== '')
                    newData = res.data.filter(item => item.brand === brandName && item.category === categoryName && item.type === typeName.toLowerCase());
                else
                    newData = res.data.filter(item => item.brand === brandName && item.category === categoryName);
            }
            await setData(newData);
        } catch (err) {
            console.log("Loi lay du lieu BrandPage: ", err);
        }
    }


    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.container}>
                <View style={styles.headerBox}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name="chevron-left" size={30} color="#2f2828" />
                    </TouchableOpacity>
                    <Text style={{ fontWeight: 'bold', fontSize: 22 }}>Trang thương hiệu</Text>
                    <TouchableOpacity>
                        <Icon name="ellipsis-v" size={30} color="#2f2828" />
                    </TouchableOpacity>
                </View>
                <View style={styles.headerImageBox}>
                    <View style={styles.leftHeaderImageBox}>
                        <Text style={{ fontFamily: 'OutfitBold', fontSize: 22, color: '#949393' }}>Just do it</Text>
                        <Text style={{ fontFamily: 'OutfitMedium', fontSize: 20, color: '#949393' }}>with <Text style={{ fontFamily: 'OutfitBold', fontSize: 25, color: '#ffffff' }}>Nike</Text></Text>
                        <TouchableOpacity style={{ marginTop: 10 }}>
                            <LinearGradient
                                colors={['#eccd5f', '#caf877']}
                                locations={[0.5, 1]}
                                style={styles.addToCartBox}>
                                <Text style={{ fontFamily: 'OutfitMedium', fontSize: 13 }}>Add to Cart</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                    <Image style={styles.headerImage}
                        source={require('../assets/images/nikeBrandPage.png')} />
                </View>
                <View style={{ flex: 1, height: screenHeight - 40 }}>
                    <View style={{ marginTop: 20, height: 60 }}>
                        <ScrollView horizontal={true}
                            contentContainerStyle={styles.brandScrollBox}
                            showsHorizontalScrollIndicator={false}>
                            <TouchableOpacity style={radioClick === 1 ? styles.brandBoxClick : styles.brandBox}
                                onPress={() => handleSetBrand(1, 'Running')}>
                                <Text style={radioClick === 1 ? styles.brandNameClick : styles.brandName}>Running</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={radioClick === 2 ? styles.brandBoxClick : styles.brandBox}
                                onPress={() => handleSetBrand(2, 'Casuals')}>
                                <Text style={radioClick === 2 ? styles.brandNameClick : styles.brandName}>Casuals</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={radioClick === 3 ? styles.brandBoxClick : styles.brandBox}
                                onPress={() => handleSetBrand(3, 'Sports')}>
                                <Text style={radioClick === 3 ? styles.brandNameClick : styles.brandName}>Sports</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                    <Text style={{ marginLeft: 20, marginTop: 10, fontFamily: 'OutfitBold', fontSize: 22, color: '#333333' }}>{brand}</Text>
                    <View style={{ flex: 1 }}>
                        <FlatList
                            initialNumToRender={10}
                            maxToRenderPerBatch={5}
                            data={data}
                            numColumns={2}
                            columnWrapperStyle={{ justifyContent: 'space-between', paddingHorizontal: 20 }}
                            renderItem={renderItem}
                            keyExtractor={(item) => item.id}
                            contentContainerStyle={styles.contentScrollBox}
                            showsVerticalScrollIndicator={false} />
                    </View>
                </View>
            </SafeAreaView>
        </View >
    )
}
export default BrandPage;