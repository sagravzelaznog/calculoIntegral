// Configuración de Firebase para Cálculo Integral
// Este archivo debe ser configurado con las credenciales reales de tu proyecto Firebase

const firebaseConfig = {
    // Reemplaza estos valores con los de tu proyecto Firebase
    apiKey: "tu-api-key-aqui",
    authDomain: "tu-proyecto.firebaseapp.com",
    projectId: "tu-proyecto-id",
    storageBucket: "tu-proyecto.appspot.com",
    messagingSenderId: "123456789",
    appId: "tu-app-id"
};

// Inicializar Firebase
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Exportar para uso en otros archivos
window.firebaseApp = app;
window.firebaseAuth = auth;
window.firebaseDb = db;

// Configuración específica del curso
const courseConfig = {
    courseName: "Cálculo Integral",
    courseCode: "CALC_INT",
    modules: [
        {
            id: "modulo1",
            name: "Antiderivadas e Integrales Indefinidas",
            duration: "2 semanas",
            topics: ["concepto", "inmediatas", "tecnicas"]
        },
        {
            id: "modulo2", 
            name: "Sumas de Riemann e Integral Definida",
            duration: "3 semanas",
            topics: ["sumas_riemann", "integral_definida", "teorema_fundamental"]
        },
        {
            id: "modulo3",
            name: "Técnicas de Integración", 
            duration: "4 semanas",
            topics: ["sustitucion", "partes", "fracciones_parciales", "trigonometricas"]
        },
        {
            id: "modulo4",
            name: "Aplicaciones de la Integral",
            duration: "4 semanas", 
            topics: ["areas", "volumenes", "fisica", "otras_aplicaciones"]
        },
        {
            id: "modulo5",
            name: "Ecuaciones Diferenciales",
            duration: "3 semanas",
            topics: ["introduccion", "primer_orden", "aplicaciones"]
        }
    ],
    assessment: {
        continuousEvaluation: 40,
        partialExams: 60,
        passingGrade: 70
    }
};

window.courseConfig = courseConfig;
