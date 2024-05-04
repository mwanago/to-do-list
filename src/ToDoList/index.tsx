import { useToDoList } from './useToDoList';

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
      <div>
        <input
          placeholder="Add new item"
          onChange={handleInputChange}
          value={newItem}
        />
        <button onClick={handleNewItem}>Add</button>
      </div>
      <div>
        <h2>To do:</h2>
        <div>
          {toDoItems.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </div>
      <div>
        <h2>Completed:</h2>
        <div>
          {completedItems.map((item) => (
            <p>
              {' '}
              key={item}
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
