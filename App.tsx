import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';

export default function App() {
  const today = new Date().toISOString().split('T')[0];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Meal Diary</Text>
      <Calendar
        current={today}
        markedDates={{
          [today]: { selected: true, selectedColor: '#4B8673' },
        }}
        style={styles.calendar}
      />
      <View style={styles.buttonBox}>
        {['Breakfast', 'Lunch', 'Dinner', 'Snacks'].map((meal) => (
          <TouchableOpacity key={meal} style={styles.mealButton}>
            <Text style={styles.mealText}>{meal}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.plusButton}>
        <Text style={styles.plusText}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 50, paddingHorizontal: 20, backgroundColor: '#fff' },
  header: { fontSize: 28, fontWeight: '600', textAlign: 'center', marginBottom: 10 },
  calendar: { marginBottom: 20 },
  buttonBox: { gap: 10 },
  mealButton: {
    backgroundColor: '#EAF4F2',
    padding: 15,
    borderRadius: 12,
    marginVertical: 5,
    alignItems: 'center',
  },
  mealText: { fontSize: 18, fontWeight: '500', color: '#4B8673' },
  plusButton: {
    position: 'absolute',
    bottom: 40,
    right: 30,
    backgroundColor: '#4B8673',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  plusText: { color: 'white', fontSize: 30, lineHeight: 34 },
});
