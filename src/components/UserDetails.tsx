import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IUser } from "../models/IUser";
import { UserService } from "../services/UserService";

interface URLParams{
    id:string;
}

interface IProps{}
interface IState{
    loading:boolean,
    user:IUser,
    errorMessage:string
}

let UserDetails:React.FC<IProps>=()=>{

    let {id} = useParams<URLParams | any >();

    let [state,setState] = useState<IState>({
        loading:false,
        user:{} as IUser,
        errorMessage:''
    });

    useEffect(()=>{
        if(id){
            UserService.getUser(id).then((response)=>{
                console.log(response.data);
                setState({
                    ...state,
                    loading:false,
                    user:response.data
                });
            }).catch((error)=>{
                setState({
                    ...state,
                    loading:false,
                    errorMessage:error.message
                });
            });
        }
    },[id]);

    let {loading,user,errorMessage}=state;

    return (
        <React.Fragment>
            {Object.keys(user).length > 0 &&
            <div className="card">
  <div className="card-header">
    <h5 className="card-title">User Details</h5>
  </div>
  <div className="card-body">
    <h6 className="card-subtitle mb-2 text-muted">{state.user.name}</h6>
    <p className="card-text">
      <strong>Username:</strong>{state.user.name}<br />
      <strong>Email:</strong>{state.user.email}<br />
      <strong>Address:</strong><br />
      Street:{state.user.address.street}<br />
      Suite: {state.user.address.suite}<br />
      City: {state.user.address.city}<br />
      Zipcode: {state.user.address.zipcode}<br />
      Latitude:{state.user.address.geo.lat}<br />
      Longitude: {state.user.address.geo.lng}<br />
      <strong>Phone:</strong> {state.user.phone}<br />
      <strong>Website:</strong> {state.user.website}<br />
      <strong>Company:</strong><br />
      Name: {state.user.company.name}<br />
      Catch Phrase: {state.user.company.catchPhrase}<br />
      BS: {state.user.company.bs}
    </p>
    </div>
    </div>  }
  
        </React.Fragment>
    );
}

export default UserDetails;
