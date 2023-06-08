// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs';
import type { NextApiRequest, NextApiResponse } from 'next'

const SERVER_ERR_MSG = "Something went wrong in a server.";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const supabase = createPagesBrowserClient();
    
    const { data, error } = await supabase.auth.signInWithPassword({
      email: req.body.email,
      password: req.body.old_password,
    });
    if(!error)
    {
        res.status(200).json({ data: 'success' });
    }
    else res.status(500).json({ data: SERVER_ERR_MSG });
}
