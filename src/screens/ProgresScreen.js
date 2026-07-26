import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import colors from '../constants/colors';
import { getTasks, saveTask } from '../services/storage';
import EmptyState from '../components/EmptyState';

export default function ProgresScreen() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  const uploadFotoTugas = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      Alert.alert('Izin Ditolak', 'Dibutuhkan izin akses galeri untuk mengunggah foto tugas.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
  mediaTypes: ['images'],
  allowsEditing: true,
  quality: 0.6,
});

    if (!result.canceled) {
      const newTask = {
        id: Date.now().toString(),
        imageUri: result.assets[0].uri,
        date: new Date().toLocaleDateString('id-ID'),
      };
      const updated = await saveTask(newTask);
      setTasks(updated);
      Alert.alert('Berhasil', 'Foto tugas berhasil diunggah!');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.uploadBtn} onPress={uploadFotoTugas}>
        <Text style={styles.uploadBtnText}>📷 Upload Foto Bukti Tugas</Text>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>Riwayat Upload Tugas</Text>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<EmptyState message="Belum ada foto tugas yang diunggah." />}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.imageUri }} style={styles.img} />
            <Text style={styles.date}>Diunggah pada: {item.date}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: colors.background },
  uploadBtn: { backgroundColor: colors.accent, padding: 14, borderRadius: 8, alignItems: 'center', marginBottom: 16 },
  uploadBtnText: { color: '#FFF', fontWeight: 'bold' },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 10, color: colors.text },
  card: { backgroundColor: colors.card, padding: 10, borderRadius: 8, marginBottom: 10, borderWidth: 1, borderColor: colors.border },
  img: { width: '100%', height: 150, borderRadius: 6, marginBottom: 6 },
  date: { fontSize: 12, color: colors.subtext, textAlign: 'right' },
});