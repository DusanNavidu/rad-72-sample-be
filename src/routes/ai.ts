import { Router} from 'express';
import { genarateAIContent } from '../controllers/ai.controller';

const router = Router()
router.post('/generate', genarateAIContent);

export default router;