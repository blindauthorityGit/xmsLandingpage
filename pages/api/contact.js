const nodemailer = require("nodemailer");

const sendEmail = async (to, subject, html, email) => {
    console.log(process.env.NEXT_DEV, process.env.NEXT_DEV == "true");
    console.log(process.env.NEXT_GMAIL_PASSWORD, process.env.NEXT_PASSWORD_PIZ);
    try {
        // create a transporter object
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465, // Use the SSL port
            auth: {
                user: process.env.NEXT_USER, // Your Gmail email address
                pass: process.env.NEXT_GMAIL_PASSWORD, // App Password you generated for your Gmail account
            },
        });

        // send the email
        await transporter.sendMail({
            from: process.env.NEXT_DEV == "true" ? "johabuch@gmail.com" : "office@baeckerin.at",
            to,
            replyTo: email,
            subject,
            html,
        });

        console.log("Email sent successfully");
    } catch (error) {
        console.log("Error sending email: ", error);
    }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
    const { firstName, name, email, message } = req.body;

    if (!firstName) {
        // construct the html message
        const html = `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Nachricht:<br/></strong> ${message.replace(/\n/g, "<br>")}</p>
        `;

        // send the email
        await sendEmail("contact@sabocon.com", `Email XMS Donate von ${name}`, html, email);

        // return success response
        res.status(200).json(req.body);
    } else {
        // return error response
        res.status(403).json({ error: "First name is required" });
    }
};
