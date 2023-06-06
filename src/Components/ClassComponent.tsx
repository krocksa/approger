import React from 'react';

interface ClassComponentProps {
    name: string;
}

export class ClassComponent extends React.Component<ClassComponentProps, any>{
    constructor(props: ClassComponentProps) {
        super(props);
    }

    render() {
        return <>
            <h1>
                Hola Roger desde un ClassComponent {this.props.name}
            </h1>
        </>
    }
}