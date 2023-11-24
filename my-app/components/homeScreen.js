import { Room } from './roomCard'
export function HomeScreen
    ({ navigation }) {
    return (<>
        <Room
            tipoHabitacion={'sencilla'}
            navigation={navigation}
        ></Room>
        <Room
            tipoHabitacion={'Doble'}>
            navigation={navigation}
        </Room>
        <Room tipoHabitacion={'pos'}>
            navigation={navigation}
        </Room>

    </>);
}

