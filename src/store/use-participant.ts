import { create } from 'zustand'
import { user_state } from '@/utils/database.types';

type ProfileKey = "firstName" | "lastName" | "initials" | "org" | "norm" | "createdAt";


export interface ParticipantState {
    registerd_users: number,
    active_users: number,
    premium_users: number,
    online_users: number,
    users_state: Array<user_state>,
    gender_state: Array<user_state>,
    setRegisteredUsers: (value: number) => void,
    setActiveUsers: (value: number) => void,
    setPremiumUsers: (value: number) => void,
    setOnlineUsers: (value: number) => void,
    setUserState: (valuue: Array<user_state>) => void,
    setGenderState: (valuue: Array<user_state>) => void,
}
const data = [
    { name: "New York", value: 230 },
    { name: "Oregon", value: 80 },
    { name: "Texas", value: 50 },
    { name: "Ohio", value: 40 },
    { name: "Ohio", value: 40 },
  ];
const useParticipantStore = create<ParticipantState>((set) => ({
    registerd_users: 0,
    active_users: 0,
    premium_users: 0,
    online_users: 0,
    users_state: [],
    gender_state: [],
    setRegisteredUsers: (value: number) => set((state) => ({ registerd_users: value })),
    setActiveUsers: (value: number) => set((state) => ({ active_users: value })),
    setPremiumUsers: (value: number) => set((state) => ({ premium_users: value })),
    setOnlineUsers: (value: number) => set((state) => ({ online_users: value })),
    setUserState: (value: Array<user_state>) => set((state) => ({ users_state: value })),
    setGenderState: (value: Array<user_state>) => set((state) => ({ gender_state: value })),
    initiateStore: () => set((state) => {
        return {
            registerd_users: 0,
            active_users: 0,
            premium_users: 0,
            online_users: 0,
        }
    }),
}));

export default useParticipantStore;