# Test Certificate API

## Test 1: Add a New Certificate

curl -X POST http://localhost:5000/admin/certificate/add ^
  -H "Content-Type: application/json" ^
  -d "{\"certificateId\":\"TESTCERT2026\",\"name\":\"Test User\",\"role\":\"Software Engineer Intern\",\"company\":\"Test Company Ltd\",\"internshipType\":\"Virtual Internship\",\"startDate\":\"01 Feb 2026\",\"endDate\":\"28 Feb 2026\",\"issueDate\":\"01 March 2026\"}"

## Test 2: View All Certificates

curl http://localhost:5000/admin/certificates

## Test 3: Verify Valid Certificate

curl http://localhost:5000/internship/verify/certificate/validate/SK2626856

## Test 4: Verify Invalid Certificate

curl http://localhost:5000/internship/verify/certificate/validate/INVALID999
