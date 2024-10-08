'use client'

import Image from "next/image";
import HomePageComponent from '../components/component/home-page-component'
import Example from '../components/component/tailwind-home-page'
import LandingPage from '../components/component/LandingPage'
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
			<link rel='icon' href='/favicon.ico' />
		</Head>
      <LandingPage />
    </div>
  );
}
