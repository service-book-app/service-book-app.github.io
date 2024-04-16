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

export const validateForm = (username, password, email, repeatPassword = null) => {
    let valid = true;

    if (!username || !password || !email || (repeatPassword != null && !repeatPassword)) {
        alert('Please, fill all fields.');
        valid = false;
    }

    if (repeatPassword != null && repeatPassword && password !== repeatPassword) {
        alert('Password don\'t match.');
        valid = false;
    }

    return valid;
};