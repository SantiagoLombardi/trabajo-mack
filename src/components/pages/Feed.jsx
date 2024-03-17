import React, { useEffect, useState } from "react";
import { getPosts, getUserInfo } from "../../firebaseConfig";
import Posteo from "./subcomponents/Posteo";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const posts = await getPosts();
        const postsWithUserInfo = await Promise.all(posts.map(async (post) => {
          const userInfo = await getUserInfo(post.userID);
          // const userInfo = {name: "nombre de prueba", photoUrl: ""};
          return { ...post, userInfo };
        }));
        setPosts(postsWithUserInfo);
      } catch (error) {
        console.error("Error al obtener los posteos:", error);
      }
    };
    

    fetchData();
  }, []);

  return (
    <div className="min-h-[90vh] bg-base-300 w-full pt-3 mb-[80px]">
      {posts.map((post) => (
        <Posteo
          key={post.id}
          // nombre="Nombre de Prueba"
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
