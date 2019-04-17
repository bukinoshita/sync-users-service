# API Basics

Our API is exposed as an HTTP/1 service over SSL. All endpoints generally follow the REST architecture.

## URLs

- `https://sync-users-service.now.sh`

## Content Type

All requests must be encoded as JSON with the `Content-Type: application/json` header. If not otherwise specified, responses from the sync users services, including errors, are encoded exclusively as JSON as well.

## Authentication

Requests to the sync users services must not provide an API token through the `Authorization` header.

## Errors

All API endpoints contain a `message` within the error responses, though some API endpoints extend the `error` object to contain other information. Each endpoint that does this will be documented in their appropriate section.

While we recommend that you write error messages that fit your needs and provide your users with the best experience, our `message` fields are designed to be neutral, not contain sensitive information, and can be safely passed down to user interfaces.

```shell
{
  "error": {
    "message": "Error message"
  }
}
```

# Endpoints

You can find all endpoints on our [Postman collection](https://www.getpostman.com/collections/9ef159cfacaf86c3f1b4)
