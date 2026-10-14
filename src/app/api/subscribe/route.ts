import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);

    if (!body) {
      return NextResponse.json(
        { error: 'Invalid request body' },
        { status: 400 }
      );
    }

    const { name, email } = body;

    // Validate email
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'A valid email address is required.' },
        { status: 400 }
      );
    }

    const trimmedEmail = email.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    const apiKey = process.env.MAILERLITE_API_KEY;

    if (!apiKey) {
      console.error('MAILERLITE_API_KEY is missing from environment variables');
      return NextResponse.json(
        { error: 'Newsletter service configuration missing. Please configure MAILERLITE_API_KEY.' },
        { status: 500 }
      );
    }

    // Format payload for MailerLite Subscribers API (connect.mailerlite.com)
    const payload: Record<string, any> = {
      email: trimmedEmail,
      status: 'active',
    };

    const trimmedName = typeof name === 'string' ? name.trim() : '';
    if (trimmedName) {
      payload.fields = {
        name: trimmedName,
      };
    }

    // Optional MailerLite Group ID
    const groupId = process.env.MAILERLITE_GROUP_ID;
    if (groupId) {
      payload.groups = [groupId];
    }

    const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json().catch(() => null);

    if (!response.ok) {
      console.error('MailerLite API error:', { status: response.status, data });
      const errorMessage =
        data?.message ||
        (data?.errors ? Object.values(data.errors).flat().join(', ') : null) ||
        'Failed to subscribe to the newsletter.';
      return NextResponse.json(
        { error: errorMessage },
        { status: response.status }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed to the newsletter!',
      data,
    });
  } catch (error: any) {
    console.error('API Route /api/subscribe error:', error);
    return NextResponse.json(
      { error: error?.message || 'An unexpected server error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}
