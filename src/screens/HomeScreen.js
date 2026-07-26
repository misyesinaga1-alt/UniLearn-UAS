import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../constants/colors';
import { DUMMY_MATKUL } from '../services/storage';
import LoadingSpinner from '../components/LoadingSpinner';
import EmptyState from '../components/EmptyState';

export default function HomeScreen({ navigation }) {
  const [matkulList, setMatkulList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setMatkulList(DUMMY_MATKUL);
      setLoading(false);
    }, 500);
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('MatkulDetail', { matkul: item })}
    >
      <View style={styles.badge}>
        <Text style={styles.badgeText}>{item.code}</Text>
      </View>
      <View style={{ flex: 1, marginLeft: 12 }}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.sub}>👨‍🏫 {item.dosen}</Text>
        <Text style={styles.sub}>🕒 {item.schedule}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Daftar Mata Kuliah</Text>

      {loading ? (
        <LoadingSpinner />
      ) : (
        <FlatList
          data={matkulList}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          ListEmptyComponent={<EmptyState message="Belum ada mata kuliah yang diambil." />}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: colors.background },
  header: { fontSize: 20, fontWeight: 'bold', color: colors.text, marginBottom: 16 },
  card: { flexDirection: 'row', backgroundColor: colors.card, padding: 14, borderRadius: 10, marginBottom: 10, borderWidth: 1, borderColor: colors.border, alignItems: 'center' },
  badge: { backgroundColor: colors.primary, paddingHorizontal: 10, paddingVertical: 8, borderRadius: 6 },
  badgeText: { color: '#FFF', fontWeight: 'bold', fontSize: 12 },
  title: { fontSize: 16, fontWeight: 'bold', color: colors.text },
  sub: { fontSize: 12, color: colors.subtext, marginTop: 2 },
});