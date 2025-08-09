import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 16,
    margin: 30,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  botaoprincipal: {
    backgroundColor: '#0080ff',
    padding: 12,
    borderRadius: 8,
    marginVertical: 6,
    width: '80%',
    alignItems: 'center',
  },
  textobotaoprincipal: {
    color: '#fff',
    fontSize: 16,
  },
  botaocomum: {
    backgroundColor: '#555',
    padding: 10,
    borderRadius: 6,
    marginTop: 20,
    width: '60%',
    alignItems: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    width: '90%',
    alignSelf: 'center',
  },
  flag: {
    width: 50,
    height: 30,
    marginRight: 10,
    resizeMode: 'contain',
  },
  itemText: {
    fontSize: 16,
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 50,
    margin: 10, // corrigido
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  content: {
    width: '90%',
    marginTop: 10,
  },
  aboutText: {
    fontSize: 16,
    marginVertical: 6,
    textAlign: 'justify',
  },
  destaque: {
    fontWeight: 'bold',
  },
});
