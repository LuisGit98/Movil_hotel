import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const RoomCard = ({ room, onSelect }) => {
    return (
        <TouchableOpacity
            style={{
                backgroundColor: room.isSelected ? '#D3D3D3' : 'white',
                padding: 16,
                margin: 8,
                borderRadius: 8,
                borderWidth: 1,
                borderColor: '#0F1F68',
            }}
            onPress={() => onSelect(room)}
        >
            <Text style={{ color: '#0F1F68', fontSize: 18, fontWeight: 'bold' }}>{room.name}</Text>
            <Text>
                <Icon name="users" size={16} /> Capacidad: {room.capacity} personas
            </Text>
            <Text>
                <Icon name="bed" size={16} /> Tipo de cama: {room.bedType}
            </Text>
            <Text>
                <Icon name="arrows-alt" size={16} /> Medidas: {room.dimensions}
            </Text>
            <Text>
                <Icon name="cutlery" size={16} /> {room.includesMeals ? 'Incluye comida' : 'Sin comida'}
            </Text>
            <Text>
                <Icon name="wifi" size={16} /> {room.includesWifi ? 'Wifi incluido' : 'Sin wifi'}
            </Text>
            <Text>
                <Icon name="snowflake-o" size={16} /> {room.includesAirConditioning ? 'Aire acondicionado incluido' : 'Sin aire acondicionado'}
            </Text>
            <Text>
                <Icon name="bath" size={16} /> {room.privateBathroom ? 'Baño privado' : 'Baño compartido'}
            </Text>
            <Text style={{ fontWeight: 'bold' }}>
                <Icon name="dollar" size={16} /> Precio: {room.price} $
            </Text>
            <Button title="Seleccionar" onPress={() => onSelect(room)} />
        </TouchableOpacity>
    );
};

export function SelectRoomScreen({ navigation }) {
    const [selectedRoom, setSelectedRoom] = useState(null);

    const rooms = [
        {
            name: 'Habitación Deluxe',
            capacity: 2,
            bedType: 'Cama doble grande',
            dimensions: '30m²',
            includesMeals: true,
            includesWifi: true,
            includesAirConditioning: true,
            privateBathroom: true,
            price: 500,
            isSelected: false,
        },
        {
            name: 'Habitación Económica',
            capacity: 1,
            bedType: 'Cama normal',
            dimensions: '10m²',
            includesMeals: false,
            includesWifi: true,
            includesAirConditioning: true,
            privateBathroom: false,
            price: 150,
            isSelected: false,
        },
        {
            name: 'Habitación Presidencial',
            capacity: 5,
            bedType: 'Cama Grande',
            dimensions: '40m²',
            includesMeals: true,
            includesWifi: true,
            includesAirConditioning: true,
            privateBathroom: true,
            price: 900,
            isSelected: false,
        },
    ];

    const handleSelectRoom = (selectedRoom) => {
        rooms.forEach((room) => {
            room.isSelected = false;
        });

        selectedRoom.isSelected = true;
        setSelectedRoom(selectedRoom);
    };

    const handleReserveRoom = () => {
        console.log('Habitación reservada:', selectedRoom);
    };

    const handleCancelReserve = () => {
        setSelectedRoom(null);
    };

    return (
        <View style={{ backgroundColor: '#0F1F68', padding: 20, flex: 1 }}>
            <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 8, marginBottom: 20, marginTop: 30 }}>
                <Text style={{ color: '#0F1F68', fontSize: 24, fontWeight: 'bold' }}>Elige tu habitación</Text>
            </View>
            <ScrollView style={{ flex: 1 }}>
                {rooms.map((room, index) => (
                    <RoomCard key={index} room={room} onSelect={handleSelectRoom} />
                ))}
            </ScrollView>
            {selectedRoom && (
                <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: '#E9E9E9', padding: 30, borderRadius: 12, flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <View>
                    <Text style={{ color: '#0F1F68', fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>{selectedRoom.name}</Text>
                    <Text style={{ marginBottom: 15, }}>Precio: {selectedRoom.price} $</Text>
                </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 60 }}>
                        <View style={{ marginRight: 40 }}>
                            <Button title="Reservar" onPress={handleReserveRoom} />
                        </View>
                        <Button title="Cancelar" onPress={handleCancelReserve} />
                    </View>
                </View>
            )}
        </View>
    );
}
