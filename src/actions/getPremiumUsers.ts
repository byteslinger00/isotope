import { SubscriptionType } from "@/types";

export default async function getPermiumUsers() {

    const response = await fetch("/api/dashboard/premium", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({

        }),
    })
    //const response = await fetch(`https://geocode.maps.co/reverse?lat=47.5951518&lon=-122.3316393`)
    
    if(response.ok === false)
        return 0;
        const data = await response.json();
    let now = new Date().getTime();
    let count = 0;
    data.data.map((item: SubscriptionType) => {
        let datetime = new Date(item.current_period_end).getTime();
        if(datetime >= now)
            count++;
    })
    return count;
    // setRegisteredUsers(3)
    // console.log(registerd_users);
}
