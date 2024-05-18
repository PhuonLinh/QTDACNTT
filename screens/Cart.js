import React, { useState, useEffect } from 'react'
import { Text, View, TouchableOpacity, Alert, Image, Switch, Dimensions, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCheckSquare as solidCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { faSquare as regularSquare } from '@fortawesome/free-regular-svg-icons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import NumericInput from 'react-native-numeric-input'
import request from '../config/axiosConfig';
import numeral from 'numeral'


const Cart = ({ navigation }) => {
    const screenWidth = Dimensions.get('window').width;
    const [isEnabled, setIsEnabled] = useState(false);
    const [allClicked, setAllClicked] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);
    const [isChecked, setChecked] = useState(false);
    const [quantity, setQuantity] = useState({});
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

    const getData = async () => {
        try {
            const res = await request.get(`cart`);
            setData(res.data);
        } catch (err) {
            console.log('Loi lay danh sach gio hang:', err);
        }
    }

    const handleAllClicked = () => {
        const updatedValues = {};
        if (allClicked == true)
            setTotalPrice(0);
        const newCheckAllState = !allClicked;
        Object.keys(isChecked).forEach((key) => {
            updatedValues[key] = newCheckAllState;
        })
        setAllClicked(newCheckAllState);
        setChecked(updatedValues);
    }

    const handlePurchase = () => {
        if (totalPrice.toString() === '0') {
            Alert.alert(
                "Thông báo",
                `Vui lòng chọn ít nhất 1 mặt hàng để mua!`,
                [
                    {
                        text: "Đã hiểu", onPress: () => { },
                        style: 'default'
                    }
                ]
            );
            return;
        }
        navigation.navigate('Purchase', { totalPrice });
    }

    const renderItem = ({ item }) => {
        const basePrice = item.price;
        let quantityValue = quantity[item.id] || 0;
        let isItemChecked = isChecked[item.id];

        const handleToggleChecked = () => {
            if (isItemChecked) {
                const priceChange = quantityValue * basePrice;
                setTotalPrice((prevTotalPrice) => prevTotalPrice - priceChange);

                setQuantity((prevQuantityValues) => ({
                    ...prevQuantityValues,
                    [item.id]: 0,
                }));
            } else {
                setQuantity((prevQuantityValues) => ({
                    ...prevQuantityValues,
                    [item.id]: 0,
                }));
            }
            setChecked((prevCheckedItem) => ({
                ...prevCheckedItem,
                [item.id]: !isItemChecked,
            }));
        }

        const handleQuantityChange = (value) => {
            if (!isItemChecked)
                return;
            setQuantity((prevQuantityValues) => ({
                ...prevQuantityValues,
                [item.id]: value,
            }));
            const priceChange = (value - quantityValue) * basePrice;
            setTotalPrice((prevTotalPrice) => prevTotalPrice + priceChange);
        }

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
                <View style={{ marginTop: 10, width: '100%', display: 'flex', alignItems: 'center' }}>
                    <NumericInput
                        onChange={(value) => handleQuantityChange(value, basePrice)}
                        value={quantityValue}
                        rounded
                        minValue={0}
                        maxValue={9999}
                        borderColor='rgba(0, 0, 0, 0.5)'
                        totalHeight={35}
                        totalWidth={120}
                        editable={isItemChecked} />
                </View>
                <TouchableOpacity style={styles.favoriteIcon}
                    onPress={handleToggleChecked}>
                    {isItemChecked ? <FontAwesomeIcon icon={solidCheckSquare} size={30} color='green' />
                        : <FontAwesomeIcon icon={regularSquare} size={30} color='#cfcfcf' />}
                </TouchableOpacity>
                <View style={styles.colorAndSizeBox}>
                    <View style={styles.sizeBox}>
                        <Text style={{ fontSize: 13, fontWeight: 'bold' }}>{item.size}</Text>
                    </View>
                    <View style={[styles.colorBox, { backgroundColor: `${item.color}` }]}>
                    </View>
                </View>
            </View>
        )
    }

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <LinearGradient
            colors={['#eccd5f', '#caf877']}
            locations={[0.5, 1]}
            style={styles.container}>
            <SafeAreaView style={styles.container}>
                <View style={styles.headerBox}>
                    <Text style={{ fontWeight: 'bold', fontSize: 22 }}>Giỏ hàng</Text>
                    <TouchableOpacity>
                        <Icon name="sync-alt" size={20} color="#2f2828" />
                    </TouchableOpacity>
                </View>
                <FlatList data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                    columnWrapperStyle={{ justifyContent: 'space-between', paddingHorizontal: 15 }}
                    contentContainerStyle={styles.contentScrollBox}
                    showsVerticalScrollIndicator={false} />
                <View style={styles.purchaseBox}>
                    <TouchableOpacity style={styles.menuBox}>
                        <Icon name="receipt" size={25} color="#d75844" />
                        <Text style={[styles.menuText, { position: 'absolute', left: 45 }]}>LinhHuong voucher</Text>
                        <Text style={[styles.menuText, { position: 'absolute', right: 40 }]}>Chọn hoặc nhập mã</Text>
                        <Icon name="chevron-right" size={17} color="#606060" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuBox}>
                        <Icon name="coins" size={25} color="#e5972a" />
                        <Text style={[styles.menuText, { position: 'absolute', left: 45 }]}>Bạn chưa có LinhHuong xu?</Text>
                        <Switch style={[styles.menuText, { position: 'absolute', right: 25 }]}
                            trackColor={{ false: '#767577', true: '#81b0ff' }}
                            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled} />
                    </TouchableOpacity>
                    <View style={styles.totalPricesBox}>
                        <TouchableOpacity style={styles.allRadioBox} onPress={handleAllClicked}>
                            {allClicked ? <FontAwesomeIcon icon={solidCheckSquare} size={30} color='green' />
                                : <FontAwesomeIcon icon={regularSquare} size={30} color='#cfcfcf' />}
                            <Text style={{ fontSize: 15, color: 'gray' }}>Tất cả</Text>
                        </TouchableOpacity>
                        <View style={styles.pricesAndPurchaseBox}>
                            <View style={{ width: screenWidth * 40 / 100, marginLeft: 'auto' }}>
                                <Text style={{ fontSize: 13, marginLeft: 'auto', lineHeight: 20 }} ellipsizeMode='head' numberOfLines={2}>Tổng thiệt hại: <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'red' }}>{numeral(totalPrice).format('0,0').replace(/,/g, '.')}₫</Text></Text>
                            </View>
                            <TouchableOpacity style={styles.purchaseButton}
                                onPress={handlePurchase}>
                                <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#ffffff' }}>Mua hàng</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </LinearGradient >
    )
}
export default Cart;