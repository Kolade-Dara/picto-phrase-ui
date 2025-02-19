import { FC, useState } from "react";

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
  puzzleImage: File | null;
  imagePreview: string;
  answer: string;
  descHint: string;
  // charHint: string;
  difficulty: string;
  categories: string;
}

const ReviewDialog: FC<ReviewDialogProps> = ({
  isOpen,
  onClose,
  puzzleImage,
  imagePreview,
  answer,
  descHint,
  // charHint,
  difficulty,
  categories,
}) => {

  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    const formData = new FormData();
    
    formData.append("difficulty", difficulty);
    formData.append("answer", answer);
    formData.append("descHint", descHint);
    formData.append("category", categories);
    
    if (puzzleImage) {
      formData.append("puzzleImage", puzzleImage);
    }

    const url = `${import.meta.env.VITE_BASE_URL}/upload_game`;
    const config = {
      method: "POST",
      body: formData,
      headers: {

      }
    };

    const response = await fetch(url, config)
      .then((data) => data.json())
      .catch((err) => err);


    if (response.success) {
      // window.location.href = '/profile';
      window.location.reload();
    } else {
      // setError(response.message);
    }
    setLoading(false)

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
              src={imagePreview}
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

          {/* <p className="font-bold mt-2">Character hint</p>
          <p>{charHint}</p> */}

          <p className="font-bold mt-2">Difficulty</p>
          <p>{difficulty}</p>

          <p className="font-bold mt-2">Category</p>
          <p>{categories}</p>
        </div>

        <DialogFooter className="gap-2">
          <Button variant="default" onClick={handleSubmit} disabled={loading}>
            Upload Puzzle
          </Button>
          <Button variant="outline" onClick={onClose} disabled={loading}>
            Cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ReviewDialog;
