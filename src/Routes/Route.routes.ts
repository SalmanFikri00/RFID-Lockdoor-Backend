import Elysia , { Handler, t } from "elysia";
import { UserModel } from "../model/UserSchema";
import { deviceController } from "../controllers/DeviceController";


const Route = new Elysia({ prefix : '/device'})
    .state( 'daftar' , false)
    .post( '/' , deviceController , {
        body: t.Object({
            key: t.String()
        })
    }) 
    


export default Route