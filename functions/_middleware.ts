import mailchannelsPlugin from "@cloudflare/pages-plugin-mailchannels";

export const onRequest = mailchannelsPlugin({
	personalizations: [
		{
			to: [{ name: "Saad", email: "nordine@rptu.de" }],
		},
	],
	from: { name: "Enquiry", email: "noreply@applethal.com" },
	respondWith: () =>
	new Response(null, {
		status: 302,
		headers: { Location: "/thank-you" },
	}),
});
