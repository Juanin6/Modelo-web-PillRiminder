# 🚀 Proyecto Next.js

Este proyecto fue creado con [Next.js](https://nextjs.org/) y extendido con:

- [**shadcn/ui**](https://ui.shadcn.com) → librería de componentes accesibles con Tailwind.  
- [**Recharts**](https://recharts.org/en-US/) → librería de gráficos y visualización de datos.  

---

## 📦 Requisitos previos

Antes de comenzar asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (>= 18 recomendado).  
- Un gestor de paquetes: `npm`, `pnpm` o `yarn`.  

---

## ⚙️ Instalación

Clona el repositorio e instala las dependencias:

```bash
git clone https://github.com/tu-usuario/tu-repo.git
cd tu-repo

# con npm
npm install

# o con pnpm
pnpm install

# o con yarn
yarn install
```

---


## 🛠️ Librerías principales

- **Next.js** → framework de React con soporte SSR/SSG.  
- **Tailwind CSS** → utilidades de estilos.  
- **shadcn/ui** → componentes preconstruidos.  
  - Para agregar componentes, usa los siguientes comandos:  

    ```bash
    npx shadcn@latest add button
    npx shadcn@latest add input
    npx shadcn@latest add label
    npx shadcn@latest add badge
    npx shadcn@latest add card
    ```

- **Recharts** → gráficos y visualización.  
  - Instalación (si no está en tu proyecto):  
    ```bash
    npm install recharts
    ```

---

## ▶️ Ejecutar en desarrollo

Para iniciar el servidor de desarrollo:

```bash
npm run dev
# o
pnpm dev
# o
yarn dev
```

Abre en el navegador: [http://localhost:3000](http://localhost:3000)

---


## 🚀 Build y producción

Genera la build optimizada:

```bash
npm run build
```

Ejecuta en modo producción:

```bash
npm start
```

---

## 📚 Recursos útiles

- [Documentación de Next.js](https://nextjs.org/docs)  
- [Documentación de shadcn/ui](https://ui.shadcn.com/docs)  
- [Documentación de Recharts](https://recharts.org/en-US/)  

---


