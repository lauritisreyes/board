import './Buttons.scss'

interface ButtonProps {
    onClick: () => void
}

export const Button : React.FC<ButtonProps> = ( {onClick} ) => {
    return (
        <button onClick={onClick}>Nueva nota</button>
    )
}