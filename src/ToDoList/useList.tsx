import { useState } from 'react';

export function useList() {
  const [items, setItems] = useState<string[]>([]);

  const addItem = (text: string) => {
    if (items.includes(text)) {
      return;
    }
    setItems([...items, text]);
  };

  const removeItem = (text: string) => {
    const index = items.indexOf(text);
    if (index === -1) {
      return;
    }
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return {
    items,
    addItem,
    removeItem,
  };
}
