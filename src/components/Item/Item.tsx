import React from 'react'
import './Item.scss'
import { IconButton } from '../Icon/Icon'

interface ItemProps {
    description: string,
}

export const Item : React.FC<ItemProps> = ( {description}) => {

    return (
        <div className='Item'>
            <div className='Item-actions'>
                <IconButton name='drag' />
            </div>
            <p className='Item-description'>{description}</p>
        </div>
    )
}