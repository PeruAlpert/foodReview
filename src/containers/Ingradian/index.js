import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { AntDesign, Entypo } from '@expo/vector-icons';
const Ingradian = () => {
  return (
    <View style={styles.container}>
      {/* quantity */}
      <View
        style={{
          flex: 0.2,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Text style={styles.head}>Quantity</Text>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <AntDesign
            name='pluscircleo'
            size={21}
            color='black'
            style={{ opacity: 0.3 }}
          />
          <Text style={{ marginHorizontal: 20, fontSize: 17 }}>2</Text>
          <AntDesign
            name='minuscircleo'
            size={21}
            color='black'
            style={{ opacity: 0.3 }}
          />
        </View>
      </View>
      {/* slect */}
      <View style={{ flex: 0.4, justifyContent: 'space-around' }}>
        <Text style={styles.head}>Select Delivery Method</Text>
        {/* free ship */}
        <View style={styles.greyBox}>
          <Text style={{ opacity: 0.5 }}>
            Free shipping{' '}
            <Text style={{ opacity: 0.3 }}>(Need Almost 2hr)</Text>
          </Text>
        </View>
      </View>
      <View style={{ flex: 0.4 }}>
        <View
          style={[
            styles.greyBox,
            {
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 20,
            },
          ]}
        >
          <Entypo name='circle-with-plus' size={24} color='black' />
          <Text
            style={{ opacity: 0.6, marginHorizontal: 10, fontWeight: 'bold' }}
          >
            Add Extra
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  head: {
    fontSize: 17,
    fontWeight: '500',
  },
  greyBox: {
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
});
export default Ingradian;
