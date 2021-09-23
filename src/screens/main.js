import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity, FlatList, ActivityIndicator, Animated } from "react-native";
import styles from '../styles/mainStyles';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import * as moviesServices from '../services/moviesServices';
const moviesService = moviesServices.default
import { COLORS } from '../constants';
import Icon from 'react-native-vector-icons/Ionicons';
import Moment from 'moment';
import { MyContext } from '../context/myContext';

const main = ({ navigation }) => {
    const scrollY = React.useRef(new Animated.Value(0)).current;
    const [datasource, setdatasource] = useState([])
    const [index, setIndex] = useState(0);
    const { state } = useContext(MyContext)
    const [loading, setLoading] = useState(false);
    const [imageLink, setImageLink] = useState('');
    const [routes] = React.useState([
        { key: 'first', title: 'All Movies' },
        { key: 'second', title: 'My Movies' },
    ]);


    useEffect(() => {
        Moment.locale('en');
        displayMovies()
        let endPoint = 'https://image.tmdb.org/t/p/w500'
        setImageLink(endPoint)
        loadMoare()
    }, [])


    const displayMovies = () => {
        moviesService.getMovies()
            .then((res) => {
                setdatasource(res.data.results)
                setLoading(false)
            })
            .catch((error) => {
                console.log("error", error);
            })
    }

    function loadMoare() {
        setLoading(true)

    }

    function renderFooter() {
        return loading ? <View>
            <ActivityIndicator size="large" color={COLORS.white} />
        </View> : null
    }
    const FirstRoute = () => (
        <View style={{ flex: 1, backgroundColor: COLORS.darkBlue }} >
            <FlatList contentContainerStyle={{ alignItems: 'center' }}
                ListFooterComponent={renderFooter}
                onEndReachedThreshold={0.2}
                progressViewOffset={1}
                scrollEventThrottle={1}
                keyExtractor={(item, index) => String(index)}
                data={datasource} renderItem={({ item }) => {
                    return (
                        <View style={{ ...styles.card }}>

                            <View style={styles.row}>
                                <View>
                                    <Image source={{
                                        uri: imageLink + item.poster_path

                                    }} style={styles.slider} />
                                </View>

                                <View>
                                    <Text style={styles.header}>{item.original_title}</Text>
                                    <Text style={styles.date}>{Moment(item.release_date).format('D MMM YYYY')}</Text>
                                    <Text style={styles.subText} numberOfLines={5} ellipsizeMode='tail'>{item.overview}</Text>

                                </View>
                            </View>
                        </View>

                    )
                }}
            />
        </View>
    );


    const SecondRoute = () => (
        <View style={{ flex: 1, backgroundColor: COLORS.darkBlue }} >

            <View style={{  paddingRight: 20,paddingBottom:20 }}>
                <TouchableOpacity style={styles.addTouch} onPress={() => navigation.navigate("AddMovie")}>
                    <Text style={styles.addText}>Add Movie</Text>
                    <Icon
                        name='add-outline'
                        color={COLORS.white}
                        size={25}
                        style={{ alignSelf: 'center' }}
                    />
                </TouchableOpacity>
            </View>


            {state == '' ?
                <View>
                   

                    <Image
                        source={require('../constants/add.png')}
                        style={styles.addImage} />
                         <Text style={styles.empty}>Your movie list is empty !</Text>
                </View> :
                <FlatList
                    contentContainerStyle={{ paddingBottom: 160 }}
                    keyExtractor={(item, index) => {
                        return index.toString();
                    }}

                    data={state}
                    renderItem={({ item, index }) => {
                        return (

                            <View style={{...styles.card, left:10}}> 

                                <View style={styles.row}>

        {/*                             <View>
                                        <Image
                                            source={{ uri: item.image }}
                                            style={styles.slider} />

                                    </View> */}

                                    <View>
                                        <Image
                                            /* source={require('../constants/noPic.png')} */
                                            source={ item.image  == '' ?require('../constants/noPic.png') :{ uri: item.image }  }
                                              /* source={{ uri: item.image } ? { uri: item.image } : require('../constants/noPic.png')} */
                                            style={styles.slider} />

                                    </View>

                                    <View>
                                        <Text style={{ ...styles.header, left: 10 }}>{item.movieText}</Text>
                                        <Text style={{ ...styles.date, left: 10 }}>{Moment(item.date).format('D MMM YYYY')}</Text>
                                        <Text style={{ ...styles.subText, left: 10 }} numberOfLines={5} ellipsizeMode='tail'>{item.overView}</Text>

                                    </View>
                                </View>
                            </View>

                        )
                    }}
                />}










        </View>
    );
    const initialLayout = { width: Dimensions.get('window').width };
    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
    });

    const renderTabBar = props => (
        <TabBar
            {...props}
            renderLabel={({ route, color }) => (
                <Text style={{ color: COLORS.white }}>
                    {route.title}
                </Text>
            )}

            indicatorStyle={{ backgroundColor: COLORS.white, color: 'red' }}
            style={{ backgroundColor: '#22273B', color: 'red' }}
        />
    );

    return (
        <TabView
            navigationState={{ index, routes, navigation }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
            style={{ color: 'red' }}
            indicatorStyle={{ backgroundColor: 'red', color: 'red' }}
            renderTabBar={renderTabBar}
            navigation={navigation}
        />
    );
}


export default main


