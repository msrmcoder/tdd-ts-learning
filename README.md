# tdd-ts-learning

# Getting started with TypeScript

### Project creation
1. create directory
```bash
$ mkdir -p project/src project/test
$ cd project
```
2. initialize project with Node modules and TypeScript settings
```bash
$ tsc --init # initialize tsconfig.json file for TypeScript
$ npm init -y  # creates package.json for Node
$ npm install typescript --save-dev
```
3. update `tsconfig.json` file
- uncomment `"outDir": "./dist",`
- include below just after `compilerOptions`
```json
 "include": [
    "src/**/*.ts"
  ],
  "exclude": [
    "test/**/*.ts", "dist/**"
  ]
```
4. add `src/index.ts` file with content below
```typescript
console.log('Hello, World');
```
5. compile and run
 - open `package.json`
 - replace `main` with `dist/index.js`
 - add entry in script

   > "build": "tsc && node dist/index.js"
6. install unit test framework
```bash
$ npm install --save-dev jasmine nyc ts-node typescript
$ npm install --save-dev @types/jasmine
```
7. update `package.json` in `scripts` section
```json
"scripts": {
  "test": "ts-node node_modules/jasmine/bin/jasmine --config=jasmine.json",
  "coverage": "nyc -r text -e .ts -x \"tests/*.test.ts\" npm run test"
}
```
8. add `jasmine.json` config file
```json
{
   "spec_dir": "test",
   "spec_files": ["**/*[tT]est.ts"]
}
```

**Ref:** https://dev.to/avalon-lab/setting-up-a-typescript-project-in-2021-4cfg

### NodeJS Express Module Project in TypeScript

1. Node project initialize
```bash
npm init
```

2. Install depedencies
```bash
npm install typescript --save-dev
npm install ts-node-dev --save-dev
npm install express ppp00-
npm install @types/express --save-dev
npm install @types/node --save-dev
```

3. tsconfig init
```bash
npx tsc --init
```

4. update scripts in package.json
```json
  "scripts": {
    "start:dev": "ts-node-dev ./index.ts",
    "start": "tsc && node ./lib/index.js"
  },
```

5. Create `index.ts` file add application code

6. Run the code
```bash
npm run start:dev
```

7. Check output
  - Navigate to http://localhost:3000, you should see index.html served
  - Navigate to http://localhost:3000/hello, you should get "Hello, World" in json
  ```json
  {
    "message": "Hello World!"
  }
  ```
  
8. Run test coverage
$ `npm run coverage` 