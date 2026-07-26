import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../constants/colors';
import { saveUser } from '../services/storage';

export default function LoginScreen({ navigation }) {
  const [nim, setNim] = useState('');
  const [nama, setNama] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    if (!nim.trim() || !nama.trim()) {
      setError('NIM dan Nama Mahasiswa wajib diisi!');
      return;
    }
    if (nim.length < 5) {
      setError('NIM minimal 5 karakter!');
      return;
    }

    setError('');
    const userData = { nim, nama };
    await saveUser(userData);
    navigation.replace('MainTab');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>🎓 UniLearn</Text>
      <Text style={styles.subtitle}>Portal Belajar Online Kampus</Text>

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="NIM Mahasiswa"
        value={nim}
        onChangeText={setNim}
        keyboardType="number-pad"
      />

      <TextInput
        style={styles.input}
        placeholder="Nama Lengkap"
        value={nama}
        onChangeText={setNama}
      />

      <TouchableOpacity style={styles.btn} onPress={handleLogin}>
        <Text style={styles.btnText}>Masuk Ke Platform</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: 'center', backgroundColor: colors.background },
  logo: { fontSize: 30, fontWeight: 'bold', color: colors.primary, textAlign: 'center' },
  subtitle: { fontSize: 14, color: colors.subtext, textAlign: 'center', marginBottom: 30 },
  input: { backgroundColor: colors.card, borderWidth: 1, borderColor: colors.border, borderRadius: 8, padding: 12, marginBottom: 12 },
  btn: { backgroundColor: colors.primary, padding: 14, borderRadius: 8, alignItems: 'center', marginTop: 8 },
  btnText: { color: '#FFF', fontWeight: 'bold', fontSize: 16 },
  error: { color: colors.danger, textAlign: 'center', marginBottom: 12 },
});