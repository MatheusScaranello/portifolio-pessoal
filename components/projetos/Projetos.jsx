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

const projects = [
    { id: '1', name: 'Api brasileirao 2023', link: 'https://brasileirao-6devs-matheusscaranello.vercel.app/', imagem: '../../assets/brasileirao-image.jpg' },
    { id: '2', name: 'KamiNews', link: 'https://kamitech.vercel.app/', imagem: '../../assets/kaminews.png'},
    { id: '3', name: 'MarvelApi', link: 'https://marvel-6devs.vercel.app/', imagem: '../../assets/marvel.png'}
  ];

export default function Projetos() {

    return (
        <>
        <View className="p-4">
            <View className="mt-8">
                <Text className="text-center" >Aqui estão alguns dos meus projetos:</Text>
            </View>
            <FlatList
                data={projects}
                renderItem={({ item }) => (
                    <View className="mt-8 items-center" >

                        <Image
                            source={require('../../assets/marvel.png')}
                            style={{ width: 200, height: 200, borderRadius: 10 }}
                            className="rounded-lg"
                        />

                        <Text className="text-center" >{item.name}</Text>
                        <TouchableOpacity>
                            <Text className="text-center" >{item.link}</Text>
                        </TouchableOpacity>
                    </View>
                )}
                keyExtractor={item => item.id}
            />
        </View>
        </>
    );
    }