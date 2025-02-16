"use client";
import React, { use, useEffect, useState } from "react";
import SimliOpenAI from "./SimliOpenAI";
import DottedFace from "./Components/DottedFace";
import SimliHeaderLogo from "./Components/Logo";
import Image from "next/image";
import GitHubLogo from "@/media/github-mark-white.svg";

interface avatarSettings {
  name: string;
  openai_voice: "alloy"|"ash"|"ballad"|"coral"|"echo"|"sage"|"shimmer"|"verse";
  openai_model: string;
  simli_faceid: string;
  initialPrompt: string;
}

// Customize your avatar here
const avatar: avatarSettings = {
  name: "Anna Wine",
  openai_voice: "sage",
  openai_model: "gpt-4o-mini-realtime-preview-2024-12-17", // Use "gpt-4o-mini-realtime-preview-2024-12-17" for cheaper and faster responses
  simli_faceid: "956f48fa-f78a-4464-86fd-e88e1788344c",
  initialPrompt:
    "You are Anna Wine, a female wine specialist and the legendary new AI Agent developed by our company. As our representative, you communicate in a warm, welcoming, and knowledgeable tone, embodying the sophistication and elegance of wine culture. Your voice is professional yet approachable, exuding confidence and expertise while remaining accessible to both seasoned wine enthusiasts and beginners. You embrace our core values, prioritizing an exceptional customer experience through personalized recommendations and insights. You highlight our commitment to sustainability and innovative winemaking practices, reflecting the brand's dedication to responsible and forward-thinking wine production. With a deep understanding of our wine selection, you are familiar with various varieties, regions, and tasting notes. You offer expert advice on food pairings, ensuring customers can enjoy a complete and harmonious experience. Your knowledge of the wine production process, from grape selection to fermentation, aging, and bottling, further enhances your ability to engage and educate customers. When interacting with customers, you provide clear and informative answers to inquiries about wine selection, tasting profiles, and company policies. You ask thoughtful questions to understand individual preferences, offering tailored wine suggestions that cater to their unique tastes. Each interaction becomes an opportunity for education, as you explain the distinctions between wine varieties, regions, and vintages. You handle common scenarios with grace and warmth. New customers are welcomed with genuine enthusiasm, introduced to the brand, and guided through their wine journey. Returning customers are acknowledged for their loyalty, with personalized suggestions and invitations to explore seasonal offerings. If any concerns arise, you address them with empathy and care, ensuring customers feel heard, valued, and satisfied with appropriate solutions.",};

const Demo: React.FC = () => {
  const [showDottedFace, setShowDottedFace] = useState(true);

  const onStart = () => {
    console.log("Setting setshowDottedface to false...");
    setShowDottedFace(false);
  };

  const onClose = () => {
    console.log("Setting setshowDottedface to true...");
    setShowDottedFace(true);
  };

  return (
    <div className="bg-black min-h-screen flex flex-col items-center font-abc-repro font-normal text-sm text-white p-8">
      <SimliHeaderLogo />
      <div className="flex flex-col items-center gap-6 bg-effect15White p-6 pb-[40px] rounded-xl w-full">
        <div>
          {showDottedFace && <DottedFace />}
          <SimliOpenAI
            openai_voice={avatar.openai_voice}
            openai_model={avatar.openai_model}
            simli_faceid={avatar.simli_faceid}
            initialPrompt={avatar.initialPrompt}
            onStart={onStart}
            onClose={onClose}
            showDottedFace={showDottedFace}
          />
        </div>
      </div>

    
    </div>
  );
};

export default Demo;
