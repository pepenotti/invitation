# Guía de Despliegue en GitHub Pages

## Pasos para subir el sitio a GitHub

### 1. Crear el repositorio en GitHub

1. Ve a [GitHub](https://github.com) e inicia sesión
2. Haz clic en el botón **"+"** en la esquina superior derecha
3. Selecciona **"New repository"**
4. Configura el repositorio:
   - **Repository name**: `birthday-invitation` (o el nombre que prefieras)
   - **Description**: "Sitio de invitación para cumpleaños"
   - **Visibility**: Selecciona **Public** (necesario para GitHub Pages gratis)
   - **NO marques** "Initialize this repository with a README" (ya tenemos archivos)
5. Haz clic en **"Create repository"**

### 2. Conectar tu repositorio local con GitHub

Después de crear el repositorio, GitHub te mostrará comandos. Copia la URL del repositorio que aparece (algo como: `https://github.com/tu-usuario/birthday-invitation.git`)

Luego ejecuta estos comandos en la terminal (reemplaza la URL con la tuya):

```bash
# Configura tu información de Git (solo la primera vez)
git config --global user.name "Tu Nombre"
git config --global user.email "tu-email@ejemplo.com"

# Conecta con el repositorio remoto (reemplaza con tu URL)
git remote add origin https://github.com/TU-USUARIO/birthday-invitation.git

# Sube los archivos
git branch -M main
git push -u origin main
```

### 3. Activar GitHub Pages

1. En tu repositorio de GitHub, ve a **Settings** (Configuración)
2. En el menú lateral izquierdo, busca y haz clic en **Pages**
3. En la sección **"Source"** (Origen):
   - Selecciona la rama **main**
   - Selecciona la carpeta **/ (root)**
   - Haz clic en **Save**
4. Espera unos segundos y **recarga la página**
5. Verás un mensaje verde que dice: "Your site is live at https://TU-USUARIO.github.io/birthday-invitation/"

### 4. Acceder a tu sitio

Tu sitio estará disponible en:
```
https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/
```

Por ejemplo: `https://antoniofranchinotti.github.io/birthday-invitation/`

---

## ⚠️ IMPORTANTE: Configurar Google Sheets PRIMERO

**Antes de compartir el enlace**, asegúrate de:

1. Haber completado la configuración de Google Sheets (ver `SETUP.md`)
2. Haber probado el formulario y verificado que los datos llegan a la hoja
3. Haber compartido la hoja de Google Sheets con tu esposa

---

## Actualizar el sitio después de cambios

Cuando hagas cambios en los archivos, ejecuta:

```bash
git add .
git commit -m "Descripción de los cambios"
git push
```

El sitio se actualizará automáticamente en 1-2 minutos.

---

## Compartir el enlace de la invitación

Una vez que todo funcione, puedes compartir el enlace de tu sitio por:
- WhatsApp
- Email
- Redes sociales
- Tarjetas impresas con código QR (puedes generar uno en https://www.qr-code-generator.com/)

---

## Solución de Problemas

### El sitio no se ve bien / muestra errores 404
- Asegúrate de que todos los archivos estén en la carpeta raíz (no en subcarpetas)
- Verifica que `background.jpeg` esté en el mismo directorio que `index.html`
- Espera 2-3 minutos después de hacer push para que GitHub Pages se actualice

### El formulario no envía datos
- Revisa que hayas configurado la URL de Google Apps Script en `script.js`
- Verifica que el script de Google Apps esté desplegado como "Anyone" puede acceder
- Revisa la consola del navegador (F12) para ver errores

### GitHub Pages no aparece en Settings
- Asegúrate de que el repositorio sea **público**
- Verifica que hayas hecho push de los archivos

---

## Estadísticas de uso

Puedes ver cuántas personas visitan tu sitio en:
**Settings** → **Insights** → **Traffic**

---

## Backup de las confirmaciones

Siempre tendrás acceso a las confirmaciones en tu hoja de Google Sheets, y puedes:
1. Descargar como Excel (File → Download → Microsoft Excel)
2. Hacer una copia (File → Make a copy)
3. Compartir con quien necesites

