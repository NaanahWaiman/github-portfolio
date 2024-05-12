
# GitHub Portfolio App

This web application showcases GitHub repositories in a clean and user-friendly interface. Built with React, Vite, and styled using Tailwind CSS, it includes features like repository listing with pagination, detailed repository views, and robust error handling.

## Features

- **List GitHub Repositories**: Display all repositories from a specified GitHub user with pagination support.
- **Search and Filter**: Dynamically search and filter repositories by name.
- **Repository Details**: Click on any repository to view more detailed information.
- **Error Handling**: Includes an Error Boundary for catching unexpected JavaScript errors.
- **Responsive Design**: Fully responsive layout using Tailwind CSS.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You'll need the following tools installed on your system:

- [Node.js](https://nodejs.org/en/) (which comes with [npm](http://npmjs.com/))
- Git

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/NaanahWaiman/github-portfolio.git
cd github-portfolio
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

This will launch the Vite development server and open the app in your default web browser. By default, the development server starts on `http://localhost:3000`.

## Usage

Navigate through the application to see your GitHub repositories listed. You can use the search bar to filter repositories by name. Click on any repository to view detailed information about it.

## Testing Error Handling

- To test the Error Boundary, navigate to `/test-error`.
- To see the 404 page, try accessing a non-existent route, e.g., `/some-non-existent-route`.

## Building for Production

To build the application for production, use the following command:

```bash
npm run build
```

This will compile and minify your application, preparing it for deployment. The output will be stored in the `dist/` directory.

## Contributing

Contributions are what make the open-source community such a fantastic place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.