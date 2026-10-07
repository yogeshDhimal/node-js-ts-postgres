

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

export const updateUser = async (id: number, data: Partial<User>) => {
    const user = await userRepository.findOne({
        where: {
            id
        }
    });

    if (!user) {
        return null;
    }

    const updateData = {
        ...data,
        ...(data.password && {
            password: await bcrypt.hash(data.password, 10)
        })
    };

    Object.assign(user, updateData); // data ko properties lai user ma copy garne

    const updatedUser = await userRepository.save(user);

    return updatedUser;
}

export const deleteUser = async (id: number) => {
    const user = await userRepository.findOne({
        where: {
            id
        }
    });

    if (!user) {
        return null;
    }

    await userRepository.remove(user);

    return user;
};