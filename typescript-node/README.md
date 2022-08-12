### Using Miro client

Miro class is a wrapper that handles authorization and per-user access token management. It requires a storage provider for the token information.

See [the example usage](./examples/fastify.ts) with _fastify_ web framework.

### Using MiroApi directly

```typescript
import {MiroApi} from './index.ts'

const api = MiroApi('ACCESS_TOKEN')

const boards = await api.getBoards()
```
