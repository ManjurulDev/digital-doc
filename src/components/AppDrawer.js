// AppDrawer.js
import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the Icon component

const AppDrawer = ({onLogout, onProfile}) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleDrawer = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <TouchableOpacity style={styles.iconButton} onPress={toggleDrawer}>
        <Icon name="gear" size={30} color="black" />
      </TouchableOpacity>

      {isVisible && (
        <View style={styles.drawer}>
          <TouchableOpacity onPress={onProfile}>
            <Text style={styles.drawerItem}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onLogout}>
            <Text style={styles.drawerItem}>Logout</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  iconButton: {
    position: 'absolute',
    top: 10,
    right: 10, // Position on the right side
    zIndex: 1001, // Ensure the button is above the drawer
  },
  drawer: {
    position: 'absolute',
    top: 40, // Below the settings icon
    left: 0,
    right: 0,
    backgroundColor: 'white',
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    zIndex: 1000,
  },
  drawerItem: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default AppDrawer;
