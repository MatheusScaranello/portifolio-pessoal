import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  View,
} from 'react-native';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Projetos from './components/projetos/Projetos';

export default function App() {

  return (
    <>
    <Header />
    <View className="p-4">
      <View className="flex justify-center items-center">
        <Image
          source={require('./assets/matheus.jpeg')}
          style={{ width: 200, height: 200, borderRadius: 10 }}
          className="rounded-lg"
        />
      </View>
      <View className="mt-8">
        <Text className="text-center" >Nascido em 5 de julho de 2006, em Campinas, São Paulo, minha paixão pela tecnologia surgiu cedo. Durante meus anos no SESI, mergulhei nos estudos de matemática e ciência da computação. Ingressei no curso técnico de desenvolvimento de sistemas no SENAI, onde aprofundei meus conhecimentos em linguagens de programação. Além disso, fiz um curso de Marketing Digital pelo SEBRAE, ampliando minha compreensão sobre tecnologia e marketing. Assumi o cargo de Social Media Manager na Mata Matos, aplicando meus conhecimentos profissionais. Recebi o título de aluno Ouro do SENAI duas vezes, reconhecendo minha excelência acadêmica e desempenho em desenvolvimento de sistemas.</Text>
      </View>
    </View>
    <Projetos />
    <StatusBar style="auto" />
    <Footer />
    </>
  );
}