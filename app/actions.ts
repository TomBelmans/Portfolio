"use server"

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name")
  const email = formData.get("email")
  const message = formData.get("message")

  const emailData = {
    to: "email",
    from: "tom.belmans@proton.me",
    subject: "Contact via homepagina",
    body: `${name} heeft het volgende bericht achtergelaten:\n\n${message}`,
  }

  const response = await fetch("/api/send-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(emailData),
  })

  if (!response.ok) {
    throw new Error("Failed to send email")
  }

  return response.json()
}
