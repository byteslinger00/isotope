import { NumberLiteralType } from "typescript";

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
export type profiles = {
  name?: string;
  photos?: string;
  birthday?: string;
  zodiac_visibility?: boolean;
  created_at?: string;
  i_am_here_to?: string;
  spotify_songs?: string;
  tiktok?: string;
  meme?: string;
  movie?: string;
  gender?: string;
};

export type xprofiles = profiles & {
  lname?: string;
  age?: number;
  city?: string;
  state?: string;
  country?: string;
  up_date?: string;
  up_time?: string;
  in_date?: string;
  in_time?: string;
  status?: boolean;
  phone_number?: string;
  email?: string;
  reported?: boolean;
  stories?: string;
  dating_fr?: string;
  [key: string]: any;
}

export type status = {
  uid: string;
  created_at: string;
  latitude: number;
  longitude: number;
  address: string;
  is_online: boolean;
}

export type user_state = {
  name:string | '';
  value: number | 0;
}

export interface Database {
  public: {
    Tables: {
      users: {
        Row: users;
      };
      profiles: {
        Row: profiles;
      };
      subscriptions: {
        Row: subscriptions;
      }
      status: {
        Row: status;
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
