# goinnovior-server

A secure backend server built using **NestJS**, **Prisma**, and **PostgreSQL**.  
Authentication is implemented using **Auth0 (Google OAuth)** with **Passport.js**, and sessions are managed via **HTTP-only cookies**.

All APIs are **private by default**, except authentication routes.  
The application is fully **Dockerized** and deployed using a **CI/CD pipeline powered by GitHub Actions**.

---

## 🚀 Tech Stack

### Backend
- **NestJS** – Scalable Node.js framework
- **Prisma** – Type-safe ORM
- **PostgreSQL** – Relational database

### Authentication & Security
- **Auth0** – Google OAuth
- **Passport.js** – Authentication strategy
- **cookie-parser** – Cookie handling
- **JWT** – Secure token management

### Documentation & DevOps
- **Swagger (OpenAPI)** – API documentation
- **Docker** – Containerization
- **GitHub Actions** – CI/CD pipeline

---

## 🔐 Authentication System

- Google login using **Auth0**
- Integrated with **Passport.js**
- Secure session handling via **HTTP-only cookies**
- JWT used internally for authentication
- All non-auth routes are protected

---

## 📌 API Endpoints

### ✅ Public Routes (Authentication)
```http
GET  /auth/google/login
GET  /auth/google/callback
POST /auth/logout
GET  /auth/me
```

### ✅ Public Routes (Authentication)
```http
POST /add-to-cart
POST /add-to-cart/increment
POST /add-to-cart/decrement
```
---

## 🍪 Cookie Handling

- Managed using cookie-parser
- HTTP-only cookies for enhanced security
- Prevents client-side access to session data

---

## 📄 API Documentation (Swagger)
- https://goinnovior-server.onrender.com/doc

## 🧩 Prisma & Database

- Prisma manages schema, queries, and migrations
- PostgreSQL used as the primary database
```
npx prisma generate
npx prisma migrate dev
npx prisma studio
```

### ⚙️ Required Environment Variables
### Create a .env file in the project root and configure the following:

```ENV

NODE_ENV=''
PORT=''
HOST=''

# Database Config
DB_USER=''
DB_PASSWORD=''
DB_NAME=''
DB_HOST=''
DB_PORT=''
DATABASE_URL=''

# JWT Secret
JWT_SECRET=''

# Google OAuth Credentials
GOOGLE_CLIENT_ID=''
GOOGLE_CLIENT_SECRET=''

#facebook 0auth Credentials
FACEBOOK_CLIENT_ID=''
FACEBOOK_CLIENT_SECRET=''

#github OAuth Credentials
GITHUB_ID=''
GITHUB_SECRET=''

# URLs
FORTEND_URL=''
BACKEND_URL=''
```

### ▶️ Running the Project
```
# Install Dependencies
- pnpm install
# Development Mode
- pnpm run start:dev
```

## Production Mode
```
pnpm run build
pnpm run start:prod
```

# 🐳 Docker
- Build Docker Image - ``` docker build -t goinnovior-server . ```
- Run Container - ```docker run -p 3000:3000 goinnovior-server```

## 🔁 CI/CD Pipeline

Deployment is automated using GitHub Actions.

Pipeline Steps

- ```Install dependencies```

- ```Build the application```

- ```Build Docker image```

- ```Push image to registry```

- ```Deploy to host server```

This ensures consistent and reliable deployments.

### 🔒 Security

All APIs are private by default

OAuth handled securely via Auth0

Cookies are HTTP-only

Secrets managed through environment variables

### 👤 Author

- Md Sharif
- Backend / Full-Stack Developer

📧 Email: srak780@gmail.com

🔗 LinkedIn: https://www.linkedin.com/in/md-sharif-500129362/