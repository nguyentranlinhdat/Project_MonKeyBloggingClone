import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PostFeatureItem from "../post/PostFeatuerItem";
import Heading from "../../component/layout/Heading";
import {
  collection,
  limit,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../firebase/firebase-config";
import { set } from "react-hook-form";
const HomeFeatureStyles = styled.div``;

const HomeFeature = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const colRef = collection(db, "posts");
    const queries = query(
      colRef,
      where("status", "==", 1),
      where("hot", "==", true),
      limit(3)
    );
    onSnapshot(queries, (snapshot) => {
      // console.log(snapshot);
      const results = [];
      snapshot.forEach((doc) => {
        console.log(doc.data());
        results.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setPosts(results);
    });
  }, []);
  if (posts.length <= 0) return null;
  return (
    <HomeFeatureStyles className="home-block">
      <div className="container">
        <Heading>Bài viết nổi bật</Heading>
        <div className="grid-layout">
          {posts.map((post) => (
            <PostFeatureItem key={post.id} data={post}></PostFeatureItem>
          ))}
          {/* <PostFeatureItem></PostFeatureItem> */}
          {/* <PostFeatureItem></PostFeatureItem> */}
          {/* <PostFeatureItem></PostFeatureItem> */}
        </div>
      </div>
    </HomeFeatureStyles>
  );
};

export default HomeFeature;
