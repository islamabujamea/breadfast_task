/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import React, { FC } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import PostCard from '../../components/postCard/PostCard';
import { Appbar } from 'react-native-paper';

const Details: FC = ({ route, navigation }) => {
  const { userId, postId, content, title } = route.params;

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => { navigation.goBack() }} />
      </Appbar.Header>
      <ScrollView>
        <PostCard
          title={title}
          content={content}
          postId={postId}
          userId={userId}
          comments={true}
        />

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    backgroundColor: '#fff',
  },
});

export default Details;
