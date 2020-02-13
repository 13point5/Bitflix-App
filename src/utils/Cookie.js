const Cookie = {
    get: key => {
        const values = document.cookie.indexOf(key);
        return values !== -1;
    },

    set: (key, val) => {
        const now = new Date();
        now.setHours(now.getHours() + 24 * 365 * 2);
        let cookie = `${key}=${val}; expires=${now.toGMTString()}; path=/`;
        document.cookie = cookie;
    },

    delete: key => {
        document.cookie = `${key}= ; expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
    }
};

export default Cookie;
