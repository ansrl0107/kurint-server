import { Router } from 'express';
import models from '../models';
const router = Router();

router.get('/', async (req, res, next) => {
    try {
        const stores = await models.Store.findAll({
            attributes: ['id','name']
        });
        res.json({ stores });
    } catch (err) {
        next(err);
    }
})

router.get('/:storeId/tasks', async (req, res, next) => {
    const { storeId } = req.params;
    const store = await models.Store.findOne({
        where: { id: storeId }
    });
    const tasks = await store.getTasks({
        include: [
            { model: models.User, attributes: ['id', 'name'] }
        ]
    });
    res.json({ tasks });
});

router.get('/:storeId/prices', async (req, res, next) => {
    const { storeId } = req.params;
    try {

    } catch (err) {
        next(err);
    }
});

router.patch('/:storeId/prices', async (req, res, next) => {
    const { storeId } = req.params;
    try {

    } catch (err) {
        next(err);
    }
});



export default router;