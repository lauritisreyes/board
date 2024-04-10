import React from 'react'
import './Item.scss'

interface ItemProps {
    title: string,
    description: string
}

export const Item : React.FC<ItemProps> = ( {title, description}) => {

    return (
        <div className='Item'>
            <h2 className='Item-title'>{title}</h2>
            <p className='Item-description'>{description}</p>
        </div>
    )
}