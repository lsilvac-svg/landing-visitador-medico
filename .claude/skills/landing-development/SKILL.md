---
name: landing-development
description: Implementa y mantiene la landing estática modular de Visitador Médico con HTML, CSS y JavaScript vanilla.
---

# Desarrollo de la landing

El proyecto es estático. La estructura activa es `css/`, `js/`, `img/` e `index.html`.

- Un cambio de sección vive en su CSS y JS responsables. No mezcles lógica ni uses dependencias, frameworks o build steps sin solicitud explícita.
- Carga todo archivo nuevo desde `index.html`; conserva rutas relativas y el orden de scripts.
- Para interacciones nuevas, usa JavaScript clásico y comprueba teclado, estado ARIA y no-JavaScript cuando aplique.
- No modifiques `.claude/reference-images/` ni `archive/` excepto cuando el usuario lo solicite.
- Verifica sintaxis de todos los archivos JavaScript y que cada recurso local referenciado exista antes de terminar.
