import React, { useState, useContext } from 'react'
import { TextInput, Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { LocationContext } from '../LocationProvider';

export default function ManualLocation() {
  const [text, setText] = useState("");
  const { location, setLocation } = useContext(LocationContext);

  return (
    <>
      <View style={styles.card}>
        <View style={styles.labelRow}>
          <View style={styles.labelDot} />
          <Text style={styles.label}>COORDINATES</Text>
        </View>

        <TextInput
          style={styles.input}
          value={text}
          onChangeText={(text) => setText(text)}
          placeholder='lat : lon'
          placeholderTextColor='#1e2a40'
          keyboardType='numbers-and-punctuation'
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => { setLocation(text); }}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>CONFIRM LOCATION</Text>
          <Text style={styles.buttonArrow}>→</Text>
        </TouchableOpacity>
      </View>

      {location !== "" && (
        <View style={styles.activeRow}>
          <View style={styles.activeDot} />
          <Text style={styles.activeText}>Active: {location}</Text>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#0d1120',
    borderRadius: 18,
    padding: 20,
    borderWidth: 1,
    borderColor: '#141d30',
  },
  labelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 14,
  },
  labelDot: {
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: '#4f8ef7',
  },
  label: {
    color: '#2a3a60',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 2.5,
  },
  input: {
    backgroundColor: '#080b12',
    borderWidth: 1,
    borderColor: '#162040',
    borderRadius: 12,
    paddingHorizontal: 18,
    paddingVertical: 16,
    color: '#eef0f8',
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 1.5,
    marginBottom: 14,
  },
  button: {
    backgroundColor: '#4f8ef7',
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonText: {
    color: '#080b12',
    fontWeight: '800',
    fontSize: 12,
    letterSpacing: 2,
  },
  buttonArrow: {
    color: '#080b12',
    fontSize: 16,
    fontWeight: '700',
  },
  activeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 14,
    paddingHorizontal: 4,
  },
  activeDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#3dd68c',
  },
  activeText: {
    color: '#3dd68c',
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 1,
  },
});