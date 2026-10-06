

import AppDataSource from "../config/database.js";
import { User } from "../models/user.entity.js";

const userRepository = AppDataSource.getRepository(User);

interface createUserData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    age: number | null;
}

export const createUser = async (data: createUserData) => {
    const user = userRepository.create(data);

    const savedUser = userRepository.save(user);

    return savedUser;
}