import { useState } from "react";
import Header from "@/components/utility/Header";
import PuzzleDisplay from "@/components/utility/PuzzleDisplay";
import AnswerForm from "@/components/utility/AnswerForm";
import AdBanner from "@/components/utility/AdBanner";
import UseHintDialog from "@/components/utility/UseHintDialog";
const HomePage = () => {
  // Manage the answer state
  const [answer, setAnswer] = useState("");

  const [showHintDialog, setShowHintDialog] = useState(false);
  const [answerVariant, setAnswerVariant] = useState<
    "default" | "hint" | "error"
  >("default");
  const [answerMessage, setAnswerMessage] = useState("");
  const handleUseHint = (hintText: string) => {
    setAnswerVariant("hint");
    setAnswerMessage(hintText);
    setShowHintDialog(false); // close the dialog
  };

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
          onHint={() => setShowHintDialog(true)}
          onSubmit={() => console.log("Submit answer")}
          variant={answerVariant}
          message={answerMessage}
        />

        {/* The dialog for hints */}
        <UseHintDialog
          isOpen={showHintDialog}
          onClose={() => setShowHintDialog(false)}
          onUseHint={handleUseHint} // pass parent callback
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
