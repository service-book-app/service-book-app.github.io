export const getUserData = () => {
    return JSON.parse(sessionStorage.getItem('userData'));
};

export const setUserData = (userData) => {
    sessionStorage.setItem('userData', JSON.stringify(userData))
};