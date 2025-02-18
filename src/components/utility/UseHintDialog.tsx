import { FC } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog"; // Adjust import path for shadcn/ui
import Header from "@/components/utility/Header"; // Your custom Header with back button
import UseHintItem from "./UseHintItem";

interface UseHintDialogProps {
  isHintDialogOpen: boolean;
  onClose: () => void;
  showDescriptionHint: () => void;
}

const UseHintDialog: FC<UseHintDialogProps> = ({
  isHintDialogOpen,
  onClose,
  showDescriptionHint,
}) => {

  return (
    <Dialog open={isHintDialogOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md p-0">
        {/* Custom Header inside the dialog */}
        <Header
          title="Use Hint"
          onBack={onClose} // Closes the dialog
        />

        <div className="p-4 space-y-4">
          {/* Repeat UseHintItem for each hint type */}
          <UseHintItem
            hintName="Description Hint"
            description="You get a brief description of the puzzle."
            cost={200}
            onUse={() => showDescriptionHint()}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UseHintDialog;
