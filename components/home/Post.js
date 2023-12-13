import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements/dist/divider/Divider'

const postFooterIcons = [
    {
        name: 'Like',
        imageUrl: <Image source={require('../../assets/like.png')} />,
        likedImageUrl: '',
    },
    {
        name: 'Comment',
        imageUrl: '',
    },
    {
        name: 'Share',
        imageUrl: '',
    },
    {
        name: 'Save',
        imageUrl: '',
    },
    
]

const Post = ({post}) => {
  return (
    <View style={{marginBottom: 30}} >
        {/* <Divider width={1} orientation='vertical' /> */}
        <Divider width={0.6} color={'#262626'} />
        <PostHeader post={post} />
        <PostImage post={post} />
        {/* <PostFooter /> */}
        <View style={styles.postFooterContainer}>
            <View style={styles.leftPostIconsContainer}>
                <TouchableOpacity>
                    <Image style={styles.postFooterIcon} source={require('../../assets/like5.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.postFooterIcon} source={require('../../assets/comments3.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.postFooterIcon} source={require('../../assets/share7.png')} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity>
                <Image style={styles.postFooterIcon} source={require('../../assets/save1.png')} />
            </TouchableOpacity>
        </View>
        <Likes post={post} />
        <Caption post={post} />
        <CommentsSection post={post} />
        <Comments post={post}/>
    </View>
  )
}

const PostHeader = ({post}) => (
    <View style={styles.PostHeader} >
        <View style={styles.PostHeaderContainer} >
            <Image source={{ uri: post.profile_picture }} style={styles.PostProfileImage} />
            <Text style={styles.PostUser} > {post.user} </Text>
        </View>
        <Image style={styles.options} source={require('../../assets/option.png')} />
        {/* <Text style={{color: 'white', fontWeight: '900' }}>...</Text> */}
    </View>
)

const PostImage = ({post}) => (
    <View style={styles.PostImageContainer} >
        <Image source={{uri: post.imageUrl}} style={styles.PostImage} />
    </View>
)

const Likes = ({post}) => (
    <View style={{flexDirection: 'row',}}>
        <Text style={{color: 'white', fontWeight: '600', marginHorizontal: 10}}>
            {post.likes.toLocaleString('en')} likes
            </Text>
    </View>
)
    
const Caption = ({post}) => (
    <View style={{ marginTop: 5, marginHorizontal: 10 }}>
        <Text style={{ color: 'white' }}>
            <Text style={{ fontWeight: '600'}}>
                {post.user}
            </Text>
            <Text> {post.caption}</Text>
        </Text>
    </View>
)

const CommentsSection = ({post}) => (
    <View style={{marginHorizontal: 10, marginTop: 5}}>
        {!!post.comments.length && (
            <Text style={{color: 'gray'}}>
                View {post.comments.length > 1 ? 'all ' : ''} {post.comments.length}{' '}
                {post.comments.length > 1 ? 'comments' : 'comment'}
            </Text>
        )}
    </View>
)

const Comments = ({post}) => (
    <>
        {post.comments.map(( comment, index) => (
            <View key={index} style={{marginHorizontal: 10, marginTop: 5}}>
                <Text style={{color: 'white'}}>
                    <Text style={{fontWeight: '600'}}>{comment.user} </Text>
                    <Text style={{ }}>{comment.comment}</Text>
                </Text>
            </View>
        ))}
    </>
)






const styles = StyleSheet.create({
    PostHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5,
        marginHorizontal: 10,
        alignItems: 'center',
    },
    PostHeaderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    PostProfileImage: {
        width: 35,
        height: 35,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#e36f22',
    },
    PostUser: {
        color: 'white',
        marginLeft: 5,
        fontWeight: '600'
    },
    options: {
        width: 20,
        height: 20,

    },
    PostImageContainer: {
        width: '100%',
        height: 450,
    },
    PostImage: {
        height: '100%',
        resizeMode: 'cover',
    },
    footerIcon: {
        width: 33,
        height: 33,
    },
    postFooterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    leftPostIconsContainer: {
        flexDirection: 'row',
    },
    postFooterIcon: {
        width: 33,
        height: 33,
        margin: 5,
    },
  })

export default Post