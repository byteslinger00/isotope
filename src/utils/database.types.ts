export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json }
    | Json[];
export type users = {
  created_at?: string;
  phone_number?: string;
  email?: string;
  provider?: string;
  is_disabled?: boolean;
};

export type subscriptions = {
    id: number;
    created_at: string;
    user_id: string;
    current_period_start: string;
    current_period_end: string;
    payment_method: number;
    status: number;
    token: string;
  };

export type notifications = {
    id: number;
    created_at: string;
    user_id: string;
    message: string;
    type: number;
    datetime: string;
    read: boolean;
}
export interface Database {
    public: {
        Tables: {
            users: {
                Row: users;
            },
            subscriptions: {
                Row: subscriptions;
            },
            notifications: {
                Row: subscriptions;
            }
        };
        Views: {
            [_ in never]: never;
        };
        Functions: {
            [_ in never]: never;
        };
        Enums: {
            [_ in never]: never;
        };
        CompositeTypes: {
            [_ in never]: never;
        };
    };
}
