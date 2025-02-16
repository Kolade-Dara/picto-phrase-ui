import { useState, ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import ReviewDialog from "@/components/utility/ReviewDialog";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

// Dummy list of categories
const ALL_CATEGORIES = ["Sports", "Movies", "Music", "Food", "Travel"];

const AdminUploadPage = () => {
  // Local state
  const [puzzleImage, setPuzzleImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");

  const [answer, setAnswer] = useState("");
  const [descHint, setDescHint] = useState("");
  const [charHint, setCharHint] = useState("");

  const [difficulty, setDifficulty] = useState("Easy");
  const [category, setCategory] = useState("");

  const [showReview, setShowReview] = useState(false);

  // Handle image selection
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPuzzleImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  // Check if all required fields are filled
  const allFieldsFilled =
    puzzleImage &&
    answer.trim() &&
    descHint.trim() &&
    charHint.trim() &&
    category.trim();

  // Show the review dialog if fields are valid
  const handleReview = () => {
    if (allFieldsFilled) {
      setShowReview(true);
    } else {
      alert("Please fill all required fields.");
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">
        Admin Dashboard - Upload Puzzle
      </h1>

      {/* Responsive Layout: Stacked on mobile, side-by-side on md+ */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Side: Image Upload */}
        <div className="md:w-1/2">
          <div className="border-2 border-dashed rounded-md p-4 text-center">
            <label className="cursor-pointer">
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Puzzle Preview"
                  className="h-auto w-auto min-h-[300px] min-w-[300px] object-cover rounded-md mx-auto"
                />
              ) : (
                <div className="text-gray-400">
                  <p>Click or Drag &amp; Drop to Upload</p>
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
          </div>
        </div>

        {/* Right Side: Form Fields */}
        <div className="md:w-1/2 space-y-4">
          {/* Answer */}
          <div className="space-y-2">
            <label className="font-medium">Answer (required)</label>
            <input
              type="text"
              className="border p-2 rounded w-full bg-transparent"
              placeholder="Enter the answer here"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />
          </div>

          {/* Description Hint */}
          <div className="space-y-2">
            <label className="font-medium">Description Hint (required)</label>
            <input
              type="text"
              className="border p-2 rounded w-full bg-transparent"
              placeholder="Enter the description hint"
              value={descHint}
              onChange={(e) => setDescHint(e.target.value)}
            />
          </div>

          {/* Character Hint */}
          <div className="space-y-2">
            <label className="font-medium">Character Hint (required)</label>
            <input
              type="text"
              className="border p-2 rounded w-full bg-transparent"
              placeholder="Enter the character hint"
              value={charHint}
              onChange={(e) => setCharHint(e.target.value)}
            />
          </div>

          {/* Difficulty */}
          <div className="space-y-2">
            <label className="font-medium">Difficulty Level (required)</label>
            <Select
              value={difficulty}
              onValueChange={(value) => setDifficulty(value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select difficulty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Easy">Easy</SelectItem>
                <SelectItem value="Medium">Medium</SelectItem>
                <SelectItem value="Hard">Hard</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Category - Single-select */}
          <div className="space-y-2">
            <label className="font-medium">Category (required)</label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {ALL_CATEGORIES.map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Submit Button at the bottom */}
      <div className="mt-6">
        <Button onClick={handleReview} className="w-full">
          Review
        </Button>
      </div>

      {/* Review Dialog */}
      <ReviewDialog
        isOpen={showReview}
        onClose={() => setShowReview(false)}
        puzzleImage={imagePreview}
        answer={answer}
        descHint={descHint}
        charHint={charHint}
        difficulty={difficulty}
        categories={category}
      />
    </div>
  );
};

export default AdminUploadPage;
