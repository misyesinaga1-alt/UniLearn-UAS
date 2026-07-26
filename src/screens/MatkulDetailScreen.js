import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import colors from '../constants/colors';
import { getProgress, saveProgress } from '../services/storage';

export default function MatkulDetailScreen({ route }) {
  const { matkul } = route.params;
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    checkProgress();
  }, []);

  const checkProgress = async () => {
    const prog = await getProgress();
    if (prog[matkul.id]) {
      setCompleted(true);
    }
  };

  const toggleProgress = async () => {
    const prog = await getProgress();
    const newStatus = !completed;
    prog[matkul.id] = newStatus;
    await saveProgress(prog);
    setCompleted(newStatus);
    Alert.alert('Status Diperbarui', newStatus ? 'Materi ditandai selesai!' : 'Ditandai belum selesai.');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.code}>{matkul.code}</Text>
      <Text style={styles.title}>{matkul.name}</Text>
      
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>👨‍🏫 Dosen: {matkul.dosen}</Text>
        <Text style={styles.infoText}>🕒 Jadwal: {matkul.schedule}</Text>
        <Text style={styles.infoText}>📚 Total Pertemuan: {matkul.totalMateri} Modul</Text>
      </View>

      <Text style={styles.sectionTitle}>Deskripsi Mata Kuliah</Text>
      <Text style={styles.desc}>{matkul.description}</Text>

      <TouchableOpacity
        style={[styles.btn, completed ? styles.btnSuccess : styles.btnPrimary]}
        onPress={toggleProgress}
      >
        <Text style={styles.btnText}>
          {completed ? '✓ Selesai Dipelajari' : 'Tandai Selesai Dipelajari'}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: colors.background },
  code: { color: colors.primary, fontWeight: 'bold', fontSize: 14 },
  title: { fontSize: 22, fontWeight: 'bold', color: colors.text, marginBottom: 12 },
  infoBox: { backgroundColor: colors.card, padding: 14, borderRadius: 8, borderWidth: 1, borderColor: colors.border, marginBottom: 16 },
  infoText: { fontSize: 14, color: colors.text, marginBottom: 4 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', color: colors.text, marginBottom: 6 },
  desc: { fontSize: 14, color: colors.subtext, lineHeight: 20, marginBottom: 20 },
  btn: { padding: 14, borderRadius: 8, alignItems: 'center' },
  btnPrimary: { backgroundColor: colors.primary },
  btnSuccess: { backgroundColor: '#2E7D32' },
  btnText: { color: '#FFF', fontWeight: 'bold' },
});