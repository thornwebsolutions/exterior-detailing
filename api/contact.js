export default async function handler(req, res) {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(200).end();
  }

  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');

  const { firstName, lastName, email, phone, service, message, website } = req.body;

  // Honeypot check - if filled, it's likely a bot
  if (website) {
    return res.status(200).json({ success: true, message: 'Email sent successfully' });
  }

  const subject = 'New Quote Request - Exterior Detailing';
  const htmlContent = `
    <h2>New Quote Request</h2>
    <p><strong>Name:</strong> ${firstName} ${lastName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
    <p><strong>Service Interested In:</strong> ${service || 'Not specified'}</p>
    <p><strong>Message:</strong></p>
    <p>${message || 'No message provided'}</p>
  `;

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'onboarding@resend.dev',
        to: 'christopherthornn@gmail.com',
        subject: subject,
        html: htmlContent,
      }),
    });

    if (response.ok) {
      return res.status(200).json({ success: true, message: 'Email sent successfully' });
    } else {
      const error = await response.json();
      console.error('Resend error:', error);
      return res.status(500).json({ error: 'Failed to send email' });
    }
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
