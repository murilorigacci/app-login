import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  Image, 
  SafeAreaView, 
  ScrollView,
} from 'react-native';

import { FontAwesome, MaterialIcons, Feather } from '@expo/vector-icons'; 

export default function LoginScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
      
        <View style={styles.imageWrapper}>
          <Image
            source={require('./assets/image.png')}
            style={styles.imagemCentralizada} 
            resizeMode="contain" 
          />
        </View>

        <Text style={styles.title}>Join Us!</Text>
        
        <View style={styles.form}>
          <Text style={styles.label}>Your Name :</Text>
          <View style={styles.inputContainer}>
            <TextInput 
              style={styles.input} 
              placeholder="Enter your full name" 
              placeholderTextColor="#a0c4d1"
            />
            <FontAwesome name="user" size={18} color="#a0c4d1" />
          </View>

          <Text style={styles.label}>Your Email :</Text>
          <View style={styles.inputContainer}>
            <TextInput 
              style={styles.input} 
              placeholder="hello@gmail.com" 
              placeholderTextColor="#a0c4d1"
              keyboardType="email-address"
            />
            <Feather name="send" size={18} color="#a0c4d1" />
          </View>

          <Text style={styles.label}>Password:</Text>
          <View style={styles.inputContainer}>
            <TextInput 
              style={styles.input} 
              placeholder="************" 
              placeholderTextColor="#a0c4d1"
              secureTextEntry
            />
            <Feather name="lock" size={18} color="#a0c4d1" />
          </View>
        </View>

        <View style={styles.dividerContainer}>
          <View style={styles.line} />
          <Text style={styles.orText}>or</Text>
          <View style={styles.line} />
        </View>

        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialIcon}>
            <FontAwesome name="google" size={20} color="#00a8d6" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialIcon}>
            <FontAwesome name="facebook" size={20} color="#00a8d6" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialIcon}>
            <MaterialIcons name="camera-alt" size={20} color="#00a8d6" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Create an account</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    paddingHorizontal: 30,
    alignItems: 'center',
    paddingBottom: 40,
  },
  imageWrapper: {
    marginTop: 50,
    marginBottom: 10,
    width: '100%',
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagemCentralizada: {
    width: 120, 
    height: 120,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  form: {
    width: '100%',
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
    marginTop: 15,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eff8ff',
    borderRadius: 12,
    paddingHorizontal: 15,
    height: 50,
    borderWidth: 1,
    borderColor: '#d0eaff',
  },
  input: {
    flex: 1,
    color: '#333',
    fontSize: 15,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: 30,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#d0eaff',
  },
  orText: {
    marginHorizontal: 10,
    color: '#a0c4d1',
    fontSize: 14,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginBottom: 40,
  },
  socialIcon: {
    width: 45,
    height: 45,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#d0eaff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#00a8d6',
    width: '100%',
    height: 55,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});