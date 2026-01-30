import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongoose';
import News from '@/models/News';

export async function GET() {
    try {
        await dbConnect();
        const news = await News.find({});
        return NextResponse.json(news);
    } catch (error) {
        return NextResponse.json({ message: 'Error fetching news' }, { status: 500 });
    }
}
