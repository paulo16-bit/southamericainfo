import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, Linking } from 'react-native';
import { router } from 'expo-router';
import styles from './style/styles';

export default function AboutScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Sobre o App</Text>
      <SafeAreaView style={styles.content}>
        
        <Text style={styles.aboutText}>
          <Text style={{ fontWeight: 'bold' }}>API usada:</Text> REST Countries
        </Text>

        <Text style={styles.aboutText}>
          <Text style={{ fontWeight: 'bold' }}>Descrição:</Text> API gratuita que fornece informações detalhadas sobre todos os países do mundo, incluindo nome oficial, bandeira, capital, população, área, moedas e muito mais.
        </Text>

        <TouchableOpacity onPress={() => Linking.openURL('https://restcountries.com/')}>
          <Text style={[styles.aboutText, { color: '#0080ff', textDecorationLine: 'underline' }]}>
            https://restcountries.com/
          </Text>
        </TouchableOpacity>

        <Text style={[styles.aboutText, { marginTop: 20 }]}>
          <Text style={{ fontWeight: 'bold' }}>Equipe:</Text>
          {'\n'}• Paulo Pereira
          {'\n'}• Lauro Andrade
          {'\n'}• Raquel Coelho
        </Text>
      </SafeAreaView>
      <TouchableOpacity style={styles.botaocomum} onPress={() => router.back()}>
        <Text style={styles.textobotaoprincipal}>Voltar</Text>
      </TouchableOpacity>
      
    </SafeAreaView>
  );
}
