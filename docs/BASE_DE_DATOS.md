# Cómo montar la base de datos (PostgreSQL)

Guía para dejar funcionando la base de datos `clinica_db` en Windows.

## Requisitos

| Programa | Para qué | Descarga |
| --- | --- | --- |
| **PostgreSQL 18** | Motor de base de datos | https://www.postgresql.org/download/windows/ |
| **pgAdmin 4** | Interfaz gráfica para administrar la base de datos | Incluido en el instalador de PostgreSQL |

> Durante la instalación se define la **contraseña del usuario `postgres`**. Guárdala, se usa en los pasos 2 y 4.

## Pasos

### 1. Verificar que PostgreSQL está corriendo

PostgreSQL se instala como un servicio de Windows (`postgresql-x64-18`) que arranca solo al encender la PC.

```powershell
Get-Service postgresql-x64-18
```

Si aparece `Stopped`, iniciarlo con PowerShell **como administrador**:

```powershell
Start-Service postgresql-x64-18
```

### 2. Conectarse en pgAdmin

1. Abrir **pgAdmin 4** desde el menú Inicio.
2. En el panel izquierdo desplegar **Servers → PostgreSQL 18**.
3. Ingresar la contraseña del usuario `postgres`.

### 3. Crear la base de datos

1. Clic derecho en **Databases → Create → Database...**
2. En **Database** escribir: `clinica_db`
3. En **Owner** dejar: `postgres`
4. Clic en **Save**.

### 4. Configurar el backend

Copiar `backend/.env.example` como `backend/.env` y colocar la contraseña de `postgres`:

```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=clinica_db
DB_USER=postgres
DB_PASSWORD=tu_contraseña
```

> `backend/.env` no se sube al repositorio. Cada integrante usa su propia contraseña.

### 5. Crear las tablas

Desde la raíz del proyecto:

```powershell
npm run db:migrate --prefix backend
```

Las tablas aparecen en pgAdmin en **clinica_db → Schemas → public → Tables** (clic derecho → **Refresh**).

### 6. Verificar la conexión

```powershell
npm run dev
```

En la consola del backend debe aparecer: `Conectado a PostgreSQL (clinica_db)`.

## Problemas comunes

| Error | Causa | Solución |
| --- | --- | --- |
| `password authentication failed for user "postgres"` | Contraseña incorrecta en `.env` | Corregir `DB_PASSWORD` |
| `ECONNREFUSED 127.0.0.1:5432` | El servicio está detenido | Ver paso 1 |
| `database "clinica_db" does not exist` | No se creó la base de datos | Ver paso 3 |
