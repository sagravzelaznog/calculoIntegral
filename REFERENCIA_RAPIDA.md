# ⚡ REFERENCIA RÁPIDA - CÁLCULO INTEGRAL

---

## 🔥 CONFIGURAR FIREBASE (5 minutos)

```
1. Ir a: https://console.firebase.google.com/
2. Crear proyecto: "CalculoIntegral"
3. Activar Authentication → Email/Password
4. Activar Firestore Database
5. Copiar credenciales en firebase.config.js
6. Abrir login.html → Registrar usuario
✅ LISTO
```

---

## 🚀 SUBIR A GITHUB (10 minutos)

### Primera Vez:
```bash
cd "ruta\a\tu\proyecto"
git init
git add .
git commit -m "Primer commit"
git remote add origin https://github.com/TU_USUARIO/calculo-integral.git
git branch -M main
git push -u origin main
```

### Actualizaciones Diarias:
```bash
git add .
git commit -m "Descripción"
git push
```

### Comando Todo-en-Uno:
```bash
git add . && git commit -m "Actualización" && git push
```

---

## 📁 ARCHIVOS IMPORTANTES

| Archivo | Para qué sirve |
|---------|----------------|
| `login.html` | Página de autenticación (abrir en navegador) |
| `firebase.config.js` | Credenciales Firebase (actualizar aquí) |
| `auth-manager.js` | Sistema de autenticación (NO modificar) |
| `README_FIREBASE.md` | Guía Firebase completa |
| `INSTRUCCIONES_GITHUB.md` | Guía GitHub completa |
| `guia-github.html` | Guía visual interactiva |
| `COMANDOS_GIT.md` | Comandos Git rápidos |
| `.gitignore` | Archivos ignorados (NO borrar) |

---

## 🔧 COMANDOS GIT ESENCIALES

```bash
git status              # Ver estado
git add .               # Agregar todo
git commit -m "msg"     # Guardar cambios
git push                # Subir a GitHub
git pull                # Descargar cambios
git log --oneline       # Ver historial
```

---

## 🌐 ENLACES RÁPIDOS

| Servicio | URL |
|----------|-----|
| Firebase Console | https://console.firebase.google.com/ |
| GitHub | https://github.com/ |
| Crear Repo | https://github.com/new |
| Crear Token | https://github.com/settings/tokens |
| Git Download | https://git-scm.com/downloads |

---

## 🆘 SOLUCIONES RÁPIDAS

### Firebase no funciona:
```
1. Verificar que Firestore esté habilitado
2. Verificar reglas de seguridad
3. Abrir login.html desde servidor (no file://)
```

### Git push falla:
```bash
# Usa Personal Access Token, no contraseña
# Créalo en: https://github.com/settings/tokens
```

### Olvidé hacer commit:
```bash
git add .
git commit -m "Mensaje"
git push
```

---

## ⚙️ SERVIDOR LOCAL

```bash
# Python
python -m http.server 8000

# Node.js
npx http-server

# VS Code
Live Server Extension
```

---

## 📊 ESTRUCTURA FIREBASE

```javascript
users/
  └── [userId]/
       ├── email: "..."
       ├── displayName: "..."
       ├── courseAccess: { calculoIntegral: true }
       ├── progress: { 
       │    modulo1: 0,
       │    modulo2: 0,
       │    modulo3: 0,
       │    modulo4: 0,
       │    modulo5: 0
       │ }
       └── lastActivity: timestamp
```

---

## ✅ CHECKLIST

### Firebase:
- [ ] Proyecto creado
- [ ] Authentication activado
- [ ] Firestore activado
- [ ] Credenciales copiadas
- [ ] login.html funciona

### GitHub:
- [ ] Git instalado
- [ ] Git configurado
- [ ] Repositorio creado
- [ ] Código subido
- [ ] Verificado online

---

## 🎯 INICIO RÁPIDO (30 segundos)

```bash
# 1. Firebase
Abrir: README_FIREBASE.md

# 2. GitHub
Abrir: guia-github.html

# 3. Probar
Abrir: login.html
```

---

## 💡 TIPS

✅ Commits frecuentes  
✅ Mensajes descriptivos  
✅ Push al final del día  
✅ Usar .gitignore  
✅ Leer documentación  

❌ No subir credenciales  
❌ No force push  
❌ No commits gigantes  

---

## 📞 AYUDA

```
Firebase: README_FIREBASE.md
GitHub: INSTRUCCIONES_GITHUB.md
Git: COMANDOS_GIT.md
Visual: guia-github.html
Índice: INDICE_DOCUMENTACION.md
```

---

**© 2025 - José Manuel González Vargas**




