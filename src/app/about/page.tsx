"use client";
import WhiteSection from "./white-section/white-section.tsx";
import ImageBanner from "@/components/Banner/TheImageBanner";

export default function About() {
  return (
    <div style={{ backgroundColor: "#e7f3ff" }}>
      <ImageBanner src={"/about_page/blueprint-family-photo.jpg"} />
      <WhiteSection />
    </div>
  );
}
