/* eslint-disable prettier/prettier */
import axios from 'axios';

export const appRoute = {
  posts: () => axios.get('https://gorest.co.in/public/v2/posts'),
  getUserInfo: (userId: number) => axios.get('https://gorest.co.in/public/v2/users/' + userId),
  getComments: (postId: number) => axios.get('https://gorest.co.in/public/v2/posts/' + postId + '/comments/'),

};


