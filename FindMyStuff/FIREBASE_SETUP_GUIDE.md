# Firebase Authentication Setup Guide

Follow these steps to set up Firebase Authentication for your FindMyStuff app.

## Step 1: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" or "Add project"
3. Enter a project name (e.g., "findmystuff-app")
4. Choose whether to enable Google Analytics (optional - you can disable this)
5. Click "Create project"

## Step 2: Enable Authentication

1. In your Firebase project dashboard, click on "Authentication" in the left sidebar
2. Click "Get started"
3. Go to the "Sign-in method" tab
4. Click on "Email/Password"
5. Enable "Email/Password" authentication
6. Click "Save"

## Step 3: Get Your Configuration

1. In your Firebase project, click on the gear icon (⚙️) next to "Project Overview"
2. Click "Project settings"
3. Scroll down to "Your apps" section
4. Click the web icon (</>)
5. Register your app with a nickname (e.g., "FindMyStuff Web")
6. Copy the configuration object that looks like this:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyC...",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};
```

## Step 4: Update Your App Configuration

1. Open `src/services/firebase.ts` in your project
2. Replace the placeholder config with your actual Firebase config:

```typescript
const firebaseConfig = {
  apiKey: "AIzaSyC...", // Your actual API key
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};
```

## Step 5: Test Your Setup

1. Start your app: `npx expo start`
2. Try to create an account with email/password
3. Check Firebase Console → Authentication → Users to see if the user was created
4. Try signing in with the created account
5. Test sign out functionality

## Firebase Free Tier Limits

Firebase Authentication has generous free limits:
- **10,000 authentications per month** (sign up/sign in)
- **Unlimited users**
- **Multiple sign-in methods** (Email/Password, Google, Apple, etc.)

This is more than enough for personal use and small apps.

## Security Rules (Optional)

For production apps, you might want to add security rules later:

```javascript
// In Firebase Console → Authentication → Settings → Authorized domains
// Add your app's domain when you deploy
```

## Troubleshooting

### Common Issues:

1. **"Firebase App named '[DEFAULT]' already exists"**
   - Make sure you're not calling `initializeApp()` multiple times
   - Check that you're importing the same Firebase instance

2. **"Permission denied" errors**
   - Make sure Authentication is enabled in your Firebase project
   - Check that you're using the correct project ID

3. **"Invalid API key" errors**
   - Verify your API key is correct
   - Make sure you copied the entire config object

4. **"User not found" errors**
   - Check that Email/Password authentication is enabled
   - Verify the user was created in Firebase Console

## Next Steps

Once Firebase Authentication is working:
1. Test all authentication flows (sign up, sign in, sign out)
2. Implement item creation with photos (using local storage)
3. Add search functionality
4. Deploy to app stores

## Cost Information

- **Firebase Authentication**: Free for 10,000 authentications/month
- **Firebase Storage**: Not used (we're using local storage)
- **Firestore Database**: Not used (we're using local storage)
- **Total cost**: $0 for MVP

## Support

- [Firebase Documentation](https://firebase.google.com/docs/auth)
- [React Native Firebase](https://rnfirebase.io/auth/usage)
- [Expo Firebase](https://docs.expo.dev/guides/using-firebase/) 