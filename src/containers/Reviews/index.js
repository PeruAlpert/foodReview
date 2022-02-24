import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PostList from '../../components/PostList';
const Reviews = ({ post }) => {
  //   console.log('j', post);
  return (
    <View style={styles.container}>
      <PostList data={post} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const mapStateToProps = (state) => {
  return {
    post: state.post,
  };
};
export default compose(connect(mapStateToProps))(Reviews);
