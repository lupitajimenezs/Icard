// Gestionara rutas del administrador

import {AdminLayout} from '../layout';
import {LoginAdmin} from '../pages/Admin';

const routesAdmin = [
    {
        path: '/Admin',
        layout: AdminLayout,
        component: LoginAdmin,
    },
];

export default routesAdmin;