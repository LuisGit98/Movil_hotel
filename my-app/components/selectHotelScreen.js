import { StyleSheet, Text, View, Pressable } from 'react-native'
import { styles } from '../styles/styles'
import { Entypo } from '@expo/vector-icons';
import { CardHotel } from './hotelCards'
import { Menu } from './bottomMenu'

export function SelectHotelScreen({ navigation }) {
    return (
        <View style={styles.formContainer}>

            <Text style={styles_h.title}>Aloja Baja Store</Text>
            <View style={styles_h.barra}>
                <Text style={styles_h.text_h}>
                    Ordenar
                </Text>
                <Entypo
                    style={styles.icon}
                    name="select-arrows"
                    size={28}
                    color="black" />


            </View>

            <CardHotel></CardHotel>
            <CardHotel></CardHotel>
            <CardHotel></CardHotel>


        </View>);
}
const styles_h = StyleSheet.create({
    container: {
        width: ' 100 %',
        height: '100 %',
        backgroundColor: '#172c94',
        position: 'absolute'
    },

    text_h: {
        fontSize: 23,
        width: '70%',
        marginLeft: '10%',
        backgroundColor: '#fff',
        marginTop: '10%'

    },
    barra: {
        width: '100%',
        height: '5%',
        backgroundColor: '#fff',
        justifyContent: 'center',

    },
    title: {
        fontSize: 33,
        color: '#fff'
    },
    icon: {
        top: 0
    }
})