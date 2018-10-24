import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  // ScrollView,
  SectionList,
} from 'react-native';

const newTasks = [
  { id: 2, title: 'Wax on' },
  { id: 3, title: 'Wax off' },
  { id: 17, title: 'Wax on' },
  { id: 18, title: 'Wax off' },
  { id: 19, title: 'Wax on' },
  { id: 20, title: 'Wax off' },
  { id: 21, title: 'Wax on' },
  { id: 22, title: 'Wax off' },
  { id: 23, title: 'Wax on' },
  { id: 24, title: 'Wax off' },
  { id: 25, title: 'Wax on' },
  { id: 26, title: 'Wax off' },
  { id: 27, title: 'Wax on' },
  { id: 28, title: 'Wax off' },
];

const completedTasks = [
  { id: 1, title: 'Watch Karate Kid' },
  { id: 4, title: 'Watch Karate Kid' },
  { id: 5, title: 'Watch Karate Kid' },
  { id: 6, title: 'Watch Karate Kid' },
  { id: 7, title: 'Watch Karate Kid' },
  { id: 8, title: 'Watch Karate Kid' },
  { id: 9, title: 'Watch Karate Kid' },
  { id: 10, title: 'Watch Karate Kid' },
  { id: 11, title: 'Watch Karate Kid' },
  { id: 12, title: 'Watch Karate Kid' },
  { id: 13, title: 'Watch Karate Kid' },
  { id: 14, title: 'Watch Karate Kid' },
  { id: 15, title: 'Watch Karate Kid' },
  { id: 16, title: 'Watch Karate Kid' },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  row: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  sectionHeader: {
    backgroundColor: '#efefef',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <SectionList
          sections={[
            { title: 'New Tasks', data: newTasks },
            { title: 'Completed Tasks', data: completedTasks },
          ]}
          renderItem={({ item }) => (
            <View style={styles.row}>
              <Text>{item.title}</Text>
            </View>
          )}
          renderSectionHeader={({ section }) => (
            <View style={styles.sectionHeader}>
              <Text>{section.title}</Text>
            </View>
          )}
          keyExtractor={item => item.id}
        />
        {/* <ScrollView>
          <View style={styles.sectionHeader}>
            <Text>New Tasks</Text>
          </View>
          {newTasks.map(task => (
            <View key={task.id} style={styles.row}>
              <Text>{task.title}</Text>
            </View>
          ))}
          <View style={styles.sectionHeader}>
            <Text>Completed Tasks</Text>
          </View>
          {completedTasks.map(task => (
            <View key={task.id} style={styles.row}>
              <Text>{task.title}</Text>
            </View>
          ))}
        </ScrollView> */}
      </SafeAreaView>
    );
  }
}
