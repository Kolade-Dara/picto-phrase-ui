import { FC } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"; // or wherever your shadcn/ui dialog is
import { Button } from "@/components/ui/button";

interface ReviewDialogProps {
  isOpen: boolean;
  onClose: () => void;
  puzzleImage: string;
  answer: string;
  descHint: string;
  charHint: string;
  difficulty: string;
  categories: string;
}

const ReviewDialog: FC<ReviewDialogProps> = ({
  isOpen,
  onClose,
  puzzleImage,
  answer,
  descHint,
  charHint,
  difficulty,
  categories,
}) => {
  // Simulate final submission
  const handleSubmit = () => {
    // Here you’d call your API or store logic
    console.log("Puzzle data submitted:", {
      puzzleImage,
      answer,
      descHint,
      charHint,
      difficulty,
      categories,
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Review your puzzle upload</DialogTitle>
          <DialogDescription>
            Look through the details, make sure everything makes sense
          </DialogDescription>
        </DialogHeader>

        {/* Preview */}
        <div className="border border-dashed rounded-md flex items-center justify-center h-40 mb-4">
          {puzzleImage ? (
            <img
              src={puzzleImage}
              alt="Puzzle Preview"
              className="h-full w-auto object-cover"
            />
          ) : (
            <p className="text-gray-400">Place your content here</p>
          )}
        </div>

        {/* Data Review */}
        <div className="space-y-2 text-sm">
          <p className="font-bold">Answer</p>
          <p>{answer}</p>

          <p className="font-bold mt-2">Description hint</p>
          <p>{descHint}</p>

          <p className="font-bold mt-2">Character hint</p>
          <p>{charHint}</p>

          <p className="font-bold mt-2">Difficulty</p>
          <p>{difficulty}</p>

          <p className="font-bold mt-2">Category</p>
          <p>{categories}</p>
        </div>

        <DialogFooter>
          <Button variant="default" onClick={handleSubmit}>
            Upload Puzzle
          </Button>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ReviewDialog;
