import { View, Text, ScrollView, Image, StyleSheet } from 'react-native'
import React from 'react'
import { USERS } from '../../data/users'
import LinearGradient from 'react-native-linear-gradient';

const Stories = () => {
  return (
    <View style={{marginBottom: 13}} >
        <ScrollView horizontal showsHorizontalScrollIndicator={false} >
            {USERS.map ((story, index) => (
                <View style={styles.storyContainer} key={index}>
                    <Image source={{ uri: story.image }} style={styles.story} />
                    <Text style={{ color: 'white', margin: 3 }}>
                        {story.user.length > 12 ? story.user.slice(0, 11).toLowerCase() + '...' : story.user.toLowerCase()}
                    </Text>
                </View>
            ))}
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    storyContainer: {
        alignItems: 'center',
        marginLeft: 10,
    },
    story: {
        width: 87,
        height: 87,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: '#e36f22',
    },
})

export default Stories