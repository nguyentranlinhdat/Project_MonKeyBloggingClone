import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PostCategory from "./PostCategory";
import PostTitle from "./PostTitle";
import PostMeta from "./PostMeta";
import PostImage from "./PostImage";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase-config";
import slugify from "slugify";
const PostFeatureItemStyles = styled.div`
  width: 100%;
  border-radius: 16px;
  position: relative;
  height: 169px;
  .post-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 16px;
  }
  .post-overlay {
    position: absolute;
    inset: 0;
    border-radius: 16px;
    background: linear-gradient(
      179.77deg,
      #6b6b6b 36.45%,
      rgba(163, 163, 163, 0.622265) 63.98%,
      rgba(255, 255, 255, 0) 99.8%
    );
    mix-blend-mode: multiply;
    opacity: 0.6;
  }
  .post-content {
    position: absolute;
    inset: 0;
    z-index: 10;
    padding: 20px;
    color: white;
  }
  .post-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }

  @media screen and (min-width: 1024px) {
    height: 272px;
  }
`;
const PostFeatureItem = ({ data }) => {
  console.log("data------", data);
  // const [category, setCategory] = useState("");
  // const [user, setUser] = useState("");
  // useEffect(() => {
  //   async function fetch() {
  //     const docRef = doc(db, "categories", data.categoryId);
  //     const docSnap = await getDoc(docRef);
  //     // console.log("asdasda", docSnap);
  //     setCategory(docSnap.data());
  //   }
  //   fetch();
  // }, [data.categoryId]);
  // useEffect(() => {
  //   async function fetchUser() {
  //     if (data.userId) {
  //       const docRef = doc(db, "users", data.userId);
  //       const docSnap = await getDoc(docRef);
  //       // console.log("asdasda", docSnap);
  //       if (docSnap.data) {
  //         setUser(docSnap.data());
  //       }
  //     }
  //   }
  //   fetchUser();
  // }, [data.userId]);
  if (!data || !data.id) return null;
  const date = data?.createAt?.seconds
    ? new Date(data?.createAt?.seconds * 1000)
    : new Date();
  // console.log("data image", data.image);
  const formatDate = new Date(date).toLocaleDateString("vi-VI");

  const { category, user } = data;
  return (
    <PostFeatureItemStyles>
      <PostImage alt="" url={data?.image}></PostImage>
      <div className="post-overlay"></div>
      <div className="post-content">
        <div className="post-top">
          {category?.name && (
            <PostCategory to={category.slug}>{category.name}</PostCategory>
          )}
          <PostMeta
            to={slugify(user?.username || "", { lower: true })}
            authorName={user?.fullname}
            date={formatDate}
          ></PostMeta>
        </div>
        <PostTitle to={data.slug} size="big">
          {data.title}
          {/* Hướng dẫn setup phòng cực chill dành cho người mới toàn tập */}
        </PostTitle>
      </div>
    </PostFeatureItemStyles>
  );
};

export default PostFeatureItem;
