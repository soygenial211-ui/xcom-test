// proyectos.js - Configuración de misiones y temas
const projects = [
    { 
        id: "defensa_estructural", 
        name: "Defensa Estructural", 
        difficulty: "FÁCIL",
        color: "#00ff88",
        temas: [
            "Cerca Eléctrica Perimetral",      // idx 0: Perímetro Cuadrado[cite: 1]
            "Sellado Base Antena Satelital",   // idx 1: Perímetro Círculo[cite: 1]
            "Blindaje Núcleo de Energía",      // idx 2: Perímetro Hexágono[cite: 1]
            "Cimentación Reactor Principal",   // idx 3: Perímetro Pentágono[cite: 1]
            "Dique de Contención Hidráulica",  // idx 4: Perímetro Trapecio[cite: 1]
            "Armazón Torre de Vigilancia",     // idx 5: Área Triángulo[cite: 1]
            "Zona de Aterrizaje Avanzada",     // idx 6: Área Cuadrado[cite: 1]
            "Escudo de Energía Global",        // idx 7: Área Círculo[cite: 1]
            "Depósito de Tanques S.H.I.V.",    // idx 8: Área Hexágono[cite: 1]
            "Laboratorio Genético Central"     // idx 9: Área Pentágono[cite: 1]
        ] 
    },
    { 
        id: "logistica_infraestructura", 
        name: "Logística e Infraestructura", 
        difficulty: "FÁCIL",
        color: "#00ff88",
        temas: [
            "Consumo Crítico de Elerium",      // idx 0[cite: 1]
            "Tiempo de Excavación de Túneles", // idx 1[cite: 1]
            "Producción de Blindaje Aleado",   // idx 2[cite: 1]
            "Logística de Combustible Skyranger", // idx 3[cite: 1]
            "Suministros Médicos de Campaña",  // idx 4[cite: 1]
            "Tiempo de Investigación Xenobio", // idx 5[cite: 1]
            "Personal de Mantenimiento Satelital", // idx 6[cite: 1]
            "Línea de Ensamblaje SHIV",        // idx 7[cite: 1]
            "Potencia de Transmisión de Datos", // idx 8[cite: 1]
            "Filtrado de Aire de Instalaciones" // idx 9[cite: 1]
        ] 
    },
    { 
        id: "navegacion_tactica", 
        name: "Navegación Táctica", 
        difficulty: "MEDIO",
        color: "#00d4ff",
        temas: [
            "Ángulo de Ascenso de Interceptor", // idx 0: atan[cite: 1]
            "Ángulo de Depresión de Francotirador", // idx 1: asin[cite: 1]
            "Ángulo de Desviación de Flanqueo", // idx 2: acos[cite: 1]
            "Compensación por Vector de Viento", // idx 3: atan[cite: 1]
            "Elevación de Gancho de Anclaje",  // idx 4: asin[cite: 1]
            "Inclinación de Túnel de Dron",    // idx 5: atan[cite: 1]
            "Triangulación de Recepción de Señal", // idx 6: acos[cite: 1]
            "Trayectoria de Granada de Humo",  // idx 7: atan[cite: 1]
            "Ángulo de Entrada Atmosférica",   // idx 8: asin[cite: 1]
            "Ázimut de Contacto de Radar"      // idx 9: acos[cite: 1]
        ] 
    },
    { 
        id: "ojo_halcon", 
        name: "Ojo de Halcón", 
        difficulty: "MEDIO",
        color: "#00d4ff",
        temas: [
            "Distancia Directa al Objetivo",   // idx 0: Hipotenusa[cite: 1]
            "Vuelo en Línea Recta de Dron",    // idx 1: Hipotenusa[cite: 1]
            "Longitud de Cable de Torre",      // idx 2: Hipotenusa[cite: 1]
            "Distancia de Persecución Vehicular", // idx 3: Hipotenusa[cite: 1]
            "Longitud de Rampa de Carga",      // idx 4: Hipotenusa[cite: 1]
            "Altura Vertical del Objetivo",    // idx 5: Cateto[cite: 1]
            "Alcance de Escalera de Emergencia", // idx 6: Cateto[cite: 1]
            "Distancia Horizontal de Radar",   // idx 7: Cateto[cite: 1]
            "Altura de Antena de Comunicación", // idx 8: Cateto[cite: 1]
            "Despliegue Táctico en Suelo"      // idx 9: Cateto[cite: 1]
        ] 
    },
    { 
        id: "operaciones_internacionales", 
        name: "Operaciones Internacionales", 
        difficulty: "MEDIO",
        color: "#00d4ff",
        temas: [
            "Perímetro de Zona en Kilómetros", // idx 0: mi a km[cite: 1]
            "Superficie de Hangar en Metros",  // idx 1: yd a m[cite: 1]
            "Contorno de Cápsula en Centímetros", // idx 2: ft a cm[cite: 1]
            "Blindaje de Robot en cm²",        // idx 3: in a cm[cite: 1]
            "Perímetro de Escudo en Millas",   // idx 4: km a mi[cite: 1]
            "Superficie Helipuerto en Yardas", // idx 5: m a yd[cite: 1]
            "Marco de Ventana en Pulgadas",    // idx 6: cm a in[cite: 1]
            "Perímetro de Señal en Metros",    // idx 7: yd a m[cite: 1]
            "Área de Mapa en km²",             // idx 8: mi a km[cite: 1]
            "Mesa de Laboratorio en cm²"       // idx 9: ft a cm[cite: 1]
        ] 
    },
    { 
        id: "logistica_suministros", 
        name: "Logística Suministros", 
        difficulty: "DIFÍCIL",
        color: "#ffcc00",
        temas: [
            "Suministro de Rollos de Alambre", // idx 0[cite: 1]
            "Litros de Desinfectante Bio",     // idx 1[cite: 1]
            "Presupuesto de Sellado Lineal",   // idx 2[cite: 1]
            "Cálculo de Latas de Pintura",     // idx 3[cite: 1]
            "Soportes de Torre de Energía",    // idx 4[cite: 1]
            "Potencia de Panel Solar",         // idx 5[cite: 1]
            "Presupuesto de Caucho de Entrenamiento", // idx 6[cite: 1]
            "Asignación de Guardias de Muro",  // idx 7[cite: 1]
            "Capacidad de Siembra de Invernadero", // idx 8[cite: 1]
            "Inversión en Sensores de Movimiento" // idx 9[cite: 1]
        ] 
    },
    { 
        id: "sistemas_produccion", 
        name: "Sistemas de Producción", 
        difficulty: "DIFÍCIL",
        color: "#ffcc00",
        temas: [
            "Presupuesto de Muro de Contención", // idx 0[cite: 1]
            "Refrigerante de Panel Térmico",    // idx 1[cite: 1]
            "Sensores de Base de Reactor",     // idx 2[cite: 1]
            "Peso de Placa de Aleación",       // idx 3[cite: 1]
            "Producción de Raciones Agrícolas", // idx 4[cite: 1]
            "Consumo de Patrullaje Fronterizo", // idx 5[cite: 1]
            "Cableado de Antena Equilátera",   // idx 6[cite: 1]
            "Botes de Pintura de Laboratorio", // idx 7[cite: 1]
            "Población de Zona de Rescate",    // idx 8[cite: 1]
            "Costo de Sellador de Ventilación" // idx 9[cite: 1]
        ] 
    },
    { 
        id: "balistica_avanzada", 
        name: "Balística Avanzada", 
        difficulty: "DIFÍCIL",
        color: "#ffcc00",
        temas: [
            "Impacto Vertical de Cañón",       // idx 0: tan[cite: 1]
            "Distancia Directa de Observación", // idx 1: cos[cite: 1]
            "Marcado Láser de Objetivo",       // idx 2: tan[cite: 1]
            "Pérdida de Altura de Dron",       // idx 3: sin[cite: 1]
            "Base Horizontal de Rampa",        // idx 4: cos[cite: 1]
            "Cable de Gancho de Elevación",    // idx 5: sin[cite: 1]
            "Longitud de Sombra de Antena",    // idx 6: tan[cite: 1]
            "Distancia Directa de Señal Radar", // idx 7: cos[cite: 1]
            "Altitud de Misil Interceptor",    // idx 8: sin[cite: 1]
            "Distancia Horizontal de Entrada"  // idx 9: tan[cite: 1]
        ] 
    },
    { 
        id: "ingenieria_instalaciones", 
        name: "Ing. Instalaciones", 
        difficulty: "BRUTAL",
        color: "#ff3333",
        temas: [
            "Sellador de Soporte Triangular",  // idx 0[cite: 1]
            "Costo de Placa de Refuerzo",      // idx 1[cite: 1]
            "Seguridad de Zona de Aterrizaje", // idx 2[cite: 1]
            "Potencia de Radar de Cobertura",  // idx 3[cite: 1]
            "Calor de Panel de Control",       // idx 4[cite: 1]
            "Costo de Columna Hexagonal",      // idx 5[cite: 1]
            "Consumo de Litros de Patrullaje", // idx 6[cite: 1]
            "Área de Conducto de Trapecio",    // idx 7[cite: 1]
            "Suministro de Cables de Antena",  // idx 8[cite: 1]
            "Baldosas de Suelo de Búnker"      // idx 9[cite: 1]
        ] 
    },
    { 
        id: "vectores_proyeccion", 
        name: "Vectores y Proyección", 
        difficulty: "BRUTAL",
        color: "#ff3333",
        temas: [
            "Energía de Escaneo de Altura",    // idx 0[cite: 1]
            "Ajuste de Rumbo de Combustible",  // idx 1[cite: 1]
            "Luces LED de Rampa de Abordaje",  // idx 2[cite: 1]
            "Tensión de Cable de Seguridad",   // idx 3[cite: 1]
            "Pérdida de Oxígeno por Altitud",  // idx 4[cite: 1]
            "Presupuesto de Recubrimiento",    // idx 5[cite: 1]
            "Impacto Láser de Torre",          // idx 6[cite: 1]
            "Consumo Vertical de Brazo Robot", // idx 7[cite: 1]
            "Refuerzo de Viga de Inclinación"  // idx 8[cite: 1]
        ] 
    }
];