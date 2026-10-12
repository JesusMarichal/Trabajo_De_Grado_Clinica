# Trabajo de Grado - Clínica

- `frontend/`: Next.js + React + TypeScript + Tailwind
- `backend/`: Node.js + Express + TypeScript + Sequelize + PostgreSQL (MVC)

## Primer uso

1. `npm run install:all`
2. Edita `backend/.env` con tu contraseña de PostgreSQL (`DB_PASSWORD`).
3. `npm run db:create --prefix backend` crea la base de datos `clinica_db`.
4. `npm run dev` levanta el backend (http://localhost:4000/api) y el frontend (http://localhost:3000).

Para verificar: http://localhost:4000/api/health
