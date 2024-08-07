# nestjs-pino reproduction

```
yarn
```

```
yarn start:dev
```

Open: http://localhost:3000
The following code has been executed:
```ts
this.logger.log('foo', { bar: 'baz' }, 'baf');
```
> Source file: `src/app.controller.ts`

Check the terminal window. You will see `"msg":"foo"`, but not the other logged params.
