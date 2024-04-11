import { useDraggable } from '@dnd-kit/core'
import './Draggable.scss'

interface DraggableProps {
    children: any;
    id: string;
    position: any;
    deleteNote: any
}


export const Draggable : React.FC<DraggableProps> = ({children, id, position, deleteNote}) => {

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
        >
            <button {...listeners} {...attributes}>Drag handle</button>
            {deleteNote && <button className='Item-delete' onClick={deleteNote}>Borrar</button>}
            {children}
        </div>
    )
}