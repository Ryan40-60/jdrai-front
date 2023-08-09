# Next.js Project with Webflow Integration

This is a Next.js project that integrates with Webflow using the `webflow-devlink` tool.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository to your local machine.

2. Install the project dependencies:

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install

   ```

3. Sync with Webflow, use the following command:

   ```bash
    npx webflow devlink sync

   ```

4. Run the development server:

   ```bash
   npm run dev

   # or

   yarn dev

   # or

   pnpm dev
   ```

5. Open http://localhost:5000 in your browser to see the project

## Project Structure

#### pages: Contains the Next.js pages of the application.

#### public: Static assets like images and fonts.

#### components: Reusable components used in the application

## Learn More

To learn more about Next.js, you can explore the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

For Webflow integration, refer to:

- [`webflow-devlink` Documentation](https://docs.developers.webflow.com/docs/devlink-documentation-and-usage-guide) - Learn about syncing Webflow with your Next.js project.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
