import z from "zod";


export const userSchema = z.object({
    _id: z
        .string()
        .optional(),
    firstName: z.string().min(2).max(20),
    secondName: z.string().max(20).optional(),
    firstLastName: z.string().min(2).max(20),
    secondLastName: z.string().max(20).optional(),
    email: z.string().email().refine(
        (val) => {
            const correctDomains = ['gmail.com','umes.org']
            const domain = val.split('@')[1]
            return correctDomains.includes(domain);
        },
        {
            message: "The email not is: 'gmail.com' o 'umes.org'"
        }
    ),
    role: z.string(),
    password: z.string().min(8),
    games: z.array(z.string()),
    dateBirthday: z.string().min(1,'The dateBirthday is requered'),
    active: z.boolean()
})