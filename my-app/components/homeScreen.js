import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Menu from './bottomMenu';
import Icon from 'react-native-vector-icons/FontAwesome';

export const HomeScreen = ({ navigation }) => {
  const goToDestination = () => {
    // Aquí deberías navegar a la pantalla de destino
    // Puedes ajustar el nombre de la pantalla según tu configuración de navegación
    navigation.navigate('Search');
  };

  const goToCalendar = () => {
    // Aquí deberías navegar a la pantalla de calendario
    // Puedes ajustar el nombre de la pantalla según tu configuración de navegación
    navigation.navigate('CalendarScreen');
  };

  const search = () => {
    // Agrega la lógica para la búsqueda aquí
    // Por ahora, solo mostraremos un mensaje en la consola
    console.log('Realizando búsqueda...');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.appName}>AlojaBaja Sur</Text>

      <TouchableOpacity style={styles.button} onPress={goToDestination}>
        <Icon name="plane" size={20} color="#fff" />
        <Text style={styles.buttonText}>A donde vamos?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={goToCalendar}>
        <Icon name="calendar" size={20} color="#fff" />
        <Text style={styles.buttonText}>Calendario</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={search}>
        <Icon name="search" size={20} color="#fff" />
        <Text style={styles.buttonText}>Buscar</Text>
      </TouchableOpacity>

      <Menu />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F1F68',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    paddingTop: 60,
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 80,
  },
  button: {
    backgroundColor: '#3498db',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 5,
    marginBottom: 80,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 10,
  },
});