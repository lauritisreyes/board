import { useDraggable } from '@dnd-kit/core'
import './Draggable.scss'
import { IconButton } from '../Icon/Icon';

interface DraggableProps {
    id: string;
    position: any;
    deleteNote: any;
    description: string;
    handleInputChange: any
}


export const Draggable : React.FC<DraggableProps> = ({ id, position, deleteNote, handleInputChange, description}) => {

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
            <div className='Item'>
                <div className='Item-actions'>
                    <IconButton name='bin' onClick={deleteNote}/>
                    <IconButton name='drag' {...listeners} {...attributes} />
                </div>
                <p className='Item-description'>{description}</p>
                {/* <input 
                    type="text" 
                    name={id}
                    value={description} 
                    onChange={handleInputChange} 
                    placeholder="Escribe algo..."
                /> */}
            </div>
        </div>
    )
}