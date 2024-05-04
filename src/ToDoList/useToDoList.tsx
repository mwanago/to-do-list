import { ChangeEvent, useState } from 'react';

export function useToDoList() {
  const [newItem, setNewItem] = useState('');
  const [toDoItems, setToDoItems] = useState<string[]>([]);
  const [completedItems, setCompletedItems] = useState<string[]>([]);

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

  return {
    handleInputChange,
    handleNewItem,
    newItem,
    toDoItems,
    completedItems,
  };
}
