import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons'


const Header1 = () => {
  return (
    <View style={styles.container}>
        <TouchableOpacity>
            <View style={styles.containerLogo} >
                <Image
                    style={styles.logo}
                    source={require('../../assets/header-logo-white.png')} 
                />
                <FontAwesomeIcon style={styles.iconLogo} icon={faAngleDown} size={14} />
            </View>
        </TouchableOpacity>

        <View style={styles.iconsContainer} >
            <TouchableOpacity>
                <FontAwesomeIcon style={styles.icon} icon={faHeart} size={24} />
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.unreadBadge}>
                    <Text style={styles.unreadBadgeText}>11</Text>
                </View>
                <Image
                    style={styles.iconImg}
                    source={require('../../assets/icon8messenger2.png')} 
                />
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 20,
    },
    containerLogo: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    logo: {
        width: 120,
        height: 50,
        resizeMode: 'contain',
    },
    iconLogo: {
        color: 'white',
        margin: 6,
    },
    icon: {
        color: 'white',
        // width: 30,
        // height: 30,
        marginLeft: 24,
        resizeMode: 'contain',
    },
    iconImg: {
        marginLeft: 24,
        width: 27,
        height: 27,
        resizeMode: 'contain',
    },
    iconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    unreadBadge: {
        backgroundColor: '#FF3240',
        position: 'absolute',
        left: 38,
        bottom: 14,
        width: 20,
        height: 18,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        zIndex: 100,
    },
    unreadBadgeText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 12,
    },
  })

export default Header1