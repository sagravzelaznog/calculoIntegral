# ⚡ COMANDOS GIT - GUÍA RÁPIDA

## 🚀 SUBIR PROYECTO POR PRIMERA VEZ

```bash
# 1. Navegar a tu carpeta
cd "C:\Users\admin\Documents\000 A PREPA\planeaciones especialidades\calculo\calculo integral"

# 2. Inicializar Git
git init

# 3. Configurar usuario (solo primera vez)
git config --global user.name "Tu Nombre"
git config --global user.email "tu-email@ejemplo.com"

# 4. Agregar todos los archivos
git add .

# 5. Hacer primer commit
git commit -m "🎉 Primer commit: Plataforma de Cálculo Integral con Firebase"

# 6. Conectar con GitHub (reemplaza TU_USUARIO)
git remote add origin https://github.com/TU_USUARIO/calculo-integral.git

# 7. Cambiar a rama main
git branch -M main

# 8. Subir a GitHub
git push -u origin main
```

---

## 📝 USO DIARIO (después del primer push)

```bash
# Ver qué cambió
git status

# Agregar cambios
git add .

# Hacer commit con mensaje
git commit -m "Descripción de tus cambios"

# Subir a GitHub
git push
```

---

## 🔄 COMANDOS MÁS COMUNES

### Ver estado:
```bash
git status
```

### Agregar archivos específicos:
```bash
git add archivo.html
git add *.js
git add carpeta/
```

### Ver historial:
```bash
git log
git log --oneline
```

### Ver diferencias:
```bash
git diff
git diff archivo.html
```

### Descargar cambios:
```bash
git pull
```

---

## 🆕 CREAR NUEVA RAMA

```bash
# Crear y cambiar a nueva rama
git checkout -b nueva-funcionalidad

# Trabajar en la rama...
git add .
git commit -m "Nueva funcionalidad"

# Subir rama
git push origin nueva-funcionalidad

# Volver a main
git checkout main

# Fusionar rama
git merge nueva-funcionalidad
```

---

## 🔙 DESHACER CAMBIOS

### Deshacer cambios no guardados:
```bash
git checkout -- archivo.html
```

### Deshacer último commit (manteniendo cambios):
```bash
git reset --soft HEAD~1
```

### Deshacer último commit (borrando cambios):
```bash
git reset --hard HEAD~1
```

### Deshacer archivo agregado (antes de commit):
```bash
git reset archivo.html
```

---

## 🏷️ CREAR VERSIONES (TAGS)

```bash
# Crear tag
git tag -a v1.0 -m "Versión 1.0"

# Subir tag
git push origin v1.0

# Subir todos los tags
git push --tags

# Ver tags
git tag
```

---

## 🔍 INFORMACIÓN

```bash
# Ver configuración
git config --list

# Ver repositorio remoto
git remote -v

# Ver ramas
git branch

# Ver quién modificó cada línea
git blame archivo.html
```

---

## 🛠️ CONFIGURACIÓN

```bash
# Configurar nombre
git config --global user.name "Tu Nombre"

# Configurar email
git config --global user.email "tu@email.com"

# Ver configuración
git config --list

# Cambiar editor
git config --global core.editor "code --wait"
```

---

## 📊 COMANDOS AVANZADOS

### Stash (guardar temporalmente):
```bash
# Guardar cambios sin commit
git stash

# Ver stashes
git stash list

# Recuperar último stash
git stash pop

# Aplicar stash específico
git stash apply stash@{0}
```

### Cherry-pick (aplicar commit específico):
```bash
git cherry-pick abc123
```

### Rebase (reorganizar commits):
```bash
git rebase main
```

---

## 🌐 GITHUB PAGES

```bash
# Asegurarse de estar en main
git checkout main

# Subir cambios
git push

# GitHub Pages se actualiza automáticamente
# Ver en: https://TU_USUARIO.github.io/calculo-integral/
```

---

## 🐛 SOLUCIÓN DE PROBLEMAS

### Error: "Updates were rejected"
```bash
git pull origin main --rebase
git push
```

### Error: "Permission denied"
```bash
# Usar HTTPS en lugar de SSH
git remote set-url origin https://github.com/TU_USUARIO/calculo-integral.git
```

### Error: "fatal: not a git repository"
```bash
cd "ruta/correcta"
git init
```

### Olvidé hacer commit antes de push:
```bash
# No se puede push sin commit
git add .
git commit -m "Mensaje de commit"
git push
```

---

## 📋 PLANTILLAS DE COMMIT

```bash
# Nueva funcionalidad
git commit -m "✨ Agregado módulo de ecuaciones diferenciales"

# Corrección de bug
git commit -m "🐛 Corregido error en validación de login"

# Documentación
git commit -m "📝 Actualizada guía de instalación"

# Mejora de código
git commit -m "♻️ Refactorizado sistema de autenticación"

# Actualización de dependencias
git commit -m "⬆️ Actualizado Firebase a versión 10.0"

# Cambios visuales
git commit -m "💄 Mejorado diseño del panel de usuario"

# Performance
git commit -m "⚡ Optimizada carga de módulos"

# Seguridad
git commit -m "🔒 Agregadas reglas de seguridad en Firestore"
```

---

## 🎯 FLUJO COMPLETO

```bash
# 1. Abrir terminal en tu proyecto
cd "C:\Users\admin\Documents\000 A PREPA\planeaciones especialidades\calculo\calculo integral"

# 2. Ver qué cambió
git status

# 3. Revisar diferencias (opcional)
git diff

# 4. Agregar cambios
git add .

# 5. Verificar qué se agregará
git status

# 6. Hacer commit
git commit -m "Descripción de cambios"

# 7. Subir a GitHub
git push

# 8. Verificar en GitHub web
```

---

## 💡 CONSEJOS

### ✅ HACER:
- Commits frecuentes
- Mensajes descriptivos
- Push al final del día
- Revisar con `git status` antes de commit
- Pull antes de empezar a trabajar

### ❌ EVITAR:
- Commits muy grandes
- Mensajes vagos ("fix", "update")
- Subir archivos sensibles
- Force push sin necesidad
- Commits directos a main (en proyectos colaborativos)

---

## 📞 AYUDA

```bash
# Ver ayuda de comando
git help add
git help commit
git help push

# Ayuda breve
git add --help
git commit --help
```

---

## 🔗 ENLACES ÚTILES

- **Git Docs:** https://git-scm.com/doc
- **GitHub Guides:** https://guides.github.com/
- **Git Cheat Sheet:** https://training.github.com/downloads/github-git-cheat-sheet/

---

**🎯 Comando más usado del día:**
```bash
git add . && git commit -m "Actualización" && git push
```

**⚡ Para guardar rápido:**
```bash
# Windows PowerShell - Crear alias
function gs { git status }
function ga { git add . }
function gc { param($m) git commit -m $m }
function gp { git push }

# Uso:
gs       # Ver estado
ga       # Agregar todo
gc "msg" # Commit con mensaje
gp       # Push
```

