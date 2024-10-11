"use client";

import {
  aboutHero,
  backToIndex,
  description,
  glassBox,
  line,
  nameBox,
  nameEn,
  nameJa,
  occupation,
  photo,
  photoBox,
  profileLinkBox,
  profileLinkIcon,
} from "@/app/about/about.css";
import { isOpenHamburgerMenuAtom } from "@/atoms/isOpenHamburgerMenuAtom";
import AudioButton from "@/components/audio/audioButton";
import Footer from "@/components/footer/footer";
import Glass from "@/components/glass/glass";
import HamburgerMenu from "@/components/hamburgerMenu/hamburgerMenu";
import MobileNav from "@/components/mobileNav/mobileNav";
import Nav from "@/components/nav/nav";
import Object1 from "@/components/object/object1";
import Object2 from "@/components/object/object2";
import Object3 from "@/components/object/object3";
import TextCircle from "@/components/textCircle/textCircle";
import { header } from "@/styles/styles.css";
import clsx from "clsx";
import { useAtomValue } from "jotai";
import { Cormorant, Noto_Serif_JP, Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Tilt from "react-parallax-tilt";

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: "400",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400"],
});

const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["300", "400"],
});

export default function About() {
  const isOpenHamburgerMenu = useAtomValue(isOpenHamburgerMenuAtom);

  return (
    <>
      <div className={clsx(glassBox)}>
        <Glass>
          <header className={clsx(header)}>
            <Nav />
            <HamburgerMenu />
            {isOpenHamburgerMenu && <MobileNav />}
            <AudioButton />
            <TextCircle />
          </header>
          <main>
            <div className={clsx(aboutHero)}>
              <h1 className={nameBox}>
                <span className={clsx(notoSerifJP.className, nameJa)}>
                  ハセガワ タツヤ
                </span>
                <span className={clsx(cormorant.className, nameEn)}>
                  Tatsuya Hasegawa
                </span>
              </h1>
              <Tilt reset={false}>
                <div className={clsx(photoBox)}>
                  <Image
                    src={"/photo.webp"}
                    width={320}
                    height={480}
                    alt="長谷川達也"
                    className={photo}
                    view-transition-name={"photo"}
                  />
                </div>
              </Tilt>
            </div>
            <div className={clsx(profileLinkBox)}>
              <Link
                href={"https://github.com/thasegawakaihatsu"}
                target="_brank"
              >
                <FaGithub className={clsx(profileLinkIcon)} />
              </Link>
              <Link
                href={"mailto:hasegawatatsuya206@gmail.com"}
                target="_brank"
              >
                <IoMdMail className={clsx(profileLinkIcon)} />
              </Link>
            </div>
            <div className={clsx(line)}></div>
            <p className={clsx(cormorant.className, occupation)}>
              Web Design,
              <br />
              Frontend Development
            </p>
            <p className={clsx(description)}>
              2001年生まれ、ECCコンピュータ専門学校中退。
              <br />
              趣味は散歩とランニング。
              <br />
              有酸素運動で汗を流すのが日課。
              <br />
              Webの豊かな表現を身につけるために 日々学習に取り組んでいます。
            </p>
          </main>
          <Footer />
        </Glass>
        <Link href={"/"} className={(roboto.className, backToIndex)}>
          Back to Index
        </Link>
      </div>
      <Object1 />
      <Object2 />
      <Object3 />
    </>
  );
}
