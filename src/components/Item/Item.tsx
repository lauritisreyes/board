import React from 'react'
import './Item.scss'

interface ItemProps {
    description: string,
}

export const Item : React.FC<ItemProps> = ( { description}) => {

    return (
        <div className='Item'>
            <p className='Item-description'>{description}</p>
        </div>
    )
}