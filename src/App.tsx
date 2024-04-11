import { DndContext, DragOverlay } from '@dnd-kit/core'
import './App.scss'
import { useEffect, useState } from 'react'
import { Droppable } from './components/Droppable/Droppable'
import { Draggable } from './components/Draggable/Draggable'
import { Item } from './components/Item/Item'
import { restrictToWindowEdges } from '@dnd-kit/modifiers'
import {createSnapModifier} from '@dnd-kit/modifiers';
import { Button } from './components/Button/Button'
import { ItemInfo } from './utils/interfaces'
import { v4 as uuid } from "uuid";


const App = () => {



    const [ items, setItems ] = useState<ItemInfo[]>([])
    const [ currentItem, setCurrentItem ] = useState<null | ItemInfo>()

    const addNote = () => {
        console.log('add note')
        const newNote = {
            id: uuid(),
            description: 'Write something new...',
            position: {
                left: 200,
                top: 100,
                rotation: 90
            }
        }
        setItems( prevItems => [...prevItems, newNote] )
    }

    const deleteNote = ( id: string ) => {
        console.log('delete item:', id)
        const updatedItems = items.filter((item) => item.id !== id)
        if (updatedItems != items) {setItems(updatedItems) }
    }

    const handleDragStart = (e : any) => {
        const item = items.find((x) => x.id === e.active.id)
        setCurrentItem(item)
    }

    const handleDragEnd = (e : any) => {

        const item = items.find((x) => x.id === e.active.id)
        setCurrentItem(null)

        if (item) {
            item.position.left += e.delta.x;
            item.position.top += e.delta.y
    
            const updatedItems = items.map((info) => {
              if (info.id === item.id) return item
              return info
            })
    
            setItems(updatedItems);
        }
    }

    const handleInputChange = (e : any) => {
        console.log('input changing', e)
    }

    useEffect( () => console.log('current item', currentItem), [currentItem])
    useEffect( () => console.log('items:', items), [items])

    const gridSize = 20;
    const snapToGridModifier = createSnapModifier(gridSize);

    return (
        <div className='App'>
            <DndContext modifiers={[snapToGridModifier]} onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
                <Droppable id={'board'}>
                    <Button onClick={addNote}/>
                    { items.map ( ({id, position, description}) =>
                        <Draggable 
                                key={id} 
                                id={id}
                                position={{
                                    position: "absolute",
                                    left: `${position.left}px`,
                                    top: `${position.top}px`
                                }}
                                deleteNote={() => deleteNote(id)}
                                description={description}
                                handleInputChange={handleInputChange}
                            />
                    )}
                </Droppable>
                {/* <DragOverlay modifiers={[restrictToWindowEdges]}>
                    { currentItem &&
                        <Item 
                            description={currentItem?.description}
                        />
                    }
                </DragOverlay> */}
            </DndContext>
            
        </div>
    )
}

export default App