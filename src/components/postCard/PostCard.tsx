/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
import React, { FC, Fragment, useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { appRoute } from '../../api/axios/apiRoute';
import { IPostCardProps } from '../../screens/types/components.types';
import { Avatar, Card, Text } from 'react-native-paper';
import { getNameFilterd } from '../../helpers/sharedFunctions';
import { useNavigation } from '@react-navigation/native';

const PostCard: FC<IPostCardProps> = ({ title, content, postId, userId, comments }) => {
    const navigation = useNavigation<any>();
    const [userName, setUserName] = useState<string>('');
    const [commentsList, setComments] = useState<Array<any>>([]);

    const getUserInfo = async (): Promise<void> => {
        try {
            const { data } = await appRoute.getUserInfo(userId);
            setUserName(data?.name);
        } catch (error) { }
    };

    const getComments = async (): Promise<void> => {
        try {
            const { data } = await appRoute.getComments(postId);
            setComments(data);
        } catch (error) { }
    };

    useEffect(() => {
        getUserInfo();
        if (comments) {
            getComments();
        }
    });

    return (
        <View style={styles.view}>
            <TouchableOpacity
                disabled={comments}
                onPress={() =>
                    navigation.navigate('Details', {
                        postId: postId,
                        userId: userId,
                        title: title,
                        content: content,
                    })}>
                <Card>
                    <Card.Title
                        title={userName ? userName : 'Unknown user'}
                        left={(props) => <Avatar.Text {...props} size={30} label={getNameFilterd(userName)} />}
                    />
                    <Card.Content>
                        <Text variant="titleMedium">{title}</Text>
                        <Text variant="bodyMedium">{content}</Text>
                    </Card.Content>
                </Card>

                {commentsList.length > 0 &&
                    <Fragment>
                        <Text style={styles.text}>Comments</Text>
                        {commentsList.map((comment, key) => {
                            return <Fragment key={key}>
                                <Card.Title
                                    title={comment?.name}
                                    left={(props) => <Avatar.Text {...props} size={30} label={getNameFilterd(comment?.name)} />}
                                />
                                <Card.Content>
                                    <Text variant="bodyMedium">{comment?.body}</Text>
                                </Card.Content>
                            </Fragment>;
                        })}
                    </Fragment>}
            </TouchableOpacity>
        </View >
    );
};

const styles = StyleSheet.create({
    view: {
        marginTop: 20,
        justifyContent: 'center',
        width: '90%',
        alignSelf: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
    },
});

export default PostCard;
