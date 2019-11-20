import bcrypt from 'bcryptjs';

export function passwordHashHelper(password: string): Promise<string> {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(10, (err, salt) => {
            if (err) reject(err);

            bcrypt.hash(password, salt, (error, hash) => {
                if (error) reject(error);

                resolve(hash);
            })
        })
    });
}
