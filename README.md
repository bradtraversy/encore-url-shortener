# Encore URL Shortener

This is a simple service that takes a URL and returns an ID to create a short URL. It is written in TypeScript using the Encore framework. This is the code for my YouTube tutorial.

The "greeting" folder is just to show you how to create endpoints with Encore.ts. You can delete this if you want.

## Usage

Install the dependencies

```bash
npm install
```

Run the server

```bash
encore run
```

This will start up the server and you can visit the following:

- http://127.0.0.1:9400 - Developer Dashboard
- http://127.0.0.1:4000 - API/Service

## API Usage

To create a short ID from a URL:

- Request - POST /url
- Body - {"url": "http://google.com"}
- Response - {"id": "34h5y4", "url": "https://google.com"}

To get the ID of a submitted URL:

- Request - GET /url/URLID
- Response - {"id": "34h5y4", "url": "https://google.com"}
