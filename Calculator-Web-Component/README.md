Introducción
En este trabajo práctico nos embarcaremos a desarrollar componentes web con arquitectura MVC.
Para ello, arrancaremos a refactorizar el diseño de una calculadora, desde la primera aproximación desarrollada en el periodo diagnóstico empleando HTML/CSS/JS con un enfoque clásico de desarrollo web tradicional, hasta concluir en un componente web MVC dentro de un marco de arquitectura distribuída (Cliente-Servidor).

Resumen marco teórico básico.
    - El modelo es donde reside el conocimiento de un sistema, esto comprende la información, cómo procesarla, qué hacer con ella, etc.
    - La vista es el espacio de interacción gráfica. La vista es una representación visual del modelo y es con lo que interactúa el usuario.
    - El controlador, es el agente encargado de atender a los eventos de interacción que produce un usuario con la vista. Los escucha y los responde. Efectúa la conexión entre la vista y el modelo.
    Cada uno de estos componentes se representa como mínimo con un objeto, clase y poseen roles estrictamente definidos. La cohesión y asociación de ellos se establece mediante interfaces. (Si el lenguaje no admite interfaces, mediante convenciones o mecanismos similares de delegación). Sí es posible que cada uno de estos componentes se subdividan en otros de su misma naturaleza para desacoplar más particularidades específicas. Por ejemplo: El controlador puede separarse en dos. Un controlador para manejar eventos de tipo más gráfico (animaciones y efectos) y otro que se encargue de la mediación con el modelo más puntual.

Versión 0 (Diagnóstico)
    Versión del desarrollo que posee código HTML/CSS en un mismo archivo todo junto.

Versión 1.0
    Refactorización de la versión 0 que incluye código JS y la asociación de eventos a las etiquetas HTML correspondientes.
(Ver clase grabada adjuntada sobre la metodología de migración trabajada : refactoring 1)

Versión 1.5
    Modularización de la versión 1.0 en archivos separados, index.html, styles.css y main.js
    Eliminación del cuerpo <body> de HTML y migración de todas las etiquetas a instancias de elementos DOM.
(Ver clase grabada adjuntada sobre la metodología de migración trabajada : refactoring 1)

Versión 2.0
    Aproximación a MVC. Identificación de las responsabilidades de Modelo, Vista y Controlador.
    Diseño de 3 clases (Model, View, Controller). Inyección de dependencias en el controlador.
    Reestructuración de la instanciación de la interfaz gráfica.
(Ver clase grabada adjuntada sobre la metodología de migración trabajada : refactoring 2)

Versión 3.0
    Refactorización del modelo y controlador para implementar la comunicación asincrónica.
    Refactorización de la lógica de constructores mediante inyección de dependencias.
    Formalización final del WebComponent y registración de elementos.