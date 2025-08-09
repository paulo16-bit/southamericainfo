import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, FlatList, Image, ActivityIndicator, View } from 'react-native';
import styles from './style/styles';
import { router } from 'expo-router';

export default function ListScreen() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/region/south%20america?fields=name,flags,cca3')
      .then(response => response.json())
      .then(data => {
        setCountries(data);
      })
      .catch(error => {
        console.error('Erro ao buscar países:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.itemContainer}
      onPress={() => router.push({pathname : "/details" , params : {countryName : item.name.common}})}
    >
      <Image source={{ uri: item.flags.png }} style={styles.flag} />
      <Text style={styles.itemText}>{item.name.common}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Países da América do Sul</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={countries}
          keyExtractor={(item) => item.cca3}
          renderItem={renderItem}
        />
      )}

      <TouchableOpacity style={styles.botaocomum} onPress={() => router.back()}>
        <Text style={styles.textobotaoprincipal}>Voltar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
