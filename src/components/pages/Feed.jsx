// Feed.jsx
import React, { useEffect, useState } from "react";
import { getPosts, getUserInfo } from "../../firebaseConfig";
import Posteo from "./subcomponents/Posteo";
import { useActiveTab } from '../../context/ActiveTabContext';

const Feed = () => {
  const { activeTab } = useActiveTab();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allPosts = await getPosts();
        const filteredPosts = filterPosts(allPosts);
        const postsWithUserInfo = await Promise.all(filteredPosts.map(async (post) => {
          const userInfo = await getUserInfo(post.userID);
          return { ...post, userInfo };
        }));
        setPosts(postsWithUserInfo);
      } catch (error) {
        console.error("Error al obtener los posteos:", error);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab]);

  const filterPosts = (allPosts) => {
    if (activeTab === 0) {
      return allPosts; // Mostrar todos los posts
    } else if (activeTab === 1) {
      return allPosts.filter(post => post.tipo === 'OEmpleo'); // Mostrar solo los posts de tipo 'OEmpleo'
    } else if (activeTab === 2) {
      return allPosts.filter(post => post.tipo === 'BEmpleo'); // Mostrar solo los posts de tipo 'BEmpleo'
    }
  };

  return (
    <div className="min-h-[90vh] bg-base-300 w-full pt-3 mb-[80px]">
      {posts.map((post) => (
        <Posteo
          key={post.id}
          nombre={post.userInfo.name}
          desc={post.content}
          tipo={post.tipo}
          photoUrl={post.userInfo.photo}
        />
      ))}
    </div>
  );
};

export default Feed;
