# 🚀 QUICK START GUIDE

## ✅ Your Certificate Verification System is Ready!

The server is currently running at: **http://localhost:5000**

---

## 🔍 Test URLs (Click to Open)

### Valid Certificates:
- http://localhost:5000/internship/verify/certificate/validate/SKAPL2625147
- http://localhost:5000/internship/verify/certificate/validate/SKAPL2625286
- http://localhost:5000/internship/verify/certificate/validate/SKAPL2625394

### Invalid Certificate (Test Error Page):
- http://localhost:5000/internship/verify/certificate/validate/INVALID999

---

## 📋 Pre-loaded Test Data

| Certificate ID | Name          | Role           | Company                  |
|----------------|---------------|----------------|---------------------------|
| SKAPL2625147   | Niraj Shukla  | Web Developer  | SIDDHAKALA AUTOMATIONS   |
| SKAPL2625286   | Parag Shirke  | Web Developer  | SIDDHAKALA AUTOMATIONS   |
| SKAPL2625394   | Alok Singh    | Web Developer  | SIDDHAKALA AUTOMATIONS   |

---

## 🛠️ Server Commands

### Start Server:
```bash
npm start
```

### Start with Auto-reload (Dev mode):
```bash
npm run dev
```

### Stop Server:
Press `Ctrl + C` in the terminal

---

## 📡 API Testing with PowerShell

### Add New Certificate:
```powershell
$body = @{
    certificateId = "TEST2026"
    name = "John Doe"
    role = "Frontend Developer Intern"
    company = "Tech Solutions Inc"
    internshipType = "Virtual Internship"
    startDate = "01 February 2026"
    endDate = "28 February 2026"
    issueDate = "01 March 2026"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:5000/admin/certificate/add" -Method POST -Body $body -ContentType "application/json"
```

### Get All Certificates:
```powershell
Invoke-RestMethod -Uri "http://localhost:5000/admin/certificates" -Method GET
```

---

## 📁 Project Files

- **server.js** - Main application
- **config/db.js** - Database connection
- **models/Certificate.js** - Certificate schema
- **controllers/certificateController.js** - Business logic
- **routes/certificateRoutes.js** - API routes
- **views/verified.html** - Success page
- **views/notfound.html** - Error page
- **public/style.css** - Styling

---

## 🎯 What Works

✅ Certificate verification by ID  
✅ Beautiful verified page with intern details  
✅ Professional "not found" page  
✅ Loading animation (1 second)  
✅ Auto-seeded sample data  
✅ Admin API to add certificates  
✅ Admin API to view all certificates  
✅ Error handling for DB issues  
✅ Responsive mobile-friendly design  
✅ Print-friendly certificate pages  

---

## 🎨 Features Included

- **Professional UI**: Clean gradient design
- **Animated Icons**: SVG checkmark/cross animations
- **Status Badges**: Visual verification indicators
- **Timestamp**: Shows when certificate was verified
- **Company Logo**: Placeholder for company branding
- **Detailed Info**: All certificate data displayed
- **Error Pages**: User-friendly error messages
- **SEO Ready**: Proper meta tags and structure

---

## 📝 Next Steps (Optional)

1. **Add Authentication**: Secure admin routes with JWT
2. **Rate Limiting**: Prevent API abuse
3. **Email Notifications**: Send alerts on verification
4. **QR Code**: Generate QR codes for certificates
5. **PDF Export**: Allow downloading as PDF
6. **Analytics**: Track verification attempts
7. **Search Feature**: Search certificates by name/company
8. **Bulk Upload**: Import multiple certificates via CSV

---

## 🐛 Troubleshooting

**If MongoDB fails to connect:**
```bash
# Start MongoDB service
net start MongoDB
```

**If port 5000 is busy:**
- Change `PORT=5000` to `PORT=3000` in `.env` file

**To reset database:**
- Delete the database and restart server (will auto-seed again)

---

## 📞 Support

Check the **README.md** for detailed documentation.

---

**🎉 Your Certificate Verification System is now live and ready to use!**
