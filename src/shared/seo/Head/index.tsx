import React from "react";
import NextHead from "next/head";

const Head = () => {
  return (
    <NextHead>
      <meta name="theme-color" content="" />
      <link rel="shortcut icon" href="#" />
      <title>Home - Company Hero Animes</title>

      <meta name="description" content="Seus animes em um só lugar" />

      <meta
        name="keywords"
        content="animes, mangas, animes online, assistir animes, free animes, naruto, dragon ball, kimetsu no yaba, shingeki no kyojin"
      />

      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Company Hero Animes" />
      <meta property="og:description" content="Seus animes em um só lugar" />
      <meta
        property="og:url"
        content="https://company-hero-animes.vercel.app"
      />
      <meta property="og:site_name" content="Company Hero Animes" />
      <meta property="og:image" content="https://i.imgur.com/cT4NV0x.png" />
      <meta
        property="og:image"
        itemProp="image"
        content="https://i.imgur.com/BofOu15.png"
      />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Asap:wght@400;500;600;700"
        rel="stylesheet"
      />
    </NextHead>
  );
};

export default Head;
