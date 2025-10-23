# MÓDULO 3: TÉCNICAS DE INTEGRACIÓN
## Desarrollo Didáctico Detallado

---

## INTRODUCCIÓN AL MÓDULO

### 🎯 Objetivo General
Dominar las técnicas avanzadas de integración para resolver integrales que no son inmediatas, desarrollando la capacidad de reconocer patrones y aplicar estrategias específicas según el tipo de función a integrar.

### 📚 Prerrequisitos
- Dominio de integrales inmediatas (Módulo 1)
- Conocimiento del Teorema Fundamental del Cálculo (Módulo 2)
- Manejo de identidades trigonométricas
- Álgebra básica y factorización

### 🧠 Metodología de Aprendizaje
Este módulo utiliza un enfoque **progresivo** donde cada técnica se presenta con:
1. **Fundamento teórico** claro y conciso
2. **Ejemplos guiados** paso a paso
3. **Ejercicios progresivos** de dificultad creciente
4. **Casos especiales** y trucos útiles
5. **Aplicaciones prácticas** en problemas reales

---

## 3.1 INTEGRACIÓN POR SUSTITUCIÓN
**Duración:** 4 horas

### 📖 Fundamentos Teóricos

La **integración por sustitución** es el equivalente de la regla de la cadena para la integración. Si tenemos una integral de la forma:

$$\int f(g(x)) \cdot g'(x) \, dx$$

Podemos hacer la sustitución $u = g(x)$, entonces $du = g'(x) \, dx$, y la integral se convierte en:

$$\int f(u) \, du$$

### 🔍 Reconocimiento de Patrones

**Patrón 1: Derivada interna presente**
$$\int f(g(x)) \cdot g'(x) \, dx \quad \Rightarrow \quad u = g(x)$$

**Patrón 2: Función compuesta**
$$\int f(ax + b) \, dx \quad \Rightarrow \quad u = ax + b$$

**Patrón 3: Potencias de funciones**
$$\int [f(x)]^n \cdot f'(x) \, dx \quad \Rightarrow \quad u = f(x)$$

### 📝 Ejemplos Paso a Paso

#### Ejemplo 1: Sustitución Básica
**Problema:** $\int (2x + 3)^4 \cdot 2 \, dx$

**Solución paso a paso:**

**Paso 1:** Identificar la función interna
- Función interna: $g(x) = 2x + 3$
- Derivada: $g'(x) = 2$

**Paso 2:** Hacer la sustitución
- Sea $u = 2x + 3$
- Entonces $du = 2 \, dx$

**Paso 3:** Reescribir la integral
$$\int (2x + 3)^4 \cdot 2 \, dx = \int u^4 \, du$$

**Paso 4:** Integrar
$$\int u^4 \, du = \frac{u^5}{5} + C$$

**Paso 5:** Sustituir de vuelta
$$\frac{u^5}{5} + C = \frac{(2x + 3)^5}{5} + C$$

**✅ Verificación:** Derivando $\frac{(2x + 3)^5}{5} + C$ obtenemos $(2x + 3)^4 \cdot 2$

---

#### Ejemplo 2: Sustitución con Función Trigonométrica
**Problema:** $\int \sin(3x) \cos(3x) \, dx$

**Solución paso a paso:**

**Paso 1:** Identificar el patrón
- Podemos usar $\sin(3x)$ como función interna
- Su derivada es $3\cos(3x)$
- Pero tenemos $\cos(3x)$, no $3\cos(3x)$

**Paso 2:** Ajustar la integral
$$\int \sin(3x) \cos(3x) \, dx = \frac{1}{3} \int \sin(3x) \cdot 3\cos(3x) \, dx$$

**Paso 3:** Hacer la sustitución
- Sea $u = \sin(3x)$
- Entonces $du = 3\cos(3x) \, dx$

**Paso 4:** Integrar
$$\frac{1}{3} \int u \, du = \frac{1}{3} \cdot \frac{u^2}{2} + C = \frac{u^2}{6} + C$$

**Paso 5:** Sustituir de vuelta
$$\frac{u^2}{6} + C = \frac{\sin^2(3x)}{6} + C$$

---

#### Ejemplo 3: Sustitución con Función Exponencial
**Problema:** $\int x e^{x^2} \, dx$

**Solución paso a paso:**

**Paso 1:** Identificar la función interna
- Función interna: $g(x) = x^2$
- Derivada: $g'(x) = 2x$
- Tenemos $x$, necesitamos $2x$

**Paso 2:** Ajustar la integral
$$\int x e^{x^2} \, dx = \frac{1}{2} \int e^{x^2} \cdot 2x \, dx$$

**Paso 3:** Hacer la sustitución
- Sea $u = x^2$
- Entonces $du = 2x \, dx$

**Paso 4:** Integrar
$$\frac{1}{2} \int e^u \, du = \frac{1}{2} e^u + C$$

**Paso 5:** Sustituir de vuelta
$$\frac{1}{2} e^u + C = \frac{1}{2} e^{x^2} + C$$

---

### 🔄 Sustitución en Integrales Definidas

Cuando trabajamos con integrales definidas, tenemos **dos opciones**:

#### Opción 1: Cambiar los límites de integración
$$\int_a^b f(g(x)) \cdot g'(x) \, dx = \int_{g(a)}^{g(b)} f(u) \, du$$

#### Opción 2: Sustituir de vuelta y usar límites originales
$$\int_a^b f(g(x)) \cdot g'(x) \, dx = \left[ F(g(x)) \right]_a^b$$

#### Ejemplo: Integral Definida
**Problema:** $\int_0^1 x(1 + x^2)^3 \, dx$

**Solución usando cambio de límites:**

**Paso 1:** Identificar la sustitución
- Sea $u = 1 + x^2$
- Entonces $du = 2x \, dx$
- Por tanto $x \, dx = \frac{du}{2}$

**Paso 2:** Cambiar límites
- Cuando $x = 0$: $u = 1 + 0^2 = 1$
- Cuando $x = 1$: $u = 1 + 1^2 = 2$

**Paso 3:** Reescribir la integral
$$\int_0^1 x(1 + x^2)^3 \, dx = \int_1^2 u^3 \cdot \frac{du}{2} = \frac{1}{2} \int_1^2 u^3 \, du$$

**Paso 4:** Integrar
$$\frac{1}{2} \int_1^2 u^3 \, du = \frac{1}{2} \left[ \frac{u^4}{4} \right]_1^2$$

**Paso 5:** Evaluar
$$\frac{1}{2} \left[ \frac{u^4}{4} \right]_1^2 = \frac{1}{2} \left( \frac{16}{4} - \frac{1}{4} \right) = \frac{1}{2} \cdot \frac{15}{4} = \frac{15}{8}$$

---

### 🎯 Ejercicios Prácticos Progresivos

#### Nivel Básico
1. $\int (3x + 2)^5 \, dx$
2. $\int \cos(2x) \, dx$
3. $\int e^{4x} \, dx$
4. $\int \frac{1}{2x + 1} \, dx$

#### Nivel Intermedio
5. $\int x^2(x^3 + 1)^4 \, dx$
6. $\int \sin(x) \cos^2(x) \, dx$
7. $\int \frac{x}{\sqrt{x^2 + 4}} \, dx$
8. $\int \frac{e^x}{1 + e^x} \, dx$

#### Nivel Avanzado
9. $\int \frac{x^3}{\sqrt{x^4 + 9}} \, dx$
10. $\int \sin^3(x) \cos(x) \, dx$
11. $\int \frac{\ln(x)}{x} \, dx$
12. $\int \frac{x^2 + 1}{x^3 + 3x + 1} \, dx$

---

## 3.2 INTEGRACIÓN DE FUNCIONES TRIGONOMÉTRICAS
**Duración:** 4 horas

### 📖 Identidades Trigonométricas Esenciales

Antes de integrar funciones trigonométricas, necesitamos dominar estas identidades:

#### Identidades Fundamentales
1. **Pitagóricas:**
   - $\sin^2(x) + \cos^2(x) = 1$
   - $\tan^2(x) + 1 = \sec^2(x)$
   - $\cot^2(x) + 1 = \csc^2(x)$

2. **De Potencia:**
   - $\sin^2(x) = \frac{1 - \cos(2x)}{2}$
   - $\cos^2(x) = \frac{1 + \cos(2x)}{2}$

3. **Producto a Suma:**
   - $\sin(A)\cos(B) = \frac{1}{2}[\sin(A+B) + \sin(A-B)]$
   - $\sin(A)\sin(B) = \frac{1}{2}[\cos(A-B) - \cos(A+B)]$
   - $\cos(A)\cos(B) = \frac{1}{2}[\cos(A+B) + \cos(A-B)]$

### 🔢 Integración de Potencias de Seno y Coseno

#### Caso 1: Potencias Impares
Cuando tenemos potencias impares, usamos identidades para reducir el grado.

**Ejemplo:** $\int \sin^3(x) \, dx$

**Solución paso a paso:**

**Paso 1:** Separar una potencia impar
$$\sin^3(x) = \sin^2(x) \cdot \sin(x)$$

**Paso 2:** Usar identidad pitagórica
$$\sin^2(x) = 1 - \cos^2(x)$$

**Paso 3:** Sustituir
$$\int \sin^3(x) \, dx = \int (1 - \cos^2(x)) \sin(x) \, dx$$

**Paso 4:** Hacer sustitución
- Sea $u = \cos(x)$
- Entonces $du = -\sin(x) \, dx$
- Por tanto $\sin(x) \, dx = -du$

**Paso 5:** Integrar
$$\int (1 - u^2)(-du) = -\int (1 - u^2) \, du = -\left(u - \frac{u^3}{3}\right) + C$$

**Paso 6:** Sustituir de vuelta
$$-\left(\cos(x) - \frac{\cos^3(x)}{3}\right) + C = -\cos(x) + \frac{\cos^3(x)}{3} + C$$

---

#### Caso 2: Potencias Pares
Para potencias pares, usamos las identidades de reducción de potencia.

**Ejemplo:** $\int \sin^2(x) \, dx$

**Solución paso a paso:**

**Paso 1:** Usar identidad de reducción
$$\sin^2(x) = \frac{1 - \cos(2x)}{2}$$

**Paso 2:** Integrar
$$\int \sin^2(x) \, dx = \int \frac{1 - \cos(2x)}{2} \, dx = \frac{1}{2} \int (1 - \cos(2x)) \, dx$$

**Paso 3:** Separar integrales
$$= \frac{1}{2} \left( \int 1 \, dx - \int \cos(2x) \, dx \right)$$

**Paso 4:** Resolver
$$= \frac{1}{2} \left( x - \frac{\sin(2x)}{2} \right) + C = \frac{x}{2} - \frac{\sin(2x)}{4} + C$$

---

#### Caso 3: Productos de Seno y Coseno
**Ejemplo:** $\int \sin^3(x) \cos^2(x) \, dx$

**Solución paso a paso:**

**Paso 1:** Separar potencia impar
$$\sin^3(x) \cos^2(x) = \sin^2(x) \cos^2(x) \sin(x)$$

**Paso 2:** Usar identidad pitagórica
$$\sin^2(x) = 1 - \cos^2(x)$$

**Paso 3:** Sustituir
$$\int (1 - \cos^2(x)) \cos^2(x) \sin(x) \, dx$$

**Paso 4:** Hacer sustitución
- Sea $u = \cos(x)$
- Entonces $du = -\sin(x) \, dx$

**Paso 5:** Integrar
$$\int (1 - u^2) u^2 (-du) = -\int (u^2 - u^4) \, du = -\left(\frac{u^3}{3} - \frac{u^5}{5}\right) + C$$

**Paso 6:** Sustituir de vuelta
$$-\left(\frac{\cos^3(x)}{3} - \frac{\cos^5(x)}{5}\right) + C = \frac{\cos^5(x)}{5} - \frac{\cos^3(x)}{3} + C$$

---

### 🔢 Integración de Potencias de Tangente y Secante

#### Caso 1: Potencias Impares de Secante
**Ejemplo:** $\int \sec^3(x) \, dx$

Esta integral requiere integración por partes (ver sección 3.3).

#### Caso 2: Potencias Pares de Secante
**Ejemplo:** $\int \sec^2(x) \tan(x) \, dx$

**Solución paso a paso:**

**Paso 1:** Identificar la sustitución
- Sea $u = \tan(x)$
- Entonces $du = \sec^2(x) \, dx$

**Paso 2:** Integrar
$$\int \sec^2(x) \tan(x) \, dx = \int u \, du = \frac{u^2}{2} + C$$

**Paso 3:** Sustituir de vuelta
$$\frac{u^2}{2} + C = \frac{\tan^2(x)}{2} + C$$

---

### 🎯 Ejercicios Prácticos Progresivos

#### Nivel Básico
1. $\int \sin^2(x) \, dx$
2. $\int \cos^2(x) \, dx$
3. $\int \sin(x) \cos(x) \, dx$
4. $\int \sec^2(x) \tan(x) \, dx$

#### Nivel Intermedio
5. $\int \sin^3(x) \, dx$
6. $\int \cos^3(x) \, dx$
7. $\int \sin^2(x) \cos(x) \, dx$
8. $\int \sin(x) \cos^3(x) \, dx$

#### Nivel Avanzado
9. $\int \sin^4(x) \, dx$
10. $\int \cos^4(x) \, dx$
11. $\int \sin^3(x) \cos^2(x) \, dx$
12. $\int \sec^3(x) \tan(x) \, dx$

---

## 3.3 INTEGRACIÓN POR PARTES
**Duración:** 4 horas

### 📖 Fórmula Fundamental

La **integración por partes** se basa en la regla del producto para derivadas:

$$\frac{d}{dx}[u \cdot v] = u \frac{dv}{dx} + v \frac{du}{dx}$$

Integrando ambos lados:
$$uv = \int u \, dv + \int v \, du$$

Reordenando obtenemos la **fórmula de integración por partes**:

$$\int u \, dv = uv - \int v \, du$$

### 🎯 Método ILATE para Elegir u y dv

**ILATE** es un acrónimo que nos ayuda a decidir qué función debe ser $u$:

- **I** = Inversas (arcsin, arccos, arctan, etc.)
- **L** = Logarítmicas (ln, log)
- **A** = Algebraicas (polinomios)
- **T** = Trigonométricas (sin, cos, tan, etc.)
- **E** = Exponenciales (e^x, a^x)

**Regla:** La función que aparece primero en ILATE debe ser $u$, la otra será $dv$.

### 📝 Ejemplos Paso a Paso

#### Ejemplo 1: Producto de Polinomio y Exponencial
**Problema:** $\int x e^x \, dx$

**Solución paso a paso:**

**Paso 1:** Identificar u y dv usando ILATE
- Algebraica: $x$ (A)
- Exponencial: $e^x$ (E)
- Como A viene antes que E, elegimos $u = x$

**Paso 2:** Definir u y dv
- $u = x$ → $du = dx$
- $dv = e^x \, dx$ → $v = e^x$

**Paso 3:** Aplicar la fórmula
$$\int x e^x \, dx = x \cdot e^x - \int e^x \, dx$$

**Paso 4:** Integrar
$$= x e^x - e^x + C = e^x(x - 1) + C$$

**✅ Verificación:** Derivando $e^x(x - 1) + C$ obtenemos $e^x(x - 1) + e^x = x e^x$

---

#### Ejemplo 2: Producto de Polinomio y Trigonométrica
**Problema:** $\int x \sin(x) \, dx$

**Solución paso a paso:**

**Paso 1:** Identificar u y dv usando ILATE
- Algebraica: $x$ (A)
- Trigonométrica: $\sin(x)$ (T)
- Como A viene antes que T, elegimos $u = x$

**Paso 2:** Definir u y dv
- $u = x$ → $du = dx$
- $dv = \sin(x) \, dx$ → $v = -\cos(x)$

**Paso 3:** Aplicar la fórmula
$$\int x \sin(x) \, dx = x \cdot (-\cos(x)) - \int (-\cos(x)) \, dx$$

**Paso 4:** Simplificar e integrar
$$= -x \cos(x) + \int \cos(x) \, dx = -x \cos(x) + \sin(x) + C$$

---

#### Ejemplo 3: Producto de Logarítmica y Algebraica
**Problema:** $\int x \ln(x) \, dx$

**Solución paso a paso:**

**Paso 1:** Identificar u y dv usando ILATE
- Logarítmica: $\ln(x)$ (L)
- Algebraica: $x$ (A)
- Como L viene antes que A, elegimos $u = \ln(x)$

**Paso 2:** Definir u y dv
- $u = \ln(x)$ → $du = \frac{1}{x} \, dx$
- $dv = x \, dx$ → $v = \frac{x^2}{2}$

**Paso 3:** Aplicar la fórmula
$$\int x \ln(x) \, dx = \ln(x) \cdot \frac{x^2}{2} - \int \frac{x^2}{2} \cdot \frac{1}{x} \, dx$$

**Paso 4:** Simplificar e integrar
$$= \frac{x^2 \ln(x)}{2} - \int \frac{x}{2} \, dx = \frac{x^2 \ln(x)}{2} - \frac{x^2}{4} + C$$

---

### 🔄 Integración por Partes Repetida

Cuando una aplicación de integración por partes no resuelve completamente la integral, necesitamos aplicarla repetidamente.

#### Ejemplo: Potencia de x por Exponencial
**Problema:** $\int x^2 e^x \, dx$

**Solución paso a paso:**

**Primera aplicación:**
- $u = x^2$ → $du = 2x \, dx$
- $dv = e^x \, dx$ → $v = e^x$

$$\int x^2 e^x \, dx = x^2 e^x - \int e^x \cdot 2x \, dx = x^2 e^x - 2 \int x e^x \, dx$$

**Segunda aplicación (para $\int x e^x \, dx$):**
- $u = x$ → $du = dx$
- $dv = e^x \, dx$ → $v = e^x$

$$\int x e^x \, dx = x e^x - \int e^x \, dx = x e^x - e^x + C$$

**Resultado final:**
$$\int x^2 e^x \, dx = x^2 e^x - 2(x e^x - e^x) + C = e^x(x^2 - 2x + 2) + C$$

---

### 📊 Integrales Tabulares

Para integrales de la forma $\int x^n f(x) \, dx$ donde $f(x)$ es una función que se integra fácilmente (como $e^x$, $\sin(x)$, $\cos(x)$), podemos usar el **método tabular**:

#### Ejemplo: Método Tabular
**Problema:** $\int x^3 e^x \, dx$

**Solución usando tabla:**

| Derivadas de u | Integrales de dv |
|----------------|------------------|
| $x^3$          | $e^x$            |
| $3x^2$         | $e^x$            |
| $6x$           | $e^x$            |
| $6$            | $e^x$            |
| $0$            | $e^x$            |

**Fórmula tabular:**
$$\int x^3 e^x \, dx = x^3 e^x - 3x^2 e^x + 6x e^x - 6 e^x + C = e^x(x^3 - 3x^2 + 6x - 6) + C$$

---

### 🎯 Ejercicios Prácticos Progresivos

#### Nivel Básico
1. $\int x e^x \, dx$
2. $\int x \sin(x) \, dx$
3. $\int x \cos(x) \, dx$
4. $\int x \ln(x) \, dx$

#### Nivel Intermedio
5. $\int x^2 e^x \, dx$
6. $\int x^2 \sin(x) \, dx$
7. $\int x \ln^2(x) \, dx$
8. $\int e^x \sin(x) \, dx$

#### Nivel Avanzado
9. $\int x^3 e^x \, dx$
10. $\int x^2 \ln(x) \, dx$
11. $\int \ln(x) \, dx$
12. $\int x^2 e^{2x} \, dx$

---

## 3.4 MÉTODOS ESPECIALES DE INTEGRACIÓN
**Duración:** 4 horas

### 🔢 Fracciones Parciales

Las **fracciones parciales** nos permiten descomponer funciones racionales complejas en fracciones más simples que son fáciles de integrar.

#### Caso 1: Factores Lineales Distintos
**Problema:** $\int \frac{x + 1}{(x - 1)(x + 2)} \, dx$

**Solución paso a paso:**

**Paso 1:** Descomponer en fracciones parciales
$$\frac{x + 1}{(x - 1)(x + 2)} = \frac{A}{x - 1} + \frac{B}{x + 2}$$

**Paso 2:** Encontrar denominador común
$$x + 1 = A(x + 2) + B(x - 1)$$

**Paso 3:** Resolver para A y B
- Para $x = 1$: $1 + 1 = A(1 + 2) + B(1 - 1)$ → $2 = 3A$ → $A = \frac{2}{3}$
- Para $x = -2$: $-2 + 1 = A(-2 + 2) + B(-2 - 1)$ → $-1 = -3B$ → $B = \frac{1}{3}$

**Paso 4:** Reescribir la integral
$$\int \frac{x + 1}{(x - 1)(x + 2)} \, dx = \int \left(\frac{2/3}{x - 1} + \frac{1/3}{x + 2}\right) \, dx$$

**Paso 5:** Integrar
$$= \frac{2}{3} \ln|x - 1| + \frac{1}{3} \ln|x + 2| + C$$

---

#### Caso 2: Factores Cuadráticos
**Problema:** $\int \frac{x^2 + 1}{x(x^2 + 4)} \, dx$

**Solución paso a paso:**

**Paso 1:** Descomponer en fracciones parciales
$$\frac{x^2 + 1}{x(x^2 + 4)} = \frac{A}{x} + \frac{Bx + C}{x^2 + 4}$$

**Paso 2:** Encontrar denominador común
$$x^2 + 1 = A(x^2 + 4) + (Bx + C)x$$

**Paso 3:** Resolver para A, B y C
- Para $x = 0$: $0 + 1 = A(0 + 4) + 0$ → $1 = 4A$ → $A = \frac{1}{4}$
- Comparando coeficientes: $x^2 + 1 = Ax^2 + 4A + Bx^2 + Cx$
- Coeficiente de $x^2$: $1 = A + B$ → $B = 1 - \frac{1}{4} = \frac{3}{4}$
- Coeficiente de $x$: $0 = C$ → $C = 0$

**Paso 4:** Reescribir la integral
$$\int \frac{x^2 + 1}{x(x^2 + 4)} \, dx = \int \left(\frac{1/4}{x} + \frac{3x/4}{x^2 + 4}\right) \, dx$$

**Paso 5:** Integrar
$$= \frac{1}{4} \ln|x| + \frac{3}{8} \ln(x^2 + 4) + C$$

---

### 🔺 Sustituciones Trigonométricas

Las **sustituciones trigonométricas** son útiles para integrales que contienen expresiones de la forma $\sqrt{a^2 - x^2}$, $\sqrt{a^2 + x^2}$, o $\sqrt{x^2 - a^2}$.

#### Caso 1: $\sqrt{a^2 - x^2}$
**Problema:** $\int \frac{1}{\sqrt{9 - x^2}} \, dx$

**Solución paso a paso:**

**Paso 1:** Identificar el caso
- Tenemos $\sqrt{9 - x^2} = \sqrt{3^2 - x^2}$
- Usamos la sustitución: $x = 3\sin(\theta)$

**Paso 2:** Hacer la sustitución
- $x = 3\sin(\theta)$
- $dx = 3\cos(\theta) \, d\theta$
- $\sqrt{9 - x^2} = \sqrt{9 - 9\sin^2(\theta)} = 3\cos(\theta)$

**Paso 3:** Reescribir la integral
$$\int \frac{1}{\sqrt{9 - x^2}} \, dx = \int \frac{1}{3\cos(\theta)} \cdot 3\cos(\theta) \, d\theta = \int 1 \, d\theta$$

**Paso 4:** Integrar
$$= \theta + C$$

**Paso 5:** Sustituir de vuelta
- Como $x = 3\sin(\theta)$, tenemos $\theta = \arcsin\left(\frac{x}{3}\right)$
- Por tanto: $\theta + C = \arcsin\left(\frac{x}{3}\right) + C$

---

#### Caso 2: $\sqrt{a^2 + x^2}$
**Problema:** $\int \frac{1}{\sqrt{x^2 + 4}} \, dx$

**Solución paso a paso:**

**Paso 1:** Identificar el caso
- Tenemos $\sqrt{x^2 + 4} = \sqrt{x^2 + 2^2}$
- Usamos la sustitución: $x = 2\tan(\theta)$

**Paso 2:** Hacer la sustitución
- $x = 2\tan(\theta)$
- $dx = 2\sec^2(\theta) \, d\theta$
- $\sqrt{x^2 + 4} = \sqrt{4\tan^2(\theta) + 4} = 2\sec(\theta)$

**Paso 3:** Reescribir la integral
$$\int \frac{1}{\sqrt{x^2 + 4}} \, dx = \int \frac{1}{2\sec(\theta)} \cdot 2\sec^2(\theta) \, d\theta = \int \sec(\theta) \, d\theta$$

**Paso 4:** Integrar
$$= \ln|\sec(\theta) + \tan(\theta)| + C$$

**Paso 5:** Sustituir de vuelta
- Como $x = 2\tan(\theta)$, tenemos $\tan(\theta) = \frac{x}{2}$
- Y $\sec(\theta) = \frac{\sqrt{x^2 + 4}}{2}$
- Por tanto: $\ln\left|\frac{\sqrt{x^2 + 4}}{2} + \frac{x}{2}\right| + C = \ln\left|\sqrt{x^2 + 4} + x\right| + C$

---

### 🔲 Completar el Cuadrado

Esta técnica es útil para integrales que contienen expresiones cuadráticas.

**Problema:** $\int \frac{1}{x^2 + 4x + 5} \, dx$

**Solución paso a paso:**

**Paso 1:** Completar el cuadrado
$$x^2 + 4x + 5 = (x^2 + 4x + 4) + 1 = (x + 2)^2 + 1$$

**Paso 2:** Reescribir la integral
$$\int \frac{1}{x^2 + 4x + 5} \, dx = \int \frac{1}{(x + 2)^2 + 1} \, dx$$

**Paso 3:** Hacer sustitución
- Sea $u = x + 2$
- Entonces $du = dx$

**Paso 4:** Integrar
$$\int \frac{1}{u^2 + 1} \, du = \arctan(u) + C$$

**Paso 5:** Sustituir de vuelta
$$\arctan(u) + C = \arctan(x + 2) + C$$

---

### 🎯 Ejercicios Prácticos Progresivos

#### Fracciones Parciales
1. $\int \frac{1}{(x - 1)(x + 1)} \, dx$
2. $\int \frac{x}{(x - 2)(x + 3)} \, dx$
3. $\int \frac{x^2 + 1}{x(x - 1)} \, dx$
4. $\int \frac{1}{x^2 - 4} \, dx$

#### Sustituciones Trigonométricas
5. $\int \frac{1}{\sqrt{16 - x^2}} \, dx$
6. $\int \frac{1}{\sqrt{x^2 + 9}} \, dx$
7. $\int \frac{x^2}{\sqrt{4 - x^2}} \, dx$
8. $\int \frac{1}{x\sqrt{x^2 - 1}} \, dx$

#### Completar el Cuadrado
9. $\int \frac{1}{x^2 + 2x + 2} \, dx$
10. $\int \frac{1}{x^2 - 6x + 10} \, dx$
11. $\int \frac{x}{x^2 + 4x + 5} \, dx$
12. $\int \frac{1}{2x^2 + 8x + 10} \, dx$

---

## 🧠 ESTRATEGIAS DE RECONOCIMIENTO DE PATRONES

### 📋 Diagrama de Flujo para Elegir Técnica

```
¿Es una integral inmediata?
├─ SÍ → Usar tabla de integrales básicas
└─ NO → Continuar...

¿Contiene una función compuesta con su derivada?
├─ SÍ → Integración por sustitución
└─ NO → Continuar...

¿Es producto de dos funciones diferentes?
├─ SÍ → Integración por partes
└─ NO → Continuar...

¿Es una función racional?
├─ SÍ → Fracciones parciales
└─ NO → Continuar...

¿Contiene √(a² ± x²) o √(x² ± a²)?
├─ SÍ → Sustitución trigonométrica
└─ NO → Continuar...

¿Es una expresión cuadrática?
├─ SÍ → Completar el cuadrado
└─ NO → Buscar otras técnicas especiales
```

### 🎯 Casos Especiales y Trucos

#### Truco 1: Multiplicar por 1
**Problema:** $\int \frac{1}{1 + \sin(x)} \, dx$

**Solución:** Multiplicar numerador y denominador por $1 - \sin(x)$:
$$\int \frac{1}{1 + \sin(x)} \, dx = \int \frac{1 - \sin(x)}{(1 + \sin(x))(1 - \sin(x))} \, dx = \int \frac{1 - \sin(x)}{1 - \sin^2(x)} \, dx$$
$$= \int \frac{1 - \sin(x)}{\cos^2(x)} \, dx = \int (\sec^2(x) - \sec(x)\tan(x)) \, dx = \tan(x) - \sec(x) + C$$

#### Truco 2: Sumar y Restar
**Problema:** $\int \frac{x^2}{x^2 + 1} \, dx$

**Solución:** Sumar y restar 1 en el numerador:
$$\int \frac{x^2}{x^2 + 1} \, dx = \int \frac{x^2 + 1 - 1}{x^2 + 1} \, dx = \int \left(1 - \frac{1}{x^2 + 1}\right) \, dx = x - \arctan(x) + C$$

---

## 📊 SISTEMA DE EVALUACIÓN FORMATIVA

### 🎯 Criterios de Evaluación por Técnica

#### Integración por Sustitución (25%)
- **Reconocimiento de patrones:** 40%
- **Aplicación correcta de la sustitución:** 30%
- **Cálculo algebraico:** 20%
- **Verificación de resultados:** 10%

#### Integración de Funciones Trigonométricas (25%)
- **Uso correcto de identidades:** 35%
- **Estrategia de integración:** 30%
- **Manejo de potencias:** 20%
- **Simplificación final:** 15%

#### Integración por Partes (25%)
- **Elección correcta de u y dv:** 40%
- **Aplicación de la fórmula:** 30%
- **Integración repetida:** 20%
- **Simplificación:** 10%

#### Métodos Especiales (25%)
- **Identificación del método apropiado:** 30%
- **Descomposición correcta:** 30%
- **Sustituciones apropiadas:** 25%
- **Cálculo final:** 15%

### 📈 Rúbrica de Evaluación

| Criterio | Excelente (90-100) | Bueno (80-89) | Satisfactorio (70-79) | Necesita Mejora (<70) |
|----------|-------------------|---------------|----------------------|----------------------|
| **Reconocimiento** | Identifica inmediatamente la técnica correcta | Identifica la técnica con mínima ayuda | Identifica la técnica con ayuda moderada | No identifica la técnica apropiada |
| **Aplicación** | Aplica la técnica sin errores | Aplica con errores menores | Aplica con algunos errores | Aplica con errores significativos |
| **Cálculo** | Cálculos perfectos | Cálculos casi perfectos | Cálculos con errores menores | Cálculos con errores frecuentes |
| **Verificación** | Siempre verifica resultados | Verifica la mayoría de veces | Verifica ocasionalmente | Raramente verifica |

---

## 🎓 PROYECTO INTEGRADOR: TABLA PERSONALIZADA DE INTEGRALES

### 📋 Objetivo del Proyecto
Crear una tabla personalizada de integrales resueltas que incluya:
- 20 integrales por cada técnica estudiada
- Solución paso a paso detallada
- Verificación de cada resultado
- Clasificación por dificultad
- Aplicaciones prácticas

### 📝 Estructura del Proyecto

#### Sección 1: Integrales por Sustitución (20 ejemplos)
- 5 integrales básicas
- 5 integrales intermedias
- 5 integrales avanzadas
- 5 integrales definidas

#### Sección 2: Integrales Trigonométricas (20 ejemplos)
- 5 potencias de seno/coseno
- 5 potencias de tangente/secante
- 5 productos trigonométricos
- 5 casos especiales

#### Sección 3: Integrales por Partes (20 ejemplos)
- 5 aplicaciones simples
- 5 aplicaciones repetidas
- 5 casos especiales
- 5 integrales tabulares

#### Sección 4: Métodos Especiales (20 ejemplos)
- 5 fracciones parciales
- 5 sustituciones trigonométricas
- 5 completar el cuadrado
- 5 casos mixtos

### 🎯 Criterios de Evaluación del Proyecto

- **Completitud:** 25% (80 integrales resueltas)
- **Corrección:** 30% (verificación de resultados)
- **Claridad:** 20% (explicaciones paso a paso)
- **Organización:** 15% (estructura y presentación)
- **Creatividad:** 10% (aplicaciones originales)

---

## 🚀 COMPETENCIA DE INTEGRACIÓN

### ⏱️ Formato de Competencia
- **Duración:** 30 minutos
- **Problemas:** 15 integrales de diferentes técnicas
- **Puntuación:** 2 puntos por integral correcta
- **Penalización:** -0.5 puntos por intento incorrecto

### 🏆 Categorías de Premios
- **Campeón General:** Mayor puntuación total
- **Especialista en Sustitución:** Mejor en integrales por sustitución
- **Maestro Trigonométrico:** Mejor en integrales trigonométricas
- **Experto en Partes:** Mejor en integración por partes
- **Genio de Métodos Especiales:** Mejor en técnicas especiales

### 📊 Preparación para la Competencia
1. **Semana 1:** Practicar reconocimiento de patrones
2. **Semana 2:** Ejercicios de velocidad con sustitución
3. **Semana 3:** Dominar integración por partes
4. **Semana 4:** Perfeccionar métodos especiales

---

## 📚 RECURSOS ADICIONALES

### 🔗 Enlaces Útiles
- **Khan Academy - Integration Techniques:** https://www.khanacademy.org/math/integral-calculus/integration-techniques
- **Paul's Online Math Notes:** https://tutorial.math.lamar.edu/Classes/CalcII/CalcII.aspx
- **Wolfram Alpha Integral Calculator:** https://www.wolframalpha.com/calculators/integral-calculator/

### 📱 Apps Recomendadas
- **Symbolab:** Calculadora paso a paso
- **Photomath:** Reconocimiento de problemas escritos
- **GeoGebra:** Visualización de integrales
- **Wolfram Alpha:** Verificación de resultados

### 📖 Libros Complementarios
- **Stewart, James:** Cálculo de una Variable (Capítulos 7-8)
- **Larson, Ron:** Cálculo Esencial (Capítulos 5-6)
- **Thomas, George:** Cálculo: Una Variable (Capítulos 7-8)

---

## 🎯 OBJETIVOS DE APRENDIZAJE ESPECÍFICOS

Al finalizar este módulo, el estudiante será capaz de:

### Conocimientos
- ✅ Identificar cuándo usar cada técnica de integración
- ✅ Aplicar correctamente la integración por sustitución
- ✅ Manejar integrales trigonométricas usando identidades
- ✅ Dominar la integración por partes y el método ILATE
- ✅ Resolver integrales usando fracciones parciales
- ✅ Aplicar sustituciones trigonométricas apropiadas

### Habilidades
- ✅ Reconocer patrones en integrales complejas
- ✅ Elegir la técnica más eficiente para cada caso
- ✅ Verificar resultados mediante derivación
- ✅ Trabajar con integrales definidas usando cambio de límites
- ✅ Aplicar múltiples técnicas en una sola integral
- ✅ Resolver problemas de aplicación usando técnicas avanzadas

### Actitudes
- ✅ Perseverancia en la resolución de problemas complejos
- ✅ Rigor matemático en procedimientos y verificaciones
- ✅ Confianza en el uso de diferentes técnicas
- ✅ Curiosidad por explorar casos especiales
- ✅ Colaboración efectiva en resolución de problemas

---

## 📈 INDICADORES DE PROGRESO

### Semana 1: Integración por Sustitución
- [ ] Reconoce patrones de sustitución en 80% de los casos
- [ ] Aplica correctamente la sustitución en integrales básicas
- [ ] Maneja integrales definidas con cambio de límites
- [ ] Verifica resultados mediante derivación

### Semana 2: Funciones Trigonométricas
- [ ] Usa identidades trigonométricas apropiadamente
- [ ] Resuelve integrales de potencias de seno y coseno
- [ ] Maneja productos de funciones trigonométricas
- [ ] Aplica técnicas de reducción de potencia

### Semana 3: Integración por Partes
- [ ] Aplica correctamente el método ILATE
- [ ] Resuelve integrales que requieren partes repetidas
- [ ] Usa el método tabular eficientemente
- [ ] Maneja casos especiales y trucos algebraicos

### Semana 4: Métodos Especiales
- [ ] Descompone funciones racionales en fracciones parciales
- [ ] Aplica sustituciones trigonométricas apropiadas
- [ ] Completa el cuadrado en expresiones cuadráticas
- [ ] Combina múltiples técnicas en problemas complejos

---

## 🎉 CONCLUSIÓN DEL MÓDULO

El Módulo 3 de Técnicas de Integración representa el corazón del cálculo integral. Dominar estas técnicas no solo es esencial para resolver problemas matemáticos complejos, sino que también desarrolla habilidades de pensamiento analítico y resolución de problemas que serán valiosas en estudios superiores y carreras profesionales.

### 🌟 Logros Esperados
Al completar este módulo, los estudiantes habrán desarrollado:
- **Fluidez técnica** en las principales técnicas de integración
- **Intuición matemática** para reconocer patrones y elegir estrategias
- **Confianza** para abordar integrales complejas
- **Base sólida** para aplicaciones avanzadas en el Módulo 4

### 🚀 Preparación para el Siguiente Módulo
Las técnicas aprendidas en este módulo serán fundamentales para:
- Calcular áreas y volúmenes (Módulo 4)
- Resolver problemas de física y ingeniería
- Aplicar el cálculo integral en contextos reales
- Prepararse para cursos avanzados de matemáticas

---

**¡El dominio de estas técnicas de integración abre las puertas a un mundo de aplicaciones fascinantes en ciencias e ingeniería!** 🎓✨
