const MotorEjercicios = {
    PI: 3.1416,

    // Diccionario de generadores por proyecto
    generadores: {
        'defensa_estructural': (idx, s, tema) => {
    // Generador pseudo-aleatorio basado en la semilla para mayor dispersión
    const hash = (n) => {
        let t = n ^ (n << 13);
        t = t ^ (t >> 17);
        t = t ^ (t << 5);
        return Math.abs(t);
    };

    const h = hash(s + idx); 
    const PI = 3.1416; // O MotorEjercicios.PI si está definido

    // Variables base con rangos dinámicos amplios según la semilla
    // Se usan multiplicadores para que el cambio no sea lineal
    let L = 10 + (h % 90);           // Lados (10 a 100m)
    let R = 5 + (hash(h) % 45);      // Radio (5 a 50m)
    let B = 50 + (h % 50);           // Base mayor (50 a 100m)
    let b = 10 + (hash(h) % 35);     // Base menor (10 a 45m)
    let h_fig = 15 + (hash(h + 1) % 30); // Altura (15 a 45m)
    let l_trap = 20 + (hash(h + 2) % 30); // Lados oblicuos trapecio
    let apo = Math.floor(L * 0.8);   // Apotema lógica (siempre < L)

    let d = "", sol = 0;

    switch(idx % 10) {
        case 0: // Perímetro Cuadrado
            d = `Se ha detectado una brecha en el sector primario. Es urgente instalar una **Cerca Eléctrica de Alta Tensión** en un perímetro cuadrado perfectamente definido. Si cada segmento de la red mide ${L}m, ¿cuál es la longitud total del cableado que la ingeniería debe desplegar?`;
            sol = L * 4;
            break;
        case 1: // Perímetro Círculo
            d = ` La base de la **Antena de Comunicaciones Globales** requiere un anillo de sellado electromagnético circular para evitar interferencias de la señal alienígena. Con un radio detectado de ${R}m, calcule la longitud del contorno que debe ser blindado.`;
            sol = 2 * PI * R;
            break;
        case 2: // Perímetro Hexágono
            d = `Para proteger el núcleo de energía de la base, se requiere una placa de aleación hexagonal regular. Si el borde de cada sección del hexágono mide ${L}m, determine el perímetro total necesario para el ensamblaje de las juntas.`;
            sol = L * 6;
            break;
        case 3: // Perímetro Pentágono
            d = `La cimentación del nuevo **Reactor de Elerium** tiene forma de pentágono regular. Para evitar fugas térmicas, se debe aplicar un compuesto sellador en todo su borde. Si el lado mide ${L}m, ¿cuál es la extensión total del sellado?`;
            sol = L * 5;
            break;
        case 4: // Perímetro Trapecio
            d = `El área de desechos químicos tras el ataque tiene forma de trapecio isósceles. La base mayor mide ${B}m, la base menor ${b}m y los dos lados laterales miden ${l_trap}m cada uno. Calcule la longitud total de la barrera de seguridad necesaria.`;
            sol = B + b + (l_trap * 2);
            break;
        case 5: // Área Triángulo
            d = `El armazón de soporte para la **Torre de Vigilancia** avanzada consiste en una base triangular con una base de ${L}m y una altura de apoyo de ${h_fig}m. Calcule la superficie de contacto total que requiere el refuerzo de hormigón.`;
            sol = (L * h_fig) / 2;
            break;
        case 6: // Área Cuadrado
            d = `El hangar principal requiere un revestimiento térmico en el suelo de la zona de aterrizaje. Si el área es un cuadrado de lado ${L}m, calcule cuántos metros cuadrados de material de alta resistencia deben solicitarse a ingeniería.`;
            sol = L * L;
            break;
        case 7: // Área Círculo
            d = `El generador de escudo de energía proyecta un domo protector que cubre una superficie circular en el suelo con un radio de ${R}m. Determine la superficie total en metros cuadrados que permanecerá bajo la protección del escudo.`;
            sol = PI * Math.pow(R, 2);
            break;
        case 8: // Área Hexágono
            d = `El suelo del depósito de armas tiene forma de hexágono regular. Los sensores indican un lado de ${L}m y una apotema de ${apo}m. Calcule el área total de la superficie para la distribución de la carga de los tanques S.H.I.V.`;
            sol = ((L * 6) * apo) / 2;
            break;
        case 9: // Área Pentágono
            d = `Se está diseñando un nuevo laboratorio estéril con planta de pentágono regular. El lado de la estructura es de ${L}m y la apotema es de ${apo}m. Determine la superficie total de trabajo disponible para los científicos.`;
            sol = ((L * 5) * apo) / 2;
            break;
    }

    return { 
        desc: d, 
        sol: parseFloat(sol.toFixed(2)) // Redondeo para evitar decimales infinitos
    };
},

        'logistica_infraestructura': (idx, s, tema) => {
    const hash = (n) => {
        let t = n ^ (n << 13);
        t = t ^ (t >> 17);
        t = t ^ (t << 5);
        return Math.abs(t);
    };

    const h = hash(s + idx);
    
    // Variables dinámicas basadas en la semilla
    let v1 = 5 + (h % 20);           // Valor base 1
    let v2 = 100 + (hash(h) % 400);  // Valor base 2 (proporcional)
    let v3 = v1 + 5 + (h % 15);      // Valor a calcular
    
    let d = "", sol = 0;

    switch(idx % 10) {
        case 0: // Consumo de Elerium
            d = `Si un generador de la base consume ${v1} fragmentos de Elerium para mantenerse activo por ${v2} horas, ¿cuántos fragmentos se requerirán para cubrir una operación de ${v3} horas de energía ininterrumpida?`;
            sol = (v3 * v1) / v2;
            break;
        case 1: // Tiempo de Excavación
            d = `El equipo de ingeniería puede excavar ${v1} metros cúbicos de roca para nuevos laboratorios en ${v2} minutos. Si el mando solicita liberar ${v3} metros cúbicos, ¿cuánto tiempo total en minutos tomará la tarea?`;
            sol = (v3 * v2) / v1;
            break;
        case 2: // Producción de Blindaje
            d = `En la fundición, se utilizan ${v1} placas de aleación alienígena para fabricar ${v2} chalecos tácticos. Si el inventario recibe una solicitud urgente de ${v3} chalecos, ¿cuántas placas de aleación deben procesarse?`;
            sol = (v3 * v1) / v2;
            break;
        case 3: // Logística de Combustible
            d = `El transporte Skyranger consume ${v1} galones de combustible para recorrer ${v2} km de distancia. Para una intercepción en un sector remoto a ${v3} km, ¿cuántos galones de combustible se deben cargar?`;
            sol = (v3 * v1) / v2;
            break;
        case 4: // Suministros Médicos
            d = `El laboratorio biológico produce ${v1} botiquines avanzados con cada ${v2} litros de suero recuperado. Si se han recolectado ${v3} litros en la última misión, ¿cuántos botiquines podrán ensamblarse?`;
            sol = (v3 * v1) / v2;
            break;
        case 5: // Tiempo de Investigación
            d = `El equipo científico tarda ${v1} horas en analizar ${v2} fragmentos de artefactos recuperados. Si el mando entrega un lote de ${v3} fragmentos, ¿cuántas horas de investigación se proyectan para completar el análisis?`;
            sol = (v3 * v1) / v2;
            break;
        case 6: // Personal de Mantenimiento
            d = `Para mantener ${v1} estaciones de satélite operativas se requieren ${v2} técnicos especializados. Si el Consejo aprueba la expansión a ${v3} estaciones, ¿cuántos técnicos adicionales deben ser asignados?`;
            sol = (v3 * v2) / v1; // Solución total (se restaría el base si pide 'adicionales')
            break;
        case 7: // Construcción de SHIV
            d = `El ensamblaje de ${v1} drones de combate SHIV requiere ${v2} unidades de circuitos integrados. Si la logística dispone de ${v3} unidades, ¿cuántos drones pueden ser completados íntegramente?`;
            sol = (v3 * v1) / v2;
            break;
        case 8: // Potencia de Transmisión
            d = `La antena de comunicaciones gasta ${v1} unidades de energía para transmitir datos a una distancia de ${v2} años luz. Si el objetivo se encuentra a ${v3} años luz, ¿cuánta energía requiere el pulso de transmisión?`;
            sol = (v3 * v1) / v2;
            break;
        case 9: // Filtrado de Aire (Instalaciones)
            d = `Los filtros de la zona estéril pueden procesar ${v1} metros cúbicos de aire cada ${v2} segundos. Para purificar un área crítica de ${v3} metros cúbicos tras una fuga química, ¿cuántos segundos operarán a máxima potencia?`;
            sol = (v3 * v2) / v1;
            break;
    }

    return { 
        desc: d, 
        sol: parseFloat(sol.toFixed(2)) 
    };
},

        'navegacion_tactica': (idx, s, tema) => {
    const hash = (n) => {
        let t = n ^ (n << 13);
        t = t ^ (t >> 17);
        t = t ^ (t << 5);
        return Math.abs(t);
    };

    const h = hash(s + idx);
    const PI = 3.1416; // Definido en MotorEjercicios

    // Variables con rangos amplios para evitar repetición
    let a = 50 + (h % 150);          // Cateto opuesto o adyacente (50 a 200m)
    let b = 60 + (hash(h) % 200);    // Cateto o Hipotenusa (60 a 260m)
    
    // Asegurar que la hipotenusa sea siempre mayor para funciones seno/coseno
    let hip = Math.max(a, b) + 20;
    let cat = Math.min(a, b);

    let d = "", sol = 0;

    switch(idx % 10) {
        case 0: // atan (C. Opuesto / C. Adyacente)
            d = `Un interceptor detecta un OVNI a una altitud de ${a}km y una distancia horizontal de ${b}km. ¿Cuál es el ángulo de ascenso (en grados) que debe tomar el piloto para interceptarlo directamente?`;
            sol = Math.atan(a / b) * (180 / PI);
            break;
        case 1: // asin (C. Opuesto / Hipotenusa)
            d = `Un francotirador en un tejado apunta a un Soldado Alien. El telémetro indica una distancia directa (hipotenusa) de ${hip}m y una altura vertical de ${cat}m. Calcule el ángulo de depresión necesario para el disparo.`;
            sol = Math.asin(cat / hip) * (180 / PI);
            break;
        case 2: // acos (C. Adyacente / Hipotenusa)
            d = `Un Soldado se mueve por el flanco. La distancia recorrida en el suelo es de ${cat}m, mientras que el sensor de posición indica que la distancia total en línea recta desde el punto de origen es de ${hip}m. Calcule el ángulo de desviación respecto al suelo.`;
            sol = Math.acos(cat / hip) * (180 / PI);
            break;
        case 3: // atan - Vector de Viento
            d = `Nuesta nave principal sufre una deriva lateral por viento de ${a} nudos, mientras mantiene una velocidad frontal de ${b} nudos. ¿Cuántos grados debe corregir el piloto su rumbo para compensar este vector?`;
            sol = Math.atan(a / b) * (180 / PI);
            break;
        case 4: // asin - Despliegue de Grapple
            d = `Un soldado usa el gancho. El cable se extiende ${hip}m hasta un balcón situado a ${cat}m de altura vertical. Calcule el ángulo de elevación del cable durante el ascenso.`;
            sol = Math.asin(cat / hip) * (180 / PI);
            break;
        case 5: // atan - Infiltración
            d = `Para evitar un sensor alienígena, un dron debe entrar en un túnel de ventilación. Si el túnel sube ${a}cm por cada ${b}cm de avance horizontal, calcule el ángulo de inclinación del túnel.`;
            sol = Math.atan(a / b) * (180 / PI);
            break;
        case 6: // acos - Triangulación de Señal
            d = `Dos puestos de escucha detectan una señal. La distancia en línea recta entre ellos (hipotenusa) es de ${hip}km. Si la señal se encuentra a una distancia horizontal de ${cat}km de uno de ellos, determine el ángulo de recepción.`;
            sol = Math.acos(cat / hip) * (180 / PI);
            break;
        case 7: // atan - Trayectoria de Granada
            d = `Un granadero lanza una bomba de humo. Para alcanzar un objetivo a ${b}m de distancia con una altura máxima de ${a}m, ¿con qué ángulo de lanzamiento inicial debe salir el proyectil?`;
            sol = Math.atan(a / b) * (180 / PI);
            break;
        case 8: // asin - Aproximación de Nave
            d = `Un carguero alienígena desciende hacia la base. Su trayectoria de vuelo es de ${hip}km y se encuentra actualmente a ${cat}km de altura. ¿Cuál es el ángulo de entrada en la atmósfera?`;
            sol = Math.asin(cat / hip) * (180 / PI);
            break;
        case 9: // acos - Escaneo de Perímetro
            d = `El radar de la base escanea un área circular. Un objeto es detectado a ${hip}m de distancia radial, con una proyección sobre el eje X de ${cat}m. Determine el ángulo de azimut del contacto.`;
            sol = Math.acos(cat / hip) * (180 / PI);
            break;
    }

    return { 
        desc: d, 
        sol: parseFloat(sol.toFixed(2)) // Redondeo similar al motor original
    };
},

        'ojo_halcon': (idx, s, tema) => {
    const hash = (n) => {
        let t = n ^ (n << 13);
        t = t ^ (t >> 17);
        t = t ^ (t << 5);
        return Math.abs(t);
    };

    const h = hash(s + idx);
    
    // Generación de valores base dinámicos
    let a = 20 + (h % 60);           // Cateto 1 (20 a 80m)
    let b = 15 + (hash(h) % 45);     // Cateto 2 (15 a 60m)
    
    // Asegurar hipotenusa coherente para ejercicios de cateto
    let hip = Math.max(a, b) + 10 + (h % 20); 
    let cat_conocido = Math.min(a, b);

    let d = "", sol = 0;

    switch(idx % 10) {
        // --- BUSCAR HIPOTENUSA (Distancia Directa) ---
        case 0: 
            d = `Un soldado se encuentra en la azotea de un edificio a ${a}m de altura. Si el alien objetivo está en el suelo a una distancia horizontal de ${b}m de la base del edificio, ¿cuál es la distancia directa entre el soldado y el alien?`;
            sol = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
            break;
        case 1:
            d = `Para rescatar a un civil, un dron debe volar desde el punto de mando hasta una posición situada a ${a}m al Norte y ${b}m al Este. ¿Qué distancia total recorrerá el dron en línea recta?`;
            sol = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
            break;
        case 2:
            d = `Un cable de energía debe conectar la base principal con una torre de defensa. La torre mide ${a}m de alto y el generador está a ${b}m de distancia de la torre. ¿Cuántos metros de cable se necesitan para conectarlos directamente?`;
            sol = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
            break;
        case 3:
            d = `Durante una persecución, un vehículo alienígena se mueve ${a}km hacia el frente y luego realiza un giro de 90 grados para avanzar ${b}km hacia la derecha. ¿A qué distancia del punto de inicio se encuentra ahora?`;
            sol = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
            break;
        case 4:
            d = `Una rampa de acceso a la nave de carga tiene una base horizontal de ${a}m y alcanza una altura vertical de ${b}m. Calcule la longitud de la superficie de la rampa.`;
            sol = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
            break;

        // --- BUSCAR CATETO (Altura o Distancia al Suelo) ---
        case 5:
            d = `Un francotirador sabe que su objetivo está a una distancia directa de ${hip}m. Si el sensor indica que el alien está a una distancia horizontal de ${cat_conocido}m, ¿a qué altura vertical se encuentra el objetivo?`;
            sol = Math.sqrt(Math.pow(hip, 2) - Math.pow(cat_conocido, 2));
            break;
        case 6:
            d = `Una escalera de emergencia de ${hip}m de largo se apoya contra el muro de la base alienígena. Si la base de la escalera está a ${cat_conocido}m del muro, ¿qué altura alcanza la escalera sobre la pared?`;
            sol = Math.sqrt(Math.pow(hip, 2) - Math.pow(cat_conocido, 2));
            break;
        case 7:
            d = `El radar detecta una nave enemiga a una distancia directa de ${hip}km. Si la nave vuela exactamente a ${cat_conocido}km de altura, ¿a qué distancia horizontal se encuentra de nuestro radar?`;
            sol = Math.sqrt(Math.pow(hip, 2) - Math.pow(cat_conocido, 2));
            break;
        case 8:
            d = `Un cable de sujeción de ${hip}m sostiene una antena de comunicaciones. El cable está anclado al suelo a una distancia de ${cat_conocido}m del pie de la antena. Calcule la altura de la antena.`;
            sol = Math.sqrt(Math.pow(hip, 2) - Math.pow(cat_conocido, 2));
            break;
        case 9:
            d = `Un equipo táctico desciende en cuerda desde un helicóptero que está a una distancia directa del objetivo de ${hip}m. Si el helicóptero está a una altura de ${cat_conocido}m, ¿qué distancia horizontal deben caminar tras tocar el suelo?`;
            sol = Math.sqrt(Math.pow(hip, 2) - Math.pow(cat_conocido, 2));
            break;
    }

    return { 
        desc: d, 
        sol: parseFloat(sol.toFixed(2)) // Redondeo para coherencia con el motor
    };
},

        'operaciones_internacionales': (idx, s, tema) => {
    const hash = (n) => {
        let t = n ^ (n << 13);
        t = t ^ (t >> 17);
        t = t ^ (t << 5);
        return Math.abs(t);
    };

    const h = hash(s + idx);
    const PI = 3.1416; // Definido en MotorEjercicios

    // Valores base dinámicos
    let val = 5 + (h % 50); 
    let d = "", sol = 0;

    switch(idx % 10) {
        case 0: // Millas a km (Perímetro Cuadrado)
            d = `Un radar detecta una zona de exclusión alienígena de forma cuadrada. Si cada lado mide ${val} millas, calcule el perímetro total de la zona en **kilómetros** (1 mi = 1.61 km).`;
            sol = (val * 1.61) * 4;
            break;
        case 1: // Yardas a metros (Área Rectángulo)
            d = `El hangar de carga tiene un suelo rectangular de ${val} yardas de largo por ${Math.floor(val/2)} yardas de ancho. Determine la superficie total en **metros cuadrados** (1 yd = 0.91 m).`;
            sol = (val * 0.91) * (Math.floor(val/2) * 0.91);
            break;
        case 2: // Pies a cm (Perímetro Círculo)
            d = `La base de una cápsula de escape es circular y tiene un radio de ${val} pies. ¿Cuál es la longitud de su contorno (perímetro) expresada en **centímetros**? (1 ft = 30.48 cm).`;
            sol = 2 * PI * (val * 30.48);
            break;
        case 3: // Pulgadas a cm (Área Cuadrado)
            d = `Una placa de blindaje para un robot de combate es cuadrada y mide ${val} pulgadas por lado. Calcule el área de la placa en **centímetros cuadrados** (1 in = 2.54 cm).`;
            sol = Math.pow(val * 2.54, 2);
            break;
        case 4: // Km a Millas (Perímetro Hexágono)
            d = `Un generador de escudo protege un área hexagonal regular. Si cada lado del hexágono mide ${val} km, determine el perímetro de protección en **millas** (1 km = 0.62 mi).`;
            sol = (val * 0.62) * 6;
            break;
        case 5: // Metros a Yardas (Área Círculo)
            d = `El helipuerto de la base es circular con un radio de ${val} metros. Calcule la superficie de aterrizaje en **yardas cuadradas** (1 m = 1.09 yd).`;
            sol = PI * Math.pow(val * 1.09, 2);
            break;
        case 6: // cm a Pulgadas (Perímetro Rectángulo)
            d = `Una ventana reforzada de la sala de mando mide ${val} cm de alto por ${val+10} cm de ancho. Calcule el perímetro del marco en **pulgadas** (1 cm = 0.39 in).`;
            sol = ((val * 0.39) + ((val+10) * 0.39)) * 2;
            break;
        case 7: // Yardas a metros (Perímetro Triángulo Equilátero)
            d = `Una señal de advertencia alienígena tiene forma de triángulo equilátero con lados de ${val} yardas. Calcule el perímetro de la señal en **metros** (1 yd = 0.91 m).`;
            sol = (val * 0.91) * 3;
            break;
        case 8: // Millas a km (Área Rectángulo)
            d = `Un mapa táctico muestra un sector de bosque rectangular de ${val} millas de largo por ${Math.floor(val/3)} millas de ancho. Calcule el área en **kilómetros cuadrados** (1 mi = 1.61 km).`;
            sol = (val * 1.61) * (Math.floor(val/3) * 1.61);
            break;
        case 9: // Pies a cm (Área Círculo)
            d = `El laboratorio biológico tiene una mesa de operaciones circular con un diámetro de ${val} pies. Calcule el área de la superficie en **centímetros cuadrados** (1 ft = 30.48 cm).`;
            let radioCm = ((val / 2) * 30.48);
            sol = PI * Math.pow(radioCm, 2);
            break;
    }

    return { 
        desc: d, 
        sol: parseFloat(sol.toFixed(2)) // Redondeo para evitar decimales infinitos
    };
},

        'logistica_suministros': (idx, s, tema) => {
    const hash = (n) => {
        let t = n ^ (n << 13);
        t = t ^ (t >> 17);
        t = t ^ (t << 5);
        return Math.abs(t);
    };

    const h = hash(s + idx);
    const PI = 3.1416; // Definido en MotorEjercicios

    // Variables dinámicas para dimensiones y proporciones
    let L = 10 + (h % 40);           // Lado o radio (10 a 50m)
    let ratio = 2 + (hash(h) % 5);   // Valor para la regla de 3 (ej. 1 litro por cada X metros)
    let d = "", sol = 0;

    switch(idx % 10) {
        case 0: // Perímetro Cuadrado + Regla de 3
            d = `Se debe cercar un depósito de suministros cuadrado de ${L}m de lado. Si cada rollo de alambre cubre 15m, ¿cuántos rollos se deben solicitar para rodear todo el perímetro?`;
            sol = (L * 4) / 15;
            break;
        case 1: // Área Círculo + Regla de 3
            d = `El suelo de un laboratorio biológico es circular con un radio de ${L}m. Si se requieren ${ratio} litros de desinfectante por cada metro cuadrado, ¿cuántos litros totales se necesitan para limpiar la superficie?`;
            sol = (PI * Math.pow(L, 2)) * ratio;
            break;
        case 2: // Perímetro Círculo + Regla de 3
            d = `Una antena de comunicaciones circular requiere un anillo de sellado. Si el radio es de ${L}m y el material de sellado cuesta $${ratio} por cada metro lineal, ¿cuál es el costo total del sellado?`;
            sol = (2 * PI * L) * ratio;
            break;
        case 3: // Área Rectángulo + Regla de 3
            d = `Un hangar rectangular mide ${L}m de largo y ${L+10}m de ancho. Si una lata de pintura especial cubre ${ratio}0 metros cuadrados, ¿cuántas latas son necesarias para pintar todo el suelo?`;
            sol = (L * (L+10)) / (ratio * 10);
            break;
        case 4: // Perímetro Hexágono + Regla de 3
            d = `La base de una torre de energía es un hexágono regular de ${L}m de lado. Para reforzarla, se instalan soportes cada ${ratio} metros en todo su contorno. ¿Cuántos soportes se requieren en total?`;
            sol = (L * 6) / ratio;
            break;
        case 5: // Área Triángulo + Regla de 3
            d = `Un panel solar triangular tiene una base de ${L}m y una altura de ${L+5}m. Si el panel genera ${ratio} vatios por cada metro cuadrado, ¿cuál es la potencia total que puede producir?`;
            sol = ((L * (L+5)) / 2) * ratio;
            break;
        case 6: // Área Cuadrado + Regla de 3
            d = `Se planea cubrir el suelo de una zona de entrenamiento cuadrada de ${L}m de lado con placas de caucho. Si 10 metros cuadrados de caucho cuestan $${ratio}00, ¿cuál será el presupuesto total para el área?`;
            sol = (Math.pow(L, 2) * (ratio * 100)) / 10;
            break;
        case 7: // Perímetro Rectángulo + Regla de 3
            d = `El perímetro de un almacén de víveres mide ${L}m de largo y ${Math.floor(L/2)}m de ancho. Si se necesita un guardia por cada ${ratio} metros de muro exterior, ¿cuántos guardias se deben asignar?`;
            sol = ((L + Math.floor(L/2)) * 2) / ratio;
            break;
        case 8: // Área Pentágono + Regla de 3
            d = `Un invernadero hidropónico tiene forma de pentágono regular (lado ${L}m, apotema ${Math.floor(L*0.7)}m). Si se pueden plantar ${ratio} semillas por metro cuadrado, ¿cuántas semillas caben en total?`;
            let areaPent = ((L * 5) * Math.floor(L*0.7)) / 2;
            sol = areaPent * ratio;
            break;
        case 9: // Perímetro Círculo + Regla de 3
            d = `Un domo de protección circular tiene un radio de ${L}m. Se debe instalar un sensor de movimiento cada 10 metros en su borde. Si cada sensor cuesta $${ratio}0, ¿cuánto dinero se invertirá en sensores?`;
            let sensores = (2 * PI * L) / 10;
            sol = sensores * (ratio * 10);
            break;
    }

    return { 
        desc: d, 
        sol: parseFloat(sol.toFixed(2)) // Redondeo coherente con el motor original
    };
},

        'sistemas_produccion': (idx, s, tema) => {
    const hash = (n) => {
        let t = n ^ (n << 13);
        t = t ^ (t >> 17);
        t = t ^ (t << 5);
        return Math.abs(t);
    };

    const h = hash(s + idx);
    const PI = 3.1416; // Definido en MotorEjercicios

    // Variables dinámicas para dimensiones y factores
    let val = 10 + (h % 40);         // Valor numérico base (10 a 50)
    let ratio = 5 + (hash(h) % 15);  // Factor para la regla de 3
    let d = "", sol = 0;

    switch(idx % 10) {
        case 0: // Millas -> km -> Perímetro Cuadrado -> Costo
            d = `Un muro de contención cuadrado rodea una zona de pruebas. Cada lado mide ${val} millas. Si el costo de mantenimiento es de $${ratio}0 por cada kilómetro lineal, ¿cuál es el presupuesto total? (1 mi = 1.61 km).`;
            sol = ((val * 1.61) * 4) * (ratio * 10);
            break;

        case 1: // Yardas -> Metros -> Área Rectángulo -> Suministro
            d = `Un panel de enfriamiento rectangular mide ${val} yardas de largo por 10 yardas de ancho. Si cada metro cuadrado de panel requiere ${ratio} litros de refrigerante, ¿cuántos litros se necesitan? (1 yd = 0.91 m).`;
            sol = ((val * 0.91) * (10 * 0.91)) * ratio;
            break;

        case 2: // Pies -> cm -> Perímetro Círculo -> Sensores
            d = `La base de un reactor es circular con un radio de ${val} pies. Se debe instalar un sensor cada 50 cm de su contorno. ¿Cuántos sensores se deben solicitar en total? (1 ft = 30.48 cm).`;
            sol = (2 * PI * (val * 30.48)) / 50;
            break;

        case 3: // Pulgadas -> cm -> Área Cuadrado -> Peso
            d = `Una placa de aleación cuadrada tiene un lado de ${val} pulgadas. Si cada centímetro cuadrado de la placa pesa ${ratio} gramos, ¿cuál es el peso total de la pieza en gramos? (1 in = 2.54 cm).`;
            sol = Math.pow(val * 2.54, 2) * ratio;
            break;

        case 4: // Metros -> Yardas -> Área Círculo -> Producción
            d = `Un campo de cultivo hidropónico es circular con un radio de ${val} metros. Si cada yarda cuadrada produce ${ratio} raciones de alimento, ¿cuántas raciones genera el campo? (1 m = 1.09 yd).`;
            sol = (PI * Math.pow(val * 1.09, 2)) * ratio;
            break;

        case 5: // Km -> Millas -> Perímetro Hexágono -> Patrullaje
            d = `Una ruta de patrullaje hexagonal regular tiene lados de ${val} km. Un vehículo consume 1 galón de combustible por cada 5 millas. ¿Cuántos galones consume en una vuelta completa? (1 km = 0.62 mi).`;
            sol = ((val * 0.62) * 6) / 5;
            break;

        case 6: // Yardas -> Metros -> Perímetro Triángulo -> Cableado
            d = `Una antena triangular equilátera tiene lados de ${val} yardas. Se requieren 3 metros de cable de refuerzo por cada metro de perímetro. ¿Cuántos metros de cable se necesitan? (1 yd = 0.91 m).`;
            sol = ((val * 0.91) * 3) * 3;
            break;

        case 7: // Pies -> cm -> Área Rectángulo -> Pintura
            d = `El suelo de un laboratorio mide ${val} pies de largo por 20 pies de ancho. Si un bote de pintura rinde para 5000 cm², ¿cuántos botes se necesitan para cubrir el área? (1 ft = 30.48 cm).`;
            let areaCm2 = (val * 30.48) * (20 * 30.48);
            sol = areaCm2 / 5000;
            break;

        case 8: // Millas -> km -> Área Cuadrado -> Población
            d = `Una zona de rescate cuadrada tiene ${val} millas por lado. Si se estima que hay ${ratio} civiles por cada kilómetro cuadrado, ¿cuál es la población total a evacuar? (1 mi = 1.61 km).`;
            sol = Math.pow(val * 1.61, 2) * ratio;
            break;

        case 9: // Pulgadas -> cm -> Perímetro Rectángulo -> Sellador
            d = `Un conducto de ventilación rectangular mide ${val} pulgadas de alto por ${val + 5} pulgadas de ancho. El sellado cuesta $${ratio} por cada 10 cm lineales. ¿Cuál es el costo total? (1 in = 2.54 cm).`;
            let perimCm = ((val * 2.54) + ((val + 5) * 2.54)) * 2;
            sol = (perimCm * ratio) / 10;
            break;
    }

    return { 
        desc: d, 
        sol: parseFloat(sol.toFixed(2)) // Redondeo para precisión del motor
    };
},

        'balistica_avanzada': (idx, s, tema) => {
    const hash = (n) => {
        let t = n ^ (n << 13);
        t = t ^ (t >> 17);
        t = t ^ (t << 5);
        return Math.abs(t);
    };

    const h = hash(s + idx);
    const PI = 3.1416; // Definido en MotorEjercicios

    // Variables dinámicas para ángulos y distancias
    let angulo = 15 + (h % 35);      // Ángulo entre 15° y 50°
    let dist = 100 + (hash(h) % 400); // Distancia base entre 100 y 500m
    
    let d = "", sol = 0;
    const rad = angulo * (PI / 180); // Conversión a radianes para Math

    switch(idx % 10) {
        case 0: // Buscar Cateto Opuesto (Altura) usando Tangente
            d = `Un cañón de defensa detecta un objetivo a una distancia horizontal de ${dist}m. Si el tubo se eleva con un ángulo de ${angulo}°, ¿a qué altura vertical impactará el proyectil?`;
            sol = dist * Math.tan(rad);
            break;

        case 1: // Buscar Hipotenusa (Distancia Directa) usando Coseno
            d = `Un equipo táctico observa un objetivo alienígena con un ángulo de depresión de ${angulo}° respecto al suelo. Si la distancia horizontal al objetivo es de ${dist}m, ¿cuál es la distancia en línea recta (diagonal) hacia el blanco?`;
            sol = dist / Math.cos(rad);
            break;

        case 2: // Buscar Cateto Adyacente usando Tangente
            d = `Un sensor láser está situado en la cima de una torre de ${dist}m de altura. Si el láser apunta hacia el suelo con un ángulo de ${angulo}° respecto a la torre (vertical), ¿a qué distancia horizontal de la base está marcando el objetivo?`;
            sol = dist * Math.tan(rad);
            break;

        case 3: // Buscar Cateto Opuesto usando Seno
            d = `Un dron de reconocimiento desciende en una trayectoria diagonal de ${dist}m de largo. Si el ángulo de descenso respecto a la horizontal es de ${angulo}°, ¿cuántos metros de altura ha perdido el dron al finalizar el recorrido?`;
            sol = dist * Math.sin(rad);
            break;

        case 4: // Buscar Cateto Adyacente usando Coseno
            d = `Una rampa de carga de ${dist}m de longitud total se inclina ${angulo}° respecto al suelo. ¿Qué distancia horizontal ocupa la base de la rampa en el hangar?`;
            sol = dist * Math.cos(rad);
            break;

        case 5: // Buscar Hipotenusa usando Seno
            d = `Para alcanzar una plataforma situada a ${dist}m de altura vertical, un soldado dispara un gancho de anclaje con un ángulo de elevación de ${angulo}°. ¿Qué longitud de cable debe desplegarse para llegar a la plataforma?`;
            sol = dist / Math.sin(rad);
            break;

        case 6: // Buscar Cateto Opuesto (Sombra/Altura) usando Tangente
            d = `Una antena de comunicaciones de ${dist}m de altura proyecta una sombra sobre el terreno. Si el sol se encuentra a un ángulo de elevación de ${angulo}°, ¿cuál es la longitud de la sombra proyectada?`;
            sol = dist / Math.tan(rad);
            break;

        case 7: // Buscar Hipotenusa usando Coseno
            d = `Un radar detecta una señal a una distancia horizontal de ${dist}km. El ángulo de elevación de la señal respecto al radar es de ${angulo}°. Calcule la distancia directa entre el radar y la fuente de la señal en kilómetros.`;
            sol = dist / Math.cos(rad);
            break;

        case 8: // Buscar Cateto Opuesto usando Seno
            d = `Un misil interceptor recorre ${dist}m en línea recta con un ángulo de ascenso constante de ${angulo}°. ¿Qué altitud alcanza el misil al completar esa distancia?`;
            sol = dist * Math.sin(rad);
            break;

        case 9: // Buscar Cateto Adyacente usando Tangente
            d = `Un explorador visualiza la entrada de una cueva con un ángulo de elevación de ${angulo}°. Si se sabe que la cueva está a una altura vertical de ${dist}m respecto al explorador, ¿a qué distancia horizontal se encuentra de la entrada?`;
            sol = dist / Math.tan(rad);
            break;
    }

    return { 
        desc: d, 
        sol: parseFloat(sol.toFixed(2)) // Redondeo estándar para el motor
    };
},

        'ingenieria_instalaciones': (idx, s, tema) => {
    const hash = (n) => {
        let t = n ^ (n << 13);
        t = t ^ (t >> 17);
        t = t ^ (t << 5);
        return Math.abs(t);
    };

    const h = hash(s + idx);
    const PI = 3.1416; // Definido en MotorEjercicios

    // Variables base con alta dispersión
    let base = 30 + (h % 50);        // Base en unidades imperiales
    let altura = 20 + (hash(h) % 40); // Altura en unidades imperiales
    let factor = 5 + (h % 10);       // Factor para la regla de 3
    
    let d = "", sol = 0;

    switch(idx % 10) {
        case 0: // Pitágoras + Perímetro + Conversión (Pies a Metros)
            d = `Un soporte triangular tiene una base de ${base} pies y una altura de ${altura} pies. Calcule el perímetro total del soporte en **metros** (1 ft = 0.30 m) y determine cuántos botes de sellador se necesitan si cada bote rinde para 10 metros lineales.`;
            let hip0 = Math.sqrt(Math.pow(base, 2) + Math.pow(altura, 2));
            let perimetroM = (base + altura + hip0) * 0.30;
            sol = perimetroM / 10;
            break;

        case 1: // Pitágoras + Área + Conversión (Pulgadas a cm)
            d = `Una placa de refuerzo tiene forma de triángulo rectángulo. La hipotenusa mide ${base + 20} pulgadas y la base mide ${base} pulgadas. Calcule el área de la placa en **centímetros cuadrados** (1 in = 2.54 cm). Si el costo es de $0.50 por cada cm², ¿cuál es el costo total?`;
            let alt1 = Math.sqrt(Math.pow(base + 20, 2) - Math.pow(base, 2));
            let areaCm = ((base * 2.54) * (alt1 * 2.54)) / 2;
            sol = areaCm * 0.50;
            break;

        case 2: // Pitágoras + Perímetro + Conversión (Yardas a Metros)
            d = `Una zona de aterrizaje rectangular tiene una diagonal de ${base + 10} yardas y un largo de ${base} yardas. Calcule el perímetro total en **metros** (1 yd = 0.91 m). Si se requiere 1 guardia por cada 5 metros de perímetro, ¿cuántos guardias se necesitan?`;
            let ancho2 = Math.sqrt(Math.pow(base + 10, 2) - Math.pow(base, 2));
            let perimM = ((base * 0.91) + (ancho2 * 0.91)) * 2;
            sol = perimM / 5;
            break;

        case 3: // Área Círculo + Conversión (Millas a Km) + Regla de 3
            d = `El radar cubre un área circular cuyo radio es la hipotenusa de un triángulo de ${base}x${altura} millas. Calcule el área de cobertura en **kilómetros cuadrados** (1 mi = 1.61 km). Si cada km² requiere 2 vatios de potencia, ¿cuánta potencia total consume?`;
            let radioMi = Math.sqrt(Math.pow(base, 2) + Math.pow(altura, 2));
            let areaKm = PI * Math.pow(radioMi * 1.61, 2);
            sol = areaKm * 2;
            break;

        case 4: // Pitágoras + Área + Conversión (Pies a cm)
            d = `Un panel de control rectangular tiene una diagonal de ${base} pies y una altura de ${altura} pies. Calcule el área en **centímetros cuadrados** (1 ft = 30.48 cm). Si el panel emite ${factor} unidades de calor por cada 100 cm², ¿cuánto calor total emite?`;
            let base4 = Math.sqrt(Math.pow(base, 2) - Math.pow(altura, 2));
            let areaCm4 = (base4 * 30.48) * (altura * 30.48);
            sol = (areaCm4 * factor) / 100;
            break;

        case 5: // Perímetro Hexágono + Pitágoras + Conversión
            d = `La base de una columna es un hexágono regular. El apotema es de ${altura} pulgadas. Calcule el perímetro del hexágono en **centímetros** (1 in = 2.54 cm), sabiendo que el lado es igual al apotema dividido entre 0.866. Si el material cuesta $${factor} por cm, ¿cuál es el costo?`;
            let ladoCm = (altura / 0.866) * 2.54;
            sol = (ladoCm * 6) * factor;
            break;

        case 6: // Pitágoras + Perímetro + Conversión (Millas a Km)
            d = `Un trayecto de patrullaje forma un triángulo rectángulo con catetos de ${base} y ${altura} millas. Calcule la hipotenusa en **kilómetros** (1 mi = 1.61 km). Si el vehículo consume 1 litro por cada ${factor} km, ¿cuántos litros consume en ese tramo?`;
            let hip6 = Math.sqrt(Math.pow(base, 2) + Math.pow(altura, 2));
            let distKm = hip6 * 1.61;
            sol = distKm / factor;
            break;

        case 7: // Área Trapecio + Pitágoras + Conversión
            d = `Un conducto tiene forma de trapecio. La base mayor es de ${base} pulgadas, la base menor de ${altura} pulgadas y la altura del trapecio se calcula como la hipotenusa de un triángulo de 3x4 pulgadas. Calcule el área en **centímetros cuadrados** (1 in = 2.54 cm).`;
            let hTrapecio = Math.sqrt(Math.pow(3, 2) + Math.pow(4, 2)); // Resulta 5
            let areaTrap = (((base * 2.54) + (altura * 2.54)) * (hTrapecio * 2.54)) / 2;
            sol = areaTrap;
            break;

        case 8: // Pitágoras + Perímetro + Regla de 3 (Unidades Métricas)
            d = `Para asegurar una antena de ${base}m de altura, se usa un cable anclado a ${altura}m de la base. Si el cable de repuesto viene en rollos de 50m, ¿cuántos rollos hay que comprar para fabricar ${factor} cables iguales?`;
            let cable = Math.sqrt(Math.pow(base, 2) + Math.pow(altura, 2));
            sol = (cable * factor) / 50;
            break;

        case 9: // Área Cuadrado + Pitágoras + Conversión (Yardas a Metros)
            d = `El suelo de un búnker es cuadrado. Su diagonal mide ${base} yardas. Calcule el área del suelo en **metros cuadrados** (1 yd = 0.91 m). Si se necesitan ${factor} baldosas por cada metro cuadrado, ¿cuántas baldosas se requieren?`;
            // Lado^2 + Lado^2 = Diagonal^2 -> 2L^2 = D^2 -> Área = D^2 / 2
            let areaYd = Math.pow(base, 2) / 2;
            let areaM2 = areaYd * Math.pow(0.91, 2);
            sol = areaM2 * factor;
            break;
    }

    return { 
        desc: d, 
        sol: parseFloat(sol.toFixed(2)) // Redondeo para evitar decimales infinitos
    };
},

'vectores_proyeccion': (idx, s, tema) => {
    const hash = (n) => {
        let t = n ^ (n << 13);
        t = t ^ (t >> 17);
        t = t ^ (t << 5);
        return Math.abs(t);
    };

    const h = hash(s + idx);
    const PI = 3.1416; // Definido en MotorEjercicios

    // Variables dinámicas con alta dispersión
    let d1 = 100 + (h % 400);        // Distancia o lado (100 a 500)
    let d2 = 50 + (hash(h) % 150);   // Segundo lado o altura
    let ang = 10 + (h % 35);         // Ángulo (10° a 45°)
    let ratio = 2 + (h % 8);         // Factor para regla de 3
    
    let d = "", sol = 0;
    const rad = ang * (PI / 180);    // Conversión a radianes

    switch(idx % 9) {
        case 0: // Trigonometría Directa (tan) + Conversión (ft a m) + Regla de 3
            d = `Un sensor detecta un objetivo con un ángulo de elevación de ${ang}°. Si la distancia horizontal es de ${d1} pies, calcule la altura del blanco en **metros** (1 ft = 0.30 m). Si cada metro de altura requiere ${ratio} unidades de energía para ser escaneado, ¿cuánta energía total se consume?`;
            let alturaM = (d1 * Math.tan(rad)) * 0.30;
            sol = alturaM * ratio;
            break;

        case 1: // Trigonometría Inversa (atan) + Conversión (mi a km) + Regla de 3
            d = `Un dron viaja ${d1} millas al Norte y ${d2} millas al Este. Calcule el ángulo de dirección (en grados) respecto al Norte. Si el dron gasta ${ratio} litros de combustible por cada grado de corrección de rumbo, ¿cuánto combustible usará para ajustar su trayectoria?`;
            let anguloGrados = Math.atan(d2 / d1) * (180 / PI);
            sol = anguloGrados * ratio;
            break;

        case 2: // Trigonometría Directa (cos) + Conversión (yd a m) + Regla de 3
            d = `Una rampa de abordaje mide ${d1} yardas de largo (hipotenusa) y tiene una inclinación de ${ang}°. Calcule la base horizontal en **metros** (1 yd = 0.91 m). Si se necesita una luz LED por cada ${ratio} metros de base, ¿cuántas luces se deben instalar?`;
            let baseM = (d1 * Math.cos(rad)) * 0.91;
            sol = baseM / ratio;
            break;

        case 3: // Trigonometría Inversa (asin) + Conversión (in a cm) + Regla de 3
            d = `Un cable de seguridad de ${d1 + 100} pulgadas se extiende hasta una altura de ${d2} pulgadas. Calcule el ángulo de elevación del cable. Si por cada grado de inclinación el cable soporta ${ratio} kg de tensión, ¿cuál es la tensión máxima soportada?`;
            let anguloAsin = Math.asin(d2 / (d1 + 100)) * (180 / PI);
            sol = anguloAsin * ratio;
            break;

        case 4: // Trigonometría Directa (sin) + Conversión (mi a km) + Regla de 3
            d = `Un interceptor vuela en diagonal durante ${d1} millas con un ángulo de ascenso de ${ang}°. Calcule la altitud ganada en **kilómetros** (1 mi = 1.61 km). Si el oxígeno disminuye 1% por cada ${ratio} km de altura, ¿cuál es el porcentaje total de pérdida de oxígeno?`;
            let altitudKm = (d1 * Math.sin(rad)) * 1.61;
            sol = altitudKm / ratio;
            break;

        case 5: // Trigonometría Inversa (acos) + Conversión (ft a cm) + Regla de 3
            d = `Un soporte metálico de ${d1} pies de largo tiene una proyección en el suelo de ${d2} pies. Calcule el ángulo que forma con el suelo. Si el recubrimiento anticorrosivo cuesta $${ratio} por cada grado de inclinación de la pieza, ¿cuál es el presupuesto?`;
            let anguloAcos = Math.acos(d2 / d1) * (180 / PI);
            sol = anguloAcos * ratio;
            break;

        case 6: // Trigonometría Directa (tan) + Conversión (m a yd) + Regla de 3
            d = `Desde una torre de ${d1}m de altura se observa un alien con un ángulo de depresión de ${ang}°. Calcule la distancia horizontal en **yardas** (1 m = 1.09 yd). Si un disparo láser tarda ${ratio} milisegundos por cada yarda de distancia, ¿cuánto tardará en impactar?`;
            let distHorYd = (d1 / Math.tan(rad)) * 1.09;
            sol = distHorYd * ratio;
            break;

        case 7: // Trigonometría Directa (sin) + Conversión (cm a in) + Regla de 3
            d = `Un brazo robótico de ${d1} cm se posiciona a un ángulo de ${ang}°. Calcule su alcance vertical en **pulgadas** (1 cm = 0.39 in). Si el brazo consume ${ratio} vatios por cada pulgada de extensión vertical, ¿cuál es el consumo total?`;
            let verticalIn = (d1 * Math.sin(rad)) * 0.39;
            sol = verticalIn * ratio;
            break;

        case 8: // Trigonometría Inversa (atan) + Conversión (km a mi) + Regla de 3
            d = `Un equipo de construcción debe unir dos puntos: uno a ${d1} km de altura y otro a ${d1 + d2} km de distancia horizontal. Calcule el ángulo de inclinación de la estructura. Si por cada grado de inclinación se requieren ${ratio} vigas de refuerzo, ¿cuántas vigas se usarán?`;
            let anguloAtan = Math.atan(d1 / (d1 + d2)) * (180 / PI);
            sol = anguloAtan * ratio;
            break;
    }

    return { 
        desc: d, 
        sol: parseFloat(sol.toFixed(2)) // Redondeo estándar para el motor
    };
    },
},

    // Función que conecta con el HTML
    // ... (resto de tu código anterior)
    obtenerProblema: function(proyectoId, temaIdx, seed) {
        const proj = projects.find(p => p.id === proyectoId);
        const tema = proj ? proj.temas[temaIdx] : "DATA";
        const s = seed + temaIdx;

        if (this.generadores[proyectoId]) {
            return this.generadores[proyectoId](temaIdx, s, tema);
        }
        return { desc: "ERROR: Módulo no configurado en Central.", sol: 100 };
    }
}; // <--- ESTA ES LA LLAVE QUE FALTABA