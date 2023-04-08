import React, { useState } from "react";
import { IUser } from "../models/IUser";
import { PassThrough } from "stream";

interface IProps{}
interface IState{
    user:IUser
}

let LoginForm:React.FC<IProps>=()=>{

    let[state,setState]=useState<IState>({
        user:{
            sno:'',
            username:'',
            password:'',
            designation:'',
            age:0,
            company:''
        }
    });

    let updateInput = (event:React.ChangeEvent<HTMLInputElement>):void=>{
        setState({
            user:{
                ...state.user,
                [event.target.name]:event.target.value
            }
        });
    };

    let login =(event:React.FormEvent<HTMLFormElement>):void=>{
        event.preventDefault();
        console.log(state.user);
    }
    return (
        <React.Fragment>
            <h3>Login Form</h3>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header text-center bg-primary text-white">
                                <p className="h4">Login Here</p>
                            </div>
                            <div className="card-body">
                                <form onSubmit={login}>
                                    <div className="mb-2">
                                        <input required={true} name="username" value={state.user.username} onChange={updateInput} type="text" className="form-control" placeholder="Username" />
                                    </div>
                                    <div className="mb-2">
                                        <input required={true} name="password" value={state.user.password } onChange={updateInput} type="password"  className="form-control" placeholder="Password" />
                                    </div>
                                    <div className="mb-2">
                                        <input type="submit" className="btn btn-primary" value="Login" />
                                  </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default LoginForm;
