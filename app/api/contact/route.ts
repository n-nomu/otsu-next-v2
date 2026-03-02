import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message, privacyAgreed } = await request.json();

    // バリデーション
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Required fields are missing' },
        { status: 400 }
      );
    }

    // GDPR同意チェック
    if (!privacyAgreed) {
      return NextResponse.json(
        { error: 'You must agree to the Privacy Policy to proceed' },
        { status: 400 }
      );
    }

    // メール送信
    const data = await resend.emails.send({
      from: '乙 otsu <info@otsu-japan.com>',
      to: ['otsu.2026@gmail.com'],
      subject: subject ? `[otsu-japan.com] ${subject}` : `[otsu-japan.com] Message from ${name}`,
      html: `
        <h2>New message from otsu-japan.com</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || 'Contact Form'}</p>
        <p><strong>GDPR Consent:</strong> Agreed</p>
        <hr/>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
      replyTo: email,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Resend error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}