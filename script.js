// Initialiser le canvas de signature
const canvas = document.getElementById('signature-pad');
const ctx = canvas.getContext('2d');
let drawing = false;

canvas.addEventListener('mousedown', () => {
    drawing = true;
});
canvas.addEventListener('mouseup', () => {
    drawing = false;
    ctx.beginPath();
});
canvas.addEventListener('mousemove', draw);

function draw(event) {
    if (!drawing) return;
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#000';

    ctx.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
}

// Effacer la signature
document.getElementById('clear').addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// Envoyer le document signé
document.getElementById('send').addEventListener('click', () => {
    alert('Document envoyé avec la signature.');
    // Implémenter la logique d'envoi ici
});

// Télécharger le document signé
document.getElementById('download').addEventListener('click', () => {
    const link = document.createElement('a');
    link.download = 'document-signe.png';
    link.href = canvas.toDataURL();
    link.click();
});

// Imprimer le document signé
document.getElementById('print').addEventListener('click', () => {
    window.print();
});

// Annuler la signature (rafraîchir la page)
document.getElementById('cancel').addEventListener('click', () => {
    location.reload();
});