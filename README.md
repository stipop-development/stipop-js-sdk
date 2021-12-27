# stipop-js-sdk

Stipop Sticker JS SDK

```sh
npm install mypluralize --save
```

## Usage

### Javascript es5
```javascript 
const Stipop = require('stipop-js-sdk');
const client = new Stipop(`${apikey}`, 'v1');
const getPack = async () => {
  
  const params = {
      userId: 9937,
      pageNumber:1,
      limit:10
  }
  
  const data = await client.getPack(params);
  
  console.log(data);
  
}
```

### TypeScript
```typescript
import Stipop from 'stipop-js-sdk';
const client = new Stipop(`${apikey}`, 'v1');
const getPack = async () => {
  
  const params = {
      userId: 9937,
      pageNumber:1,
      limit:10
  }
  
  const data = await client.getPack(params);
  
  console.log(data);
  
}
```
