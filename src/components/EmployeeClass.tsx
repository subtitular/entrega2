import React from "react";

interface IProps {}
interface IState {
    name:string;
    age:number;
    title:string;
}


export class EmployeeClass extends React.Component<IProps,IState>{
    constructor(props:IProps) {
        super(props);
        this.state = {
            name: 'Oscar',
            age: 50,
            title: 'Software Engineer'
        } as IState;
    }
    render(): React.ReactNode {
        return(
            
            <React.Fragment>
                <h3>Employee Class Component</h3>
                <ul className="list-group">
                <li className="list-group-item">
                    Name: {this.state.name}
                </li>
                <li className="list-group-item">
                    Age: {this.state.age}
                </li>
                <li className="list-group-item">
                    Title: {this.state.title}
                </li>
            </ul>
            </React.Fragment>
        );
    }

}