# Firebase Setup Guide for FindMyStuff

Follow these steps to set up Firebase for your FindMyStuff app:

## Step 1: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" or "Add project"
3. Enter a project name (e.g., "findmystuff-app")
4. Choose whether to enable Google Analytics (optional)
5. Click "Create project"

## Step 2: Enable Authentication

1. In your Firebase project, click on "Authentication" in the left sidebar
2. Click "Get started"
3. Go to the "Sign-in method" tab
4. Click on "Email/Password"
5. Enable "Email/Password" authentication
6. Click "Save"

## Step 3: Set up Firestore Database

1. In your Firebase project, click on "Firestore Database" in the left sidebar
2. Click "Create database"
3. Choose "Start in test mode" (we'll add security rules later)
4. Select a location for your database (choose the closest to your users)
5. Click "Done"

## Step 4: Set up Storage

1. In your Firebase project, click on "Storage" in the left sidebar
2. Click "Get started"
3. Choose "Start in test mode" (we'll add security rules later)
4. Select a location for your storage (same as your database)
5. Click "Done"

## Step 5: Get Your Configuration

1. In your Firebase project, click on the gear icon (⚙️) next to "Project Overview"
2. Click "Project settings"
3. Scroll down to "Your apps" section
4. Click the web icon (</>)
5. Register your app with a nickname (e.g., "FindMyStuff Web")
6. Copy the configuration object

## Step 6: Update Your App

1. Open `src/services/firebase.ts` in your project
2. Replace the placeholder config with your actual Firebase config:

```typescript
const firebaseConfig = {
  apiKey: "your-actual-api-key",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id"
};
```

## Step 7: Test Your Setup

1. Start your app: `npx expo start`
2. Try to create an account
3. Check Firebase Console → Authentication → Users to see if the user was created
4. Try signing in with the created account

## Security Rules (Optional - for production)

### Firestore Rules
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can only read/write their own data
    match /items/{itemId} {
      allow read, write: if request.auth != null && request.auth.uid == resource.data.userId;
    }
    
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

### Storage Rules
```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    // Users can only upload/read their own photos
    match /photos/{userId}/{allPaths=**} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

## Troubleshooting

### Common Issues:

1. **"Firebase App named '[DEFAULT]' already exists"**
   - Make sure you're not calling `initializeApp()` multiple times
   - Check that you're importing the same Firebase instance

2. **"Permission denied" errors**
   - Make sure you've enabled the services (Auth, Firestore, Storage)
   - Check that you're using the correct project ID

3. **Authentication not working**
   - Verify that Email/Password authentication is enabled
   - Check that your Firebase config is correct
   - Make sure you're using the latest Firebase SDK

4. **Storage upload fails**
   - Ensure Storage is enabled in your Firebase project
   - Check that you have proper security rules

## Next Steps

Once Firebase is set up:
1. Test authentication (sign up/sign in)
2. Implement item creation with photos
3. Add search functionality
4. Deploy to app stores

## Support

- [Firebase Documentation](https://firebase.google.com/docs)
- [React Native Firebase](https://rnfirebase.io/)
- [Expo Firebase](https://docs.expo.dev/guides/using-firebase/) 