import React from 'react';
import ManualLocation from '@/components/ui/ManualLocation';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

export default function TabTwoScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.accentLine} />
      <View style={styles.header}>
        <View style={styles.pill}>
          <View style={styles.pillDot} />
          <Text style={styles.pillText}>MANUAL OVERRIDE</Text>
        </View>
        <Text style={styles.title}>Locate{'\n'}Yourself.</Text>
        <Text style={styles.subtitle}>
          Pin any coordinate on Earth. Updates shelters, routes and seismic activity.
        </Text>
      </View>
      <ManualLocation />
      <View style={styles.statsRow}>
        {[
          { value: '5km', label: 'Radius' },
          { value: '3', label: 'Shelters' },
          { value: 'Live', label: 'Feed' },
        ].map((stat, i) => (
          <View key={i} style={styles.statItem}>
            <Text style={styles.statValue}>{stat.value}</Text>
            <Text style={styles.statLabel}>{stat.label}</Text>
          </View>
        ))}
      </View>
      <Text style={styles.bottomHint}>e.g.  35.6762 : 139.6503</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#080b12',
    paddingHorizontal: 22,
  },
  accentLine: {
    height: 2,
    width: 40,
    backgroundColor: '#4f8ef7',
    marginTop: 16,
    borderRadius: 2,
  },
  header: {
    paddingTop: 28,
    paddingBottom: 24,
  },
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: '#0d1322',
    borderWidth: 1,
    borderColor: '#162040',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 5,
    gap: 7,
    marginBottom: 18,
  },
  pillDot: {
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: '#4f8ef7',
  },
  pillText: {
    color: '#4f8ef7',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 2.5,
  },
  title: {
    color: '#eef0f8',
    fontSize: 46,
    fontWeight: '900',
    letterSpacing: -1.5,
    lineHeight: 50,
    marginBottom: 14,
  },
  subtitle: {
    color: '#323a55',
    fontSize: 14,
    lineHeight: 22,
    maxWidth: 300,
  },
  statsRow: {
    flexDirection: 'row',
    backgroundColor: '#0d1120',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#141d30',
    overflow: 'hidden',
    marginTop: 16,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 18,
    borderRightWidth: 1,
    borderRightColor: '#141d30',
  },
  statValue: {
    color: '#eef0f8',
    fontSize: 20,
    fontWeight: '800',
    letterSpacing: -0.5,
    marginBottom: 4,
  },
  statLabel: {
    color: '#2a3350',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 2,
  },
  bottomHint: {
    color: '#1a2238',
    fontSize: 12,
    textAlign: 'center',
    letterSpacing: 2,
    fontStyle: 'italic',
    marginTop: 16,
  },
});