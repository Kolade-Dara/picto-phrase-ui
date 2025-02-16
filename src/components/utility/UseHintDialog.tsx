import { FC } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog"; // Adjust import path for shadcn/ui
import Header from "@/components/utility/Header"; // Your custom Header with back button
import UseHintItem from "./UseHintItem";

interface UseHintDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onUseHint: (hintText: string) => void;
}

const UseHintDialog: FC<UseHintDialogProps> = ({
  isOpen,
  onClose,
  onUseHint,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md p-0">
        {/* Custom Header inside the dialog */}
        <Header
          title="Buy Hint coins"
          onBack={onClose} // Closes the dialog
        />

        <div className="p-4 space-y-4">
          {/* Repeat UseHintItem for each hint type */}
          <UseHintItem
            hintName="Hint"
            description="You get a brief description of what the hint does"
            cost={200}
            onUse={() =>
              onUseHint("You get a brief description of what the hint does")
            }
          />
          <UseHintItem
            hintName="Hint"
            description="You get a brief description of what the hint does"
            cost={200}
            onUse={() =>
              onUseHint("You get a brief description of what the hint does")
            }
          />
          <UseHintItem
            hintName="Hint"
            description="You get a brief description of what the hint does"
            cost={200}
            onUse={() =>
              onUseHint("You get a brief description of what the hint does")
            }
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UseHintDialog;
