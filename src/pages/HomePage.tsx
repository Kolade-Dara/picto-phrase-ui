import { useState } from "react";
import Header from "@/components/utility/Header";
import PuzzleDisplay from "@/components/utility/PuzzleDisplay";
import AnswerForm from "@/components/utility/AnswerForm";
import AdBanner from "@/components/utility/AdBanner";

const HomePage = () => {
  // Manage the answer state
  const [answer, setAnswer] = useState("");

  return (
    <div className="min-h-screen flex flex-col bg-[#FCFCFC] items-center">
      <Header
        showHintCoin
        onHintClick={() => console.log("Hint clicked")}
        showAvatar
        hintIconUrl="/images/hintcoin.png"
        avatarUrl="/images/Artboard 1@300x-100.jpg"
        onAvatarClick={() => console.log("Avatar clicked")}
      />

      <main className="p-6 flex flex-col items-center justify-center gap-4">
        <PuzzleDisplay puzzleUrl="/images/Pictor grams.png" altText="Puzzle" />
        <AnswerForm
          value={answer}
          onChange={setAnswer}
          onHint={() => console.log("Hint clicked")}
          onSubmit={() => console.log("Submit")}
          variant="hint"
          message="Hint – This shows the hint the user has selected"
        />
      </main>

      <div className="mb-8 w-full max-w-md">
        <AdBanner
          imageUrl="/images/cocacola-banner.jpg"
          buttonText="Learn More"
          onClick={() => alert("Button clicked!")}
        />
      </div>
    </div>
  );
};

export default HomePage;
