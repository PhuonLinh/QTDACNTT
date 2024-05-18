import React, { useState } from 'react'
import { Text, View, TouchableOpacity, ScrollView, Image, TextInput, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome5';
import numeral from 'numeral'
import Modal from 'react-native-modal';
import styles from '../styles/Purchase.Style';

const Purchase = ({ navigation, route }) => {
    const [hoTen, setHoTen] = useState('');
    const [diaChi, setDiaChi] = useState('');
    const [sdt, setSDT] = useState('');
    const [payName, setPayName] = useState('Chọn phương thức thanh toán');
    const [isVisible, setIsVisible] = useState(false);
    const [iconName, setIconName] = useState('money-check-alt');
    const [color, setColor] = useState('gray');
    const { totalPrice } = route.params;

    const handleToggleModal = () => {
        setIsVisible(!isVisible);
    }

    const handleChoosePay = (iconName, color, payName) => {
        setIconName(iconName);
        setColor(color);
        setPayName(payName);
        setIsVisible(false);
    }

    const handleAcceptButton = () => {
        if (hoTen === '' || diaChi === '' || sdt === '') {
            Alert.alert(
                "Thông báo",
                `Vui lòng nhập đủ thông tin!`,
                [
                    {
                        text: "Đã hiểu", onPress: () => { },
                        style: 'default'
                    }
                ]
            );
            return;
        }
        if (payName === 'Chọn phương thức thanh toán') {
            Alert.alert(
                "Thông báo",
                `Vui lòng chọn phương thức thanh toán!`,
                [
                    {
                        text: "Đã hiểu", onPress: () => { },
                        style: 'default'
                    }
                ]
            );
            return;
        }
        Alert.alert(
            "Thông báo",
            `Xác nhận mua hàng thành công!`,
            [
                {
                    text: "Ok", onPress: () => {
                        navigation.goBack();
                    },
                    style: 'default'
                }
            ]
        );
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.headerBox}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name="chevron-left" size={25} color="#2f2828" />
                    </TouchableOpacity>
                    <Text style={{ fontWeight: 'bold', fontSize: 22 }}>Mua hàng</Text>
                    <TouchableOpacity>
                        <Icon name="ellipsis-v" size={25} color="#2f2828" />
                    </TouchableOpacity>
                </View>
                <ScrollView style={{ flex: 1 }}>
                    <Image style={styles.image}
                        source={require('../assets/logo/logo.png')} />
                    <View style={styles.textBox}>
                        <Text style={{ fontSize: 23, fontWeight: 'bold' }}>XÁC NHẬN MUA HÀNG</Text>
                        <Text style={{ fontSize: 18 }}>Bạn vui lòng điền đầy đủ thông tin để xác nhận thông tin đơn hàng nhé!</Text>
                        <Text style={{ fontSize: 18 }}>Tổng thanh toán</Text>
                        <Text style={{ fontSize: 23, fontWeight: 'bold', color: 'red' }}>{numeral(totalPrice).format('0,0').replace(/,/g, '.')}₫</Text>
                    </View>
                    <View style={styles.inputBox}>
                        <TextInput style={styles.textInput}
                            onChange={(text) => setHoTen(text)}
                            value={hoTen}
                            placeholder='Họ và tên' />
                        <TextInput style={styles.textInput}
                            onChange={(text) => setDiaChi(text)}
                            value={diaChi}
                            placeholder='Địa chỉ' />
                        <TextInput style={styles.textInput}
                            onChange={(text) => setSDT(text)}
                            value={sdt}
                            placeholder='Số điện thoại'
                            keyboardType='numeric'
                            inputMode='numeric' />
                        <TouchableOpacity style={styles.payBox}
                            onPress={handleToggleModal}>
                            <Icon name={iconName} size={25} color={color} />
                            <Text style={{ fontSize: 17 }}>{payName}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.acceptButton}
                            onPress={handleAcceptButton}>
                            <Text style={{ fontSize: 18, color: '#ffffff' }}>HOÀN TẤT</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <Modal isVisible={isVisible}
                    animationIn="slideInUp"
                    animationOut="slideOutDown"
                    animationOutTiming={800}
                    backdropOpacity={0}
                    onBackButtonPress={handleToggleModal}>
                    <View style={styles.modalContainer}>
                        <View style={styles.payListBox}>
                            <TouchableOpacity style={styles.pay}
                                onPress={() => handleChoosePay('wallet', 'red', 'Ví LinhHuongPay')}>
                                <Icon name='wallet' size={25} color='red' />
                                <Text style={{ fontSize: 17, position: 'absolute', left: 55 }}>Ví LinhHuongPay</Text>
                                <Icon name='chevron-right' size={15} color='black' />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.pay}
                                onPress={() => handleChoosePay('credit-card', '#315a90', 'Thẻ tín dụng/Ghi nợ')}>
                                <Icon name='credit-card' size={25} color='#315a90' />
                                <Text style={{ fontSize: 17, position: 'absolute', left: 55 }}>Thẻ tín dụng/Ghi nợ</Text>
                                <Icon name='chevron-right' size={15} color='black' />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.pay}
                                onPress={() => handleChoosePay('cc-amazon-pay', '#315a90', 'Thanh toán qua App ngân hàng')}>
                                <Icon name='cc-amazon-pay' size={25} color='#315a90' />
                                <Text style={{ fontSize: 17, position: 'absolute', left: 55 }}>Thanh toán qua App ngân hàng</Text>
                                <Icon name='chevron-right' size={15} color='black' />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.pay}
                                onPress={() => handleChoosePay('id-card-alt', '#d75844', 'LHPayLater')}>
                                <Icon name='id-card-alt' size={25} color='#d75844' />
                                <Text style={{ fontSize: 17, position: 'absolute', left: 55 }}>LHPayLater</Text>
                                <Icon name='chevron-right' size={15} color='black' />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.pay}
                                onPress={() => handleChoosePay('money-bill-alt', '#d75844', 'Thanh toán khi nhận hàng')}>
                                <Icon name='money-bill-alt' size={25} color='#d75844' />
                                <Text style={{ fontSize: 17, position: 'absolute', left: 55 }}>Thanh toán khi nhận hàng</Text>
                                <Icon name='chevron-right' size={15} color='black' />
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </SafeAreaView>
        </View>
    )
}
export default Purchase;