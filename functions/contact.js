export async function onRequestPost(context) {
	try {
		// Get form data from request
		const formData = await context.request.json();

		const send_request = new Request('https://api.mailchannels.net/tx/v1/send', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify({
				personalizations: [
					{
						to: [{ email: 'test@example.com', name: 'Test Recipient' }],
					},
				],
				from: {
					email: 'sender@example.com',
					name: 'Contact Form',
				},
				subject: `Contact form submission from ${formData.name}`,
				content: [
					{
						type: 'text/plain',
						value: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
					},
				],
			}),
		});

		const response = await fetch(send_request);

		if (response.ok) {
			return new Response(null, {
				status: 302,
				headers: { Location: '/thank-you' },
			});
		} else {
			return new Response('Failed to send email', { status: 500 });
		}
	} catch (error) {
		return new Response(`Error: ${error.message}`, { status: 500 });
	}
}

// Handle GET requests (optional - returns method not allowed)
export async function onRequestGet() {
	return new Response('This endpoint only accepts POST requests', { status: 405 });
}
