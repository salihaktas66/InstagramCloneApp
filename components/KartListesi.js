import React from 'react';
import { FlatList, View } from 'react-native';
import Kart from './Kart';

export default function KartListesi({ items, onYorumAc }) {
  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Kart 
          yazar={item.yazar} 
          konum={item.konum} 
          resimUri={item.uri} 
          paylasimSaati={item.paylasimSaati}
          onYorumAc={() => onYorumAc(item.varsayilanYorumlar)}
        />
      )}
    />
  );
}