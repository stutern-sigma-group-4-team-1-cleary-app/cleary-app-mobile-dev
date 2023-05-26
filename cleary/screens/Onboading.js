import { View, Text, SafeAreaView, FlatList, Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'react-native'
import Buttoncreation from '../components/Buttoncreation'


const { width, height } = Dimensions.get('window')

export const slide = [
  {
    id: '1',
    image: require('../assets/images/onboarding1.png'),
    tittle: 'Communicate effectively and  gain your confidence',
    subtittle: 'Welcome to a world of effective communication possibility. Communicate effectively with text, Speech or sign. the choice is yours. ',
  },
  {
    id: '2',
    image: require('../assets/images/onboarding2.png'),
    tittle: 'Learn sign Language on the go!',
    subtittle: 'Welcome to a world of effective communication possibility. Communicate effectively with text, Speech or sign. the choice is yours. ',
  },
  {
    id: '3',
    image: require('../assets/images/onboarding3.png'),
    tittle: 'Personalize your Communication Chioce',
    subtittle: 'Welcome to a world of effective communication possibility. Communicate effectively with text, Speech or sign. the choice is yours. ',
  },
  {
    id: '4',
    image: require('../assets/images/onboarding4.png'),
    tittle: 'Real time in app Chat and Video call made easy',
    subtittle: 'Welcome to a world of effective communication possibility. Communicate effectively with text, Speech or sign. the choice is yours. ',
  },

]
const Slides = ({ item }) => {
  return (
    <View style={{ alignItems: "center", width: width, flex: 1, }}>
      <Image source={item.image} style={{ height: '70%', resizeMode: 'contain', width: '58%', }} />
      <Text style={{ fontWeight: 'bold', fontSize: 20, maxWidth: '80%', textAlign: "center", }}>{item.tittle}</Text>
      <Text>{item.subtittle}</Text>
    </View>
  )
}

const OnboadingFooter = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  return (
    <View style={{
      justifyContent: "space-between",
      paddingHorizontal: 20,
      alignItems: 'center'
    }}>
      <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 20, alignItems: 'center' }}>
        {slide.map((_, index) => (
          <View key={index} style={[styles.indicator, currentSlideIndex == index && { backgroundColor: '#10286E' }]} />
        ))}
      </View>
    </View>
  )
}

const Updatecurrentslideindex = e => {
 
}


const Onboading = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList data={slide}
        contentContainerStyle={{ height: height * 0.75 }}
        horizontal
        onMomentumScrollEnd={Updatecurrentslideindex}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        renderItem={({ item }) => <Slides item={item} />}
      />
      <OnboadingFooter />
      <Buttoncreation />
    </SafeAreaView>
  )
}
styles = StyleSheet.create({
  indicator: {
    height: 10,
    width: 10,
    backgroundColor: 'grey',
    marginHorizontal: 3,
    borderRadius: 100.,
    flexDirection: "row"
  }
})


export default Onboading