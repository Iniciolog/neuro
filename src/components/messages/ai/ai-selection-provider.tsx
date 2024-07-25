import { Quotes } from "@phosphor-icons/react";
import { FC } from "react";
import * as Selection from "selection-popover";

import { Button } from "@/components/ui";
import { useTextSelection } from "@/hooks";

export type TAISelectionProvider = {
  children: React.ReactNode;
  onSelect: (value: string) => void;
};

export const AISelectionProvider: FC<TAISelectionProvider> = ({
  children,
  onSelect,
}) => {
  const { selectedText } = useTextSelection();

  return (
    <Selection.Root>
      <Selection.Trigger>{children}</Selection.Trigger>
      <Selection.Portal container={document?.getElementById("chat-container")}>
        <Selection.Content sticky="always" sideOffset={10} id="chat-reply">
          {selectedText && (
            <Button size="sm" onClick={() => onSelect(selectedText)}>
              <Quotes size="16" weight="bold" /> Reply
            </Button>
          )}
        </Selection.Content>
      </Selection.Portal>
    </Selection.Root>
  );
};
