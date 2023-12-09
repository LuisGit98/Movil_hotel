import React, { useState } from 'react';
import { Text, View, TextInput, Pressable, StyleSheet, Alert  } from 'react-native';

export function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Validaciones básicas
    if (!email || !password) {
      Alert.alert('', 'Por favor, complete todos los campos.');
      return;
    }

    // Puedes agregar aquí tu lógica de autenticación
    // navigation.navigate('HomeScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.alojaText}>Aloja Baja Store</Text>
        <Text style={styles.label}>Ingresar correo:</Text>
        <TextInput
          style={styles.input}
          placeholder='Ingrese su correo'
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Text style={styles.label}>Contraseña:</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder='Ingrese su contraseña'
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Text
          style={styles.forgotPasswordText}
          onPress={() => console.log('Has olvidado la contraseña')}
        >
          ¿Has olvidado la contraseña?
        </Text>
      </View>

      <View style={styles.sendBtn}>
        <Pressable onPress={handleLogin} style={styles.sendBtnInner}>
          <Text style={styles.btnText}>Iniciar sesión</Text>
        </Pressable>
      </View>

      <Text
        style={styles.signUpText}
        onPress={() => console.log('Crear una cuenta')}
      >
        ¿No tienes una cuenta?
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0F1F68',
    padding: 20,
  },
  formContainer: {
    width: '100%',
    marginBottom: 20,
  },
  alojaText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#94D8F6',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    color: '#000', // Cambiado a negro para que el texto sea visible
    backgroundColor: '#fff',
  },
  forgotPasswordText: {
    fontSize: 15,
    color: '#94D8F6',
    textAlign: 'right',
  },
  sendBtn: {
    backgroundColor: '#3498db',
    borderRadius: 5,
    padding: 10,
    width: '100%',
  },
  sendBtnInner: {
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
  },
  signUpText: {
    fontSize: 15,
    color: '#94D8F6',
    marginTop: 20,
  },
});



