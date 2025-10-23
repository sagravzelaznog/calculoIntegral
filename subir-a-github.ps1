# ========================================
# Script PowerShell: Subir Proyecto a GitHub
# ========================================
# Autor: José Manuel González Vargas
# Fecha: Octubre 2025
# Proyecto: Cálculo Integral
# ========================================

# Colores para mejor visualización
function Write-Step {
    param($Message)
    Write-Host "`n✅ $Message" -ForegroundColor Green
}

function Write-Info {
    param($Message)
    Write-Host "   $Message" -ForegroundColor Cyan
}

function Write-Warning {
    param($Message)
    Write-Host "⚠️  $Message" -ForegroundColor Yellow
}

function Write-Error-Custom {
    param($Message)
    Write-Host "❌ $Message" -ForegroundColor Red
}

# Banner
Write-Host @"
╔════════════════════════════════════════════╗
║   🚀 SUBIR PROYECTO A GITHUB              ║
║   Cálculo Integral - Plataforma Educativa ║
╚════════════════════════════════════════════╝
"@ -ForegroundColor Magenta

# ========================================
# PASO 1: Verificar Git
# ========================================
Write-Step "Verificando Git..."
try {
    $gitVersion = git --version
    Write-Info "Git encontrado: $gitVersion"
} catch {
    Write-Error-Custom "Git no está instalado"
    Write-Info "Descarga Git desde: https://git-scm.com/download/win"
    exit 1
}

# ========================================
# PASO 2: Solicitar datos
# ========================================
Write-Step "Configuración inicial"

# Usuario de GitHub
$username = Read-Host "`nIngresa tu nombre de usuario de GitHub"
if ([string]::IsNullOrWhiteSpace($username)) {
    Write-Error-Custom "Nombre de usuario requerido"
    exit 1
}

# Email
$email = Read-Host "Ingresa tu email"
if ([string]::IsNullOrWhiteSpace($email)) {
    Write-Error-Custom "Email requerido"
    exit 1
}

# Nombre completo
$fullName = Read-Host "Ingresa tu nombre completo"
if ([string]::IsNullOrWhiteSpace($fullName)) {
    $fullName = $username
}

# Nombre del repositorio
$repoName = Read-Host "Nombre del repositorio (por defecto: calculo-integral)"
if ([string]::IsNullOrWhiteSpace($repoName)) {
    $repoName = "calculo-integral"
}

# ========================================
# PASO 3: Configurar Git
# ========================================
Write-Step "Configurando Git..."
try {
    git config --global user.name "$fullName"
    git config --global user.email "$email"
    Write-Info "Configuración de Git completada"
} catch {
    Write-Error-Custom "Error al configurar Git"
    exit 1
}

# ========================================
# PASO 4: Verificar si ya es repositorio Git
# ========================================
Write-Step "Verificando repositorio..."
if (Test-Path ".git") {
    Write-Warning "Este directorio ya es un repositorio Git"
    $overwrite = Read-Host "¿Deseas reinicializar? (s/n)"
    if ($overwrite -eq "s" -or $overwrite -eq "S") {
        Remove-Item -Path ".git" -Recurse -Force
        Write-Info "Repositorio anterior eliminado"
    } else {
        Write-Info "Usando repositorio existente"
    }
}

# ========================================
# PASO 5: Inicializar Git
# ========================================
if (-not (Test-Path ".git")) {
    Write-Step "Inicializando repositorio Git..."
    git init
    Write-Info "Repositorio Git inicializado"
}

# ========================================
# PASO 6: Agregar archivos
# ========================================
Write-Step "Agregando archivos al repositorio..."
git add .
Write-Info "Archivos agregados"

# Mostrar estado
Write-Host "`n📊 Archivos que se subirán:" -ForegroundColor Cyan
git status --short

# ========================================
# PASO 7: Commit
# ========================================
Write-Step "Creando commit..."
$commitMessage = Read-Host "`nIngresa mensaje del commit (Enter para usar mensaje por defecto)"
if ([string]::IsNullOrWhiteSpace($commitMessage)) {
    $commitMessage = "🎉 Primer commit: Plataforma de Cálculo Integral con Firebase"
}

git commit -m "$commitMessage"
Write-Info "Commit creado: $commitMessage"

# ========================================
# PASO 8: Verificar repositorio remoto
# ========================================
Write-Step "Configurando repositorio remoto..."
$repoUrl = "https://github.com/$username/$repoName.git"

# Verificar si ya existe origin
$existingRemote = git remote get-url origin 2>$null
if ($existingRemote) {
    Write-Warning "Ya existe un repositorio remoto configurado: $existingRemote"
    $changeRemote = Read-Host "¿Deseas cambiarlo? (s/n)"
    if ($changeRemote -eq "s" -or $changeRemote -eq "S") {
        git remote remove origin
        git remote add origin $repoUrl
        Write-Info "Repositorio remoto actualizado"
    }
} else {
    git remote add origin $repoUrl
    Write-Info "Repositorio remoto agregado: $repoUrl"
}

# ========================================
# PASO 9: Cambiar a rama main
# ========================================
Write-Step "Configurando rama principal..."
git branch -M main
Write-Info "Rama 'main' configurada"

# ========================================
# PASO 10: Información pre-push
# ========================================
Write-Host "`n" -NoNewline
Write-Host "╔════════════════════════════════════════════╗" -ForegroundColor Yellow
Write-Host "║  ⚠️  IMPORTANTE: AUTENTICACIÓN             ║" -ForegroundColor Yellow
Write-Host "╚════════════════════════════════════════════╝" -ForegroundColor Yellow
Write-Host ""
Write-Warning "Necesitarás autenticarte en GitHub"
Write-Info "Usuario: $username"
Write-Info "Contraseña: Usa un Personal Access Token (NO tu contraseña)"
Write-Host ""
Write-Info "Crear token en: https://github.com/settings/tokens"
Write-Host ""

$continue = Read-Host "¿Continuar con git push? (s/n)"
if ($continue -ne "s" -and $continue -ne "S") {
    Write-Warning "Proceso cancelado"
    Write-Info "Tus archivos están preparados. Puedes hacer push más tarde con:"
    Write-Host "   git push -u origin main" -ForegroundColor Cyan
    exit 0
}

# ========================================
# PASO 11: Push a GitHub
# ========================================
Write-Step "Subiendo a GitHub..."
Write-Info "Repositorio: $repoUrl"

try {
    git push -u origin main
    
    # Si llegamos aquí, el push fue exitoso
    Write-Host "`n" -NoNewline
    Write-Host "╔════════════════════════════════════════════╗" -ForegroundColor Green
    Write-Host "║       🎉 ¡ÉXITO! PROYECTO SUBIDO          ║" -ForegroundColor Green
    Write-Host "╚════════════════════════════════════════════╝" -ForegroundColor Green
    Write-Host ""
    Write-Step "Tu proyecto está en GitHub:"
    Write-Host "   https://github.com/$username/$repoName" -ForegroundColor Cyan
    Write-Host ""
    
    # Preguntar sobre GitHub Pages
    $enablePages = Read-Host "¿Deseas habilitar GitHub Pages? (s/n)"
    if ($enablePages -eq "s" -or $enablePages -eq "S") {
        Write-Info "Para habilitar GitHub Pages:"
        Write-Info "1. Ve a: https://github.com/$username/$repoName/settings/pages"
        Write-Info "2. En 'Source', selecciona 'main' branch"
        Write-Info "3. Click en 'Save'"
        Write-Info "4. Tu sitio estará en: https://$username.github.io/$repoName/"
    }
    
} catch {
    Write-Error-Custom "Error al subir a GitHub"
    Write-Host ""
    Write-Warning "Posibles soluciones:"
    Write-Info "1. Verifica que el repositorio exista en GitHub"
    Write-Info "2. Verifica tus credenciales (usa Personal Access Token)"
    Write-Info "3. Verifica tu conexión a internet"
    Write-Host ""
    Write-Info "Repositorio esperado: $repoUrl"
    Write-Info "Crear repositorio: https://github.com/new"
    exit 1
}

# ========================================
# Comandos para uso futuro
# ========================================
Write-Host "`n" -NoNewline
Write-Host "╔════════════════════════════════════════════╗" -ForegroundColor Magenta
Write-Host "║     📝 COMANDOS PARA USO DIARIO           ║" -ForegroundColor Magenta
Write-Host "╚════════════════════════════════════════════╝" -ForegroundColor Magenta
Write-Host ""
Write-Host "Para subir cambios futuros:" -ForegroundColor Yellow
Write-Host "   git add ." -ForegroundColor Cyan
Write-Host "   git commit -m 'Descripción de cambios'" -ForegroundColor Cyan
Write-Host "   git push" -ForegroundColor Cyan
Write-Host ""
Write-Host "Comando rápido (todo en uno):" -ForegroundColor Yellow
Write-Host "   git add . && git commit -m 'Actualización' && git push" -ForegroundColor Cyan
Write-Host ""

# Guardar configuración
$configFile = "github-config.txt"
@"
Configuración GitHub
====================
Usuario: $username
Email: $email
Nombre: $fullName
Repositorio: $repoName
URL: https://github.com/$username/$repoName
Fecha: $(Get-Date -Format "yyyy-MM-dd HH:mm:ss")
"@ | Out-File -FilePath $configFile -Encoding UTF8

Write-Info "Configuración guardada en: $configFile"
Write-Host ""
Write-Host "✨ ¡Proceso completado exitosamente! ✨" -ForegroundColor Green
Write-Host ""



