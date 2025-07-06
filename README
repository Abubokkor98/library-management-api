# 📚 Library Management API

A comprehensive Library Management System built with **Express.js**, **TypeScript**, and **MongoDB** using **Mongoose**. This API provides full CRUD operations for books and borrowing functionality with advanced features like aggregation pipelines, filtering, and business logic enforcement.

## 🌐 Live Demo

**API Base URL**: [https://library-management-api-cyan.vercel.app](https://library-management-api-cyan.vercel.app)

Test the API directly using the live deployment on Vercel!

### Quick Start with Live API

You can immediately test the API endpoints using these direct links:

**📚 Books Endpoints:**

- **GET All Books**: [https://library-management-api-cyan.vercel.app/api/books](https://library-management-api-cyan.vercel.app/api/books)
- **GET Books with Filter**: [https://library-management-api-cyan.vercel.app/api/books?filter=SCIENCE&limit=5](https://library-management-api-cyan.vercel.app/api/books?filter=SCIENCE&limit=5)

**📖 Borrow Endpoints:**

- **GET Borrow Summary**: [https://library-management-api-cyan.vercel.app/api/borrow](https://library-management-api-cyan.vercel.app/api/borrow)

**💡 Pro Tip**: Click the links above to see live data, or use tools like Postman/Thunder Client for POST/PUT/DELETE operations.

## 🚀 Features

- **Complete Book Management**: Create, read, update, and delete books
- **Book Borrowing System**: Borrow books with quantity tracking and availability management
- **Advanced Filtering & Sorting**: Filter books by genre, sort by various fields
- **Aggregation Pipeline**: Get borrowing summaries with MongoDB aggregation
- **Schema Validation**: Comprehensive validation for all data models
- **Business Logic**: Automatic availability updates based on stock
- **TypeScript Support**: Full type safety throughout the application
- **Error Handling**: Comprehensive error handling with proper HTTP status codes

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: MongoDB
- **ODM**: Mongoose
- **Environment**: dotenv
- **CORS**: cors middleware

## 📋 Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn package manager

## 🔧 Installation & Setup

1. **Clone the repository**

```bash
git clone <https://github.com/Abubokkor98/library-management-api>
cd library-management-api
```

2. **Install dependencies**

```bash
npm install
```

3. **Environment Configuration**
   Create a `.env` file in the root directory:

```env
NODE_ENV=development
PORT=5000
DATABASE_URL=mongodb+srv://your-username:your-password@cluster.mongodb.net/library-management?retryWrites=true&w=majority
```

4. **Start the server**

```bash
# Development mode
npm run dev

# Production mode
npm start
```

5. **Verify installation**
   Open your browser and visit: `http://localhost:5000`

You should see:

```json
{
  "success": true,
  "message": "library-management-api server is Running"
}
```

## 📖 API Documentation

### Base URL

**Local Development:**

```
http://localhost:5000/api
```

**Production (Vercel):**

```
https://library-management-api-cyan.vercel.app/api
```

### 📚 Book Endpoints

#### 1. Create Book

**POST** `/api/books`

**Request Body:**

```json
{
  "title": "The Theory of Everything",
  "author": "Stephen Hawking",
  "genre": "SCIENCE",
  "isbn": "9780553380163",
  "description": "An overview of cosmology and black holes.",
  "copies": 5,
  "available": true
}
```

**Response:**

```json
{
  "success": true,
  "message": "Book Created successfully",
  "data": {
    "_id": "64f123abc4567890def12345",
    "title": "The Theory of Everything",
    "author": "Stephen Hawking",
    "genre": "SCIENCE",
    "isbn": "9780553380163",
    "description": "An overview of cosmology and black holes.",
    "copies": 5,
    "available": true,
    "createdAt": "2024-11-19T10:23:45.123Z",
    "updatedAt": "2024-11-19T10:23:45.123Z"
  }
}
```

#### 2. Get All Books

**GET** `/api/books`

**Query Parameters:**

- `filter`: Filter by genre (FICTION, NON_FICTION, SCIENCE, HISTORY, BIOGRAPHY, FANTASY)
- `sortBy`: Sort field (default: createdAt)
- `sort`: Sort order (asc/desc, default: asc)
- `limit`: Number of results (default: 10)

**Example:**

```
GET /api/books?filter=FANTASY&sortBy=createdAt&sort=desc&limit=5
```

#### 3. Get Book by ID

**GET** `/api/books/:bookId`

#### 4. Update Book

**PATCH** `/api/books/:bookId`

**Request Body:**

```json
{
  "copies": 50
}
```

#### 5. Delete Book

**DELETE** `/api/books/:bookId`

### 📖 Borrow Endpoints

#### 1. Borrow a Book

**POST** `/api/borrow`

**Request Body:**

```json
{
  "book": "64ab3f9e2a4b5c6d7e8f9012",
  "quantity": 2,
  "dueDate": "2025-07-18"
}
```

**Response:**

```json
{
  "success": true,
  "message": "Book borrowed successfully",
  "data": {
    "_id": "64bc4a0f9e1c2d3f4b5a6789",
    "book": "64ab3f9e2a4b5c6d7e8f9012",
    "quantity": 2,
    "dueDate": "2025-07-18T00:00:00.000Z",
    "createdAt": "2025-06-18T07:12:15.123Z",
    "updatedAt": "2025-06-18T07:12:15.123Z"
  }
}
```

#### 2. Get Borrowed Books Summary

**GET** `/api/borrow`

**Response:**

```json
{
  "success": true,
  "message": "Borrowed books summary retrieved successfully",
  "data": [
    {
      "totalQuantity": 110,
      "book": {
        "title": "1984",
        "isbn": "9780451524935"
      }
    },
    {
      "totalQuantity": 2,
      "book": {
        "title": "A Brief History of Time",
        "isbn": "9780553380163"
      }
    }
  ]
}
```

🗂️ Project Structure
LIBRARY-MANAGEMENT-API/
├── src/
│ ├── config/
│ │ └── index.ts # Environment configuration
│ ├── modules/
│ │ ├── book/
│ │ │ ├── book.controller.ts # Book API controllers
│ │ │ ├── book.interface.ts # Book type definitions
│ │ │ ├── book.model.ts # Book Mongoose model
│ │ │ └── book.routes.ts # Book routes
│ │ └── borrow/
│ │ ├── borrow.controller.ts # Borrow API controllers
│ │ ├── borrow.interface.ts # Borrow type definitions
│ │ ├── borrow.model.ts # Borrow Mongoose model
│ │ └── borrow.routes.ts # Borrow routes
│ ├── routes/
│ │ └── index.ts # Main route configuration
│ └── server.ts # Express server setup
├── .env # Environment variables
├── .gitignore # Git ignore rules
├── package.json # Project dependencies & scripts
├── package-lock.json # Dependency lock file
├── README.md # Project documentation
├── tsconfig.json # TypeScript configuration
└── vercel.json # Vercel deployment configuration

## 🎯 Key Features Implementation

### 1. **Schema Validation**

- Comprehensive validation for all required fields
- Genre enumeration validation
- ISBN uniqueness constraint
- Positive number validation for copies

### 2. **Business Logic**

- Automatic availability updates when copies reach zero
- Stock validation before borrowing
- Quantity deduction on successful borrowing

### 3. **Mongoose Features**

- **Instance Methods**: `updateAvailability()` method for books
- **Aggregation Pipeline**: Complex borrowing summary with joins
- **Middleware**: Pre/post hooks for data processing
- **Timestamps**: Automatic createdAt/updatedAt fields

### 4. **Advanced Filtering**

- Genre-based filtering
- Dynamic sorting by any field
- Pagination with limit parameter
- Case-insensitive search capabilities

## 🔍 Data Models

### Book Model

```typescript
interface IBook {
  title: string; // Required
  author: string; // Required
  genre: Genre; // Required (enum)
  isbn: string; // Required, unique
  description: string; // Optional
  copies: number; // Required, non-negative
  available: boolean; // Default: true
}
```

### Borrow Model

```typescript
interface IBorrow {
  book: ObjectId; // Required (Book reference)
  quantity: number; // Required, minimum 1
  dueDate: Date; // Required
}
```

## 🛡️ Error Handling

The API provides comprehensive error handling with proper HTTP status codes:

- **400**: Bad Request (validation errors, insufficient stock)
- **404**: Not Found (book not found)
- **500**: Internal Server Error (database errors)

**Error Response Format:**

```json
{
  "success": false,
  "message": "Error description",
  "error": {
    // Detailed error information
  }
}
```

## 🧪 Testing the API

You can test the API using tools like:

- **Postman**: Import the collection for easy testing
- **cURL**: Command-line testing
- **Thunder Client**: VS Code extension
- **Insomnia**: REST client

### Example cURL Commands:

**Create a Book:**

```bash
curl -X POST https://library-management-api-cyan.vercel.app/api/books \
  -H "Content-Type: application/json" \
  -d '{
    "title": "The Hobbit",
    "author": "J.R.R. Tolkien",
    "genre": "FANTASY",
    "isbn": "9780547928227",
    "description": "A fantasy adventure novel",
    "copies": 10
  }'
```

**Borrow a Book:**

```bash
curl -X POST https://library-management-api-cyan.vercel.app/api/borrow \
  -H "Content-Type: application/json" \
  -d '{
    "book": "YOUR_BOOK_ID",
    "quantity": 2,
    "dueDate": "2025-08-01"
  }'
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Your Name**

- GitHub: [@Abubokkor98](https://github.com/Abubokkor98)
- Email: mail.abubokkor@gmail.com

## 🙏 Acknowledgments

- **Programming Hero Level 2 Mentors** for their exceptional guidance and teaching throughout this learning journey
- Express.js team for the amazing framework
- MongoDB team for the robust database
- Mongoose team for the elegant ODM
- TypeScript team for type safety

---

**Happy Coding! 🚀**
