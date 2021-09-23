import React, { useState, useContext } from 'react';
import { View, Text, Image, Keyboard, TouchableOpacity, TouchableWithoutFeedback, TextInput } from "react-native";
import styles from '../styles/movieStyles';
import { COLORS} from '../constants';
import Moment from 'moment';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import ImagePicker from 'react-native-image-picker';
import { MyContext } from '../context/myContext';
import Icon from 'react-native-vector-icons/AntDesign';
const addMovie = ({ navigation }) => {
    const [movieText, setMovieText] = useState("");
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [displayDate, setDesplayDate] = useState("");
    const [image, setImage] = useState("");
    const [overView, setOverView] = useState("");
    const [date, setDate] = useState("");
    const [resourcePath, setResourcePath] = useState({})
    const { dispatch } = useContext(MyContext)


    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        setDesplayDate(date)
        setDate(date)
        hideDatePicker();
    };



    function selectFile() {
        var options = {
            title: 'Select Image',
            customButtons: [
                {
                    name: 'customOptionKey',
                    title: 'Choose file from Custom Option'
                },
            ],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        ImagePicker.showImagePicker(options, res => {
            console.log('Response = ', res);

            if (res.didCancel) {
                console.log('User cancelled image picker');
            } else if (res.error) {
                console.log('ImagePicker Error: ', res.error);
            } else if (res.customButton) {
                console.log('User tapped custom button: ', res.customButton);
                alert(res.customButton);
            } else {
                let source = res;
                setResourcePath(source)
                setImage(source.uri)
                console.log("source", source.uri)
            }
        });
    };


    function add() {
        
        dispatch({ type: "add", payload: { movieText, overView, date, image } })
        navigation.navigate("Main")
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={true}>
            <View style={styles.container}>
                <View style={styles.inputView}>
                    <TextInput
                        placeholder="Enter the title"
                        style={styles.input}
                        placeholderTextColor={COLORS.gray2}
                        returnKeyType="next"
                        onChangeText={movieText => setMovieText(movieText)} >
                    </TextInput>
                </View>

                <View style={styles.inputView}>
                    <TextInput
                        placeholder="Enter the overview"
                        style={styles.input}
                        placeholderTextColor={COLORS.gray2}
                        returnKeyType="next"
                        onChangeText={overView => setOverView(overView)}>
                    </TextInput>
                </View>


                <TouchableOpacity style={styles.inputView} onPress={showDatePicker}>
                    <Text style={styles.textView}>{displayDate ? Moment(displayDate).format('D MMM YYYY') : "Enter date"}</Text>
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                    />
                    <Icon
                        name='calendar'
                        color={COLORS.gray2}
                        size={25}
                        style={styles.icon}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => selectFile()}
                    style={styles.inputView} >
                    <Text style={styles.textView}> choose poster</Text>

                    {image == "" ? null :
                        <Image source={{
                            uri: image

                        }} style={styles.slider} />}

                </TouchableOpacity>



                <TouchableOpacity style={styles.addTouch}
                    onPress={() => add()}>
                    <Text style={styles.addText}>Add Movie</Text>
                </TouchableOpacity>

            </View>
        </TouchableWithoutFeedback>
    )
}

export default addMovie


