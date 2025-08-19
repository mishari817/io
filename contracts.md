# API Contracts for PPF Landing Page

## Frontend-Backend Integration Plan

### Mock Data Currently Used
The frontend currently uses mock data from `/frontend/src/data/mock.js` which includes:
- Hero section content
- Educational content about PPF
- Benefits and features
- Why choose us points
- FAQ items
- Blog content sections
- Contact information
- Footer services

### Backend API Endpoints to Implement

#### 1. Contact Form Submission
**Endpoint:** `POST /api/contact`
**Purpose:** Handle contact form submissions and booking requests

**Request Body:**
```json
{
  "name": "string",
  "phone": "string", 
  "message": "string (optional)",
  "service_type": "string (ppf, ceramic, etc)",
  "offer_type": "string (discount_50, regular)"
}
```

**Response:**
```json
{
  "success": boolean,
  "message": "string",
  "contact_id": "string",
  "estimated_response_time": "string"
}
```

#### 2. Get Contact Information
**Endpoint:** `GET /api/contact-info`
**Purpose:** Retrieve current contact details and business hours

**Response:**
```json
{
  "phone": "0504631317",
  "whatsapp": "0504631317", 
  "business_hours": "string",
  "location": "جدة، المملكة العربية السعودية"
}
```

#### 3. Get Current Offers
**Endpoint:** `GET /api/offers`
**Purpose:** Retrieve active promotional offers

**Response:**
```json
{
  "current_offer": {
    "title": "خصم 50%",
    "description": "string",
    "discount_percentage": 50,
    "valid_until": "date",
    "terms": "string"
  }
}
```

#### 4. FAQ Management
**Endpoint:** `GET /api/faq`
**Purpose:** Retrieve frequently asked questions

**Response:**
```json
{
  "faqs": [
    {
      "id": "string",
      "question": "string",
      "answer": "string",
      "order": "number"
    }
  ]
}
```

### Database Models Required

#### 1. Contact Submissions
```
contacts:
  - id: ObjectId
  - name: String
  - phone: String
  - message: String (optional)
  - service_type: String
  - offer_type: String
  - status: String (new, contacted, completed)
  - created_at: DateTime
  - updated_at: DateTime
```

#### 2. Business Information
```
business_info:
  - id: ObjectId
  - phone: String
  - whatsapp: String
  - business_hours: String
  - location: String
  - updated_at: DateTime
```

#### 3. Current Offers
```
offers:
  - id: ObjectId
  - title: String
  - description: String
  - discount_percentage: Number
  - valid_until: Date
  - terms: String
  - is_active: Boolean
  - created_at: DateTime
```

### Integration Steps
1. Create MongoDB models for contact submissions, business info, and offers
2. Implement API endpoints for contact form and data retrieval
3. Replace mock data calls in frontend with actual API calls
4. Add error handling and loading states
5. Test contact form submission flow
6. Add admin panel for managing contacts and offers (future enhancement)

### Notes
- All text content is in Arabic (RTL)
- Phone number validation should accept Saudi phone number formats
- Contact submissions should trigger notifications (email/SMS)
- Business information should be easily updatable without code changes