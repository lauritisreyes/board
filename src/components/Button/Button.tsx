import './Buttons.scss'

interface ButtonProps {
    onClick: () => void
}

export const Button : React.FC<ButtonProps> = ( {onClick} ) => {
    return (
        <button className='Button' onClick={onClick}>New note</button>
    )
}