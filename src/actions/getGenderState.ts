import { SubscriptionType } from "@/types";
import { profiles } from "@/utils/database.types";
import { convertToObject } from "typescript";


export default async function getGenderState() {

    const response = await fetch("/api/dashboard/gender", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({

        }),
    })
    
    if(response.ok === false)
        return 0;
    const data = await response.json();
    let male: number = 0;
    let female: number = 0;
    let transgender: number = 0;
    let nonbinary: number = 0;
    let thirdgender: number = 0;
    let genderneutral: number = 0;
    data.data.map((item: profiles) => {
        switch(item.gender)
        {
            case 'Male':
                male++;
                break;
            case 'Female':
                female++;
                break;
            case 'Transgender':
                transgender++;
                break;
            case 'Non-binary':
                nonbinary++;
                break;
            case 'Third gender':
                thirdgender++;
                break;
            case 'Gender neutral':
                genderneutral++;
                break;
            default: 
                break;
        }
    })
    return {male, female, transgender, nonbinary, thirdgender, genderneutral}    
}
