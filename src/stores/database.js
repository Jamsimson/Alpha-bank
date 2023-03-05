import { defineStore } from "pinia";
export const alpha_database = defineStore({
    id: "counter",
    state: () => ({
        counter: 1,
        user: [
            {
                id: 1,
                email: "peter.p@gmail.com",
                username: "Peter",
                password: "zxc123**"
            },
            {
                id: 2,
                email: "minisong@gmail.com",
                username: "Mini",
                password: "zxc123**"
            },
        ],
        account: [
            {
                id: 1,
                acount_name: "Perter",
                balance: 400000
            },
            {
                id: 1,
                acount_name: "Perter W.",
                balance: 200000
            }
        ]
    }),
    actions: {
    },
});

