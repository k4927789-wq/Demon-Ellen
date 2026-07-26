# Demon Ellen — GitHub Pages

Página web oficial de la comunidad **Demon Ellen** (DemonFall).

## Cómo publicarla en GitHub Pages

1. Crea un repositorio en GitHub (por ejemplo `demon-ellen` o `tu-usuario.github.io`).
2. Sube **todos** estos archivos a la raíz del repositorio:
   - `index.html`
   - `styles.css`
   - `script.js`
   - carpeta `imágenes/`
3. Dentro de la carpeta `imágenes/` coloca:
   - `icono.png` → favicon (el icono que sale en la pestaña del navegador)
   - `profile.png` → logo principal de la página
4. En el repositorio ve a **Settings → Pages**.
5. En *Source* elige **Deploy from a branch** y selecciona la rama `main` (o `master`) y la carpeta `/ (root)`.
6. Guarda. En unos minutos tu página estará en:
   `https://tu-usuario.github.io/nombre-del-repo/`

## Estructura de archivos

```
/
├── index.html
├── styles.css
├── script.js
├── README.md
└── imágenes/
    ├── icono.png      ← favicon
    └── profile.png    ← logo de la web
```

## Características

- Diseño oscuro profesional con temática demoníaca (rojo / púrpura / dorado)
- Animaciones suaves en botones y logo
- Botón **Discord** con efecto ripple + pulso → abre el servidor
- Botón **Servidor de Raids** que copia el código `H92878766` al portapapeles
- Texto “Creado por Kirito” en la esquina
- Responsive (se ve bien en móvil)
- Favicon listo cuando subas `icono.png`
