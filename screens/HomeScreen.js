import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Header1 from '../components/home/Header1'
import Stories from '../components/home/Stories'
import Post from '../components/home/Post'
import { POST } from '../data/post'
import { BottomSheet } from 'react-native-elements'
import BottomTabs, { bottomTabIcon } from '../components/home/BottomTabs'
// import { Divider } from 'react-native-elements/dist/divider/Divider'



const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
    {/* <Divider width={0.5} color={'#262626'} /> */}
      <ScrollView>
        <Header1 />
        <Stories />
        {/* <ScrollView> */}
          {POST.map((post, index) => (
            <Post post={post} key={index} />
          ))}
        {/* </ScrollView> */}
      </ScrollView>
      <BottomTabs icons={bottomTabIcon} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
})

export default HomeScreen
