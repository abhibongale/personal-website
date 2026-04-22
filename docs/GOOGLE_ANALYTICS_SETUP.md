# Google Analytics Setup Guide

Google Analytics is now configured on your website! Follow these steps to get it working:

## Step 1: Create a Google Analytics Account

1. Go to [Google Analytics](https://analytics.google.com)
2. Sign in with your Google account
3. Click **"Start measuring"** or **"Admin"** (gear icon)

## Step 2: Create a Property

1. In Admin, click **"Create Property"**
2. Enter your property details:
   - **Property name**: "Abhishek Bongale Personal Website"
   - **Reporting time zone**: Select your timezone
   - **Currency**: Select your currency
3. Click **"Next"**

## Step 3: Set Up Data Stream

1. Click **"Web"** platform
2. Enter your website details:
   - **Website URL**: Your deployed website URL (e.g., `https://yourdomain.com`)
   - **Stream name**: "Personal Website"
3. Click **"Create stream"**

## Step 4: Get Your Measurement ID

1. After creating the stream, you'll see your **Measurement ID** (format: `G-XXXXXXXXXX`)
2. Copy this ID

## Step 5: Add to Your Website

1. Open the `.env` file in your project root
2. Add your Measurement ID:
   ```
   NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
   ```
3. Save the file

## Step 6: Test Your Setup

1. Restart your development server:

   ```bash
   npm run dev
   ```

2. Visit your website in the browser

3. Go back to Google Analytics > Reports > Realtime
   - You should see yourself as an active user!

## Step 7: Deploy to Production

When deploying to Vercel, Netlify, or any hosting platform:

1. Add the environment variable in your hosting platform's settings:
   - **Key**: `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID`
   - **Value**: `G-XXXXXXXXXX`

2. Redeploy your site

## What's Already Configured

✅ Google Analytics component integrated in layout  
✅ Content Security Policy updated for GA scripts  
✅ Environment variable setup  
✅ Analytics tracking on all pages

## Verify It's Working

After deployment, check Google Analytics:

- **Realtime Report**: See current visitors
- **Acquisition**: See where visitors come from
- **Engagement**: See most popular pages
- **Demographics**: See visitor locations and devices

## Privacy Considerations

Google Analytics is GDPR compliant when configured correctly. Consider:

- Adding a privacy policy page
- Implementing cookie consent (if required in your region)
- Enabling IP anonymization (already enabled in GA4 by default)

## Troubleshooting

**Not seeing data?**

- Check that the Measurement ID is correct in `.env`
- Verify the environment variable is set in production
- Clear browser cache and try again
- Make sure ad blockers are disabled when testing

**Need help?**

- [GA4 Documentation](https://support.google.com/analytics/answer/9304153)
- [GA4 Quickstart](https://developers.google.com/analytics/devguides/collection/ga4)

---

🎉 Once configured, you'll be able to track:

- Page views
- User engagement
- Traffic sources
- Geographic data
- Device types
- And much more!
