import ProtonMail from 'protonmail-api';
import dotenv from 'dotenv';

dotenv.config();

export async function POST(request: Request) {
    const { name, email, message } = await request.json();

    const pm = await ProtonMail.connect({
        username: process.env.PROTONMAIL_USERNAME,
        password: process.env.PROTONMAIL_PASSWORD,
    });
    if (!pm) {
        console.error('Failed to connect to ProtonMail');
        return new Response('Failed to connect to ProtonMail', { status: 500 });
    }

    await pm.sendEmail({
        to: 'webform.tombelmans@proton.me',
        subject: 'Contact via homepagina',
        body: `From: ${name} <${email}>

Message:
${message}`,
    });

    pm.close();
    return new Response(JSON.stringify({ success: true }), { status: 200 });
}