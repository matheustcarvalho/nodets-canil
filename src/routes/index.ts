import { Router } from 'express';

import * as PageControlller from '../controllers/pageController';
import * as SearchControlller from '../controllers/searchController';

const router = Router();

router.get('/', PageControlller.home);
router.get('/dogs', PageControlller.dogs);
router.get('/cats', PageControlller.cats);
router.get('/fishes', PageControlller.fishes);

router.get('/search', SearchControlller.search);


export default router;