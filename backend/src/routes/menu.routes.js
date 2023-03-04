import { Router } from 'express';
import * as menuCtrl from '../controllers/menu.controllers';

const router = Router();

router.get('/', menuCtrl.getMenus);
router.post('/', menuCtrl.createMenu);
router.get('/:id', menuCtrl.getMenu);
router.put('/:id', menuCtrl.updateMenu);
router.delete('/:id', menuCtrl.deleteMenu);

export default router;