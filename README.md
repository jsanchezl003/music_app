# 🎵 Plataforma de Música - Music Catalog

Una aplicación web moderna para explorar, descobrir y gestionar información sobre música, álbumes, géneros, artículos y reseñas.

## 📋 ¿Qué es este proyecto?

Esta es una plataforma interactiva donde los usuarios pueden:
- 🔍 **Buscar** música, álbumes y artistas
- 📀 **Explorar** catálogos completos de álbumes
- 🎵 **Descubrir** géneros musicales
- 💬 **Participar** en foros de discusión
- 📝 **Leer** artículos sobre música
- ⭐ **Ver** reseñas y valoraciones
- 📊 **Consultar** líneas de tiempo musicales
- 📋 **Crear** listas personalizadas

## 🚀 Tecnologías utilizadas

- **React** - Librería de interfaz de usuario
- **Vite** - Empaquetador y herramienta de desarrollo ultrarrápida
- **JavaScript** - Lenguaje de programación
- **CSS** - Estilos y diseño
- **ESLint** - Herramienta de linting para código limpio

## 📦 Instalación

### Requisitos previos
- Node.js (versión 16 o superior)
- npm o yarn

### Pasos de instalación

1. **Clonar el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd AI103
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   - La aplicación estará disponible en `http://localhost:5173`

## 🛠️ Scripts disponibles

```bash
# Inicia el servidor de desarrollo con HMR (Hot Module Replacement)
npm run dev

# Compila la aplicación para producción
npm run build

# Previsualiza la versión de producción localmente
npm run preview

# Ejecuta ESLint para verificar la calidad del código
npm run lint
```

## 📁 Estructura del proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Header.jsx      # Encabezado de la aplicación
│   ├── Layout.jsx      # Diseño base de la aplicación
│   ├── CatalogPage.jsx # Página del catálogo
│   ├── AlbumCard.jsx   # Tarjeta de álbum
│   ├── GenresPage.jsx  # Página de géneros
│   ├── SearchBar.jsx   # Barra de búsqueda
│   ├── ForumPage.jsx   # Página de foros
│   └── ...             # Otros componentes
├── data/
│   └── musicData.js    # Datos de música estáticos
├── styles/
│   └── index.css       # Estilos globales
├── App.jsx             # Componente raíz
├── main.jsx            # Punto de entrada
└── index.css           # Estilos principales
```

## 🎯 Características principales

- **Interfaz moderna y responsiva** - Funciona en desktop, tablet y móvil
- **Búsqueda rápida** - Encuentra música fácilmente
- **Catálogo completo** - Explora miles de álbumes y géneros
- **Comunidad** - Participa en foros y comparte opiniones
- **Reseñas** - Lee y escribe reseñas de álbumes
- **Listas personalizadas** - Crea tus propias listas de música

## 🔧 Desarrollo

### Agregar un nuevo componente

1. Crea el archivo en `src/components/NuevoComponente.jsx`
2. Importa y usa en el componente padre
3. Agrega los estilos necesarios en `src/styles/index.css`

### Modificar datos

Los datos se encuentran en `src/data/musicData.js`. Puedes:
- Agregar nuevos álbumes, géneros o artistas
- Modificar información existente
- Importar datos desde una API en el futuro

## 📝 Notas de desarrollo

- El proyecto usa **HMR (Hot Module Replacement)** para recarga en vivo durante el desarrollo
- Los cambios en los archivos se reflejan automáticamente en el navegador
- ESLint está configurado para mantener la calidad del código

## 🚢 Despliegue

Para desplegar la aplicación en producción:

```bash
npm run build
```

Esto crea una carpeta `dist/` con los archivos optimizados listos para producción.

## 📄 Licencia

Este proyecto está disponible bajo la licencia MIT.

## 👥 Contribuciones

Las contribuciones son bienvenidas. Para reportar bugs o sugerir mejoras, abre un issue en el repositorio.

---

**¡Disfruta explorando la música! 🎶**
