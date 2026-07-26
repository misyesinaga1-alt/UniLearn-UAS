import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../constants/colors';

export default function EmptyState({ message }) {
  return (
    <View style={styles.center}>
      <Text style={styles.text}>{message || 'Belum ada data'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  center: { padding: 30, alignItems: 'center' },
  text: { color: colors.subtext, fontSize: 14, textAlign: 'center' },
});