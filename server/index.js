const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const multer = require('multer');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure multer for handling form data
const upload = multer();

// Create nodemailer transporter
const createTransporter = () => {
  return nodemailer.createTransporter({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.GMAIL_USER, // Your Gmail address
      pass: process.env.GMAIL_PASSWORD // Your Gmail app password
    },
    tls: {
      rejectUnauthorized: false
    }
  });
};

// Email sending endpoint
app.post('/api/send-enquiry', upload.none(), async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      company,
      productName,
      productType,
      productImage,
      quantity,
      message
    } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !productName) {
      return res.status(400).json({
        success: false,
        message: 'Please fill in all required fields'
      });
    }

    const transporter = createTransporter();

    // Enhanced email content with better formatting and product image
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.RECIPIENT_EMAIL || process.env.GMAIL_USER,
      subject: `Product Enquiry: ${productName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto; background-color: #f9f9f9; padding: 20px;">
          <h2 style="color: #1e40af; border-bottom: 2px solid #1e40af; padding-bottom: 10px;">
            🔔 New Product Enquiry - Shree Enterprises
          </h2>
          
          <div style="background-color: #ffffff; padding: 25px; border-radius: 12px; margin: 20px 0; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h3 style="color: #374151; margin-top: 0; font-size: 18px;">📦 Product Details</h3>
            
            ${productImage ? `
              <div style="text-align: center; margin: 20px 0;">
                <img src="${productImage}" alt="${productName}" 
                     style="max-width: 250px; height: auto; border-radius: 8px; border: 2px solid #e5e7eb; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
              </div>
            ` : ''}
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; font-weight: bold; color: #4b5563; width: 40%;">Product Name:</td>
                <td style="padding: 12px 0; color: #1f2937; font-weight: 600;">${productName}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; font-weight: bold; color: #4b5563;">Product Type:</td>
                <td style="padding: 12px 0; color: #1f2937;">${productType || 'N/A'}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; font-weight: bold; color: #4b5563;">Required Quantity:</td>
                <td style="padding: 12px 0; color: #1f2937; font-weight: 500;">${quantity || 'Not specified'}</td>
              </tr>
            </table>
          </div>

          <div style="background-color: #ffffff; padding: 25px; border-radius: 12px; margin: 20px 0; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h3 style="color: #374151; margin-top: 0; font-size: 18px;">👤 Customer Information</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; font-weight: bold; color: #4b5563; width: 30%;">Name:</td>
                <td style="padding: 12px 0; color: #1f2937; font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; font-weight: bold; color: #4b5563;">Email:</td>
                <td style="padding: 12px 0; color: #1f2937;"><a href="mailto:${email}" style="color: #1e40af; text-decoration: none;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px 0; font-weight: bold; color: #4b5563;">Phone:</td>
                <td style="padding: 12px 0; color: #1f2937;"><a href="tel:${phone}" style="color: #1e40af; text-decoration: none;">${phone}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px 0; font-weight: bold; color: #4b5563;">Company:</td>
                <td style="padding: 12px 0; color: #1f2937;">${company || 'Not provided'}</td>
              </tr>
            </table>
          </div>

          ${message ? `
          <div style="background-color: #ffffff; padding: 25px; border-radius: 12px; margin: 20px 0; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h3 style="color: #374151; margin-top: 0; font-size: 18px;">💬 Additional Requirements</h3>
            <div style="background-color: #f8fafc; padding: 15px; border-radius: 8px; border-left: 4px solid #1e40af;">
              <p style="color: #1f2937; line-height: 1.6; margin: 0;">${message}</p>
            </div>
          </div>
          ` : ''}

          <div style="background-color: #1e40af; color: white; padding: 20px; border-radius: 12px; margin: 20px 0; text-align: center;">
            <h3 style="margin: 0 0 10px 0; font-size: 16px;">📧 Quick Actions</h3>
            <p style="margin: 10px 0;">
              <a href="mailto:${email}" style="background-color: #ffffff; color: #1e40af; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-weight: bold; display: inline-block; margin: 5px;">
                📧 Reply to Customer
              </a>
              <a href="tel:${phone}" style="background-color: #10b981; color: white; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-weight: bold; display: inline-block; margin: 5px;">
                📞 Call Customer
              </a>
            </p>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #e5e7eb; text-align: center; color: #6b7280;">
            <p style="margin: 5px 0;">🌐 This enquiry was sent from <strong>Shree Enterprises</strong> website</p>
            <p style="margin: 5px 0;">📅 Received on: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
            <p style="margin: 5px 0;">⚡ Please respond promptly to maintain customer satisfaction</p>
          </div>
        </div>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.json({
      success: true,
      message: 'Thank you for your enquiry! We have received your request and will contact you within 24 hours.'
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({
      success: false,
      message: 'Sorry, there was an error sending your enquiry. Please try again or contact us directly.'
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});