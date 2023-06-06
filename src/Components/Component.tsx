interface ComponentProps{
    name: string;
}

export const Component: React.FC<ComponentProps> = ({name}) => {

    return(
        <>
            <h1>
                Hola Roger {name}
            </h1>
        </>
    )
}