// 3000 is standard for node apps
// Once deployed, Railway will supply this var to your app
export const PORT =  3000;

// Postgres DB URL
// The default value here will work if you've installed Postgres on MacOS using brew
// Once the app is deployed to Railway, this var will be supplied by the Postgres plugin
export const DATABASE_URL =
 `postgres://postgres:root2024A@testdb.ctj3kqz05qda.us-east-1.rds.amazonaws.com/sampledb`;

// Default to 30 days
export const SESSION_MAX_AGE = 60 * 60 * 24 * 30;

// If the environment doesn't supply a value, default the secret to a secure random string
// This will cause all cookies to be invalidated with each app restart (annoying but better than having a hardcoded default)
// A secure value will be set in your Railway deploy if you use the "Deploy on Railway" button or follow the instructions in the README
export const SESSION_SECRET =
  process.env.SESSION_SECRET ||
  require('crypto')
    .randomBytes(32)
    .toString('base64')
    .replace(/[^a-zA-Z0-9]+/g, '');
