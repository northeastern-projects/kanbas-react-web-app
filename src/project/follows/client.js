import axios from 'axios';
const request = axios.create({
	withCredentials: true
});

export const BASE_API = process.env.REACT_APP_BASE_API_URL;
const FOLLOWS_API = `${BASE_API}/api`;

export const findAllFollows = async () => {
	const response = await request.get(`${FOLLOWS_API}/follows`);
	return response.data;
};
export const createUserFollowsUser = async (followerId, followedId) => {
	const response = await request.post(`${FOLLOWS_API}/users/${followerId}/follows/${followedId}`);
	return response.data;
};
export const deleteUserFollowsUser = async (followerId, followedId) => {
	const response = await request.delete(`${FOLLOWS_API}/users/${followerId}/follows/${followedId}`);
	return response.data;
};
export const findUsersFollowedByUser = async (userId) => {
	const response = await request.get(`${FOLLOWS_API}/users/${userId}/following`);
	return response.data;
};
export const findUsersFollowingUser = async (userId) => {
	const response = await request.get(`${FOLLOWS_API}/users/${userId}/followers`);
	return response.data;
};
