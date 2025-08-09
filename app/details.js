import React, { useEffect, useState } from 'react';
import { useLocalSearchParams, router } from 'expo-router';
import { SafeAreaView, Text, Image, ActivityIndicator, TouchableOpacity, StyleSheet, View } from 'react-native';
import styles from './style/styles.js';

export default function DetailScreen() {
  const { countryName } = useLocalSearchParams(); // pega o parâmetro da rota
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fields=name,flags,capital,area,population,region,subregion,currencies,languages`)
      .then(response => response.json())
      .then(data => {
        setCountry(data[0] || data);
      })
      .catch(error => {
        console.error('Erro ao buscar detalhes:', error);
      })
      .finally(() => setLoading(false));
  }, [countryName]);

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </SafeAreaView>
    );
  }

  if (!country) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>País não encontrado.</Text>
        <TouchableOpacity style={styles.botaocomum} onPress={() => router.back()}>
          <Text style={styles.textobotaoprincipal}>Voltar</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image source={{ uri: country.flags.png }} style={localStyles.flagLarge} />
      <Text style={styles.title}>{country.name.common}</Text>
      
      <View style={styles.content}>
        <Text>
          <Text style={styles.destaque}>Nome oficial: </Text>
          {country.name.official}
        </Text>
        <Text>
          <Text style={styles.destaque}>Capital: </Text>
          {country.capital ? country.capital[0] : 'N/A'}
        </Text>
        <Text>
          <Text style={styles.destaque}>Região: </Text>
          {country.region}
        </Text>
        <Text>
          <Text style={styles.destaque}>Sub-região: </Text>
          {country.subregion}
        </Text>
        <Text>
          <Text style={styles.destaque}>População: </Text>
          {country.population.toLocaleString()}
        </Text>
        <Text>
          <Text style={styles.destaque}>Área: </Text>
          {country.area.toLocaleString()} km²
        </Text>
        <Text>
          <Text style={styles.destaque}>Moeda: </Text>
          {country.currencies ? Object.values(country.currencies)[0].name : 'N/A'}
        </Text>
        <Text>
          <Text style={styles.destaque}>Idioma: </Text>
          {country.languages ? Object.values(country.languages).join(', ') : 'N/A'}
        </Text>
      </View>

      <TouchableOpacity style={styles.botaocomum} onPress={() => router.back()}>
        <Text style={styles.textobotaoprincipal}>Voltar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  flagLarge: {
    width: 200,
    height: 120,
    marginBottom: 20,
    resizeMode: 'contain',
  },
});
