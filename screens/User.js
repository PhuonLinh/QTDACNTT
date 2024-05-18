import React from 'react'
import { Text, View, TouchableOpacity, ScrollView, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useFonts } from 'expo-font'
import styles from '../styles/User.Style';

const User = () => {
    const [loaded] = useFonts({
        OutfitBold: require('../assets/fonts/Outfit-Bold.ttf'),
        OutfitMedium: require('../assets/fonts/Outfit-Medium.ttf'),
        PoppinsMedium: require('../assets/fonts/Poppins-Medium.ttf'),
        PoppinsLight: require('../assets/fonts/Poppins-Light.ttf'),
    });
    if (!loaded) {
        return null;
    }
    return (
        <View style={{ flex: 1, backgroundColor: '#eccd5f' }}>
            <SafeAreaView style={styles.container}>
                <ScrollView
                    contentContainerStyle={styles.scrollViewBox}
                    showsVerticalScrollIndicator={false}>
                    <View style={styles.headerBox}>
                        <TouchableOpacity>
                            <Image style={styles.avatarImage}
                                src='https://i.pravatar.cc/410' />
                        </TouchableOpacity>
                        <View style={styles.infoBox}>
                            <Text style={{ fontFamily: 'OutfitBold', fontSize: 20 }}>linhhuong</Text>
                            <View style={{ width: '60%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10, padding: 2, backgroundColor: '#c5ff7b', borderRadius: 10 }}>
                                <Text style={{ fontFamily: 'PoppinsMedium', fontSize: 10 }}>Diamond Member</Text>
                                <Icon name="chevron-right" size={10} color="#000000" />
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                                <Text style={{ fontFamily: 'PoppinsLight', fontSize: 12 }}>Người theo dõi: <Text style={{ fontFamily: 'PoppinsMedium', fontSize: 13 }}>10</Text></Text>
                                <Text style={{ fontFamily: 'PoppinsLight', fontSize: 12 }}>|</Text>
                                <Text style={{ fontFamily: 'PoppinsLight', fontSize: 12 }}>Đang theo dõi: <Text style={{ fontFamily: 'PoppinsMedium', fontSize: 13 }}>10</Text></Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ backgroundColor: '#f6f6f6', paddingVertical: 10, marginTop: 10 }}>
                        <TouchableOpacity style={styles.menuBox}>
                            <Icon name="mobile-alt" size={25} color="#22ab9b" />
                            <Text style={[styles.menuText, { position: 'absolute', left: 55 }]}>Đơn nạp thẻ và dịch vụ</Text>
                            <Icon name="chevron-right" size={17} color="#606060" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuBox}>
                            <Icon name="clipboard-list" size={25} color="#315a90" />
                            <Text style={[styles.menuText, { position: 'absolute', left: 55 }]}>Đơn mua</Text>
                            <Text style={[styles.menuText, { position: 'absolute', right: 50 }]}>Xem lịch sử mua hàng</Text>
                            <Icon name="chevron-right" size={17} color="#606060" />
                        </TouchableOpacity>
                        <View style={styles.actionOrderBox}>
                            <TouchableOpacity style={styles.actionBox}>
                                <Icon name="box-open" size={30} color="#606060" />
                                <Text style={styles.actionText}>Chờ xác nhận</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.actionBox}>
                                <Icon name="archive" size={30} color="#606060" />
                                <Text style={styles.actionText}>Chờ lấy hàng</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.actionBox}>
                                <Icon name="truck-moving" size={30} color="#606060" />
                                <Text style={styles.actionText}>Chờ giao hàng</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.actionBox}>
                                <Icon name="star-half-alt" size={30} color="#606060" />
                                <Text style={styles.actionText}>Đánh giá</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={[styles.menuBox, { marginTop: 10 }]}>
                            <Icon name="box" size={25} color="#d75844" />
                            <Text style={[styles.menuText, { position: 'absolute', left: 55 }]}>Tiện ích của tôi</Text>
                            <Icon name="chevron-right" size={17} color="#606060" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuBox}>
                            <Icon name="check-square" size={25} color="#d75844" />
                            <Text style={[styles.menuText, { position: 'absolute', left: 55 }]}>Bảo hiểm của tôi</Text>
                            <Icon name="chevron-right" size={17} color="#606060" />
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.menuBox, { marginTop: 10 }]}>
                            <Icon name="shopping-bag" size={25} color="#e5972a" />
                            <Text style={[styles.menuText, { position: 'absolute', left: 55 }]}>Mua lại</Text>
                            <Text style={[styles.menuText, { position: 'absolute', right: 50 }]}>Xem thêm sản phẩm</Text>
                            <Icon name="chevron-right" size={17} color="#606060" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuBox}>
                            <Icon name="store" size={25} color="#d75844" />
                            <Text style={[styles.menuText, { position: 'absolute', left: 55 }]}>Bắt đầu bán</Text>
                            <Text style={[styles.menuText, { position: 'absolute', right: 50 }]}>Đăng ký miễn phí</Text>
                            <Icon name="chevron-right" size={17} color="#606060" />
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.menuBox, { marginTop: 10 }]}>
                            <Icon name="medal" size={25} color="#d75844" />
                            <Text style={[styles.menuText, { position: 'absolute', left: 55 }]}>Khách hàng thân thiết</Text>
                            <Text style={[styles.menuText, { position: 'absolute', right: 50 }]}>Mua lại</Text>
                            <Icon name="chevron-right" size={17} color="#606060" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuBox}>
                            <Icon name="heart" size={25} color="#d75844" />
                            <Text style={[styles.menuText, { position: 'absolute', left: 55 }]}>Đã thích</Text>
                            <Icon name="chevron-right" size={17} color="#606060" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuBox}>
                            <Icon name="thumbs-up" size={25} color="#e5972a" />
                            <Text style={[styles.menuText, { position: 'absolute', left: 55 }]}>Shop đang theo dõi</Text>
                            <Icon name="chevron-right" size={17} color="#606060" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuBox}>
                            <Icon name="gift" size={25} color="#0c44a9" />
                            <Text style={[styles.menuText, { position: 'absolute', left: 55 }]}>Sẵn thưởng</Text>
                            <Text style={[styles.menuText, { position: 'absolute', right: 50 }]}>Lấy ngay 1000 xu</Text>
                            <Icon name="chevron-right" size={17} color="#606060" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuBox}>
                            <Icon name="clock" size={25} color="#0c44a9" />
                            <Text style={[styles.menuText, { position: 'absolute', left: 55 }]}>Đã xem gần đây</Text>
                            <Icon name="chevron-right" size={17} color="#606060" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuBox}>
                            <Icon name="sliders-h" size={25} color="#d75844" />
                            <Text style={[styles.menuText, { position: 'absolute', left: 55 }]}>Số dư tài khoản</Text>
                            <Icon name="chevron-right" size={17} color="#606060" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuBox}>
                            <Icon name="coins" size={25} color="#e5972a" />
                            <Text style={[styles.menuText, { position: 'absolute', left: 55 }]}>LinhHuong xu</Text>
                            <Text style={[styles.menuText, { position: 'absolute', right: 50 }]}>Nhận xu mỗi ngày</Text>
                            <Icon name="chevron-right" size={17} color="#606060" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuBox}>
                            <Icon name="star" size={25} color="#62b8a9" />
                            <Text style={[styles.menuText, { position: 'absolute', left: 55 }]}>Đánh giá của tôi</Text>
                            <Icon name="chevron-right" size={17} color="#606060" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuBox}>
                            <Icon name="wallet" size={25} color="#d75844" />
                            <Text style={[styles.menuText, { position: 'absolute', left: 55 }]}>LinhHuong tiếp thị liên kết</Text>
                            <Icon name="chevron-right" size={17} color="#606060" />
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.menuBox, { marginTop: 10 }]}>
                            <Icon name="user-circle" size={25} color="#0c44a9" />
                            <Text style={[styles.menuText, { position: 'absolute', left: 55 }]}>Thiết lập tài khoản</Text>
                            <Icon name="chevron-right" size={17} color="#606060" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuBox}>
                            <Icon name="question-circle" size={25} color="#62b8a9" />
                            <Text style={[styles.menuText, { position: 'absolute', left: 55 }]}>Trung tâm trợ giúp</Text>
                            <Icon name="chevron-right" size={17} color="#606060" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuBox}>
                            <Icon name="headset" size={25} color="#d75844" />
                            <Text style={[styles.menuText, { position: 'absolute', left: 55 }]}>Trò chuyện với LinhHuong</Text>
                            <Icon name="chevron-right" size={17} color="#606060" />
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}
export default User;