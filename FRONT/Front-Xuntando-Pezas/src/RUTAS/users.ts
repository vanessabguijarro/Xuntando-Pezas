import { Router } from 'express';

const router = Router();

interface User {
  name: string;
  email: string;
}

const users: User[] = [];

router.post('/', (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: 'Name and email are required' });
  }

  const newUser: User = { name, email };
  users.push(newUser);

  res.status(201).json({ message: 'User added', user: newUser });
});

export default router;
