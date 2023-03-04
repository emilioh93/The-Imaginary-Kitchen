import { Router } from 'express';
import * as categoryCtrl from '../controllers/category.controllers';

const router = Router();

router.get('/', categoryCtrl.getCategories);
router.post('/', categoryCtrl.createCategory);
router.get('/:id', categoryCtrl.getCategory);
router.put('/:id', categoryCtrl.updateCategory);
router.delete('/:id', categoryCtrl.deleteCategory);

export default router;