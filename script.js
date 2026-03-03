// Configuration
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzGX7qQl2LO3Qk_vBDKRzJZlRTgzxC80kMKIHbdtDKjKXcddjBQ_EOhC5GvDa4wFqNfiw/exec'; // Replace with your Google Apps Script Web App URL

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    setupForm();
});

function setupForm() {
    const form = document.getElementById('rsvp-form');
    form.addEventListener('submit', handleSubmit);
}

function addAttendee() {
    const attendeesList = document.getElementById('attendees-list');
    const attendeeRow = document.createElement('div');
    attendeeRow.className = 'attendee-row';
    attendeeRow.innerHTML = `
        <input type="text" class="attendee-name" placeholder="Nombre Completo" required>
        <select class="attendee-type">
            <option value="adult">Adulto</option>
            <option value="child">Niño/a</option>
        </select>
        <button type="button" class="remove-btn" onclick="removeAttendee(this)">✕</button>
    `;
    attendeesList.appendChild(attendeeRow);
    updateRemoveButtons();
}

function removeAttendee(button) {
    const row = button.closest('.attendee-row');
    row.remove();
    updateRemoveButtons();
}

function updateRemoveButtons() {
    const rows = document.querySelectorAll('.attendee-row');
    rows.forEach((row, index) => {
        const removeBtn = row.querySelector('.remove-btn');
        removeBtn.disabled = rows.length === 1;
    });
}

async function handleSubmit(e) {
    e.preventDefault();
    
    const submitBtn = e.target.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = '⏳ Enviando...';
    submitBtn.disabled = true;
    
    const groupName = document.getElementById('group-name').value;
    const email = document.getElementById('email').value;
    const notes = document.getElementById('notes').value;
    
    // Collect all attendees
    const attendeeRows = document.querySelectorAll('.attendee-row');
    const attendees = [];
    
    attendeeRows.forEach(row => {
        const name = row.querySelector('.attendee-name').value.trim();
        const type = row.querySelector('.attendee-type').value;
        if (name) {
            attendees.push({ name, type });
        }
    });
    
    if (attendees.length === 0) {
        alert('Por favor agrega al menos un asistente.');
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        return;
    }
    
    // Create RSVP object
    const rsvp = {
        id: Date.now(),
        groupName,
        email,
        notes,
        attendees,
        timestamp: new Date().toISOString()
    };
    
    // Send to Google Sheets
    const success = await sendToGoogleSheets(rsvp);
    
    if (success) {
        // Show success message
        document.getElementById('rsvp-form').style.display = 'none';
        document.getElementById('success-message').style.display = 'block';
        
        // Reset form after 3 seconds
        setTimeout(() => {
            document.getElementById('rsvp-form').reset();
            document.getElementById('success-message').style.display = 'none';
            document.getElementById('rsvp-form').style.display = 'block';
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            
            // Reset attendees list to one row
            const attendeesList = document.getElementById('attendees-list');
            attendeesList.innerHTML = `
                <div class="attendee-row">
                    <input type="text" class="attendee-name" placeholder="Nombre Completo" required>
                    <select class="attendee-type">
                        <option value="adult">Adulto</option>
                        <option value="child">Niño/a</option>
                    </select>
                    <button type="button" class="remove-btn" onclick="removeAttendee(this)" disabled>✕</button>
                </div>
            `;
        }, 3000);
    } else {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
}

async function sendToGoogleSheets(rsvp) {
    // Check if Google Script URL is configured
    if (!GOOGLE_SCRIPT_URL || GOOGLE_SCRIPT_URL === 'YOUR_GOOGLE_SCRIPT_URL_HERE') {
        alert('Error de configuración: Google Sheets no está configurado. Por favor contacta al organizador.');
        return false;
    }
    
    try {
        // Prepare data for Google Sheets
        const formData = new FormData();
        formData.append('groupName', rsvp.groupName);
        formData.append('email', rsvp.email);
        formData.append('notes', rsvp.notes);
        formData.append('attendees', JSON.stringify(rsvp.attendees));
        formData.append('timestamp', rsvp.timestamp);
        
        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            body: formData
        });
        
        const result = await response.json();
        
        if (result.status === 'success') {
            console.log('✓ Confirmación enviada a Google Sheets exitosamente');
            return true;
        } else {
            throw new Error(result.message || 'Error al enviar a Google Sheets');
        }
    } catch (error) {
        console.error('Error al enviar a Google Sheets:', error);
        alert('Hubo un problema al enviar tu confirmación. Por favor intenta nuevamente o contacta al organizador.');
        return false;
    }
}

// Personalizar detalles de la fiesta (opcional - puedes editarlos en el HTML o aquí)
function customizePartyDetails(childName, date, time, location) {
    document.getElementById('birthday-child-name').textContent = `Cumpleaños de ${childName}`;
    document.getElementById('party-date').textContent = date;
    document.getElementById('party-time').textContent = time;
    document.getElementById('party-location').textContent = location;
}

// Ejemplo: Descomenta y personaliza la línea de abajo
customizePartyDetails(
    "Marilú", 
    "Sábado 14 de Marzo",
    "14:00 - 17:30", 
    "Centro Recreativo del Ejército Villa Martelli");
