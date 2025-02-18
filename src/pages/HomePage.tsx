import { useState } from "react";
import Header from "@/components/utility/Header";

import AdBanner from "@/components/utility/AdBanner";
// import UseHintDialog from "@/components/utility/UseHintDialog";
import RebusPuzzle from "@/components/utility/RebusPuzzle";

const HomePage = () => {
  // Manage the answer state

  const [showHintDialog, setShowHintDialog] = useState(false);

  // const handleUseHint = (hintText: string) => {
  //   setAnswerVariant("hint");
  //   setAnswerMessage(hintText);
  //   setShowHintDialog(false); // close the dialog
  // };

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
        <RebusPuzzle />

        {/* The dialog for hints */}
        {/* <UseHintDialog
          isOpen={showHintDialog}
          onClose={() => setShowHintDialog(false)}
          onUseHint={handleUseHint} // pass parent callback
        /> */}
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
