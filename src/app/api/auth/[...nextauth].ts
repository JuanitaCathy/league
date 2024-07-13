import NextAuth from 'next-auth';
import authOptions from '@/lib/auth';
import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, authOptions);
