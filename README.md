# 🎓 Certificate Verification System

A complete Node.js + Express + MongoDB system for verifying internship certificates.

## 📁 Project Structure

```
certificate-verification/
│── server.js                    # Main application entry point
│── package.json                 # Dependencies and scripts
│── .env                         # Environment variables
│── config/
│   └── db.js                    # MongoDB connection config
│── models/
│   └── Certificate.js           # Certificate schema
│── routes/
│   └── certificateRoutes.js     # API routes
│── controllers/
│   └── certificateController.js # Business logic
│── views/
│   ├── verified.html            # Success page
│   └── notfound.html            # Error page
│── public/
│   └── style.css                # Styling
```

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment

Edit the `.env` file with your MongoDB connection string:

```env
MONGODB_URI=mongodb://localhost:27017/certificate_verification
PORT=5000
NODE_ENV=development
```

### 3. Start MongoDB

Make sure MongoDB is running on your system:

```bash
# For Windows (if installed as service)
net start MongoDB

# For Linux/Mac
sudo systemctl start mongod
```

### 4. Run the Server

```bash
npm start
```

Or for development with auto-reload:

```bash
npm run dev
```

## 🔍 Testing the System

### Pre-loaded Test Certificates

The system automatically seeds the database with 5 sample certificates on first run:

1. **SK2626856** - Rahul Kumar (Full Stack Developer)
2. **AP2024001** - Priya Sharma (Web Development)
3. **DM2025789** - Amit Patel (Data Science)
4. **UI2025456** - Sneha Reddy (UI/UX Design)
5. **ML2026123** - Arjun Singh (Machine Learning)

### Test URLs

Open these URLs in your browser:

**Valid Certificate:**
```
http://localhost:5000/internship/verify/certificate/validate/SK2626856
```

**Invalid Certificate:**
```
http://localhost:5000/internship/verify/certificate/validate/INVALID123
```

**Home Page:**
```
http://localhost:5000
```

## 📡 API Endpoints

### 1. Verify Certificate (Public)

**GET** `/internship/verify/certificate/validate/:certificateId`

Returns HTML page with certificate details if valid, or error page if not found.

**Example:**
```
GET http://localhost:5000/internship/verify/certificate/validate/SK2626856
```

---

### 2. Add Certificate (Admin)

**POST** `/admin/certificate/add`

**Request Body:**
```json
{
  "certificateId": "TEST123",
  "name": "John Doe",
  "role": "Software Developer Intern",
  "company": "Tech Corp",
  "internshipType": "Virtual Internship",
  "startDate": "01 January 2026",
  "endDate": "31 January 2026",
  "issueDate": "01 February 2026",
  "status": "Verified"
}
```

**Test with cURL:**
```bash
curl -X POST http://localhost:5000/admin/certificate/add \
  -H "Content-Type: application/json" \
  -d '{
    "certificateId": "TEST123",
    "name": "John Doe",
    "role": "Software Developer Intern",
    "company": "Tech Corp",
    "internshipType": "Virtual Internship",
    "startDate": "01 January 2026",
    "endDate": "31 January 2026",
    "issueDate": "01 February 2026"
  }'
```

---

### 3. Get All Certificates (Admin)

**GET** `/admin/certificates`

Returns JSON list of all certificates.

**Example:**
```
GET http://localhost:5000/admin/certificates
```

## 🎨 Features

✅ **Professional UI** - Clean, modern design with gradient backgrounds  
✅ **Loading Animation** - 1-second loader for better UX  
✅ **Responsive Design** - Works on mobile, tablet, and desktop  
✅ **Auto-Seeding** - Sample data loads automatically  
✅ **Error Handling** - Friendly error messages  
✅ **Status Badges** - Visual indicators for verification status  
✅ **Animated Icons** - Smooth SVG animations for checkmark/cross  
✅ **Print-Friendly** - Optimized for printing certificates  

## 🛠️ Tech Stack

- **Backend:** Node.js v18+
- **Framework:** Express.js 4.x
- **Database:** MongoDB 6.x
- **ODM:** Mongoose 8.x
- **Environment:** dotenv
- **Frontend:** HTML5 + CSS3

## 📦 Database Schema

```javascript
{
  certificateId: String (unique, required, uppercase),
  name: String (required),
  role: String (required),
  company: String (required),
  internshipType: String (enum: ['Virtual Internship', 'Internship']),
  startDate: String (required),
  endDate: String (required),
  issueDate: String (required),
  status: String (default: 'Verified'),
  timestamps: true
}
```

## 🔒 Security Notes

⚠️ **Important:** The admin routes (`/admin/*`) are currently public. In production:

1. Add authentication middleware
2. Implement JWT tokens or session-based auth
3. Add rate limiting
4. Use HTTPS
5. Add CORS configuration
6. Validate and sanitize all inputs

## 🐛 Troubleshooting

### MongoDB Connection Error

If you see "MongoDB connection error":

1. Ensure MongoDB is running: `mongod --version`
2. Check connection string in `.env`
3. Verify MongoDB is listening on port 27017

### Port Already in Use

If port 5000 is busy:

1. Change `PORT` in `.env` to another port (e.g., 3000)
2. Or kill the process: `taskkill /F /IM node.exe` (Windows)

### Dependencies Not Installing

```bash
# Clear npm cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

## 📝 License

ISC

## 👨‍💻 Development

For development with auto-reload:

```bash
npm install -g nodemon
npm run dev
```

## 🚀 Deployment

For production deployment:

1. Set `NODE_ENV=production` in `.env`
2. Use a production MongoDB instance (MongoDB Atlas recommended)
3. Set up proper authentication
4. Use a process manager like PM2
5. Set up reverse proxy with Nginx

---

**Made with ❤️ for Internship Certificate Verification**
