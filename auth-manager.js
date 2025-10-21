// auth-manager.js - Sistema de autenticación y gestión de usuarios
// Para proyecto: Cálculo Integral

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc, updateDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCWi_ko-0i-esAuNiO5EIQe-gThnQ1-iaM",
  authDomain: "calculointegral-2601b.firebaseapp.com",
  projectId: "calculointegral-2601b",
  storageBucket: "calculointegral-2601b.firebasestorage.app",
  messagingSenderId: "818910932073",
  appId: "1:818910932073:web:b7e2e4bbd4033d250386f8",
  measurementId: "G-BBH4XLGFM3"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// ============================================
// FUNCIÓN: CREAR ESTRUCTURA DE USUARIO EN FIRESTORE
// ============================================
async function crearEstructuraUsuario(userId, email, displayName = null) {
  try {
    const userRef = doc(db, 'users', userId);
    
    // Verificar si el usuario ya existe
    const docSnap = await getDoc(userRef);
    if (docSnap.exists()) {
      console.log('El usuario ya existe en Firestore');
      return;
    }
    
    // Crear estructura del documento de usuario
    const userData = {
      email: email,
      displayName: displayName || email.split('@')[0], // Usar parte del email si no hay nombre
      createdAt: serverTimestamp(),
      courseAccess: {
        calculoIntegral: true,
        calculoDiferencial: false
      },
      progress: {
        modulo1: 0,  // Antiderivadas
        modulo2: 0,  // Integral Definida
        modulo3: 0,  // Técnicas de Integración
        modulo4: 0,  // Aplicaciones
        modulo5: 0   // Ecuaciones Diferenciales
      },
      lastActivity: serverTimestamp()
    };
    
    // Guardar en Firestore
    await setDoc(userRef, userData);
    console.log('✅ Estructura de usuario creada en Firestore');
    return userData;
    
  } catch (error) {
    console.error('❌ Error al crear estructura de usuario:', error);
    throw error;
  }
}

// ============================================
// FUNCIÓN: REGISTRAR NUEVO USUARIO
// ============================================
async function registrarUsuario(email, password, displayName = null) {
  try {
    // Crear usuario en Authentication
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    console.log('✅ Usuario creado en Authentication:', user.uid);
    
    // Crear estructura en Firestore
    await crearEstructuraUsuario(user.uid, email, displayName);
    
    return {
      success: true,
      user: user,
      message: 'Usuario registrado exitosamente'
    };
    
  } catch (error) {
    console.error('❌ Error en registro:', error.code, error.message);
    
    let mensaje = 'Error al registrar usuario';
    switch (error.code) {
      case 'auth/email-already-in-use':
        mensaje = 'Este email ya está registrado';
        break;
      case 'auth/invalid-email':
        mensaje = 'Email inválido';
        break;
      case 'auth/weak-password':
        mensaje = 'La contraseña debe tener al menos 6 caracteres';
        break;
    }
    
    return {
      success: false,
      error: error,
      message: mensaje
    };
  }
}

// ============================================
// FUNCIÓN: INICIAR SESIÓN
// ============================================
async function iniciarSesion(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    // Actualizar última actividad
    const userRef = doc(db, 'users', user.uid);
    await updateDoc(userRef, {
      lastActivity: serverTimestamp()
    });
    
    console.log('✅ Sesión iniciada:', user.email);
    
    return {
      success: true,
      user: user,
      message: 'Sesión iniciada exitosamente'
    };
    
  } catch (error) {
    console.error('❌ Error en login:', error.code);
    
    let mensaje = 'Error al iniciar sesión';
    switch (error.code) {
      case 'auth/user-not-found':
        mensaje = 'Usuario no encontrado';
        break;
      case 'auth/wrong-password':
        mensaje = 'Contraseña incorrecta';
        break;
      case 'auth/invalid-email':
        mensaje = 'Email inválido';
        break;
      case 'auth/invalid-credential':
        mensaje = 'Credenciales inválidas';
        break;
    }
    
    return {
      success: false,
      error: error,
      message: mensaje
    };
  }
}

// ============================================
// FUNCIÓN: CERRAR SESIÓN
// ============================================
async function cerrarSesion() {
  try {
    await signOut(auth);
    console.log('✅ Sesión cerrada');
    return { success: true };
  } catch (error) {
    console.error('❌ Error al cerrar sesión:', error);
    return { success: false, error: error };
  }
}

// ============================================
// FUNCIÓN: OBTENER DATOS DEL USUARIO
// ============================================
async function obtenerDatosUsuario(userId) {
  try {
    const userRef = doc(db, 'users', userId);
    const docSnap = await getDoc(userRef);
    
    if (docSnap.exists()) {
      return {
        success: true,
        data: docSnap.data()
      };
    } else {
      console.log('Usuario no encontrado en Firestore');
      return {
        success: false,
        message: 'Usuario no encontrado'
      };
    }
  } catch (error) {
    console.error('❌ Error al obtener datos:', error);
    return {
      success: false,
      error: error
    };
  }
}

// ============================================
// FUNCIÓN: ACTUALIZAR PROGRESO
// ============================================
async function actualizarProgreso(userId, modulo, porcentaje) {
  try {
    const userRef = doc(db, 'users', userId);
    
    await updateDoc(userRef, {
      [`progress.${modulo}`]: porcentaje,
      lastActivity: serverTimestamp()
    });
    
    console.log(`✅ Progreso actualizado: ${modulo} → ${porcentaje}%`);
    return { success: true };
    
  } catch (error) {
    console.error('❌ Error al actualizar progreso:', error);
    return { success: false, error: error };
  }
}

// ============================================
// FUNCIÓN: VERIFICAR ACCESO AL CURSO
// ============================================
async function verificarAccesoCurso(userId, nombreCurso = 'calculoIntegral') {
  try {
    const result = await obtenerDatosUsuario(userId);
    
    if (result.success && result.data.courseAccess) {
      return result.data.courseAccess[nombreCurso] === true;
    }
    
    return false;
  } catch (error) {
    console.error('❌ Error al verificar acceso:', error);
    return false;
  }
}

// ============================================
// OBSERVER: ESTADO DE AUTENTICACIÓN
// ============================================
function observarEstadoAuth(callback) {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      // Usuario autenticado
      const datos = await obtenerDatosUsuario(user.uid);
      callback({
        autenticado: true,
        usuario: user,
        datos: datos.success ? datos.data : null
      });
    } else {
      // Usuario no autenticado
      callback({
        autenticado: false,
        usuario: null,
        datos: null
      });
    }
  });
}

// ============================================
// EXPORTAR FUNCIONES
// ============================================
export {
  auth,
  db,
  registrarUsuario,
  iniciarSesion,
  cerrarSesion,
  obtenerDatosUsuario,
  actualizarProgreso,
  verificarAccesoCurso,
  observarEstadoAuth,
  crearEstructuraUsuario
};

