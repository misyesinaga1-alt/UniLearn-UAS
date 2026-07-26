import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../constants/colors';
import { getUser, clearUser } from '../services/storage';

export default function ProfileScreen({ navigation }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser().then(setUser);
  }, []);

  const handleLogout = async () => {
    await clearUser();
    navigation.replace('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.avatar}>🎓</Text>
        <Text style={styles.name}>{user?.nama || 'Mahasiswa'}</Text>
        <Text style={styles.nim}>NIM: {user?.nim || '-'}</Text>
      </View>

      <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
        <Text style={styles.logoutText}>Keluar / Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: colors.background, justifyContent: 'center' },
  box: { alignItems: 'center', backgroundColor: colors.card, padding: 24, borderRadius: 12, borderWidth: 1, borderColor: colors.border, marginBottom: 20 },
  avatar: { fontSize: 60, marginBottom: 10 },
  name: { fontSize: 20, fontWeight: 'bold', color: colors.text },
  nim: { fontSize: 14, color: colors.subtext, marginTop: 4 },
  logoutBtn: { backgroundColor: colors.danger, padding: 14, borderRadius: 8, alignItems: 'center' },
  logoutText: { color: '#FFF', fontWeight: 'bold' },
});