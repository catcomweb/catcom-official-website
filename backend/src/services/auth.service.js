import * as authModel from '../models/auth.model.js';

export const register = async (userData) => {
    validateUserData(userData, ['full_name','email', 'password', 'role']);
    return await authModel.register(userData);
};

export const login = async (credentials) => {
    validateUserData(credentials, ['email', 'password']);
    return await authModel.login(credentials);
};

export const refresh = async (refreshToken) => {
    if (!refreshToken) {
        throw new Error("No refresh token provided");
    }
    return await authModel.refreshToken(refreshToken);
};

const validateUserData = (data, requiredFields) => {
    if (!data) {
        throw new Error("No data provided");
    }
    const missing = requiredFields.filter(field => !data[field]);
    if (missing.length > 0) {
        throw new Error(`Missing required fields: ${missing.join(', ')}`);
    }
};
