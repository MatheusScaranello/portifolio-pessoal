import React from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  View,
  StyleSheet,
} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://i.imgur.com/U02CUC5.jpeg',
        }}
      />
      <Text style={styles.name}>MATHEUS MENEZES SCARANELLO</Text>
      <Text style={styles.title}>DESENVOLVEDOR DE SISTEMAS</Text>
      <Text style={styles.text}>
        Nascido em 5 de julho de 2006, em Campinas, SP, minha paixão por
        tecnologia surgiu cedo. Durante meus anos no SESI, mergulhei nos estudos
        de matemática e ciência da computação. Ingressse no curso técnico de
        desenvolvimento de sistemas no SENAI, onde aprofundei meus conhecimentos
        em linguagens de programação. Recebi o título de aluno Ouro do SENAI duas
        vezes, reconhecendo minha excelência acadêmica e desempenho em
        desenvolvimento de sistemas.
      </Text>
      <View style={styles.skillsContainer}>
        <Text style={styles.skillsTitle}>Habilidades</Text>
        <FlatList
          data={['Metodologia Agil', 'Madj', '.HTM']}
          renderItem={({ item }) => (
            <Text style={styles.skillsText}>{item}</Text>
          )}
          keyExtractor={(item) => item}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={styles.educationContainer}>
        <Text style={styles.educationTitle}>EDUCATION</Text>
        <Text style={styles.educationText}>
          Ensino Médio - 2022-2024 - SENAI
        </Text>
        <Text style={styles.educationText}>
          Desenvolvimento de Sistemas - 2023-2024 - SENAI
        </Text>
      </View>
      <Text style={styles.languageTitle}>LANGUAGE</Text>
      <Text style={styles.languageText}>Português</Text>
      <View style={styles.projectsContainer}>
        <Text style={styles.projectsTitle}>PROJETOS</Text>
        <FlatList
          data={[
            {
              title: 'BRASILEIRÃO 2023-6DGVS',
              url: 'https://brasileiraodev.math.rapp/',
            },
            {
              title: 'KAMINEWS',
              url: 'http://techverlapp',
            },
            {
              title: 'MARVEL API-BDEVS',
              url: 'http://marvel-deverlapp/',
            },
          ]}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.projectButton}>
              <Text style={styles.projectText}>{item.title}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.title}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10, textAlign: 'center', }, 
    
    
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 20, textAlign: 'center', }, text: { fontSize: 16, marginBottom: 20, }, skillsContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 20, }, skillsTitle: { fontSize: 16, fontWeight: 'bold', marginRight: 10, }, skillsText: { fontSize: 16, marginRight: 10, }, educationContainer: { marginBottom: 20, }, educationTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 10, }, educationText: { fontSize: 16, marginBottom: 10, }, languageTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 5, }, languageText: { fontSize: 16, marginBottom: 20, }, projectsContainer: { marginBottom: 20, }, projectsTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 10, }, projectButton: { backgroundColor: '#ddd', padding: 10, marginRight: 10, borderRadius: 5, }, projectText: { fontSize: 16, }, });

    export default App;