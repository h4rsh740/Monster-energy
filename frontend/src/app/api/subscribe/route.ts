import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongoose';
import Subscriber from '@/models/Subscriber';

export async function POST(req: Request) {
    try {
        await dbConnect();
        const { email } = await req.json();

        const existing = await Subscriber.findOne({ email });
        if (existing) {
            return NextResponse.json({ message: 'Already subscribed!' }, { status: 400 });
        }

        await Subscriber.create({ email });
        return NextResponse.json({ message: 'Welcome to the Legion!' }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: 'Server error' }, { status: 500 });
    }
}
