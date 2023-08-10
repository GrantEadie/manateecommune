"use client";
import { FacebookLogo, InstagramLogo, SpotifyLogo } from "phosphor-react";

export default function Footer() {
  return (
    <div className="px-10 pb-20 pt-10 flex flex-col items-center">
      <InstagramLogo size={24} weight="thin" className="mb-2" />
      <FacebookLogo size={24} weight="thin" className="mb-2" />
      <SpotifyLogo size={24} weight="thin" />
    </div>
  );
}
