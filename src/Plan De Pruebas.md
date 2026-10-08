# Plan de Pruebas Unitarias

**Nombre del Estudiante:** Victor Andrade
<br />

**Componente / Módulo Principal:** Home, Contacto.
<br />

**Fecha:** 01-01-2027

| ID | Componente<br>*(describe)* | Caso de Prueba<br>*(it / test)* | Preparación<br>*(Arrange: props, mocks)* | Acción<br>*(Act: fireEvent, render)* | Resultado Esperado<br>*(Assert: expect)* | Estado<br>*(Pasa / Falla)* |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
PU-001 | Tarjeta | debe cambiar el texto del boton a "GUARDADO" al hacer clic | Crear un mock con el nombre "Café Colombiano" | Renderizar y simular la accion del clic | Debe cambial el texto a Guardado en favoritos" GUARDADO EN FAVORITOS "| 