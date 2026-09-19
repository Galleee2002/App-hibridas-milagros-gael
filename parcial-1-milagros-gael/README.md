# Parcial 1 – Menú de restaurante

API de menú con secciones (entradas, platos, acompañamientos, postres y bebidas) y una entidad **Chef** relacionada con los platos.

## Cómo levantarlo

```bash
pnpm install
pnpm dev
```

El servidor corre en `http://localhost:3333`.

En el navegador podés ver el menú y las secciones. La parte de chefs se prueba por API (Postman).

## Probar con Postman

Base URL: `http://localhost:3333`

### 1. Crear un chef

- Método: `POST`
- URL: `/api/chefs`
- Body → raw → JSON:

```json
{
  "nombre": "Lucía Pérez",
  "foto": "https://picsum.photos/200",
  "descripcion": "Chef de cocina de autor"
}
```

Deberías recibir un `201` y un `_id`. Guardalo para los pasos siguientes.

### 2. Ver todos los chefs

- Método: `GET`
- URL: `/api/chefs`

### 3. Crear un plato para ese chef

- Método: `POST`
- URL: `/api/menu`
- Body → raw → JSON (reemplazá `CHEF_ID` por el `_id` del paso 1):

```json
{
  "name": "Solomillo de wagyu",
  "description": "Plato de prueba",
  "link": "https://example.com",
  "img": "https://picsum.photos/400/225",
  "ingredients": ["wagyu"],
  "price": "$52.000",
  "section": "plato-principal",
  "chefId": "CHEF_ID"
}
```

### 4. Ver los platos de un chef

- Método: `GET`
- URL: `/api/chefs/CHEF_ID/menu`

Si el chef no tiene platos, la respuesta es un array vacío `[]`.

## Menú (API completa)

| Método | URL | Qué hace |
|--------|-----|----------|
| `GET` | `/api/menu` | Lista platos (podés filtrar con `?section=` o `?name=`) |
| `GET` | `/api/menu/:id` | Un plato |
| `POST` | `/api/menu` | Crear |
| `PUT` | `/api/menu/:id` | Reemplazar |
| `PATCH` | `/api/menu/:id` | Actualizar |
| `DELETE` | `/api/menu/:id` | Borrado lógico |

## Relación Chef – Menú

Un chef puede tener varios platos (o ninguno). Cada plato puede guardar un `chefId` apuntando al chef que lo creó.
