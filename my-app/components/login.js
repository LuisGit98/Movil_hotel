import { Text, View, TextInput, Pressable } from 'react-native'
import { styles } from '../styles/styles'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

export function LoginScreen({ navigation }) {
    return (
        <View style={styles.formContainer}>

            <View style={styles.formContainer}>
                <Text style={styles.alojaText}>Aloja Baja Store</Text>
                <Text
                    style={styles.text}>ingresar usario:</Text>

                <TextInput
                    style={styles.input}
                    placeholder='Ingrese su usuario'
                >
                </TextInput>
                <Text
                    style={styles.text}
                >Contraseña:
                </Text>

                <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    placeholder='Ingrese su contraseña'
                ></TextInput>
                <Text style={
                    {
                        fontSize: 20,
                        color: '#94D8F6',
                    }
                }>Has olvidado la constraseña?</Text>
            </View>

            <View style={styles.sendBtn}>
                <Pressable
                    onPress={() => {
                        navigation.navigate('Home')
                    }}
                >
                    <Text style={styles.btnText}>Iniciar sesion</Text>
                </Pressable>
            </View>
            <Text style={
                    {
                        fontSize: 20,
                        color: '#94D8F6',
                        top:'30%'
                    }
                }>No cuentas con una cuenta?</Text>
        </View>
    )
}


