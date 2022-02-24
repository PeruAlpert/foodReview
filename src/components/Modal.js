import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import { compose } from 'redux';
import { connect } from 'react-redux';

import Input from './input';
import Button from './Button';
import setPost from '../../store/actions/post/setPost';
import editPost from '../../store/actions/post/editPost';
const App = ({
  open,
  callBack,
  setPostMethod,
  comment = false,
  editPostMethod,
  id = null,
}) => {
  const [modalVisible, setModalVisible] = useState(open);
  const [Post, setPost] = useState(null);
  //   console.log(id);
  const hidePress = () => {
    callBack(modalVisible, null);
    setPost(null);
    id = null;
  };
  const send = () => {
    if (comment) {
      if (Post || id != null) {
        editPostMethod(id, Post);
        callBack(modalVisible);
        setPost(null);
        id = null;
      }
    } else {
      if (Post != null) {
        setPostMethod({
          id: Date.now(),
          name: 'PUe Alpert',
          title: Post,
          body: '',
        });
        callBack(modalVisible);
        setPost(null);
        id = null;
      }
    }
  };
  return (
    <>
      {open ? (
        <View style={styles.centeredView}>
          <Modal
            animationType='slide'
            transparent={true}
            visible={open}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <Input
                value={Post}
                title={`Your ${comment ? 'Comment' : 'Post'}`}
                onChangeText={(v) => setPost(v)}
              />
              <Button
                title={`Share your ${comment ? 'Comment' : 'Post'}`}
                onPress={() => setModalVisible(false) + send()}
              />
              <Button
                title={'Hide'}
                style={{ backgroundColor: '' }}
                onPress={() => setModalVisible(false) + hidePress()}
              />
            </View>
          </Modal>
        </View>
      ) : null}
    </>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    setPostMethod: (data) => {
      dispatch(setPost(data));
    },
    editPostMethod: (id, x) => {
      dispatch(editPost(id, x));
    },
  };
};

export default compose(connect(null, mapDispatchToProps))(App);

const styles = StyleSheet.create({
  centeredView: {
    backgroundColor: '#fff',
    height: '100%',
    marginTop: 75,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingTop: 20,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: '40%',
    alignSelf: 'center',
    bottom: 20,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
