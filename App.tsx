// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { SafeAreaView, Modal, View, Text, Button, StyleSheet, StatusBar, FlatList } from 'react-native';
import { fetchImages } from './utils/api.js';
import KartListesi from './components/KartListesi';

export default function App() {
  const [veriler, setVeriler] = useState([]);
  const [modalGorunur, setModalGorunur] = useState(false);
  const [seciliYorumlar, setSeciliYorumlar] = useState([]);

  useEffect(() => {
    fetchImages().then(setVeriler);
  }, []);

  const yorumuAc = (yorumlar) => {
    setSeciliYorumlar(yorumlar);
    setModalGorunur(true);
  };

  return (
    <SafeAreaView style={styles.anaKonu}>
      <StatusBar barStyle="dark-content" />
      
      <View style={styles.ustBaslik}>
        <Text style={styles.baslikMetni}>Instagram Klonu (Salih Aktaş)</Text>
      </View>

      <KartListesi
        items={veriler} 
        onYorumAc={(yorumlar) => yorumuAc(yorumlar)}
      />

      <Modal visible={modalGorunur} animationType="slide">
        <SafeAreaView style={styles.modalIcerik}>
          <Text style={styles.modalBaslik}>Yorumlar</Text>
          <FlatList
            data={seciliYorumlar}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.yorumSatiri}>
                <View style={{ flex: 1 }}>
                  <Text>
                    <Text style={{ fontWeight: 'bold' }}>{item.kisi}: </Text>
                    {item.metin}
                  </Text>
                  <Text style={{ fontSize: 10, color: 'gray', marginTop: 4 }}>
                    {item.zaman} • Yanıtla
                  </Text>
                </View>
              </View>
            )}
          />
          <View style={{marginTop: 20}}>
            <Button title="Kapat" color="#e74c3c" onPress={() => setModalGorunur(false)} />
          </View>
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  anaKonu: { flex: 1, backgroundColor: '#f5f5f5' },
  ustBaslik: { height: 60, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1, borderColor: '#ddd' },
  baslikMetni: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  modalIcerik: { flex: 1, padding: 20, backgroundColor: 'white' },
  modalBaslik: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  yorumSatiri: { flexDirection: 'row', padding: 15, borderBottomWidth: 1, borderBottomColor: '#eee' }
});