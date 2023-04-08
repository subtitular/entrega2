import { IUser } from "../models/IUser";


export class UserService{
    private static users:IUser[] =[
        {
            sno:'SAS011',
            username:'Jhon Connor',
            age:27,
            password:'',
            designation:'T1000 Killer',
            company	:'Rebels'
        },
        {
            sno:'SAS001',
            username:'Sarah Connor',
            age:36,
            password:'',
            designation:'Bad Ass Killer',
            company	:'Rebels'
        },
        {
            sno:'XDA001',
            username:'John Doe',
            age:27,
            password:'',
            designation:'Usual Victim',
            company	:'Nobodies'
        },
        {
            sno:'PEN001',
            username:'Oscar Peña',
            age:50,
            password:'',
            designation:'Casual Boys',
            company	:'Somebodies'
        },
        {
            sno:'PEN002',
            username:'Santiago Peña',
            age:21,
            password:'',
            designation:'Real Boys',
            company	:'The ones'
        }
    ];

    public static getAllUsers(){
        return this.users;
    }
}