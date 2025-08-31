import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3001/'
});

export const usersAPI = {
    getUsers(type) {
        return instance.get(`subscribers?type=${type}`);
    },
    /*follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },*/
    getProfile(id) {
        return profileAPI.getProfile(id);
    },
    getMessages() {
        return instance.get('messages');
    },
    getId(login) {
        return instance.get(`getUserId/${login}`)
    }
};

export const profileAPI = {
    getProfile(id) {
        return instance.get(`profile/${id}`);
    },
    updateProfile(id, surname, name, city, profession, email, vk, telegram, about) {
        return instance.put(`editUser/${id}`, {surname, name, city, profession, email, vk, telegram, about});
    },
    savePhoto(photoFile, id) {
        const data = new FormData();
        data.append('avatar', photoFile);

        return instance.put(`editProfilePhoto/${id}`, data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    /*getStatus(userId) {
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status: status });
    },
    saveProfile(profile) {
        return instance.put(`profile`, profile );
    }*/
};

export const postsAPI = {
    getPosts() {
        return instance.get('posts');
    }
};

export const authAPI = {
    registration(login, password) {
        return instance.post('register', {login, password});
    },

    login(login, password) {
        return instance.post('login', {login, password});
    }
};