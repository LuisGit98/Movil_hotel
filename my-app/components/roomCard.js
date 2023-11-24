import { View, StyleSheet, Text, Pressable, Tou } from "react-native";

export function Room({ tipoHabitacion,navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.indexBox}>
                <View >
                    <Text style={styles.text}>
                        {tipoHabitacion}
                    </Text>
                </View>
                <Pressable onPress={() => navigation.navigate('standarRoom')}>
                    <Text style={styles.pressButton}
                        >
                        Reservar
                    </Text>
                </Pressable>

            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#202020',
        alignItems: 'center',
        justifyContent: 'flex-start',
        
    },
    indexBox: {
        width: '90%',
        marginTop:'9%',
        backgroundColor: '#303030',
        borderWidth: 3,
        borderColor: '#505050',
        borderRadius: 20,
        padding: 15
    },
    text: {
        color: '#999999',
        fontSize: 26
    },
    pressButton: {
        backgroundColor: 'green',
        borderRadius: 25,
        padding: 14,
        marginTop: '35%',
        marginLeft: '70%',
        fontSize: 28
    },

})

