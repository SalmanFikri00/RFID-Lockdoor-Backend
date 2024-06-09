import Elysia , { Handler, t } from "elysia";
import { UserModel } from "../model/UserSchema";
import { deviceController } from "../controllers/DeviceController";
import { editUser, getAllUser, getDaftar, setDaftar, ubahStatusUser } from "../controllers/BackendController";


const Route = new Elysia({ prefix : '/v1'})
    .state( 'daftar' , false )
    .post( '/device' , deviceController , {
        body: t.Object({
            key: t.String()
        })
    })
    .post( '/mode' , setDaftar)
    .get( '/mode' , getDaftar )
    .patch( '/status' , ubahStatusUser)
    .get( '/user' , getAllUser )
    .put( '/user' , editUser)


export default Route