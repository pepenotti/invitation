# 🚀 Comandos Rápidos para Desplegar

## PASO 1: Configura tu identidad en Git (solo una vez)
```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu-email@ejemplo.com"
```

## PASO 2: Crea el repositorio en GitHub
1. Ve a: https://github.com/new
2. Nombre del repo: `birthday-invitation` (o el que quieras)
3. **Public** ✓
4. **NO** marques "Initialize with README"
5. Click "Create repository"

## PASO 3: Copia LA URL que GitHub te muestra
Ejemplo: `https://github.com/TU-USUARIO/birthday-invitation.git`

## PASO 4: Ejecuta estos comandos (reemplaza con TU URL)
```bash
git remote add origin https://github.com/TU-USUARIO/birthday-invitation.git
git branch -M main
git push -u origin main
```

## PASO 5: Activa GitHub Pages
1. Ve a tu repo en GitHub
2. Click en "Settings"
3. Click en "Pages" (menú izquierdo)
4. Source: **main** branch, **/ (root)** folder
5. Click "Save"
6. Espera 1 minuto y recarga la página

## ✅ Listo!
Tu sitio estará en:
```
https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/
```

---

## Para actualizar después:
```bash
git add .
git commit -m "Actualización"
git push
```

---

## ⚠️ NO OLVIDES:
- Configurar Google Sheets ANTES de compartir el enlace (ver SETUP.md)
- Probar que el formulario funcione
- Compartir la hoja con tu esposa
