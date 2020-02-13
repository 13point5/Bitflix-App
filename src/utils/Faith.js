const faith = promise => {
    return promise
        .then(data => {
            return [null, data];
        })
        .catch(err => [err]);
};

export default faith;
