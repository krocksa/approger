import React from 'react';

interface ClassComponentProps {
    name: string;
}

export class ClassComponent extends React.Component<ClassComponentProps, ClassComponentState>{
    constructor(props: ClassComponentProps) {
        super(props);
        this.state = {
            name: this.props.name
        }
    }

    render() {
        return <>
            <h1>
                Hola Roger, {this.state.name}
            </h1>
        </>
    }
}

interface ClassComponentState{
    name: string;
}