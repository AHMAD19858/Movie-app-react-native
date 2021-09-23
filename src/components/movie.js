import React from 'react'
import {  Text, View,TouchableOpacity } from 'react-native'
import Icon4 from 'react-native-vector-icons/Feather';
import styles from '../styles/movieStyles'
const movie = (props) => {
    return (
        <View
        style={styles.note}
        key={props.keyVal}
    >

        <Text style={styles.noteText}>{props.val.date}</Text>
        <Text style={styles.noteText}>{props.val.note}</Text>

        <TouchableOpacity
            onPress={props.deleteMethod}
            style={styles.noteDelete}
        >
            <Icon4
                name="trash"
                color={'white'}
                size={25}

            />
        </TouchableOpacity>
    </View>
    )
}

export default movie