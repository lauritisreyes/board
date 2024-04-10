import { useDraggable } from '@dnd-kit/core'
import './Draggable.scss'
import { restrictToWindowEdges } from '@dnd-kit/modifiers';

interface DraggableProps {
    children: any;
    id: number | string;
    position: any
}


export const Draggable : React.FC<DraggableProps> = ({children, id, position}) => {

    const { 
        attributes, 
        listeners, 
        setNodeRef, 
        transform 
    } = useDraggable({
        id: id
    })

    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      } : undefined;
    
    return (
        <div 
            className='Draggable'
            style={{...style, ...position}}
            ref={setNodeRef}
            {...attributes}
            {...listeners}
        >{children}</div>
    )
}