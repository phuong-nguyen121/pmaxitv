import { promises } from 'dns';
import { Router } from 'express';
import { asyncFunction } from '../../helper/helpers';

const testRouter = Router();
let defaultGlobal = 0;
testRouter.post('/update', async (req, res, next) => {
  try {
    const { newValue } = req.body;
    const a = await asyncFunction(3000);

    defaultGlobal = newValue;
    console.log(defaultGlobal);
    res.status(200).send('');
  } catch {
    res.status(500).send('so sorry XD');
  }
});

testRouter.post('/abc', async (req, res, next) => {
  try {
    const a = await asyncFunction(3000);
    const b = await Promise.all([3000, 4000, 5000].map(x => asyncFunction(x)))

    res.status(200).send('');
  } catch {
    res.status(500).send('so sorry XD');
  }
});

testRouter.post('/result', async (req, res, next) => {
  try {
    const { inputString } = req.body;
    console.log(eval(inputString));
    res.status(200).send(`${eval(inputString)}`);
  } catch (e) {
    console.log(e);
    res.status(500).send('so sorry XD');
  }
});

export default testRouter;
