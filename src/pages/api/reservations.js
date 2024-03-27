export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    const { name, email, phone, people, date, time, message } = req.body;

    const formData = {
      name,
      email,
      phone,
      people,
      date,
      time,
      message,
    };

    const response = await fetch("https://httpbin.org/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      await response.json();
      res.status(200).json({ success: true });
    } else {
      res.status(response.status).json({ error: "Failed to submit form" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}
