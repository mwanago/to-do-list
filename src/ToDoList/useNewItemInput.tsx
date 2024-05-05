import { ChangeEvent, useState } from 'react';

export function useNewItemInput() {
  const [newItem, setNewItem] = useState('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewItem(event.target.value);
  };

  const clearInput = () => {
    setNewItem('');
  };

  return {
    newItem,
    handleInputChange,
    clearInput,
  };
}
