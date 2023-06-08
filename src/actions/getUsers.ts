import useParticipantStore from "@/store/use-participant";
import { ProfileType } from "@/types";


export default async function getUsers() {

    const response = await fetch("/api/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({

        }),
    })
    const data = await response.json();
    let count = data.data.filter((item: ProfileType) => item.is_disabled === false).length;
    return { registered: data.data.length, active: count, premium: 1, online: 1, };
    // setRegisteredUsers(3)
    // console.log(registerd_users);
}
