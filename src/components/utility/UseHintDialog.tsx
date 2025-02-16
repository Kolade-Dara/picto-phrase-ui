import { FC } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog"; // Adjust import path for shadcn/ui
import Header from "@/components/utility/Header"; // Your custom Header with back button
import UseHintItem from "./UseHintItem";

interface UseHintDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const UseHintDialog: FC<UseHintDialogProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      {/* 
        By default, shadcn/ui shows a close icon in the corner, 
        but we’ll hide it if you prefer your custom Header’s back button. 
      */}
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
            onUse={() => console.log("Hint #1 used")}
          />
          <UseHintItem
            hintName="Hint"
            description="You get a brief description of what the hint does"
            cost={200}
            onUse={() => console.log("Hint #2 used")}
          />
          <UseHintItem
            hintName="Hint"
            description="You get a brief description of what the hint does"
            cost={200}
            onUse={() => console.log("Hint #3 used")}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UseHintDialog;
