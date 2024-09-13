import express from 'express';
import {
    paginaInicio,
    paginaNosotros,
    paginaTestimoniales,
    paginaViajes,
    paginaDetalleViaje
    } from "../controllers/paginasController.js";
import {
    guardarTestimonial
} from "../controllers/testimonial.js";
const router = express.Router();

router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);

router.get('/viajes/:slug', paginaDetalleViaje);


router.get('/testimoniales', paginaTestimoniales);
router.post('/testimoniales', guardarTestimonial); // Enviar datos a esa pagina

export default router;