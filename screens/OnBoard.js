import React from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from 'expo-font'
import styles from '../styles/OnBoard.Style';

const OnBoard = ({ navigation }) => {
    const [loaded] = useFonts({
        OutfitBold: require('../assets/fonts/Outfit-Bold.ttf'),
        OutfitMedium: require('../assets/fonts/Outfit-Medium.ttf'),
        PoppinsMedium: require('../assets/fonts/Poppins-Medium.ttf'),
        PoppinsLight: require('../assets/fonts/Poppins-Light.ttf'),
    });
    if (!loaded) {
        return null;
    }
    const handlePressButton = () => {
        navigation.navigate('HomeNavigator');
    }
    return (
        <LinearGradient
            colors={['#eccd5f', '#caf877']}
            locations={[0.55, 1]}
            style={styles.container}>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.upBox}>
                    <Image style={styles.image}
                        source={require('../assets/images/shoes1.png')} />
                </View>
                <View style={styles.bottomBox}>
                    <View style={styles.upBottomBox}>
                        <View style={{ display: 'flex', gap: 10, flexDirection: 'row', justifyContent: 'center' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 35 }}>Thương hiệu</Text>
                            <Text style={{ fontFamily: 'PoppinsLight', fontSize: 33 }}>&</Text>
                        </View>
                        <View style={{ display: 'flex', gap: 10, flexDirection: 'row', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 33 }}>giày dép</Text>
                            <Text style={{ fontWeight: 'bold', fontSize: 35 }}>Hợp thời trang</Text>
                        </View>
                        <Text style={{ fontWeight: '300', fontSize: 20, marginTop: 'auto' }}>trong tầm tay của bạn!</Text>
                    </View>
                    <View style={styles.downBottomBox}>
                        <TouchableOpacity style={styles.getStartedButton} activeOpacity={0.7}
                            onPress={handlePressButton}>
                            <Text style={{ fontFamily: 'PoppinsMedium', color: 'white', fontSize: 16 }}>Bắt đầu nào</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </LinearGradient>
    )
}
export default OnBoard;