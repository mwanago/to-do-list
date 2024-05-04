import { useState, DragEvent } from 'react';
import { useInput } from './useInput';
import { useList } from './useList.tsx';

export function useToDoList() {
  const { handleInputChange, newItem, clearInput } = useInput();

  const [currentlyDraggedItem, setCurrentlyDraggedItem] = useState<
    string | null
  >(null);

  const {
    items: toDoItems,
    removeItem: removeToDoItem,
    addItem: addToDoItem,
  } = useList();

  const {
    items: completedItems,
    removeItem: removeCompletedItem,
    addItem: addCompletedItem,
  } = useList();

  const handleNewItem = () => {
    addToDoItem(newItem);
    clearInput();
  };

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
    handleInputChange,
    handleNewItem,
    newItem,
    toDoItems,
    completedItems,
    startDragging,
    handleDropOnCompleted,
    handleDropOnToDo,
    handleDragOver,
  };
}
