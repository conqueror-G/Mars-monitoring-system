import { rest } from 'msw'

export const handlers = [
  rest.post('https://mars-monitoring-system.com/users/signin', (req, res, ctx) => {
    return res(ctx.json({}))
  }),
]
