# 📐 Cálculo Integral - Plataforma Educativa

Plataforma web interactiva para el aprendizaje de Cálculo Integral con sistema de autenticación Firebase y seguimiento personalizado de progreso.

![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## 🎯 **Características**

- ✅ **Sistema de autenticación** con Firebase Authentication
- ✅ **5 módulos de aprendizaje** progresivos
- ✅ **Seguimiento de progreso** personalizado en Firestore
- ✅ **Ejercicios interactivos** con validación en tiempo real
- ✅ **Interfaz moderna** y completamente responsiva
- ✅ **Renderización matemática** con MathJax
- ✅ **Panel de usuario** con estadísticas de avance

---

## 📚 **Módulos del Curso**

### 🔷 Módulo 1: Antiderivadas e Integrales Indefinidas
- Concepto de antiderivada
- Notación de integral indefinida
- Propiedades de las integrales indefinidas
- Fórmulas básicas de integración

### 🔷 Módulo 2: Integral Definida
- Sumas de Riemann
- Teorema Fundamental del Cálculo
- Propiedades de la integral definida
- Cálculo de áreas

### 🔷 Módulo 3: Técnicas de Integración
- Integración por sustitución
- Integración por partes
- Fracciones parciales
- Sustituciones trigonométricas

### 🔷 Módulo 4: Aplicaciones de la Integral
- Cálculo de áreas entre curvas
- Volúmenes de sólidos de revolución
- Longitud de arco
- Aplicaciones a la física

### 🔷 Módulo 5: Ecuaciones Diferenciales
- Ecuaciones diferenciales ordinarias
- Variables separables
- Ecuaciones lineales de primer orden
- Aplicaciones

---

## 🚀 **Instalación**

### Requisitos previos:
- Navegador moderno (Chrome, Firefox, Edge, Safari)
- Conexión a Internet (para Firebase)
- Servidor web local (Python, Node.js, o extensión Live Server)

### Paso 1: Clonar el repositorio

```bash
git clone https://github.com/TU_USUARIO/calculo-integral.git
cd calculo-integral
```

### Paso 2: Configurar Firebase

1. **Crear proyecto en Firebase Console:**
   - Ir a https://console.firebase.google.com/
   - Crear nuevo proyecto: "CalculoIntegral"

2. **Activar servicios:**
   - Authentication → Email/Password
   - Firestore Database

3. **Copiar credenciales:**
   - Configuración del proyecto → Aplicación web
   - Copiar credenciales en `firebase.config.js`

4. **Configurar reglas de Firestore:**
   ```javascript
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /users/{userId} {
         allow read, write: if request.auth != null && request.auth.uid == userId;
       }
     }
   }
   ```

### Paso 3: Ejecutar servidor local

**Opción 1: Python**
```bash
python -m http.server 8000
```

**Opción 2: Node.js**
```bash
npx http-server
```

**Opción 3: VS Code**
- Instalar extensión "Live Server"
- Click derecho en `login.html` → "Open with Live Server"

### Paso 4: Abrir en navegador

```
http://localhost:8000/login.html
```

---

## 📁 **Estructura del Proyecto**

```
calculo-integral/
│
├── login.html                    # Página de autenticación
├── firebase.config.js            # Configuración de Firebase
├── auth-manager.js               # Sistema de autenticación
│
├── modulo1.html                  # Módulo 1: Antiderivadas
├── modulo2.html                  # Módulo 2: Integral Definida
├── modulo3.html                  # Módulo 3: Técnicas
├── modulo4.html                  # Módulo 4: Aplicaciones
├── modulo5.html                  # Módulo 5: Ecuaciones Dif.
│
├── planeacionCI.MD               # Planeación completa del curso
├── PASOS_CREAR_FIREBASE.md       # Guía de configuración Firebase
├── README_FIREBASE.md            # Documentación Firebase
├── INSTRUCCIONES_GITHUB.md       # Guía para GitHub
│
├── .gitignore                    # Archivos ignorados por Git
└── README.md                     # Este archivo
```

---

## 🛠️ **Tecnologías Utilizadas**

| Tecnología | Uso |
|------------|-----|
| **HTML5** | Estructura de páginas |
| **CSS3** | Estilos y diseño responsivo |
| **JavaScript ES6+** | Lógica de la aplicación |
| **Firebase Authentication** | Sistema de usuarios |
| **Firebase Firestore** | Base de datos NoSQL |
| **MathJax** | Renderización de fórmulas matemáticas |
| **Git** | Control de versiones |

---

## 👤 **Uso de la Plataforma**

### Registrarse:
1. Abrir `login.html`
2. Click en pestaña "Registrarse"
3. Ingresar datos (nombre, email, contraseña)
4. Click en "Crear Cuenta"

### Iniciar Sesión:
1. Ingresar email y contraseña
2. Click en "Iniciar Sesión"
3. Acceder al panel de usuario

### Navegar por los Módulos:
1. Desde el panel de usuario
2. Seleccionar módulo deseado
3. Completar actividades
4. El progreso se guarda automáticamente

---

## 📖 **Documentación**

- **[Guía de Firebase](./PASOS_CREAR_FIREBASE.md)** - Configuración paso a paso
- **[Implementación Firebase](./README_FIREBASE.md)** - Detalles técnicos
- **[Guía de GitHub](./INSTRUCCIONES_GITHUB.md)** - Publicar en GitHub
- **[Planeación del Curso](./planeacionCI.MD)** - Contenido completo

---

## 🔒 **Seguridad**

### Reglas de Firestore:
- Los usuarios solo pueden acceder a sus propios datos
- Autenticación requerida para todas las operaciones
- Validación de permisos en el servidor

### Mejores Prácticas:
- Credenciales de Firebase en archivos separados
- Variables de entorno para producción
- HTTPS obligatorio en producción
- Dominios autorizados configurados

---

## 🌐 **Deploy / Publicación**

### GitHub Pages:

1. **Activar GitHub Pages:**
   - Settings → Pages
   - Source: `main` branch
   - Guardar

2. **Acceder a:**
   ```
   https://TU_USUARIO.github.io/calculo-integral/login.html
   ```

### Netlify (Alternativa):

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

### Firebase Hosting:

```bash
# Instalar Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Inicializar
firebase init hosting

# Deploy
firebase deploy
```

---

## 🐛 **Solución de Problemas**

### Error: "Firebase not defined"
**Solución:** Asegurarse de que el archivo se sirva desde un servidor web, no desde `file://`

### Error: "Permission denied"
**Solución:** Verificar reglas de seguridad en Firestore

### No se guarda el progreso
**Solución:** Verificar que Firestore esté habilitado y el usuario autenticado

### Fórmulas matemáticas no se muestran
**Solución:** Verificar que MathJax esté cargando correctamente

---

## 📊 **Roadmap**

### Versión Actual (v1.0)
- ✅ Sistema de autenticación
- ✅ Estructura de 5 módulos
- ✅ Seguimiento de progreso básico

### Próximas Versiones

**v1.1**
- [ ] Sistema de calificaciones
- [ ] Certificado de finalización
- [ ] Modo oscuro

**v1.2**
- [ ] Foros de discusión
- [ ] Chat en vivo
- [ ] Notificaciones push

**v2.0**
- [ ] App móvil
- [ ] Modo offline
- [ ] Gamificación (badges, rankings)

---

## 🤝 **Contribuir**

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crear una rama (`git checkout -b feature/NuevaCaracteristica`)
3. Commit cambios (`git commit -m 'Agregar nueva característica'`)
4. Push a la rama (`git push origin feature/NuevaCaracteristica`)
5. Abrir Pull Request

---

## 👨‍🏫 **Autor**

**José Manuel González Vargas**  
Profesor de Matemáticas  
Especialidad: Cálculo Diferencial e Integral

---

## 📄 **Licencia**

Este material es de uso exclusivo para fines educativos de la institución.  
**© 2025 - Todos los derechos reservados**

---

## 📞 **Contacto**

Para preguntas, sugerencias o reportar errores:

- **Email:** [tu-email@ejemplo.com]
- **GitHub Issues:** [Crear issue](https://github.com/TU_USUARIO/calculo-integral/issues)

---

## ⭐ **Agradecimientos**

- Firebase por la infraestructura backend
- MathJax por la renderización matemática
- GitHub por el hosting
- La comunidad de desarrolladores

---

## 📈 **Estadísticas**

![GitHub repo size](https://img.shields.io/github/repo-size/TU_USUARIO/calculo-integral)
![GitHub last commit](https://img.shields.io/github/last-commit/TU_USUARIO/calculo-integral)
![GitHub stars](https://img.shields.io/github/stars/TU_USUARIO/calculo-integral?style=social)

---

**🚀 ¡Comienza a aprender Cálculo Integral hoy!**

[🔗 Ver Demo](https://tu-usuario.github.io/calculo-integral/login.html) | [📖 Documentación](./PASOS_CREAR_FIREBASE.md) | [🐛 Reportar Bug](https://github.com/TU_USUARIO/calculo-integral/issues)

