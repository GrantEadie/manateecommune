"use client";
import { FacebookLogo, InstagramLogo, SpotifyLogo } from "phosphor-react";

export default function Footer() {
  return (
    <div className="px-10 pb-20 pt-10 flex flex-col items-center">
      <a
        href="https://www.instagram.com/manatee.commune/"
        className="--hover-social"
      >
        <InstagramLogo size={24} weight="thin" className="mb-2" />
      </a>
      <a
        href="https://www.facebook.com/ManateeCommune/"
        className="--hover-social"
      >
        <FacebookLogo size={24} weight="thin" className="mb-2" />
      </a>
      <a
        href="https://open.spotify.com/artist/41JNAYVuPs7zwJbQBQ6tec?si=YLlkFl2UQiC4BFmu-Vg4_Q"
        className="--hover-social"
      >
        <SpotifyLogo size={24} weight="thin" />
      </a>
    </div>
  );
}
