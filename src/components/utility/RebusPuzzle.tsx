import React, { useState, useEffect } from "react";
// import puzzles from "@/data/puzzles.json";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import UseHintDialog from "./UseHintDialog";
import { useAppSelector } from "@/redux/storehooks";
import { puzzles, PuzzleDetails } from "@/redux/slices/puzzleSlice";

const RebusPuzzle = () => {
  const gamePuzzles = useAppSelector((state) => puzzles(state));
  const [selectedPuzzle, setSelectedPuzzle] = useState<PuzzleDetails>({
    image: '',
    category: '',
    id: 0,
    hint: '',
    difficulty: '',
    answer: ''
  });

  const [answer, setAnswer] = useState("");
  const [variant, setVariant] = useState<
    "default" | "hint" | "error" | "correct"
  >("default");
  const [actionText, setActionText] = useState("Submit");
  const [message, setMessage] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const [isHintDialogOpen, setIsHintDialogOpen] = useState(false);
  const onHint = () => setIsHintDialogOpen(true);


  useEffect(()=>{
    if (gamePuzzles.length){
      const randomPuzzle = gamePuzzles[Math.floor(Math.random() * gamePuzzles.length)];
      setSelectedPuzzle(randomPuzzle);
    }
  }, [gamePuzzles])


  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (answer.trim().toLowerCase() === puzzle.answer.toLowerCase()) {
  //     setVariant("correct");
  //     setMessage("Correct!");
  //     setIsTransitioning(true);

  //     setTimeout(() => {
  //       setPuzzle(randomPuzzle);
  //       setAnswer("");
  //       setActionText("Submit");
  //       setVariant("default");
  //       setMessage("");

  //       // Reset transition after new puzzle is loaded
  //       setTimeout(() => {
  //         setIsTransitioning(false);
  //       }, 50);
  //     }, 1000);
  //   } else {
  //     setVariant("error");
  //     setMessage("Incorrect.");
  //     setActionText("Try Again");
  //   }
  // };

  if (!gamePuzzles) return <div>Loading...</div>;

  const showDescriptionHint = () => {
    setVariant("hint");
    setMessage(selectedPuzzle?.hint);
    setIsHintDialogOpen(false);
  };

  return (
    <>
      {gamePuzzles.length > 0 ? (
        <>
          <div className="flex flex-col items-center gap-4">
            {/* Puzzle display */}
            <div
              className={`h-full max-h-96 w-full max-w-96 rounded-[24px] object-contain transition-opacity duration-300 ease-in-out ${isTransitioning ? "opacity-0" : "opacity-100"
                }`}
            >
              <img
                src={import.meta.env.VITE_BASE_URL + selectedPuzzle?.image}
                alt='rebus game'
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
              {message && (
                <p
                  className={
                    variant === "hint"
                      ? "text-gray-400 text-sm"
                      : variant === "error"
                        ? "text-red-500 text-sm"
                        : variant === "correct"
                          ? "text-green-400 text-sm"
                          : "" // Default case to prevent syntax errors
                  }
                >
                  {message}
                </p>
              )}
    
              {/* Main action button */}
              <Button onClick={() => { }} className="w-full max-w-sm">
                {actionText}
              </Button>
            </div>
          </div>
    
          <UseHintDialog
            isHintDialogOpen={isHintDialogOpen}
            onClose={() => setIsHintDialogOpen(false)}
            showDescriptionHint={() => showDescriptionHint()}
          />
        </>
      ): 'New Puzzles Coming Soon'}
    </>
  );
};

export default RebusPuzzle;
