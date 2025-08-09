import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, FlatList, Image, ActivityIndicator } from 'react-native';
import { router } from 'expo-router';
import styles from './style/styles';

export default function SearchScreen() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]); // resultados filtrados
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    if (!query) return;
    setLoading(true);

    fetch('https://restcountries.com/v3.1/region/south%20america?fields=name,flags,languages')
      .then(response => response.json())
      .then(data => {
        const filtered = data.filter(country => {
          if (!country.languages) return false;

          const langs = Object.values(country.languages).map(l => l.toLowerCase());
          return langs.some(lang => lang.includes(query.toLowerCase()));
        });
        setResults(filtered);
      })
      .catch(error => {
        console.error('Erro ao buscar países:', error);
        setResults([]);
      })
      .finally(() => setLoading(false));
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.itemContainer}
      onPress={() => router.push({ pathname: '/details', params: { countryName: item.name.common } })}
    >
      <Image source={{ uri: item.flags.png }} style={styles.flag} />
      <Text style={styles.itemText}>{item.name.common}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Pesquisar países por idioma</Text>

      <TextInput
        style={styles.input}
        placeholder="Ex: port, span, french..."
        value={query}
        onChangeText={setQuery}
      />

      <TouchableOpacity style={styles.botaoprincipal} onPress={handleSearch}>
        <Text style={styles.textobotaoprincipal}>Buscar</Text>
      </TouchableOpacity>

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" style={{ marginTop: 20 }} />
      ) : (
        <FlatList
          data={results}
          keyExtractor={(item) => item.name.common}
          renderItem={renderItem}
          ListEmptyComponent={<Text style={{ marginTop: 20 }}>Nenhum resultado encontrado.</Text>}
        />
      )}

      <TouchableOpacity style={styles.botaocomum} onPress={() => router.back()}>
        <Text style={styles.textobotaoprincipal}>Voltar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
