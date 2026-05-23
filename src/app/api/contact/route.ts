import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    // Validate inputs
    if (!name || typeof name !== 'string' || !name.trim()) {
      return NextResponse.json({ success: false, error: 'Name is required' }, { status: 400 });
    }
    if (!phone || typeof phone !== 'string' || !phone.trim()) {
      return NextResponse.json({ success: false, error: 'Phone number is required' }, { status: 400 });
    }

    const recipient = 'sales@primesteelksa.com';
    const subject = `New Quote Inquiry: ${name}`;

    // Read SMTP settings
    const host = process.env.SMTP_HOST;
    const port = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 587;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASSWORD;
    const from = process.env.SMTP_FROM || '"PrimeSteel KSA" <noreply@primesteelksa.com>';

    // Check if SMTP is configured
    if (!host || !user || !pass) {
      console.warn('--------------------------------------------------');
      console.warn('⚠️ SMTP CREDENTIALS NOT SET IN ENVIRONMENT VARIABLES');
      console.warn('CONTACT FORM INQUIRY RECEIVED (SIMULATED):');
      console.warn(`Name: ${name}`);
      console.warn(`Phone: ${phone}`);
      console.warn(`Email: ${email || 'Not Provided'}`);
      console.warn(`Message: ${message || 'None'}`);
      console.warn('To enable real email delivery, configure SMTP credentials in .env.local');
      console.warn('--------------------------------------------------');

      return NextResponse.json({
        success: true,
        message: 'Inquiry received successfully (simulation mode).'
      });
    }

    // SMTP configuration present, create transporter
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465, // true for 465, false for other ports
      auth: {
        user,
        pass,
      },
    });

    // Style a beautiful HTML email
    const mailOptions = {
      from,
      to: recipient,
      subject,
      text: `
New Contact / Quote Inquiry received from PrimeSteel KSA:

Name: ${name}
Phone: ${phone}
Email: ${email || 'Not provided'}
Message:
${message || 'No message provided.'}
      `,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body {
              font-family: Arial, sans-serif;
              color: #1f2937;
              background-color: #f3f4f6;
              padding: 20px;
              margin: 0;
            }
            .container {
              max-width: 600px;
              background-color: #ffffff;
              border: 1px solid #e5e7eb;
              border-radius: 12px;
              overflow: hidden;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
              margin: 0 auto;
            }
            .header {
              background-color: #006C35;
              padding: 24px;
              text-align: center;
            }
            .header h1 {
              color: #ffffff;
              margin: 0;
              font-size: 20px;
              font-weight: bold;
              letter-spacing: 0.5px;
            }
            .content {
              padding: 24px;
            }
            .field {
              margin-bottom: 16px;
            }
            .label {
              font-size: 11px;
              font-weight: bold;
              color: #9ca3af;
              text-transform: uppercase;
              letter-spacing: 1px;
              margin-bottom: 4px;
            }
            .value {
              font-size: 15px;
              color: #1f2937;
              font-weight: 500;
            }
            .message-box {
              background-color: #f9fafb;
              border: 1px solid #f3f4f6;
              border-radius: 8px;
              padding: 16px;
              font-size: 14px;
              line-height: 1.5;
              color: #4b5563;
              white-space: pre-wrap;
              margin-top: 8px;
            }
            .footer {
              background-color: #f9fafb;
              padding: 16px;
              text-align: center;
              border-top: 1px solid #f3f4f6;
              font-size: 12px;
              color: #9ca3af;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>PrimeSteel KSA — Technical Inquiry</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">Phone Number</div>
                <div class="value">${phone}</div>
              </div>
              <div class="field">
                <div class="label">Email Address</div>
                <div class="value">${email || '<span style="color: #9ca3af; font-style: italic;">Not Provided</span>'}</div>
              </div>
              <div class="field">
                <div class="label">Message / Details</div>
                <div class="message-box">${message ? message.replace(/\n/g, '<br>') : '<span style="color: #9ca3af; font-style: italic;">No message details provided.</span>'}</div>
              </div>
            </div>
            <div class="footer">
              This email was generated automatically by the PrimeSteel KSA contact form.
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Inquiry email sent successfully.' });
  } catch (error: any) {
    console.error('Error sending contact form email:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error while sending email.' },
      { status: 500 }
    );
  }
}
