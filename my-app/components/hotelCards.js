import { Pressable, StyleSheet, View, Image, Text } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

export function CardHotel({ navigation }) {
    return (
        <View style={styles.card}>

            <Pressable onPress={() => {
                navigation.navigate('SelectRoomScreen')
            }}>

                <View style={styles.imgTextContainer}>
                    <Text style={styles.hotelName}>
                        Hotel Juan                    </Text>
                    <View style={styles.rate}><Text style={styles.rateText}>8.3</Text></View>
                    <Image
                        style={{
                            width: 170, height: 120, borderRadius: 15, top: -21
                        }}
                        source={{ uri: "https://images.trvl-media.com/hotels/8000000/8000000/7999600/7999554/7446fb39_w.jpg" }}
                    />

                    <Text>
                        Using Lorem ipsum to focus attention on graphic elements in a webpage design proposal · One of the earliest examples of the Lorem ipsum placeholder text on 1960s advertising · In publishing and graphic design, Lorem ipsum  is a place
                    </Text>

                </View>
                <AntDesign
                    style={styles.heartIcon}
                    name="hearto"
                    size={28}
                    color="black" />

                <View>


                    <Text style={styles.pricesText}>MXN-1,200 - 6,400</Text>

                </View>

            </Pressable>
        </View>
    );

}
const styles = StyleSheet.create({
    card: {
        width: '90%',
        height: '20%',
        borderRadius: 30,
        backgroundColor: '#fff',
        justifyContent: 'center',

    },
    img: {
        width: '90%',
        borderWidth: 2,
        borderColor: 'red'
    },
    imgTextContainer: {
        maxWidth: '70%',
        height: '100%',
        marginLeft: 10
    },
    pricesText: {
        top: -38,
        marginLeft: '74%',
        width: '30%',
        color: 'green',


    },
    heartIcon: {
        end: 1,
        position: 'absolute',
        marginRight: 18,
        marginTop: 30
    },
    hotelName: {
        marginLeft: '50%',
        top: '8%',
        fontSize: 20,
    },

    rate: {
        width: '8%',
        height: '8%',
        backgroundColor: 'blue',
        marginLeft: '50%',
        top: '15%',
        fontSize: 20,
        borderRadius: 5,

    },
    rateText: {
        color: '#fff',
        textAlign: 'center'
    }

})