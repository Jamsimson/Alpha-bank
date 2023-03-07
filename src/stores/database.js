import { defineStore } from "pinia";
export const alpha_database = defineStore({
    id: "counter",
    state: () => ({
        counter: 1,
        user: [
            {
                id: 1,
                email: "peter.p@gmail.com",
                phone: "099-123-4567",
                username: "Peter",
                password: "zxc123**",
                accounts: [
                    {
                        id: 1234567890,
                        acount_name: "Perter",
                        balance: 400000
                    },
                    {
                        id: 1098765432,
                        acount_name: "Perter W.",
                        balance: 200000
                    }
                ]
            },
            {
                id: 2,
                email: "minisong@gmail.com",
                phone: "099-234-4567",
                username: "Mini",
                password: "zxc123**",
                accounts: [
                    {
                        id: 1432789056,
                        acount_name: "Mini",
                        balance: 40000
                    },
                    {
                        id: 9496782134,
                        acount_name: "Mini W.",
                        balance: 200000
                    }
                ]
            },
        ],
    }),
    actions: {
        getDataById(id) {
            for (var i = 0; i < this.user.length; i++) {
                if (id === this.user[i].id) {
                    return this.user[i]
                }
            }
            return `not found`
        },
    },
});

