import { View, Text, StyleSheet } from "react-native";
import { Calendar } from "react-native-calendars";
import { useState } from "react";


export function StandarRoomScreen() {

    const [select, setSelected] = useState('')

    return (
        <View style={styles.box}>
            <View style={styles.viewS}>
                <Text>
                    Hola geis
                </Text>
                <Calendar
                    onDayPress={day => {
                        setSelected(day.dateString)
                    }} markedDates={{
                        [select]: { selected: true, disableTouchEvent: true, selectedColor: 'orange' }
                    }}
                    style={styles.calendarStyles}
                />

            </View >
            <Text>
                {select}
            </Text>
            



        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: '#303030',
        borderWidth: 3,
        borderColor: '#505050',
        borderRadius: 5
    },
    viewS: {
        height:'100%'

    }

})

