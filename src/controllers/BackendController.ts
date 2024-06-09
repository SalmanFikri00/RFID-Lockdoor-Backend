import { UserModel } from "../model/UserSchema"

const setDaftar = ( { store } : any) => {

    store.daftar = !store.daftar

    return({
        message: store.daftar
    })

}

const getDaftar = ( {store} : any ) => {

    return({
        data : store.daftar
    })
}

const ubahStatusUser = async ({ store ,body } : any ) => {

    const { key } = body

    const User = await UserModel.findOne({ RFID: key });
 
    if( !User ){
        return ({
            message: 'user gada'
        })
    }

    User.status = !User.status
    await User.save()

    return ({
        data: User
    })

}

const getAllUser = async () => {

    const allUser = await UserModel.find()

    return({
        data: allUser
    })
}

const editUser = async ({ body }: { body: any }) => {
    try {
      const { key, username } = body;
  
      // Menunggu hasil dari query findOne
      const user = await UserModel.findOne({ RFID: key });
  
      // Pemeriksaan null untuk memastikan user ditemukan
      if (!user) {
        return ({
            message: 'uset gada'
        })
    }
  
      // Mengubah username user
      user.username = username;
      await user.save();
  
      // Mengembalikan respons dengan data user yang diperbarui
      return ({
        message : 'berhasil',
        data : user
      })
    } catch (error) {
      console.error(error)
      return ({ message: 'An error occurred', error })
    }
  };

export { setDaftar , getDaftar , ubahStatusUser , getAllUser , editUser }