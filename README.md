# CI Project

Full-stack app with **React + Node.js**, ready to run with **Docker**.

## Structure

```
ci/
├── frontend/          # React app (Vite)
├── backend/           # Node.js API (Express)
├── docker-compose.yaml
├── .env               # Environment variables
└── TP Continuous Integration - CI.pdf
```

## Quick Start

### 🐳 With Docker Compose

```bash
docker-compose up --build
```

Then open:
- **Frontend**: http://localhost:3000
- **API**: http://localhost:5000/api/health

### 🚀 Local Development

**Backend** (Terminal 1):
```bash
cd backend
npm install
npm run dev
```

**Frontend** (Terminal 2):
```bash
cd frontend
npm install
npm run dev
```

## Features

### Backend
- ✅ Express API with CORS
- ✅ Health check endpoint
- ✅ Sample CRUD routes (`GET /api/data`, `POST /api/data`)
- ✅ Logging middleware
- ✅ Error handling
- ✅ Graceful shutdown

### Frontend
- ✅ React with Vite
- ✅ Custom `useFetch` hook
- ✅ API testing UI (fetch items, add items)
- ✅ Better error handling & refresh buttons
- ✅ Responsive design

## Environment Variables

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

## Docker Build (Manual)

```bash
# Backend
docker build -t ci-backend ./backend
docker run -p 5000:5000 ci-backend

# Frontend
docker build -t ci-frontend ./frontend
docker run -p 3000:3000 ci-frontend
```

## Next Steps for your TP

- Add database (MongoDB/PostgreSQL)
- Add authentication (JWT)
- Add more API routes
- Add tests (Jest, Vitest)
- Add GitHub Actions CI/CD
- Add Kubernetes manifests
