import { ChangeEvent, useState, DragEvent } from 'react';

export function useToDoList() {
  const [newItem, setNewItem] = useState('');
  const [toDoItems, setToDoItems] = useState<string[]>([]);
  const [completedItems, setCompletedItems] = useState<string[]>([]);

  const [currentlyDraggedItem, setCurrentlyDraggedItem] = useState<
    string | null
  >(null);

  const addToDoItem = (text: string) => {
    if (toDoItems.includes(text)) {
      return;
    }
    setToDoItems([...toDoItems, text]);
  };

  const removeToDoItem = (text: string) => {
    const index = toDoItems.indexOf(text);
    if (index === -1) {
      return;
    }
    const newItems = [...toDoItems];
    newItems.splice(index, 1);
    setToDoItems(newItems);
  };

  const addCompletedItem = (text: string) => {
    if (completedItems.includes(text)) {
      return;
    }
    setCompletedItems([...completedItems, text]);
  };

  const removeCompletedItem = (text: string) => {
    const index = completedItems.indexOf(text);
    if (index === -1) {
      return;
    }
    const newItems = [...completedItems];
    newItems.splice(index, 1);
    setCompletedItems(newItems);
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
