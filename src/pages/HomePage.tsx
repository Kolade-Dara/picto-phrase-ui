import { useState } from "react";
import Header from "@/components/utility/Header";
import PuzzleDisplay from "@/components/utility/PuzzleDisplay";
import AnswerForm from "@/components/utility/AnswerForm";
import AdBanner from "@/components/utility/AdBanner";

const HomePage = () => {
  // Manage the answer state
  const [answer, setAnswer] = useState("");

  return (
    <div className="flex flex-col items-center min-h-screen min-w-screen p-4 justify-start gap-6 bg-slate-100">
      <Header
        showHintCoin
        onHintClick={() => console.log("Hint clicked")}
        showAvatar
        hintIconUrl="/images/hintcoin.png"
        avatarUrl="/images/Artboard 1@300x-100.jpg"
        onAvatarClick={() => console.log("Avatar clicked")}
      />

      <main className="flex flex-col items-center justify-center p-6 gap-4 [@media(min-width:802px)]:flex-row">
        <PuzzleDisplay puzzleUrl="/images/Pictor grams.png" altText="Puzzle" />
        <AnswerForm
          value={answer}
          onChange={setAnswer}
          onHint={() => console.log("Hint clicked")}
          onSubmit={() => console.log("Submit")}
          variant="default"
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
