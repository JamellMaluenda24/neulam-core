# Neulam Core — Landing Page

Landing page oficial de **Neulam Core** y **Ascend Habit Tracker**.

## 🚀 Stack

- [Astro](https://astro.build/) — Framework estático
- [GSAP](https://gsap.com/) + ScrollTrigger — Animaciones
- [Three.js](https://threejs.org/) — Partículas 3D

## 📁 Estructura

```
src/
├── pages/
│   └── index.astro        ← Página principal
├── components/
│   ├── Nav.astro
│   ├── Hero.astro
│   ├── Stats.astro
│   ├── About.astro
│   ├── AppSection.astro
│   ├── Privacy.astro
│   ├── Contact.astro
│   └── Footer.astro
├── layouts/
│   └── Layout.astro       ← Layout base + Three.js + Cursor
└── styles/
    └── global.css
```

## 🛠️ Comandos

```bash
# Instalar dependencias
npm install

# Desarrollo local
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 🌐 Deploy

Desplegado en [Vercel](https://vercel.com). Cada push a `main` genera un deploy automático.

---

Desarrollado por [Jamell Maluenda](https://portafolio-jamell-maluenda.vercel.app/) · Neulam Core 🇨🇱
