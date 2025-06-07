// App.tsx
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Ionicons } from '@expo/vector-icons';

const windowHeight = Dimensions.get('window').height;

const mockMeals = [
  {
    id: '1',
    date: '2025-06-06',
    summary: 'Chicken, rice, broccoli - 520 kcal',
    image: 'https://via.placeholder.com/60',
  },
  {
    id: '2',
    date: '2025-06-05',
    summary: 'Avocado toast - 320 kcal',
    image: 'https://via.placeholder.com/60',
  },
];

export default function App() {
  const today = new Date().toISOString().split('T')[0];

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Rings */}
      <View style={styles.ringsContainer}>
        <View style={styles.ring}><Text style={styles.ringText}>🔥 1350 kcal</Text></View>
        <View style={styles.ring}><Text style={styles.ringText}>🥩 90g Protein</Text></View>
        <View style={styles.ring}><Text style={styles.ringText}>🥑 45g Fat</Text></View>
      </View>

      {/* Meal History */}
      <View style={styles.historyContainer}>
        <FlatList
          data={mockMeals}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.mealItem}>
              <Image source={{ uri: item.image }} style={styles.mealImage} />
              <View style={styles.mealInfo}>
                <Text style={styles.mealDate}>{item.date}</Text>
                <Text style={styles.mealSummary}>{item.summary}</Text>
              </View>
              <TouchableOpacity style={styles.detailButton}>
                <Text style={styles.detailButtonText}>{'>'}</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>

      {/* Floating Button */}
      <TouchableOpacity style={styles.plusButton}>
        <Text style={styles.plusText}>+</Text>
      </TouchableOpacity>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <Ionicons name="home" size={28} color="#4B8673" />
        <Ionicons name="calendar" size={28} color="#4B8673" />
        <Ionicons name="camera" size={28} color="#4B8673" />
        <Ionicons name="settings" size={28} color="#4B8673" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  ringsContainer: {
    height: windowHeight * 0.33,
    backgroundColor: '#EAF4F2',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  ring: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 8,
    borderColor: '#4B8673',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ringText: { fontWeight: '600', textAlign: 'center' },
  historyContainer: {
    height: windowHeight * 0.55,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  mealItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: '#F6F6F6',
    borderRadius: 12,
    padding: 10,
  },
  mealImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 15,
  },
  mealInfo: { flex: 1 },
  mealDate: { fontWeight: '600', marginBottom: 4 },
  mealSummary: { color: '#666' },
  detailButton: {
    backgroundColor: '#4B8673',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  detailButtonText: { color: '#fff', fontWeight: 'bold' },
  plusButton: {
    position: 'absolute',
    bottom: 80,
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
  bottomNav: {
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#DDD',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
