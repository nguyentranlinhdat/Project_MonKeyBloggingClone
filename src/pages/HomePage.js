import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../firebase/firebase-config";
import styled from "styled-components";
import Header from "../component/layout/header";
import HomeBanner from "../module/home/HomeBanner";
import Layout from "../module/home/Layout";
import HomeFeature from "../module/home/HomeFeatuer";
import HomeNewest from "../module/home/HomeNewest";

const HomePageStyles = styled.div``;
const HomePage = () => {
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <HomePageStyles>
      <Layout>
        <HomeBanner></HomeBanner>
        <HomeFeature></HomeFeature>
        <HomeNewest></HomeNewest>
      </Layout>
    </HomePageStyles>
  );
};

export default HomePage;
