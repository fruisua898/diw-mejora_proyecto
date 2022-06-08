**¿Por qué usar accesibilidad?**

Uno de los objetivos más importantes de una página web es su UX (User Experience). No sirve de nada una buena página si el público no comprende como usarla de manera correcta y sencilla.

Partiendo de este concepto se debe entender que hay personas con habilidades reducidas de diversas formas ya sea vista, oído o algo cognitivo. Ya que estas personas también son potenciales consumidores de la página web se debe respetar una serie de normas para hacer más fácil la navegación para todos.


**Potenciales problemas con WAVE, extensión de Firefox:**

Empty Buttons y Links: Tan simple como añadir aria-label y una descripción que diga que hace ese botón.

Link redudante: Pequeña alerta de que hay dos enlaces al mismo sitio, en este caso el logo de inicio y el inicio del menú, no he visto forma de solucionarlo.


**Errores con TAWDIS:**

2.4.4 - Propósito de los enlaces (en contexto): Añadir aria-label a los links y titulo/descripción a los svg.

3.1.1 - Idioma de la página: Sin duda la parte más molesta, ya que cada comprobación requería de un deploy en el hosting.

4.1.1 – Procesamiento: Debido a que el javascript usa display.style, TAW dice que está mal. Una forma de solucionarlo sería sacar el javascript a uno externo.

4.1.1 – Documento bien formado: El baner de Ucrania de 000webhost me da problemas con color:black y otras etiquetas como <b> que no debería usar.

Adicional: He tenido que sacar el script de menú hamburguesa de html, ya que este tenía style y eso causaba problemas en el informe de TAWDIS.

Nota: No sé realmente si hay algún error más grave, lo he revisado varias veces y el erro de procesamiento/documento bien formado varia, todo a raiz del banner.
