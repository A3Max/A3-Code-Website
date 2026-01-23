import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, message } = body;

    const errors: Record<string, string> = {};

    if (!name || typeof name !== 'string' || !name.trim()) {
      errors.name = 'Name is required';
    } else if (name.trim().length > 150) {
      errors.name = 'Name must be less than 150 characters';
    }

    if (!email || typeof email !== 'string' || !email.trim()) {
      errors.email = 'Work email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Please enter a valid email address';
    } else if (email.length > 254) {
      errors.email = 'Email must be less than 254 characters';
    }

    if (!company || typeof company !== 'string' || !company.trim()) {
      errors.company = 'Company is required';
    } else if (company.trim().length > 200) {
      errors.company = 'Company must be less than 200 characters';
    }

    if (!message || typeof message !== 'string' || !message.trim()) {
      errors.message = 'Message is required';
    } else if (message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    } else if (message.length > 5000) {
      errors.message = 'Message must be less than 5000 characters';
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ errors }, { status: 400 });
    }

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedCompany = company.trim();
    const trimmedMessage = message.trim();

    console.log('Contact Sales Form Submission:', {
      name: trimmedName,
      email: trimmedEmail,
      company: trimmedCompany,
      message: trimmedMessage,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ 
      success: true,
      message: 'Thank you for contacting sales. We will be in touch soon.'
    }, { status: 200 });

  } catch (error) {
    console.error('Contact Sales API Error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
