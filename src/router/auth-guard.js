const isAuthenticatedGuard = (to, from, next) => {
    return new Promise((resolve, reject) => {
        const random = Math.random() * 100;
        if (random > 50) {
            console.log('isAuthenticatedGuard: true');
            resolve(next());

        }
        else {
            console.log('isAuthenticatedGuard: false');
            reject(next({ name: 'pokemon-home' }));
        }

    });
}

export default isAuthenticatedGuard;