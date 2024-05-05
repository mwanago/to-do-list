import { FunctionComponent, DragEvent } from 'react';
import styles from './List.module.css';

interface Props {
  items: string[];
  title: string;
  onStartDragging: (item: string) => () => void;
  onDragOver: (event: DragEvent) => void;
  onDrop: () => void;
  'data-testid'?: string;
}

export const List: FunctionComponent<Props> = ({
  items,
  title,
  onStartDragging,
  onDragOver,
  onDrop,
  'data-testid': dataTestId,
}) => {
  return (
    <div
      className={styles.list}
      onDragOver={onDragOver}
      onDrop={onDrop}
      data-testid={dataTestId}
    >
      <h3>{title}</h3>
      <div>
        {items.map((item) => (
          <p
            className={styles.item}
            key={item}
            draggable
            onDragStart={onStartDragging(item)}
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};
