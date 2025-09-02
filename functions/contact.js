export default {
	async fetch(request) {
		if (request.method !== 'POST') {
			return new Response('Method not allowed', { status: 405 });
		}

		try {
			// Get form data from request
			const formData = await request.json();

			const send_request = new Request('https://api.mailchannels.net/tx/v1/send', {
				method: 'POST',
				headers: {
					'content-type': 'application/json',
				},
				body: JSON.stringify({
					personalizations: [
						{
							to: [{ email: 'nordine@rptu.de', name: 'Nordine' }],
						},
					],
					from: {
						email: 'no-reply@applethal.com',
						name: 'Workers - MailChannels integration',
					},
					subject: `Contact form: ${formData.name}`,
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
			return new Response('Error processing request', { status: 500 });
		}
	}
};
