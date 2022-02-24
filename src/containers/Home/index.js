import { View, Text, ImageBackground } from 'react-native';
import React, { useEffect, useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import logOut from '../../../store/actions/login/logOut';
import GetPost from '../../../store/actions/post/GetPost';
import emptyPost from '../../../store/actions/post/emptyPost';
import TopStack from '../../../navigation/TopStack';
import Colors from '../../../colors';
import HeaderBack from '../../components/HeaderBack';
import HeaderDetails from '../../components/HeaderDetails';
import Modal from '../../components/Modal';
import Button from '../../components/Button';
const image = {
  uri: 'https://media.istockphoto.com/photos/delicious-meal-on-a-black-plate-top-view-copy-space-picture-id1165399909?k=20&m=1165399909&s=612x612&w=0&h=5g5C4BDoxaejlIr4r_8cV6jDYXzN8n1-JkIW3LgPUuA=',
};
const Home = ({ logOutMethod, emptyPostMethod, GetPostMethod }) => {
  useEffect(() => {
    GetPostMethod();
  }, []);

  const [openModal, setopenModal] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <ImageBackground
        source={image}
        resizeMode='cover'
        style={{ flex: 0.3, width: '100%' }}
      >
        <HeaderBack title='Details' />
      </ImageBackground>
      <View
        style={{
          flex: 0.7,
          backgroundColor: 'white',
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          bottom: 30,
        }}
      >
        <HeaderDetails
          title='italian mix food'
          price={14.99}
          star={32}
          time={30}
        />

        <TopStack />
        <Modal open={openModal} callBack={(v) => setopenModal(v)} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',

            top: 15,
          }}
        >
          <Button
            title=' Empty Post'
            style={{ backgroundColor: '#393486', width: '40%' }}
            styleTxt={{ color: 'white' }}
            // onPress={() => logOutMethod()}
            onPress={() => emptyPostMethod()}
          />

          <Button
            title='Add Post'
            style={{ backgroundColor: '#393486', width: '40%' }}
            styleTxt={{ color: 'white' }}
            onPress={() => setopenModal(true)}
          />
        </View>
      </View>
    </View>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    logOutMethod: (_) => {
      dispatch(logOut());
    },
    emptyPostMethod: (_) => {
      dispatch(emptyPost());
    },
    GetPostMethod: (_) => {
      dispatch(GetPost());
    },
  };
};

export default compose(connect(null, mapDispatchToProps))(Home);
