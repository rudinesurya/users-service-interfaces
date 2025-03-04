import { Document } from 'mongoose';

export interface IUser extends Document {
    email: string;
    password: string;
    compareEncryptedPassword: (password: string) => boolean;
    getEncryptedPassword: (password: string) => string;

    // User Profile
    name?: string;
    handle?: string;
    bio?: string;
    avatar_uri?: string;

    // User Settings
    theme?: string;
}