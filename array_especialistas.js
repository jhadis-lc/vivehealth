const doctores = [
    {
        nombre: "Luis Fernández",
        imagen: "https://i.pinimg.com/736x/d3/3e/35/d33e35b84957ffd5d81cf8e64e1cba22.jpg ",
        colegiatura: "CMP123456",
        enfoque_terapeutico: "Cognitivo-Conductual",
        area_expertise: ["Ansiedad", " Depresión", " Estilos de Crianza", " Duelo"],
        experiencia_laboral: [" 5 años", "Psicoterapeuta con experiencia en atención a adolescentes y adultos, especializado en ansiedad y depresión.", "Ha trabajado en clínicas privadas y centros de salud mental, aplicando enfoques cognitivo-conductuales para la regulación emocional y la toma de decisiones."],
        estudios: "Maestría en Psicología Clínica"
    },


    {
        nombre: "María Gómez",
        imagen: "https://i.pinimg.com/736x/07/9c/d1/079cd19a666f5f6b9c8369b77ff04a75.jpg",
        colegiatura: "CMP234567",
        enfoque_terapeutico: "Psicoanálisis",
        area_expertise: ["Comprensión", " Abordaje de la ansiedad desde el inconsciente"],
        experiencia_laboral: ["8 años ", "Profesional con amplia trayectoria en terapia individual y grupal, enfocado en el manejo del estrés, la autoestima y el trauma.", "Ha colaborado con instituciones educativas y programas de salud ocupacional, brindando acompañamiento a personas con dificultades emocionales y laborales."],
        estudios: "Doctorado en Psicoterapia "
    },


    {
        nombre: "Carlos Pérez",
        imagen: "https://i.pinimg.com/736x/d7/4d/b7/d74db7ea8b9c94da386fc7ce58b9ec76.jpg",
        colegiatura: "CMP345678",
        enfoque_terapeutico: "Humanista",
        area_expertise: ["Trastornos de personalidad", " Trauma", " Habilidades sociales", " Regulación emocional"],
        experiencia_laboral: ["10 años", "Psicoterapeuta con experiencia en el tratamiento de trastornos de la personalidad, terapia de pareja y regulación emocional.", "Ha trabajado en hospitales y clínicas especializadas, combinando enfoques terapéuticos integrativos para mejorar el bienestar de sus pacientes."],
        estudios: "Especialización en Terapia Familiar"
    },
    {
        nombre: "Ana López",
        imagen: "https://i.pinimg.com/736x/4b/92/e4/4b92e4b396094b5bada485ffc8b0cfb4.jpg",
        colegiatura: "CMP456789",
        enfoque_terapeutico: "Gestalt",
        area_expertise: ["Mindfulness", " Desarrollo personal", " Control de impulsos", " Fobias"],
        experiencia_laboral: ["6 años", "Especialista en intervención en crisis y terapia breve, con experiencia en el manejo del duelo, fobias y trastornos del sueño.", "Ha trabajado en consulta privada y ha colaborado con programas de apoyo psicológico en comunidades vulnerables,Estudios: Especialización en Terapia Familiar"],
        estudios: "Especialización en Terapia Familiar",
    },
    {
        nombre: "Jorge Martínez",
        imagen: "https://s3-eu-west-1.amazonaws.com/doctoralia.es/doctor/12b8e9/12b8e94002f3a4d305397c546eea8c71_large.jpg",
        colegiatura: "CMP567890",
        enfoque_terapeutico: "Sistémico",
        area_expertise: ["Burnout", " Toma de decisiones", " Resiliencia ", " Apego"],
        experiencia_laboral: ["12 años", "Psicoterapeuta con sólida experiencia en el tratamiento de adicciones, autoconocimiento y trauma complejo.", "Ha desempeñado roles en hospitales psiquiátricos y centros de rehabilitación, además de ofrecer capacitaciones en manejo emocional y resiliencia"],
        estudios: "Maestría en Psicología de la Salud  "
    },
    {
        nombre: "Elena Ramírez",
        imagen: "https://usil-blog.s3.amazonaws.com/PROD/blog/image/psicologos-formacion.bilingue.jpg ",
        colegiatura: "CMP678901",
        enfoque_terapeutico: "Cognitivo-Conductual",
        area_expertise: ["Violencia intrafamiliar", " Trastornos alimenticios"," Manejo del enojo", " Autocuidado"],
        experiencia_laboral: ["7 años", "Profesional con experiencia en terapia infantil y juvenil, especializado en estilos de crianza y regulación emocional.", "Ha trabajado en colegios, brindando apoyo a niños con dificultades conductuales y emocionales, además de orientar a padres y docentes."],
        estudios: "Especialización en Psicoanálisis"
    },    
    {
        nombre: "Fernando Torres",
        imagen: "https://www.mundopsicologos.com/site/company/69/364265/logo/enrique-garrido-garrido_li1.png",
        colegiatura: "CMP789012",
        enfoque_terapeutico: "Psicoanálisis",
        area_expertise: ["Terapia infantil", " Bullying", " Trastornos del sueño", " Autoconocimiento"],
        experiencia_laboral: ["9 años", "Psicoterapeuta especializado en mindfulness, desarrollo personal y toma de decisiones.", "Ha trabajado con ejecutivos y profesionales en el manejo del estrés laboral y el equilibrio emocional, ofreciendo terapias individuales y talleres corporativos."],
        estudios: "Doctorado en Neurociencias"
    },
    {
        nombre: "Sofía Vargas",
        imagen: "https://api.hospitalmetropolitano.org/v1/assets/doctores/10540.jpg ",
        colegiatura: "CMP890123",
        enfoque_terapeutico: "Humanista",
        area_expertise: ["Neurodivergencia", " Identidad de género", " Duelo migratorio", " Inteligencia emocional"],
        experiencia_laboral: ["11 años", "Experto en terapia familiar y violencia intrafamiliar, con experiencia en el sector público y privado.", "Ha desarrollado programas de intervención para fortalecer vínculos familiares y ha capacitado a equipos interdisciplinarios en el abordaje de conflictos emocionales."],
        estudios: "Maestría en Terapia Cognitiva"
    },
    {
        nombre: "Ricardo Hernández",
        imagen: "https://s3.us-east-1.amazonaws.com/doctoralia.com.mx/doctor/895860/8958608f0c8712a98557c73836ed2995_large.jpg",
        colegiatura: "CMP901234",
        enfoque_terapeutico: "Gestalt",
        area_expertise: ["Psicología positiva", " Procrastinación", " Dependencia emocional", " Miedos irracionales"],
        experiencia_laboral: ["4 años", "Psicólogo con experiencia en psicoterapia breve y acompañamiento emocional para adolescentes y adultos jóvenes.", "Ha trabajado en clínicas privadas y programas de salud mental, enfocándose en autoestima, relaciones interpersonales y control de impulsos."],
        estudios: "Diplomado en Coaching Psicológico"
    },
    {
        nombre: "Valeria Castro",
        imagen: "https://www.physiofitlatina.it/wp-content/uploads/2020/07/psicologa.jpg",
        colegiatura: "CMP012345",
        enfoque_terapeutico: "Sistémico",
        area_expertise: ["Crisis existenciales", " Insatisfacción laboral", " Equilibrio emocional", " Terapia familiar"],
        experiencia_laboral: ["15 años", "Psicoterapeuta senior con trayectoria en neurodivergencia, crisis existenciales y salud mental comunitaria.", "Ha liderado equipos de intervención psicológica, participado en investigaciones sobre bienestar emocional y desarrollado programas de prevención en salud mental."],
        estudios: "Especialización en Terapia Sistémica"
    }
]

const filtrosAgrupados = {
    "salud-mental": ["ansiedad", "depresion", "burnout", "estrés", "trastornos del sueño", "regulación emocional", "manejo del enojo"],
    "desarrollo-personal": ["autoestima", "desarrollo personal", "autoconocimiento", "psicología positiva", "inteligencia emocional", "toma de decisiones", "equilibrio emocional"],
    "infancia-crianza": ["terapia infantil", "bullying", "estilos de crianza", "habilidades sociales", "apego"],
    "trauma-trastornos": ["trauma", "duelo", "crisis existenciales", "trastornos de personalidad", "fobias", "dependencia emocional", "trastornos alimenticios"],
    "familia-social": ["violencia intrafamiliar", "terapia familiar", "insatisfacción laboral", "duelo migratorio", "relaciones interpersonales"],
    "otros": ["mindfulness", "neurodivergencia", "identidad de género", "coaching psicológico", "procrastinación"]
};




let indice = 0; 
const cantidadPorCarga = 6;

function mostrarDetallesDoctor(doctor) {
    let detallesContainer = document.getElementById("detallesDoctor");

    if (!detallesContainer) {
        detallesContainer = document.createElement("div");
        detallesContainer.id = "detallesDoctor";
        detallesContainer.classList.add("doctor-detalles");
        document.body.appendChild(detallesContainer);
    }

    detallesContainer.innerHTML = `
        <div class="detalles-card">
            <img src="${doctor.imagen}" class="detalles-img" alt="${doctor.nombre}">
            <div class="detalles-info">
                <h3>${doctor.nombre}</h3>
                <p><strong>Enfoque Terapéutico:</strong> ${doctor.enfoque_terapeutico}</p>
                <p><strong>Colegiatura:</strong> ${doctor.colegiatura}</p>
                <p><strong>Experiencia:</strong> ${doctor.experiencia_laboral[0]}</p>
                <p><strong>Área de expertise:</strong> ${doctor.area_expertise}</p>
                <p><strong>Descripción:</strong> ${doctor.experiencia_laboral[1]}</p>
                <p><strong>Estudios:</strong> ${doctor.estudios}</p>
                <button class="btn-agendar" onclick="mostrarCalendario('${doctor.nombre}')">Agendar Cita</button>
                <div id="calendario-${doctor.nombre}" style="display: none;">
                    <!-- Aquí irá el calendario -->
                </div>
                <button class="back-button" onclick="document.getElementById('detallesDoctor').style.display='none';">← Volver</button>
            </div>
        </div>
    `;

    detallesContainer.style.display = "flex";
    detallesContainer.style.justifyContent = "center";
    detallesContainer.style.alignItems = "center";
    detallesContainer.scrollIntoView({ behavior: "smooth" });
}

    function mostrarCalendario(nombreDoctor) {
        console.log(nombreDoctor);
        const calendarioId = `calendario-${nombreDoctor}`;
        const calendarioDiv = document.getElementById(calendarioId);
        console.log(calendarioId);
    
        if (calendarioDiv) {
            calendarioDiv.style.display = "block";
    
            calendarioDiv.innerHTML = `
                <section class="banner">
                    <div class="card-contenedor">
                        <div class="card-img">
                            
                        </div>
                        
                        <div class="card-contenido">
                            
                            <h3>Agenda una cita</h3>
                            <form id="reservar-cita">
                                <div class="form-row" id="date">
                                    <label for="fecha">Fecha:</label>
                                    <input type="date" id="fecha" name="fecha" required>
                                </div>
    
                                <div class="form-row" id="time">
                                    <label for="hora">Hora:</label>
                                    <input type="time" id="hora" name="hora" min="10:00" max="24:00" required>
                                </div>
                                <div class="package-selection">
                                    <h3>Selecciona un paquete:</h3>
                                    <select id="packageSelect">
                                        <option value="">Elige un paquete</option>
                                        <option value="paquete1">Paquete individual - S/120</option>
                                        <option value="paquete2">Paquete pareja - S/180</option>
                                        <option value="paquete3">Paquete familiar - S/220 </option>
                                    </select>
                                </div>
                                <div id="packageDetails"></div>
    
                                <div class="form-row" id="nombre_telefono">
                                    <input type="text" placeholder="Nombre completo" id="nombre" name="nombre" required>
                                    <input type="text" placeholder="Teléfono" id="telefono" name="telefono" required>
                                </div>
    
                                <div class="form-row">
                                    <input type="email" placeholder="Correo" id="correo" name="correo">
                                    <input type="submit" value="RESERVAR CITA">
                                </div>
                            </form>
                            <div id="mensaje-confirmacion" style="display: none;">
                                <p>¡Cita reservada con éxito! Un asesor se comunicará contigo por WhatsApp en breve.</p>
                                <button id="volver-agendar">Volver a Agendar</button>
                            </div>
                        </div>
                    </div>
                </section>
            `;

            const packageSelect = document.getElementById('packageSelect');
            const packageDetails = document.getElementById('packageDetails');

            packageSelect.addEventListener('change', function() {
                const selectedPackage = this.value;
                let details = '';

                switch(selectedPackage) {
                    case 'paquete1':
                        details = 'Paquete individual: Para 1 persona. Incluye sesiones de 60 minutos';
                        break;
                    case 'paquete2':
                        details = 'Paquete pareja: Para 2 personas. Incluye sesiones de 120 minutos';
                        break;
                    case 'paquete3':
                        details = 'Paquete familiar: Para 3-4 personas. Incluye sesiones de 190 minutos';
                        break;
                    default:
                        details = 'Selecciona un paquete para ver los detalles.';
                }

                packageDetails.textContent = details;
            });

            // event listener al forms
            const formulario = calendarioDiv.querySelector("#reservar-cita");
            formulario.addEventListener("submit", function(event) {
                event.preventDefault(); // Evita que el formulario se envíe de inmediato
    
                const fecha = formulario.querySelector("#fecha").value;
                const hora = formulario.querySelector("#hora").value;
                const nombre = formulario.querySelector("#nombre").value;
                const telefono = formulario.querySelector("#telefono").value;
                const correo = formulario.querySelector("#correo").value;
                const packageSelect = formulario.querySelector("#packageSelect").value;
                
    
                // Mensaje de confirmación
                alert("¡Cita reservada con éxito! Un asesor se comunicará contigo por WhatsApp en breve.");
    
                // Redirigir a WhatsApp (opcional)
                const mensajeWhatsApp = `Hola Vive Health, quiero confirmar mi cita el ${fecha} a la(s) ${hora} con el doctor(a) ${nombreDoctor}. Mi nombre es ${nombre} y mi número es ${telefono}.`;
                const numeroWhatsApp = "+51960395933"; // número de WhatsApp del asesor
                const enlaceWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensajeWhatsApp)}`;
                window.open(enlaceWhatsApp, "_blank");
    
                // Oculta el formulario
                formulario.style.display = 'none';
                
                // Muestra el mensaje de confirmación y el botón de volver
                const mensajeConfirmacion = calendarioDiv.querySelector("#mensaje-confirmacion");
                mensajeConfirmacion.style.display = 'block';
    
                console.log("Datos de la reserva:", {
                    fecha,
                    hora,
                    nombre,
                    telefono,
                    correo,
                    packageSelect
                });
    
            });
    
            // Event listener para volver a agendar
            const botonVolver = calendarioDiv.querySelector("#volver-agendar");
            botonVolver.addEventListener("click", function() {
                calendarioDiv.querySelector("#mensaje-confirmacion").style.display = 'none';
                formulario.style.display = 'block'; // Muestra nuevamente el formulario
            });
    
            // Ocultar los textos dentro de detalles-info, excepto el nombre y la imagen
            let detallesInfo = document.querySelector('.detalles-info');
            if (detallesInfo) {
                detallesInfo.querySelectorAll('p, strong').forEach(el => el.style.display = 'none');
            }
    
            // Ocultar la imagen del doctor
            let doctorImg = document.querySelector('.detalles-img');
            if (doctorImg) {
                doctorImg.style.display = 'none';
            }
    
            // Ocultar el botón "Agendar Cita"
            const botonAgendar = document.querySelector(`[onclick="mostrarCalendario('${nombreDoctor}')"]`);
            if (botonAgendar) {
                botonAgendar.style.display = 'none';
            }
            // Agregar la clase active a detalles-info
            detallesInfo.classList.add('active');
    
        }
    }
    

function mostrarDoctores(lista = doctores) {
    const contenedor = document.getElementById("doctorList");

    let cantidadMostrada = 0;
    const doctoresAMostrar = lista.slice(indice, indice + cantidadPorCarga); 
    
    doctoresAMostrar.forEach(doc => {
        const card = document.createElement("div");
        card.classList.add("card", "doctor-card");
        card.style.width = "18rem";

        card.innerHTML = `
            <img src="${doc.imagen}" class="doctor-img" alt="${doc.nombre}">
            <div class="card-body">
                <h5 class="card-title">${doc.nombre}</h5>
                <p class="card-text">${doc.enfoque_terapeutico}</p>
                <button class="btn btn-primary" onclick="mostrarDetallesDoctor(${JSON.stringify(doc)})">Ver Detalles</button>
            </div>`;

        card.addEventListener("click", () => mostrarDetallesDoctor(doc));

        contenedor.appendChild(card);
        cantidadMostrada++;
    });

    indice += cantidadPorCarga;

    document.getElementById("verMas").style.display = (indice < lista.length) ? "block" : "none";
}

function filtrarDoctores() {
    const expertiseSeleccionado = document.getElementById("filtroExpertise").value;
    const enfoqueTerapeutico = document.getElementById("EnfoqueTrp").value;
    const experienciaLaboral = document.getElementById("experienciaLab").value;
    let doctoresFiltrados = doctores;

    if (expertiseSeleccionado !== "todos") {
        const categorias = filtrosAgrupados[expertiseSeleccionado];
        doctoresFiltrados = doctores.filter(doc => doc.area_expertise.some(area => categorias.includes(area.toLowerCase()))
        );
    }
    if(enfoqueTerapeutico !== "Elige una opción"){
    doctoresFiltrados = doctoresFiltrados.filter( doc => doc.enfoque_terapeutico === enfoqueTerapeutico
        );
    }
    if(experienciaLaboral !== "Elige una opción"){
        doctoresFiltrados = doctoresFiltrados.filter( doc => {
        
        const añosExperiencia = parseInt(doc.experiencia_laboral[0]);

        if (experienciaLaboral === "0-5") {
            return añosExperiencia >= 0 && añosExperiencia <= 5;
        } else if (experienciaLaboral === "6-10") {
            return añosExperiencia >= 6 && añosExperiencia <= 10;
        } else if (experienciaLaboral === "11-15") {
            return añosExperiencia >= 11 && añosExperiencia <= 15;
        } else if (experienciaLaboral === "16+") {
            return añosExperiencia > 15;
        }
    });
        }

        indice = 0; 
    const contenedor = document.getElementById("doctorList");
    contenedor.innerHTML = ""; 

    mostrarDoctores(doctoresFiltrados);
}

document.getElementById("btnFiltrar").addEventListener("click", filtrarDoctores);

document.getElementById("verMas").addEventListener("click", function() {
    mostrarDoctores(); // Llama a mostrarDoctores sin argumentos
});

mostrarDoctores();




