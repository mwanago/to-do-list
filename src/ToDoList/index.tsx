import styles from './ToDoList.module.css';
import { List } from './List';
import { useNewItemInput } from './useNewItemInput';
import { useList } from './useList';
import { useDragAndDrop } from './useDragAndDrop';

export const ToDoList = () => {
  const { handleInputChange, newItem, clearInput } = useNewItemInput();

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

  const {
    handleDragOver,
    handleDropOnToDo,
    handleDropOnCompleted,
    startDragging,
  } = useDragAndDrop({
    addToDoItem,
    addCompletedItem,
    removeCompletedItem,
    removeToDoItem,
  });

  return (
    <div>
      <div className={styles.inputWrapper}>
        <input
          placeholder="Add new item"
          onChange={handleInputChange}
          value={newItem}
        />
        <button onClick={handleNewItem}>Add</button>
      </div>
      <div className={styles.listWrapper}>
        <List
          items={toDoItems}
          title="To do:"
          onStartDragging={startDragging}
          onDragOver={handleDragOver}
          onDrop={handleDropOnToDo}
        />
        <List
          items={completedItems}
          title="Completed:"
          onStartDragging={startDragging}
          onDragOver={handleDragOver}
          onDrop={handleDropOnCompleted}
        />
      </div>
    </div>
  );
};
