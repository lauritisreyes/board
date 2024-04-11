import { useDraggable } from '@dnd-kit/core'
import './Draggable.scss'
import { IconButton } from '../Icon/Icon';

interface DraggableProps {
    id: string;
    position: any;
    deleteNote: any;
    description: string;
    type: string
}


export const Draggable : React.FC<DraggableProps> = ({ id, position, deleteNote, description, type}) => {

    const { 
        attributes, 
        listeners, 
        setNodeRef, 
        transform 
    } = useDraggable({
        data: { type: type },
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
            <div className='Item'>
                <div className='Item-actions'>
                    { type != 'menu-card' && <IconButton name='bin' onClick={deleteNote}/> }
                    <IconButton name='drag' {...listeners} {...attributes} />
                </div>
                <p className='Item-description'>{description}</p>
            </div>
        </div>
    )
}