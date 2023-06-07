import { jsx } from "@emotion/react";

interface ComponentProps{
    name: string;
}

export function Component (props: ComponentProps): JSX.Element{
    return<>
        <h1>
        Hola, {props.name}
        </h1>
    </>
}