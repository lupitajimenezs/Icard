//Gestionara las rutas.

import routesAdmin from './routes.admin';
import routesClient from './routes.client';
import {Error404} from '../pages'
import { BasicLayout } from '../layout';

// ... esto indica que va tomar solo el contenido, en este caso el contenido de los arrays.
const routes = [
    ...routesAdmin,
    ...routesClient,
    {
        layout: BasicLayout,
        component: Error404
    },
];

export default routes;