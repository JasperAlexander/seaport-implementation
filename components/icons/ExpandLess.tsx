interface Props {
    width: string,
    color: string,
}

export const ExpandLess: React.FC<Props> = ({
    width,
    color,
}: Props ) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={width} viewBox="0 0 24 24" width={width} fill={color}><path d="M0 0h24v24H0z" fill="none"/><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"/></svg>
    )
}