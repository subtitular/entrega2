import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IUser } from "../models/IUser";
import { UserService } from "../services/UserService";
import { FaUserCheck } from 'react-icons/fa';

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
                <h5 className="card-title h3 fw-bold text-success"><FaUserCheck/> Usuario</h5>
                </div>
                <div className="card-body">
                <h6 className="card-subtitle mb-2 text-muted">{state.user.name}</h6>
                <p className="card-text">
                    <strong>Usuario:</strong>{state.user.name}<br />
                    <strong>Correo:</strong>{state.user.email}<br />
                    <strong>Domicilio:</strong><br />
                    Dirección:{state.user.address.street}<br />
                    Casa: {state.user.address.suite}<br />
                    Ciudad: {state.user.address.city}<br />
                    Zip: {state.user.address.zipcode}<br />
                    Latitud:{state.user.address.geo.lat}<br />
                    Longitud: {state.user.address.geo.lng}<br />
                    <strong>Telefono:</strong> {state.user.phone}<br />
                    <strong>Website:</strong> {state.user.website}<br />
                    <strong>Compañia:</strong><br />
                    Nombre: {state.user.company.name}<br />
                    Slogan: {state.user.company.catchPhrase}<br />
                    Actividad: {state.user.company.bs}
                </p>
                </div>
    </div>  }
  
        </React.Fragment>
    );
}

export default UserDetails;