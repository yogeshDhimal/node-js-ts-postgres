

import AppDataSource from "../config/database.js";
import { User } from "../models/user.entity.js";
import bcrypt from "bcrypt";

const userRepository = AppDataSource.getRepository(User);

interface CreateUserData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    age: number | null;
}

export const createUser = async (data: CreateUserData) => {
    const hashedPassword = await bcrypt.hash(data.password, 10);

    const user = userRepository.create({
        ...data,
        password: hashedPassword
    });

    const savedUser = await userRepository.save(user);

    return savedUser;
};

export const getAllUsers = async () => {
    const users = await userRepository.find();

    return users;
};

export const getSingleUser = async (id: number) => {
    const user = await userRepository.findOne({
        where: {
            id
        }
    });

    return user;
};