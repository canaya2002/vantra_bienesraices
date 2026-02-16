import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    // Placeholder: In production, connect to CRM, send email, save to DB, etc.
    console.log('New lead received:', body);
    return NextResponse.json({ success: true, message: 'Lead recibido correctamente.' });
  } catch {
    return NextResponse.json({ success: false, message: 'Error al procesar la solicitud.' }, { status: 400 });
  }
}
