import { ChangeEvent, useState, DragEvent } from 'react';

export function useToDoList() {
  const [newItem, setNewItem] = useState('');
  const [toDoItems, setToDoItems] = useState<string[]>([]);
  const [completedItems, setCompletedItems] = useState<string[]>([]);

  const [currentlyDraggedItem, setCurrentlyDraggedItem] = useState<
    string | null
  >(null);

  const addToDoItem = (text: string) => {
    setToDoItems([...toDoItems, text]);
  };

  const addCompletedItem = (text: string) => {
    setCompletedItems([...completedItems, text]);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewItem(event.target.value);
  };

  const handleNewItem = () => {
    addToDoItem(newItem);
    setNewItem('');
  };

  const startDragging = (item: string) => () => {
    setCurrentlyDraggedItem(item);
  };

  const handleDropOnCompleted = () => {
    if (currentlyDraggedItem) {
      addCompletedItem(currentlyDraggedItem);
    }
  };

  const handleDropOnToDo = () => {
    if (currentlyDraggedItem) {
      addToDoItem(currentlyDraggedItem);
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
