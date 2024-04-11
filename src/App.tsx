import { DndContext, DragOverlay } from '@dnd-kit/core'
import './App.scss'
import { useEffect, useState } from 'react'
import ItemsData from './data/data.json'
import { Droppable } from './components/Droppable/Droppable'
import { Draggable } from './components/Draggable/Draggable'
import { Item } from './components/Item/Item'
import { restrictToWindowEdges } from '@dnd-kit/modifiers'
import {createSnapModifier} from '@dnd-kit/modifiers';


const App = () => {



    const [ items, setItems ] = useState( ItemsData )
    const [ currentId, setCurrentId ] = useState<any | number>(1)

    const handleDragEnd = (e : any) => {

        setCurrentId(e.active.id)

        const item = items.find((x) => x.id === e.active.id)
        console.log('this item', item)

        if (item) {
            item.position.left += e.delta.x;
            item.position.top += e.delta.y;
    
            const updatedItems = items.map((info) => {
              if (info.id === item.id) return item
              return info
            })
    
            setItems(updatedItems);
        }
    }

    useEffect( () => console.log('current id', currentId), [currentId])
    useEffect( () => console.log('items:', items), [items])

    const gridSize = 20;
    const snapToGridModifier = createSnapModifier(gridSize);

    return (
        <div className='App'>
            <DndContext modifiers={[snapToGridModifier]} onDragEnd={handleDragEnd}>
                <Droppable id='board'>
                    { ItemsData.map ( ({id, position, title, description}) =>
                        <Draggable 
                            key={id} 
                            id={id}
                            position={{
                                position: "absolute",
                                left: `${position.left}px`,
                                top: `${position.top}px`
                            }}
                            >
                            <Item title={title} description={description}/>
                        </Draggable>
                    )}
                </Droppable>
                <DragOverlay modifiers={[restrictToWindowEdges]}>
                    <Item 
                        title="prueba"
                        description="subtitulo prueba"
                    />
                </DragOverlay>
            </DndContext>
            
        </div>
    )
}

export default App