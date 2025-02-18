// src/components/utility/RebusPuzzle.tsx
import React, { useState, useEffect } from "react";
import puzzles from "@/data/puzzles.json";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import UseHintDialog from "./UseHintDialog";

const RebusPuzzle = () => {
  const [puzzle, setPuzzle] = useState({
    url: "",
    alt: "",
    descriptionHint: "",
    difficulty: "",
    category: "",
    answer: "",
  });
  const [answer, setAnswer] = useState("");
  const [variant, setVariant] = useState<"default" | "hint" | "error">(
    "default"
  );
  const [actionText, setActionText] = useState("Submit");
  const [message, setMessage] = useState("");

  // Pick a random puzzle on mount
  useEffect(() => {
    const randomPuzzle = puzzles[Math.floor(Math.random() * puzzles.length)];
    setPuzzle(randomPuzzle);
  }, []);

  const [isHintDialogOpen, setIsHintDialogOpen] = useState(false);
  const onHint = () => setIsHintDialogOpen(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (answer.trim().toLowerCase() === puzzle.answer.toLowerCase()) {
      setVariant("default");
      setMessage("Correct!");
      // Proceed to next puzzle or any other action here
    } else {
      setVariant("error");
      setMessage("Incorrect.");
      setActionText("Try Again");
    }
  };

  if (!puzzle) return <div>Loading...</div>;

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Puzzle display */}
      <div className=" h-full max-h-96 w-full max-w-96 rounded-[24px] object-contain">
        <img
          src={puzzle.url}
          alt={puzzle.alt}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Answer form */}
      <div className="flex flex-col items-center space-y-3 w-full">
        {/* Input + Hint Button */}
        <div className="flex w-full max-w-sm items-center gap-2">
          <Input
            type="text"
            placeholder="What is the phrase?"
            className="flex-grow"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
          <Button variant="outline" onClick={onHint}>
            Hint
          </Button>
        </div>

        {/* Optional message area for hint or error */}
        {variant !== "default" && message && (
          <p
            className={
              variant === "error"
                ? "text-red-500 text-sm"
                : "text-gray-400 text-sm"
            }
          >
            {message}
          </p>
        )}

        {/* Main action button */}
        <Button onClick={handleSubmit} className="w-full max-w-sm">
          {actionText}
        </Button>
      </div>
    </div>
     
     <UseHintDialog
     isHintDialogOpen={onHint}
     onClose={() => setShowHintDialog(false)}
     onUseHint={handleUseHint} // pass parent callback
   />
  );
};

export default RebusPuzzle;
