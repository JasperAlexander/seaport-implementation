interface Props {
    width: string,
    color: string,
}

export const Flag: React.FC<Props> = ({
    width,
    color,
}: Props ) => {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            height={width} 
            viewBox="0 0 24 24" 
            width={width} 
            fill={color}
        >
            <path 
                d="M0 0h24v24H0z" 
                fill="none"
            />
            <path 
                d="M14 6l-1-2H5v17h2v-7h5l1 2h7V6h-6zm4 8h-4l-1-2H7V6h5l1 2h5v6z"
            />
        </svg>
    )
}