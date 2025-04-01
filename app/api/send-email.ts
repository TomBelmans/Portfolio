import { NextApiRequest, NextApiResponse } from "next"
import Mailjet from "node-mailjet"

const mailjetClient = new Mailjet({
    apiKey: 'c1d74c944847fb1482c10e37d5f46afa',
    apiSecret: '515eb01dedd2e26926d59e17b8b6cf06'
})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        const { to, from, subject, body } = req.body

        const request = mailjetClient.post("send", { version: "v3.1" }).request({
            "Messages":[
                {
                    "From": {
                        "Email": from,
                        "Name": "Mailjet Pilot"
                    },
                    "To": [
                        {
                            "Email": to,
                            "Name": "Recipient"
                        }
                    ],
                    "Subject": subject,
                    "TextPart": body,
                    "HTMLPart": `<p>${body}</p>`
                }
            ]
        })

        try {
            const result = await request
            res.status(200).json({ message: "Email sent successfully", result: result.body })
        } catch (error) {
            res.status(500).json({ error: "Failed to send email", details: (error as Error).message })
        }
    } else {
        res.status(405).json({ error: "Method not allowed" })
    }
}