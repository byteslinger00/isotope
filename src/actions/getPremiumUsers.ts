import { SubscriptionType } from "@/types";
import { convertToObject } from "typescript";


export default async function getPermiumUsers() {

    const response = await fetch("/api/dashboard/premium", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({

        }),
    })
    const data = await response.json();
    console.log(data.data);
    let now = new Date().toLocaleString();
    let first = new Date(data.data[0].current_period_end).toLocaleString();
    let count = 0;
    data.data.map((item: SubscriptionType) => {
        let first = new Date(item.current_period_end).toLocaleString();
        if(first >= now)
            count++;
    })
    return count;
    // setRegisteredUsers(3)
    // console.log(registerd_users);
}
