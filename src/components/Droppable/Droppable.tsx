import { useEffect } from 'react';
import './Droppable.scss'
import { useDroppable } from '@dnd-kit/core';

interface DroppableProps {
    children: any;
    id: string | number
}

export const Droppable : React.FC<DroppableProps> = ({children, id}) => {

    const { isOver, setNodeRef } = useDroppable({
        id: id
    })

    useEffect( () => console.log('is over:', isOver),[isOver])

    const handleDrop = () => {
        console.log('drop')
    }

    return (
        <div 
            className={`Board ${isOver ? 'isOver' : '' }`}
            ref={setNodeRef} 
            onDrop={handleDrop}
        >
            {children}
            {isOver && <h2>Drop Here</h2>}
        </div>
    )
}