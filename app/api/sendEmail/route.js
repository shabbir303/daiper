import { NextResponse } from "next/server";
import nodemailer from "nodemailer";


export async function POST(request) {
  try{
    const { name, address, phone, size } = await request.json();

  // Set up Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    secure:true,
    port:465, // Or another email provider
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Your email password or app-specific password
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "shabbirtanbir@gmail.com", // Replace with your email
    subject: "New Order Submission",
    text: `You have a new order:
    - Name: ${name}
    - Address: ${address}
    - Phone: ${phone}
    - Size: ${size}`,
  };

  await transporter.sendMail(mailOptions);
  return new NextResponse({message:"Message sent successfully"},{status:200})
  }
  catch(error){
    console.error(error);
    return new NextResponse.json({error: "Failed to send email"},{status:500})
  }
}
  

