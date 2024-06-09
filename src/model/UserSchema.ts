import { Document, Schema, model } from 'mongoose';

export interface IUser extends Document {
  username: string
  status: boolean
  RFID: string
}

const schema = new Schema<IUser>(
    {
      username: {
        type: String,
        required: false,
        unique: false,
      },
      status: {
        type: Boolean,
        required: false,
        unique: false,
      },
      RFID: {
        type: String,
        required: true,
        unique:true
      }
    },
    {
      timestamps: true,
    }
  );
  
const UserModel = model<IUser>('user', schema)

export { UserModel}