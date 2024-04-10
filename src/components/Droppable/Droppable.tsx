import { useEffect } from 'react';
import './Droppable.scss'
import { useDroppable } from '@dnd-kit/core';

interface DroppableProps {
    children: any;
    id: string
}

export const Droppable : React.FC<DroppableProps> = ({children, id}) => {

    const { isOver, setNodeRef } = useDroppable({
        id: id,
        data: {
            type: 'type1'
        }
    })

    useEffect( () => console.log('is over:', isOver),[isOver])

    return (
        <div 
            className={`Board ${isOver ? 'isOver' : '' }`}
            ref={setNodeRef} 
        >
            {children}
        </div>
    )
}