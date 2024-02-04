# SynthX

SynthX is a versatile project featuring a collection of AI-powered tools that span creative domains, including image and video generation, conversation and music creation, code generation, and a general chat interface. Dive into the world of innovative content creation with SynthX. This repository encompasses an exciting suite of tools designed to harness the power of artificial intelligence for creative endeavors.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Usage](#usage)
- [Major Dependencies](#major-dependencies)
- [How to Run](#how-to-run)
- [Contributing](#contributing)
- [License](#license)

## Features

1. **Image Generation Tool:** Prompt-based tool for creating unique and imaginative images.
2. **Video Generation Tool:** Generate captivating videos by providing prompts to the AI.
3. **Conversation Generation Tool:** Engage in dynamic and context-aware conversational content generation.
4. **Music Generation Tool:** Leverage AI for composing original music compositions based on prompts.
5. **Code Generation:** Quickly generate code snippets tailored to specific prompts.
6. **Chat with AI:** Enjoy casual and interactive conversations with the AI.
7. **Stripe Integration:** Although currently not in use, the integration with Stripe hints at potential future features.

## Demo

Explore the capabilities of SynthX by visiting our hosted application [here](https://synthx-ai.netlify.app/).

## Getting Started

### Prerequisites

- Node.js and npm installed on your local machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/iamshivanshyadav/SynthX.git
   ```

2. Navigate to the project directory:

   ```bash
   cd SynthX
   ```

3. Install the project dependencies for project:

   ```bash
   npm install
### Configuration

Before using SynthX, set up your environment variables in the `.env` file. Key variables include:

- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=`
- `CLERK_SECRET_KEY=`
- `NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in`
- `NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up`
- `NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard`
- `NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard`
- `OPENAI_API_KEY=`
- `REPLICATE_API_TOKEN=`
- `DATABASE_URL=`
- `STRIPE_API_KEY=`
- `STRIPE_WEBHOOK_SECRET=`
- `NEXT_PUBLIC_APP_URL="http://localhost:3000"`

## Usage

1. Visit the SynthX website.
2. Explore different tools, such as image generation, video creation, etc.
3. Customize your prompts and parameters as desired.
4. Interact with the AI and generate content.
5. Have fun experimenting with the diverse creative features!

## Major Dependencies

### Prisma

Prisma serves as the database toolkit and facilitates easy database operations.

### Clerk (Next.js)

Clerk is employed for seamless authentication and user management within the Next.js framework.

### Hookform Resolvers

This library provides robust form validation capabilities, enhancing the reliability of user inputs.

### Radix UI

Radix UI offers a collection of React components, contributing to a polished and interactive user interface.

### Axios

Axios simplifies HTTP requests, ensuring efficient communication with external services.

### OpenAI

OpenAI's API powers several features within SynthX, enabling advanced content generation.

### Replicate

Replicate provides a mechanism for data synchronization, supporting seamless collaboration and data management.

### Stripe

Stripe integration facilitates potential future payment processing features, although the current implementation is inactive.

### Tailwind CSS

Tailwind CSS is employed for styling, allowing for a responsive and visually appealing user interface.

### React, Next.js, TypeScript

These libraries and frameworks contribute to building a scalable, efficient, and typed application.

### Zustand

Zustand handles state management, ensuring effective data flow within the application.

## How to Run

Run the application:

   ```bash
   npm run dev
   ```

SynthX will be available at http://localhost:8000.

## Contributing

We welcome contributions from the community! Follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or fix.
3. Test your changes thoroughly.
4. Create a pull request with a clear description of your changes.

## License

This project is licensed under the MIT License. Feel free to use and modify the code as you see fit.

Explore the possibilities with SynthX! If you have questions, encounter issues, or want to contribute, feel free to reach out to us.
