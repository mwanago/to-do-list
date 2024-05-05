import { DragEvent, useState } from 'react';

interface Props {
  addCompletedItem: (item: string) => void;
  addToDoItem: (item: string) => void;
  removeToDoItem: (item: string) => void;
  removeCompletedItem: (item: string) => void;
}

export function useDragAndDrop({
  addCompletedItem,
  addToDoItem,
  removeToDoItem,
  removeCompletedItem,
}: Props) {
  const [
    currentlyDraggedItem,
    setCurrentlyDraggedItem
  ] = useState<string | null>(null);

  const startDragging = (item: string) => () => {
    setCurrentlyDraggedItem(item);
  };

  const handleDropOnCompleted = () => {
    if (currentlyDraggedItem) {
      addCompletedItem(currentlyDraggedItem);
      removeToDoItem(currentlyDraggedItem);
    }
  };

  const handleDropOnToDo = () => {
    if (currentlyDraggedItem) {
      addToDoItem(currentlyDraggedItem);
      removeCompletedItem(currentlyDraggedItem);
    }
  };

  const handleDragOver = (event: DragEvent) => {
    event.preventDefault();
  };

  return {
    startDragging,
    handleDropOnCompleted,
    handleDropOnToDo,
    handleDragOver,
  };
}
