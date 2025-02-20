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
    image: "",
    category: "",
    id: 0,
    hint: "",
    difficulty: "",
    // answer: ''
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

  const token = localStorage.getItem("token") || "";

  useEffect(() => {
    if (gamePuzzles.length) {
      const randomPuzzle =
        gamePuzzles[Math.floor(Math.random() * gamePuzzles.length)];
      setSelectedPuzzle(randomPuzzle);
    }
  }, [gamePuzzles]);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const id = selectedPuzzle.id;
    const payload = {
      // id,
      answer,
    };

    const url = `${import.meta.env.VITE_BASE_URL}/submit/${id}`;
    const config = {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    };

    const response = await fetch(url, config)
      .then((data) => data.json())
      .catch((err) => err);

    if (response.success) {
      if (response.message) {
        window.location.reload();
      } else {
        setMessage("Incorrect! Try Again");
      }
    } else {
      console.log(response);
    }
  };

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
              className={`h-full max-h-96 w-full max-w-96 rounded-[24px] object-contain transition-opacity duration-300 ease-in-out ${
                isTransitioning ? "opacity-0" : "opacity-100"
              }`}
            >
              <img
                src={import.meta.env.VITE_BASE_URL + selectedPuzzle?.image}
                alt="rebus game"
                className="w-full h-full object-contain max-w-80 max-h-80 rounded-[24px]"
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
              <Button
                onClick={handleSubmit}
                className="w-full max-w-sm"
                disabled={answer === ""}
              >
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
      ) : (
        "New Puzzles Coming Soon"
      )}
    </>
  );
};

export default RebusPuzzle;
