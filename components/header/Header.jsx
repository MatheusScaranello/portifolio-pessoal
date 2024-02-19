import React from 'react';
import { Text, View } from 'react-native';

export default function Header() {

  return (
    <View className="p-3 mt-5 mb-10 bg-gray-900">
      <View className="mt-10">
        <Text className="text-center text-2xl hover:text-base font-bold text-[#fff]">Matheus Menezes Scaranello</Text>
      </View>
      <View style={{ marginTop: 5 }}>
        <Text style={{ textAlign: 'center', color: '#fff' }}>Desenvolvedor de Sistemas</Text>
      </View>
    </View>
  );
}
