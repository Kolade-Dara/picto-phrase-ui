import { FC } from "react";
import { Input } from "@/components/ui/input"; // Adjust to your Input component
import { Button } from "@/components/ui/button";

type AnswerFormVariant = "default" | "hint" | "error";

interface AnswerFormProps {
  /** Current text in the input */
  value: string;
  /** Callback when the input changes */
  onChange: (val: string) => void;
  /** Called when the user clicks the "Hint" button */
  onHint: () => void;
  /** Called when the user submits the form */
  onSubmit: () => void;
  /** Controls which variant is displayed: default, hint, or error */
  variant?: AnswerFormVariant;
  /** Message to show if variant is 'hint' or 'error' */
  message?: string;
  /** Text for the main action button (e.g., "Yeah, I'm sure", "Try again") */
  actionText?: string;
}

const AnswerForm: FC<AnswerFormProps> = ({
  value,
  onChange,
  onHint,
  onSubmit,
  variant = "default",
  message,
  actionText = "Yeah, I'm sure",
}) => {
  // You can also manage local state if you prefer, but let's keep it controlled via props
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="flex flex-col items-center space-y-3 w-full">
      {/* Input + Hint Button */}
      <div className="flex w-full max-w-sm items-center gap-2">
        <Input
          type="text"
          placeholder="What is the phrase?"
          className="flex-grow"
          value={value}
          onChange={handleInputChange}
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
      <Button onClick={onSubmit} className="w-full max-w-sm">
        {actionText}
      </Button>
    </div>
  );
};

export default AnswerForm;
