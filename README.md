# 🏎️ Registro Karts Sevilla

Aplicación web desarrollada en React con TypeScript que permite registrar pilotos para el karting en Sevilla. El formulario recoge los datos del piloto, los agrupa en un objeto JSON y los valida usando la librería Zod antes de procesarlos.

## Tecnologías

- React
- TypeScript
- Vite
- Zod
- Tailwind CSS

## Despliegue

```bash
# Clona el repositorio
git clone https://github.com/sergiocb07/carreraKarts.git

# Entra en la carpeta del proyecto
cd carreraKarts

# Instala las dependencias
npm install

# Arranca el servidor de desarrollo
npm run dev
```

## Diccionario de datos

| Nombre del Campo | Tipo de Dato | Reglas de Validación |
|---|---|---|
| nombre | String | Obligatorio, mínimo 3 caracteres |
| email | String | Obligatorio, formato de email válido |
| categoria | String | Obligatorio, solo acepta "1 DAM" o "2 DAM" |

## Autoría

Desarrollado por [**Sergio Cañal**](https://github.com/sergiocb07)