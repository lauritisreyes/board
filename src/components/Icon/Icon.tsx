import './Icon.scss'

interface IconButtonProps {
    name: string,
    onClick?: any
}

export const IconButton : React.FC<IconButtonProps> = ({name, onClick, ...props}) => {

    return (
        <div className="IconButton" onClick={onClick} {...props}>
            { name === 'bin' && <BinIcon/>}
            { name === 'drag' && <DragIcon/>}
        </div>
    )
}


export const BinIcon = () => {
    return (
        <div className="Icon Icon-bin">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.3077 20.4998C6.80898 20.4998 6.38302 20.3232 6.02982 19.97C5.67661 19.6168 5.5 19.1908 5.5 18.6921V5.99981H4.5V4.49983H8.99997V3.61523H15V4.49983H19.5V5.99981H18.5V18.6921C18.5 19.1972 18.325 19.6248 17.975 19.9748C17.625 20.3248 17.1974 20.4998 16.6922 20.4998H7.3077ZM17 5.99981H6.99997V18.6921C6.99997 18.7818 7.02882 18.8556 7.08653 18.9133C7.14423 18.971 7.21795 18.9998 7.3077 18.9998H16.6922C16.7692 18.9998 16.8397 18.9678 16.9038 18.9037C16.9679 18.8395 17 18.769 17 18.6921V5.99981ZM9.40385 16.9998H10.9038V7.99981H9.40385V16.9998ZM13.0961 16.9998H14.5961V7.99981H13.0961V16.9998Z" fill="rgb(65, 68, 72)"/>
            </svg>

        </div>
    )
}



export const DragIcon = () => {
    return (
        <div className="Icon Icon-drag">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.00012 19.6155C8.5559 19.6155 8.17562 19.4573 7.85927 19.141C7.54293 18.8246 7.38477 18.4443 7.38477 18.0001C7.38477 17.5559 7.54293 17.1756 7.85927 16.8593C8.17562 16.5429 8.5559 16.3848 9.00012 16.3848C9.44433 16.3848 9.82462 16.5429 10.141 16.8593C10.4573 17.1756 10.6155 17.5559 10.6155 18.0001C10.6155 18.4443 10.4573 18.8246 10.141 19.141C9.82462 19.4573 9.44433 19.6155 9.00012 19.6155ZM15.0001 19.6155C14.5559 19.6155 14.1756 19.4573 13.8593 19.141C13.5429 18.8246 13.3848 18.4443 13.3848 18.0001C13.3848 17.5559 13.5429 17.1756 13.8593 16.8593C14.1756 16.5429 14.5559 16.3848 15.0001 16.3848C15.4443 16.3848 15.8246 16.5429 16.141 16.8593C16.4573 17.1756 16.6155 17.5559 16.6155 18.0001C16.6155 18.4443 16.4573 18.8246 16.141 19.141C15.8246 19.4573 15.4443 19.6155 15.0001 19.6155ZM9.00012 13.6155C8.5559 13.6155 8.17562 13.4573 7.85927 13.141C7.54293 12.8246 7.38477 12.4443 7.38477 12.0001C7.38477 11.5559 7.54293 11.1756 7.85927 10.8593C8.17562 10.5429 8.5559 10.3848 9.00012 10.3848C9.44433 10.3848 9.82462 10.5429 10.141 10.8593C10.4573 11.1756 10.6155 11.5559 10.6155 12.0001C10.6155 12.4443 10.4573 12.8246 10.141 13.141C9.82462 13.4573 9.44433 13.6155 9.00012 13.6155ZM15.0001 13.6155C14.5559 13.6155 14.1756 13.4573 13.8593 13.141C13.5429 12.8246 13.3848 12.4443 13.3848 12.0001C13.3848 11.5559 13.5429 11.1756 13.8593 10.8593C14.1756 10.5429 14.5559 10.3848 15.0001 10.3848C15.4443 10.3848 15.8246 10.5429 16.141 10.8593C16.4573 11.1756 16.6155 11.5559 16.6155 12.0001C16.6155 12.4443 16.4573 12.8246 16.141 13.141C15.8246 13.4573 15.4443 13.6155 15.0001 13.6155ZM9.00012 7.61547C8.5559 7.61547 8.17562 7.4573 7.85927 7.14097C7.54293 6.82462 7.38477 6.44433 7.38477 6.00012C7.38477 5.5559 7.54293 5.17562 7.85927 4.85927C8.17562 4.54293 8.5559 4.38477 9.00012 4.38477C9.44433 4.38477 9.82462 4.54293 10.141 4.85927C10.4573 5.17562 10.6155 5.5559 10.6155 6.00012C10.6155 6.44433 10.4573 6.82462 10.141 7.14097C9.82462 7.4573 9.44433 7.61547 9.00012 7.61547ZM15.0001 7.61547C14.5559 7.61547 14.1756 7.4573 13.8593 7.14097C13.5429 6.82462 13.3848 6.44433 13.3848 6.00012C13.3848 5.5559 13.5429 5.17562 13.8593 4.85927C14.1756 4.54293 14.5559 4.38477 15.0001 4.38477C15.4443 4.38477 15.8246 4.54293 16.141 4.85927C16.4573 5.17562 16.6155 5.5559 16.6155 6.00012C16.6155 6.44433 16.4573 6.82462 16.141 7.14097C15.8246 7.4573 15.4443 7.61547 15.0001 7.61547Z" fill="rgb(65, 68, 72)"/>
            </svg>
        </div>
    )
}