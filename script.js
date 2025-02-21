window.addEventListener("scroll" , function() {
    var header =document.querySelector("header");
    header.classList.toggle("abajo",window.scrollY>0);
    
   })

// Importar las funciones necesarias de Firebase

// Importar las funciones necesarias de Firebase
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js';
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js';

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAvCxDc8L72v-ARubhLXpm-smVBGYEPoRY",
  authDomain: "web-vive-health.firebaseapp.com",
  projectId: "web-vive-health",
  storageBucket: "web-vive-health.firebasestorage.app",
  messagingSenderId: "712764386927",
  appId: "1:712764386927:web:9a0521d27120c5c168679a",
  measurementId: "G-3JSSGGS6TL"
};


// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firestore
const db = getFirestore(app);

// Función para manejar el envío del formulario
document.addEventListener('DOMContentLoaded', () => {
  const reservaForm = document.getElementById('reservar-cita');
  
  reservaForm.addEventListener('submit', async (e) => {
    e.preventDefault(); // Evitar que el formulario se envíe de manera predeterminada

    // Obtener los valores del formulario
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const correo = document.getElementById('correo').value;
    const packageSelect = document.getElementById('packageSelect').value;

    try {
      // Subir los datos a Firestore
      const docRef = await addDoc(collection(db, 'doctores'), {
        fecha: fecha,
        hora: hora,
        nombre: nombre,
        telefono: telefono,
        correo: correo,
        paquete: packageSelect,
        fechaCreacion: new Date()
      });

      console.log("Documento agregado con ID: ", docRef.id);

      // Mostrar el popup de éxito
      alert('¡Tu reserva ha sido procesada exitosamente!');

      // Limpiar el formulario
      reservaForm.reset();
    } catch (error) {
      console.error('Error al realizar la reserva:', error);
      alert('Hubo un error al procesar tu cita. Por favor, inténtalo nuevamente.');
    }
  });
});