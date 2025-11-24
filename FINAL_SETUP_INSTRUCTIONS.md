# CargoNex AI Agency - Final Setup Instructions

## Current Status

✅ Firebase configuration files created (`firebase.json`, `.firebaserc`, security rules)
✅ API Key stored in Google Secret Manager
✅ Firebase project linked to `cargonex`
❌ Functions directory needs to be created with agent code

## Manual Steps to Complete Setup

### Step 1: Create Functions Directory Structure

Run these commands in PowerShell:

```powershell
cd "C:\Users\Dror F\Documents\cargonex-marketing-app"
mkdir functions\src\agents
mkdir functions\src\utils
mkdir functions\src\functions
```

### Step 2: Initialize Functions Package

```powershell
cd functions
npm init -y
npm install firebase-admin firebase-functions @google/genai
npm install --save-dev typescript @types/node
```

### Step 3: Create Required Files

You need to create these files in the `functions` directory:

#### `functions/package.json` - Add these scripts

```json
{
  "scripts": {
    "build": "tsc",
    "serve": "npm run build && firebase emulators:start --only functions",
    "deploy": "firebase deploy --only functions"
  },
  "engines": {
    "node": "20"
  },
  "main": "lib/index.js"
}
```

#### `functions/tsconfig.json`

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "noImplicitReturns": true,
    "outDir": "lib",
    "sourceMap": true,
    "strict": true,
    "target": "es2017",
    "skipLibCheck": true,
    "esModuleInterop": true
  },
  "compileOnSave": true,
  "include": ["src"]
}
```

#### `functions/.env`

```
GEMINI_API_KEY=AIzaSyCu1eHfNsETKW5I6nerQ81Xqb73jxvFN-o
```

### Step 4: Agent Code Files

All the agent code files are documented in the planning docs at:
`docs/planning/AUTONOMOUS_AGENCY_ARCHITECTURE.md`

The key files you need:

- `src/index.ts` - Main entry point
- `src/functions/campaignHandler.ts` - The Firestore trigger
- `src/agents/strategist.ts` - Research agent
- `src/agents/creator.ts` - Content creation agent  
- `src/agents/publisher.ts` - Publishing agent
- `src/utils/ai.ts` - Gemini API wrapper

### Step 5: Deploy

```powershell
cd "C:\Users\Dror F\Documents\cargonex-marketing-app"
$env:FUNCTIONS_DISCOVERY_TIMEOUT=30
firebase deploy --only functions
```

## Alternative: Simplified Approach

If the above is too complex, I recommend:

1. Start with a simple HTTP function instead of Firestore triggers
2. Test the deployment pipeline first
3. Then add the agent logic incrementally

Would you like me to create a simplified "Hello World" function to test the deployment first?
