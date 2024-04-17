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

export const validateForm = (username, password, repeatPassword = null) => {
    let valid = true;
    const alertP = document.getElementsByClassName('alert')[0];

    if (!username || !password || (repeatPassword != null && !repeatPassword)) {
        alertP.textContent = 'Please, fill all fields.';
        valid = false;
    }

    if (repeatPassword != null && repeatPassword && password !== repeatPassword) {
        alertP.textContent = 'Password don\'t match.';
        valid = false;
    }

    return valid;
};