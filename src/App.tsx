import { DndContext } from '@dnd-kit/core'
import './App.scss'
import { Draggable } from './components/Draggable/Draggable'
import { Droppable } from './components/Droppable/Droppable'
import { useState } from 'react'
import { Item } from './components/Item/Item'


const App = () => {

    const containers = [ 'container-A', 'container-B', 'container-C']

    const [parent, setParent] = useState(null);

    const handleDragEnd = (e: any) => {
        console.log(e);
        if (e.over) {
            setParent(e.over.id)
        }
    }

    return (
        <div className='App'>
            <DndContext onDragEnd={handleDragEnd}>

                {/* Container to drop elements */}
                <div className='Container'>
                    <Droppable id='droppable-1'>
                        { parent === 'droppable-1' ? <Item/> : null}
                    </Droppable>
                </div>

                {/* Item */}
                {parent === null ? <Draggable id='draggable-1'><Item/></Draggable> : null}
            </DndContext>
        </div>
    )
}

export default App