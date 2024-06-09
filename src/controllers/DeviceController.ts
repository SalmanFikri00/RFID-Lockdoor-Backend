import { UserModel } from "../model/UserSchema"

const deviceController = async ( { body , store , set} : any ) => {
        
    const { key } = body
    
    if( store.daftar ){

        try{
            
            const savedUser = await UserModel.create({
                    RFID: key,
                    username: '',
                    status: true,
            })

            return({
                data: savedUser
            })
            
        }catch( e:any ){

            console.log(e)

            return({
                message: e
            })

        }
    }else{

        const userExist = await UserModel.findOne({ RFID: key})

        if( userExist ){
            return ({
                data: userExist
            })
        }else{
            set.status = 400
            return({
                message: 'user tidak ada',
            })
        }
    }
}

export { deviceController }