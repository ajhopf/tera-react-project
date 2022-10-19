import React from 'react';

//https://reactrouter.com/en/main/hooks/use-params
import { useParams } from 'react-router-dom';
import AppLoading from '../organisms/AppLoading';

import Default from '../templates/Default';

import UserBio from '../molecules/UserBio';
import PostListWrapper from '../molecules/PostListWrapper';

export default function UserBlog() {
  const { userId } = useParams();

  const [posts, setPosts] = React.useState([]);
  const [user, setUser] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(true);

  console.log(posts);

  React.useEffect(() => {
    const endpoint = `https://62c4e487abea8c085a7e022a.mockapi.io/users/${userId}/posts`;

    fetch(endpoint)
      .then(response => response.json())
      .then(data => {
        setPosts(data);
        //aqui acessei o primeiro item do array, pois data é um array com varios objetos (que são posts) e dentro de cada objeto existe as infos do criador
        setUser(data[0].userData);
        setIsLoading(false);
      });
  }, [userId]);

  return isLoading ? (
    <AppLoading />
  ) : (
    <Default>
      <div className="user-blog">
        <UserBio user={user} />

        <PostListWrapper posts={posts} />
      </div>
    </Default>
  );
}
