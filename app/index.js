import { SafeAreaView, Text, Image, TouchableOpacity } from 'react-native';
import logo from '../assets/logo.jpg';
import styles from './style/styles.js';
import { router } from 'expo-router';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={[styles.title, { marginBottom: 50 }]}>SouthAmericaInfo</Text>

      <TouchableOpacity
        style={styles.botaoprincipal}
        onPress={() => router.push('/list')}
      >
        <Text style={styles.textobotaoprincipal}>Listar Países</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoprincipal}
        onPress={() => router.push('/search')}
      >
        <Text style={styles.textobotaoprincipal}>Pesquisar Países</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoprincipal}
        onPress={() => router.push('/about')}
      >
        <Text style={styles.textobotaoprincipal}>Sobre</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Home;
