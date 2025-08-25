![](./others/Banner.gif)

<p align="center">
Este proyecto es una plantilla base que proporciona un lienzo en blanco con efectos visuales de partículas y animaciones de texto.
</p>

## 🛠️ Tecnologías Utilizadas

- **Vue.js 2.7.16** - Framework principal
- **vue-particlejs** - Librería para animaciones de partículas
- **typewriter-effect** - Efectos de texto animado
- **Vue CLI** - Herramientas de desarrollo

## 📦 Instalación

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/ema28pro/animation-of.git
   cd animation-of
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Ejecuta el proyecto en modo desarrollo:**
   ```bash
   npm run serve
   ```

4. **Abre tu navegador en:** `http://localhost:8080`

5. **¡Empieza a personalizar!** Sigue la guía de personalización más abajo.

6. **Para construir en producción:**
   ```bash
   npm run build
   ```

## 🎨 Personalización de Animaciones

#### **Configuración de Partículas** - `src/components/HelloWorld.vue`

Este es el archivo principal donde puedes personalizar toda la animación de partículas:

```javascript
// Líneas 25-85 aproximadamente
particleConfig: {
    particles: {
        number: { 
            value: 150,  // 🔹 Cambia la cantidad de partículas
            density: { enable: true, value_area: 800 } 
        },
        color: { 
            value: "#000000"  // 🔹 Cambia el color de las partículas
        },
        shape: {
            type: "circle",  // 🔹 Cambia la forma: "circle", "edge", "triangle", "polygon", "star", "image"
        },
        size: {
            value: 3,        // 🔹 Tamaño base de las partículas
            random: true,    // 🔹 Tamaño aleatorio
        },
        move: {
            speed: 6,        // 🔹 Velocidad de movimiento
            direction: "none" // 🔹 Dirección: "none", "top", "top-right", "right", etc.
        }
    }
}
```

#### **Frases del Efecto de Escritura** - `src/main.js`

```javascript
// Líneas 25-35 - Cambia las frases aquí:
typewriter
    .typeString("Hi, I'm Emanuel 👋")
    .pauseFor(1000)
    .deleteAll()
    .typeString("Future systems engineer 🚀")
    .pauseFor(1000)
    .deleteAll()
    .typeString("I Love Programming ❤️")
    .pauseFor(1000)
    .deleteAll()
    .start();
```
- `.typeString("texto")` → Escribe el texto letra por letra
- `.pauseFor(1000)` → Pausa X milisegundos (1000 = 1 segundo)
- `.deleteAll()` → Borra todo el texto actual
- `.start()` → Inicia la animacion de escritura

## 📁 Estructura del Proyecto

```
animation-of/
├── public/
│   └── index.html          # Archivo HTML principal (título de página)
├── src/
│   ├── app.vue            # Componente raíz (mensaje principal)
│   ├── main.js            # Punto de entrada de la aplicación
│   └── components/
│       └── HelloWorld.vue # 🎯 ARCHIVO PRINCIPAL - Configuración de partículas y texto
├── package.json           # Dependencias y scripts
└── README.md             # Esta guía
```

## 🚀 Scripts Disponibles

```bash
npm run serve    # Servidor de desarrollo
npm run build    # Construcción para producción
npm run lint     # Linter de código
```

---

##### **Autor** : Someone

- [Vue.js Documentation](https://vuejs.org/)
- [Particles.js Documentation](https://particles.js.org/)
- [CSS Animations Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)
- [JavaScript Animation Techniques](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API)
