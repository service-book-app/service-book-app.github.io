export const getUserData = () => {
    return JSON.parse(sessionStorage.getItem('userData'));
};

export const setUserData = (userData) => {
    sessionStorage.setItem('userData', JSON.stringify(userData))
};

export const onSubmitHandler = (ctx, handler) => {
    return function (e) {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target));
        handler(ctx, data, e);
    }
};