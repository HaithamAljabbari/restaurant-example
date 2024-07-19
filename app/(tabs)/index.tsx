import * as React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import delivery_icon from './delivery2.png';
import logo from './logo.png';

const Tab = createBottomTabNavigator();

function Gallery() {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.galleryContainer}>
      {Array.from({ length: 6 }).map((_, index) => (
        <Image key={index} source={require('./kebab2.jpeg')} style={styles.galleryImage} />
      ))}
    </ScrollView>
  );
}

function StarRating() {
  return (
    <View style={styles.starContainer}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Text key={index} style={styles.star}>&#9733;</Text> // Unicode for filled star
      ))}
    </View>
  );
}

function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.button2}>
          <View style={styles.buttonContent}>
            <Image source={delivery_icon} style={styles.icon} />
            <Text style={styles.button2Text}>Delivery Location</Text>
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.scrollContentContainer}>
        <View>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Image source={logo} style={styles.logo} />
        </View>
        <Text style={[styles.headerText, styles.marginTopLarge]}>What's New</Text>
        <Gallery />
        <Text style={styles.headerText}>Best Selling</Text>
        <View style={styles.row}>
          <View style={styles.kebabContainer}>
            <Image source={require('./kebab2.jpeg')} style={styles.kebab} />
            <StarRating />
          </View>
          <View style={styles.kebabContainer}>
            <Image source={require('./kebab2.jpeg')} style={styles.kebab} />
            <StarRating />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.kebabContainer}>
            <Image source={require('./kebab2.jpeg')} style={styles.kebab} />
            <StarRating />
          </View>
          <View style={styles.kebabContainer}>
            <Image source={require('./kebab2.jpeg')} style={styles.kebab} />
            <StarRating />
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Check out MORE</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

function SettingScreen() {
  return (
    <View style={styles.centeredContainer}>
      <Text style={styles.text}>Settings Screen</Text>
    </View>
  );
}

function DeliveryScreen() {
  return (
    <View style={styles.centeredContainer}>
      <Text style={styles.text}>Delivery Screen</Text>
    </View>
  );
}

export default function App() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Delivery" component={DeliveryScreen} />
      <Tab.Screen name="Settings" component={SettingScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: '100%',
    height: Platform.OS === 'ios' ? 200 : 450, // Different heights for iOS and web
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContainer: {
    flex: 1,
  },
  scrollContentContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  marginTopLarge: {
    marginTop: 80, // Increase this value to add more space
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  kebabContainer: {
    width: '48%',
    alignItems: 'center',
  },
  kebab: {
    borderRadius: 20,
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  starContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  star: {
    fontSize: 20,
    color: '#FFD700', // Gold color for filled star
    marginHorizontal: 2,
  },
  button: {
    width: '90%',
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    borderRadius: 5,
    marginVertical: 20,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button2: {
    width: '90%',
    backgroundColor: '#e2eeec',
    paddingVertical: 15,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  button2Text: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  icon: {
    width: 34,
    height: 34,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  galleryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  galleryImage: {
    borderRadius: 20,
    width: 120,
    height: 120,
    resizeMode: 'cover',
    marginHorizontal: 10,
  },
  navbar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    paddingVertical: 10,
    alignItems: 'center',
    zIndex: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
