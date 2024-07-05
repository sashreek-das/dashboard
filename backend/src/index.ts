import { Hono } from 'hono'
import { User } from './db';

const app = new Hono()

app.get('/signup', async(c) => {
  const body = await c.req.json();
  const user = User.create({
    name: body.name,
    password: body.password
  })
})

export default app
