import { useToDoList } from './useToDoList';
import styles from './ToDoList.module.css';

export const ToDoList = () => {
  const {
    handleInputChange,
    handleNewItem,
    newItem,
    toDoItems,
    completedItems,
  } = useToDoList();

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
        <div className={styles.list}>
          <h3>To do:</h3>
          <div>
            {toDoItems.map((item) => (
              <p className={styles.item} key={item}>
                {item}
              </p>
            ))}
          </div>
        </div>
        <div className={styles.list}>
          <h3>Completed:</h3>
          <div>
            {completedItems.map((item) => (
              <p className={styles.item} key={item}>
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
