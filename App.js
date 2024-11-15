import React, { useState } from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity, SectionList, Image, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';


const datasource = [
  {
    data:[
      {key: "Charmander", img: "https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_168.png", num: 168},
      {key: "Nine Tales", img: "https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_38.png", num: 38},
        ],
    title: "Fire Type",
      bgColor: "#DC4D01",
      icon: "fire"

  },

  {
    data: [
      {key: "Squirtle", img: "https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_170.png", num: 170},
      {key: "Psyduck", img: "https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_54.png", num: 54},
    ],
    title: "Water Type",
      bgColor: "aquamarine",
      icon: "water"
  },
  {
    data: [
      {key: "Bulbasur", img: "https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_1.png", num: 1},
      {key: "Oddish", img: "https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_43.png", num: 43},
    ],
    title: "Grass Type",
      bgColor: "#BFFF00",
      icon: "grass"
 }
]

const styles = StyleSheet.create({
    headerText: {
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
        fontWeight: 'bold',
    },

    opacityStyle:{
        borderWidth:1,
    },

    textStyle: {
        fontSize:15,
        margin:10,
        textAlign:'left',
    },
    imageStyle: {
        width: 200,
        height: 200,
        margin: 5,
        resizeMode: 'contain',

    },

    container:
        {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
        },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },

})

const renderItem = ({item, section}) => {
  return (
      <TouchableOpacity  style={[styles.opacityStyle, styles.container, { backgroundColor: section.bgColor}]}>
        <Text>{item.key}</Text>
        <Image source={{ uri: item.img }} style={styles.imageStyle} />
      </TouchableOpacity>
  );
};

const App = () => {
    return (
        <View style={{ marginTop: 30, margin: 20 }}>
            <Button title={"Add Pokemon"} />
            <SectionList
                sections={datasource}
                renderItem={renderItem}
                contentContainerStyle={{ margin: 20, borderWidth: 1 }}
                renderSectionHeader={({ section: { title, bgColor, icon } }) => (
                    <View style={[styles.headerContainer, { backgroundColor: bgColor }]}>
                        <Icon name={icon} size={20} color="white" />
                        <Text style={styles.headerText}>{title}</Text>
                    </View>
                )}
            />
        </View>
    );
}

export default App;
