import { DndContext } from '@dnd-kit/core'
import './App.scss'
import { Draggable } from './components/Draggable/Draggable'
import { Droppable } from './components/Droppable/Droppable'
import { useState } from 'react'
import { Item } from './components/Item/Item'


const App = () => {

    const [ isDropped, setIsDropped ] = useState(false)

    const handleDragEnd = (e: any) => {
        console.log(e)
        if (e.over && e.over.id === 'droppable-1') {
            setIsDropped(true)
        }
    }

    return (
        <div className='App'>
            <DndContext onDragEnd={handleDragEnd}>

                {/* Container to drop elements */}
                <Droppable id='droppable-1'>
                    {isDropped ? <Item/> : 'Drop here'}
                </Droppable>

                {/* Item */}
                {!isDropped ? <Draggable id='draggable-1'><Item/></Draggable> : null}
            </DndContext>
        </div>
    )
}

export default App