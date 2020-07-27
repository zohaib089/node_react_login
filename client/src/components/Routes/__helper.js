export const isLogin = () => {
       var token = localStorage.getItem('token')
    if (token) {
        return true;
    }

    return false;
}

export const logout = () => {
    localStorage.removeItem('token');
}



