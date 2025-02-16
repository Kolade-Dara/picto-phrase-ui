import React, { FC } from "react";

interface PuzzleDisplayProps {
  puzzleUrl: string;
  altText?: string;
}

const PuzzleDisplay: FC<PuzzleDisplayProps> = ({
  puzzleUrl,
  altText = "Puzzle",
}) => {
  return (
    <img
      src={puzzleUrl}
      alt={altText}
      className="mx-auto h-full max-h-96 w-full max-w-96 rounded-[24px] object-contain"
    />
  );
};

export default PuzzleDisplay;
