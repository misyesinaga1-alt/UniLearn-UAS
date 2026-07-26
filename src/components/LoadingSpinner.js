import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import colors from '../constants/colors';

export default function LoadingSpinner() {
  return (
    <View style={styles.center}>
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});