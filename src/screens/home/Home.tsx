/* eslint-disable prettier/prettier */

import React, { FC, useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { appRoute } from '../../api/axios/apiRoute';
import LoadingCircle from '../../components/LoadingCircle';
import PostCard from '../../components/postCard/PostCard';

const Home: FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [posts, setPosts] = useState<Array<any>>([]);

  const getPosts = async (): Promise<void> => {

    try {
      setLoading(true);
      const { data, status } = await appRoute.posts();
      if (status === 200) {
        setPosts(data);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log('posts error :', error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        {loading ? <LoadingCircle /> :
          posts.map((post, key) => {
            return <PostCard
              title={post?.title}
              content={post?.body}
              postId={post?.id}
              userId={post.user_id}
              key={key} />;
          })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
});

export default Home;
