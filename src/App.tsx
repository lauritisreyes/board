import { DndContext, DragOverlay } from '@dnd-kit/core'
import './App.scss'
import { useEffect, useState } from 'react'
import { Droppable } from './components/Droppable/Droppable'
import { Draggable } from './components/Draggable/Draggable'
import {createSnapModifier, restrictToWindowEdges} from '@dnd-kit/modifiers';
import { ItemInfo } from './utils/interfaces'
import { v4 as uuid } from "uuid";
import { Item } from './components/Item/Item'


const App = () => {



    const [ items, setItems ] = useState<ItemInfo[]>([])
    const [ currentItem, setCurrentItem ] = useState<null | ItemInfo>()

    const deleteNote = ( id: string ) => {
        console.log('delete item:', id)
        const updatedItems = items.filter((item) => item.id !== id)
        if (updatedItems != items) {setItems(updatedItems) }
    }

    const handleDragStart = (e : any) => {
        console.log('DRAGSTART', e)
        const item = items.find((x) => x.id === e.active.id)
        setCurrentItem(item)
    }

    const handleDragEnd = (e : any) => {

        console.log('DRAGEND', e, e.active.data.current.type)

        const item = items.find((x) => x.id === e.active.id)
        setCurrentItem(null)

        if (e.active.data.current.type === 'board-card') {
            if (item) {
                item.position.left += e.delta.x;
                item.position.top += e.delta.y
        
                const updatedItems = items.map((info) => {
                  if (info.id === item.id) return item
                  return info
                })
        
                setItems(updatedItems);
            }
        } else if (e.active.data.current.type === 'menu-card') {
            console.log('eee')
            const newNote = {
                id: uuid(),
                description: 'Write something new...',
                position: {
                    left: e.delta.x,
                    top: e.delta.y,
                    rotation: 0
                }
            }
            setItems( prevItems => [...prevItems, newNote] )
        }
    }

    useEffect( () => console.log('current item', currentItem), [currentItem])
    useEffect( () => console.log('items:', items), [items])

    const gridSize = 20;
    const snapToGridModifier = createSnapModifier(gridSize);

    return (
        <div className='App'>
            <DndContext modifiers={[snapToGridModifier]} onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
                <DragOverlay modifiers={[restrictToWindowEdges]}>
                    { currentItem &&
                        <Item 
                            description={currentItem?.description}
                        />
                    }
                </DragOverlay>
                <div className='Menu'>
                    <Draggable 
                        type='menu-card'
                        key={'card-type-1'} 
                        id={'card-type-1'}
                        position={{
                            position: "absolute",
                            left: `0px`,
                            top: `30px`
                        }}
                        deleteNote={() => deleteNote('card-type-1')}
                        description={'description'}
                    />
                </div>
                <Droppable id={'board'}>
                    { items.map ( ({id, position, description}) =>
                        <Draggable 
                            type='board-card'
                            key={id} 
                            id={id}
                            position={{
                                position: "absolute",
                                left: `${position.left}px`,
                                top: `${position.top}px`
                            }}
                            deleteNote={() => deleteNote(id)}
                            description={description}
                        />
                    )}
                </Droppable>
            </DndContext>
            
        </div>
    )
}

export default App