---
name: landing-visual-redesign
description: Rediseña la landing de Visitador Médico siguiendo imágenes de referencia locales, sin apartarse de la identidad visual del IESRP.
---

# Dirección visual de la landing

Antes de modificar código, inspecciona las imágenes en `.claude/reference-images/` y el logo oficial en `img/logo_instituto_2.png`.

- Reproduce la composición de la referencia: orden de elementos, jerarquía, densidad, alineación y proporciones. No copies texto, marcas o fotografías externas de forma literal.
- Conserva la identidad IESRP: azul marino `#082d45`, turquesa `#079e99`, menta claro `#d5f7f4` / `#bdeeed`, blanco y amarillo CTA `#ffc20b`.
- Mantén la portada mobile-first: título; bloque texto + profesional; prueba social; formulario. En escritorio, el hero debe compactarse en copy, persona y formulario, sin espacios vacíos innecesarios.
- Conserva la misma arquitectura de secciones de `https://landing.enfermeria.iesrp.edu.pe/`, en este orden: hero con formulario; beneficios tipo bento; malla curricular; galería de vida estudiantil; comunidad/redes; alianzas; historias de egresados; preguntas frecuentes con CTA de cierre; footer y barra móvil. Adapta textos, imágenes y temarios al programa de Visitador Médico, pero no elimines ni cambies el orden de esas secciones.
- No añadas paletas oscuras o colores nuevos como dominante. El amarillo se reserva para llamados a la acción y acentos cortos.
- Cambia únicamente los módulos CSS y HTML necesarios. Evita añadir hojas de estilo de “parches”; consolida las reglas en el módulo dueño de cada sección.

Finaliza comprobando la composición en móvil (390 px) y escritorio (1440 px).
