import bcrypt from 'bcryptjs';

export function passwordValidationHelper(candidatePassword: string, validPasswordHash: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
        bcrypt.compare(candidatePassword, validPasswordHash, (error, isMatch) => {
            if (error) reject(error);

            resolve(isMatch);
        });
    });
}
