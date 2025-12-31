import React, { useState } from 'react';
import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Avatar from './Avatar';

export default function Kart({ yazar, konum, resimUri, paylasimSaati, onYorumAc }) {
  const [begendim, setBegendim] = useState(false);
  const [begeniSayisi, setBegeniSayisi] = useState(Math.floor(Math.random() * 50) + 10);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Avatar initials={yazar.slice(0, 1)} size={35} />
        <View style={{ marginLeft: 10 }}>
          <Text style={styles.yazar}>{yazar}</Text>
          <Text style={styles.konum}>{konum} • {paylasimSaati}</Text>
        </View>
      </View>
      <Image source={{ uri: resimUri }} style={styles.resim} />
      <View style={styles.altIcerik}>
        <View style={styles.butonlar}>
          <TouchableOpacity onPress={() => {setBegendim(!begendim); setBegeniSayisi(begendim ? begeniSayisi-1 : begeniSayisi+1)}}>
            <Text style={{fontSize: 22, marginRight: 15}}>{begendim ? '❤️' : '🤍'}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onYorumAc}>
            <Text style={{fontSize: 22}}>💬</Text>
          </TouchableOpacity>
        </View>
        <Text style={{fontWeight: 'bold'}}>{begeniSayisi} beğenme</Text>
        <TouchableOpacity onPress={onYorumAc}>
          <Text style={{color: 'gray', marginTop: 5}}>Yorumları gör...</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 15, backgroundColor: 'white' },
  header: { flexDirection: 'row', padding: 10, alignItems: 'center' },
  yazar: { fontWeight: 'bold' },
  konum: { fontSize: 12, color: 'gray' },
  resim: { width: '100%', aspectRatio: 1 },
  altIcerik: { padding: 10 },
  butonlar: { flexDirection: 'row', marginBottom: 5 }
});