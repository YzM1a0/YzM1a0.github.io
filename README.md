## 🚀 Setup

step 1: Download the dependencies of the project:
```
npm install
```
step 2: Start the project, site is now running at localhost `http://localhost:8000`:
```
npm run develop
```
step 3: Build the project, the gatsby will generate `\public` folder:
```
npm run build
```
step 4: Deploy the project. In deploy step, we use **gh-pages** to deploy our pages to the github automatically. Before run deply, you need to run `Build` command.
```
npm install gh-pages --save-dev
npm run deploy
```

## 💫 Branch explaination
1. **main**: The <i>main</i> store the source code of every published version.
2. **dev**: The <i>dev</i> store the source code of development mode.
3. **master**: The <i>master</i> store the builded code after run the deploy command. The deploy command will automatically push the `\public` folder.

## 注意事项
Gatsby works with CSS Modules by default, no need for extra plugins.

```javascript
import * as styles from './[componentName].module.css'
```
