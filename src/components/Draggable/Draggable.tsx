import { useDraggable } from '@dnd-kit/core'
import './Draggable.scss'

interface DraggableProps {
    children: any;
    id: string
}


export const Draggable : React.FC<DraggableProps> = ({children, id}) => {

    const { 
        attributes, 
        listeners, 
        setNodeRef, 
        transform 
    } = useDraggable({
        id: id,
    })

    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      } : undefined;
    
    return (
        <div 
            className='Draggable'
            style={style}
            ref={setNodeRef}
            {...attributes}
            {...listeners}
        >{children}</div>
    )
}