import { UserModel } from "../model/UserSchema"

const deviceController = async ( { body , store , set} : any ) => {
        
    const { key } = body

    console.log(key)
    
    if( store.daftar ){

        try{
            const cou = await UserModel.countDocuments()
            
            const name = `User ${cou}--`

            const savedUser = await UserModel.create({
                    RFID: key,
                    username: name,
                    status: true,
            })

            set.status = 201

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

        if( userExist && userExist.status ){
            return ({
                data: userExist
            })
        }else{
            set.status = 400
            return({
                message: 'gagal',
            })
        }
    }
}

export { deviceController }