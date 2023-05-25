import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

export default function TeamScreen() {
  const [tableData, setTableData] = useState([
    ['Rosteraa', 'Gender', 'Phone Number', 'Email'],
    ['Player 1', 'B1', 'C1', 'D1'],
    ['Player 2', 'B2', 'C2', 'D2'],
    ['Player 3', 'B3', 'C3', 'D3'],
    ['Player 3', 'B3', 'C3', 'D3'],
    ['Player 3', 'B3', 'C3', 'D3'],
    ['Player 3', 'B3', 'C3', 'D3'],
    ['Player 3', 'B3', 'C3', 'D3'],
    ['Player 3', 'B3', 'C3', 'D3'],
    ['Player 3', 'B3', 'C3', 'D3'],
    ['Player 3', 'B3', 'C3', 'D3'],
    ['Player 3', 'B3', 'C3', 'D3'],
    ['Player 3', 'B3', 'C3', 'D3'],
    ['Player 3', 'B3', 'C3', 'D3'],
    ['Player 3', 'B3', 'C3', 'D3'],
    ['Player 3', 'B3', 'C3', 'D3'],
    ['Player 3', 'B3', 'C3', 'D3'],
    ['Player 3', 'B3', 'C3', 'D3'],
    ['Player 3', 'B3', 'C3', 'D3'],
    ['Player 3', 'B3', 'C3', 'D3'],
    ['Player 3', 'B3', 'C3', 'D3'],
    ['Player 3', 'B3', 'C3', 'D3'],
    ['Player 3', 'B3', 'C3', 'D3'],
    ['Player 3', 'B3', 'C3', 'D3'],
    ['Player 3', 'B3', 'C3', 'D3'],
    ['Player 3', 'B3', 'C3', 'D3'],
  ]);

  return (
    <ScrollView>
    <ScrollView horizontal={true} contentContainerStyle={{
      backgroundColor: 'ivory',
    // alignItems: 'center',
    justifyContent: 'flex-start',
    flexGrow: 1,
    flexShrink: 0,}}>
      <View style={styles.container}>
        <Table borderStyle={styles.tableBorder}>
          <Row 
            style={styles.categoryStyle}
            data={tableData[0]}
            flexArr={flexArr}
            textStyle={styles.tableText}
          />
          <Rows
            data={tableData.slice(1)}
            textStyle={styles.tableText}
            flexArr={flexArr}
          />
        </Table>
      </View>
    </ScrollView>
    </ScrollView>
  );
}

const flexArr = [3, 1, 1, 1];
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: '#fff',
  },
  tableBorder: {
    borderWidth: 1,
    borderColor: '#000',
  },
  tableText: {
    margin: 6,
  },
  categoryStyle: {
    backgroundColor: '#ccc',
  }
});