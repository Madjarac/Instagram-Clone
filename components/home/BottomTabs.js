import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAngleDown, faClapperboard, faFilm, faHouse, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons'
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons'

const BottomTabs = () => {
  const [activeTab, setActiveTab] = useState('home');

  const getIconStyle = (tabName) => ({
    fontSize: 30,
    color: activeTab === tabName ? 'white' : '#949494',
    fontWeight: activeTab === tabName ? 'bold' : 'normal',
  });

  return (
    <View style={{ backgroundColor: 'black', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', margin: 8}}>
      <TouchableOpacity onPress={() => setActiveTab('home')}>
        <FontAwesomeIcon style={styles.iconLogo} icon={faHouse} size={24} color='white' />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setActiveTab('magnifying-glass')}>
        <FontAwesomeIcon style={styles.iconLogo} icon={faMagnifyingGlass} size={24} color='white' />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setActiveTab('plus')}>
        <FontAwesomeIcon style={styles.iconLogo} icon={faSquarePlus} size={24} color='white' />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setActiveTab('film')}>
        <FontAwesomeIcon style={styles.iconLogo} icon={faFilm} size={24} color='white' />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setActiveTab('user')}>
        <FontAwesomeIcon style={styles.iconLogo} icon={faUser} size={24} color='white' />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
});

export default BottomTabs;
