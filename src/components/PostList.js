import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';
import React, { useState } from 'react';
import Modal from './Modal';
import GetPost from '../../store/actions/post/GetPost';
import { compose } from 'redux';
import { connect } from 'react-redux';
const image = {
  uri: 'https://s3.amazonaws.com/37assets/svn/1024-original.1e9af38097008ef9573f03b03ef6f363219532f9.jpg',
};
const PostList = ({ data, Loading = true, GetPostMethod }) => {
  // console.log('asdas', data);
  const [openModal, setopenModal] = useState(false);
  const [idPressed, setidPressed] = useState(null);
  const loadMoreData = () => {
    GetPostMethod();
  };
  const renderOrderSatatus = (item, index) => (
    //send props to card
    <TouchableOpacity
      style={{ alignSelf: 'center' }}
      onPress={() => setidPressed(item.id) + setopenModal(true)}
    >
      <View style={{ flexDirection: 'row' }}>
        <Image
          source={image}
          style={{
            height: 50,
            width: 50,
            borderRadius: 50,
            marginHorizontal: 10,
          }}
        />

        <View style={{ width: '75%', marginVertical: 5 }}>
          <Text>lorem</Text>
          <Text style={{ opacity: 0.3 }}>{item.title}</Text>
          {item.body != '' ? (
            <View
              style={{
                width: '100%',
                backgroundColor: '#f5f5f5',
                paddingVertical: 12,
                marginVertical: 15,
                flexDirection: 'row',
                alignItems: 'center',
                borderRadius: 12,
              }}
            >
              <Image
                source={image}
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: 50,
                  marginHorizontal: 10,
                }}
              />
              <View
                style={{
                  width: '70%',
                }}
              >
                <Text>lorem</Text>
                <Text style={{ opacity: 0.3 }}>{item.body}</Text>
              </View>
            </View>
          ) : null}
        </View>
      </View>
    </TouchableOpacity>
  );
  return (
    <View>
      <Modal
        open={openModal}
        callBack={(v) => setopenModal(v)}
        comment
        id={idPressed}
      />
      {Loading ? (
        <FlatList
          style={{ marginTop: 30, marginHorizontal: 10 }}
          ItemSeparatorComponent={() => (
            <View
              style={{
                marginVertical: 10,
                marginHorizontal: 30,
                justifyContent: 'space-around',
              }}
            />
          )}
          ListFooterComponent={() => <View style={{ marginTop: '5%' }} />}
          data={data}
          keyExtractor={(item, i) => i.toString()}
          renderItem={({ item, index }) => renderOrderSatatus(item, index)}
          onEndReached={loadMoreData}
          onEndReachedThreshold={0.1}
        />
      ) : (
        <View
          style={{
            width: '100%',
            height: 150,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ActivityIndicator size='small' color='#00ff00' />
        </View>
      )}
    </View>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    GetPostMethod: (_) => {
      dispatch(GetPost());
    },
  };
};

export default compose(connect(null, mapDispatchToProps))(PostList);
