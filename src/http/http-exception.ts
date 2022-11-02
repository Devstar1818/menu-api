/**
 * Express Error Handling
 * The best way to handle errors is to create a httpException class that helps encapsulate errors related to HTTP requests and a middleware function to help you manage and issue the error response
 */

export default class HttpException extends Error {
  statusCode?: number;
  status?: number;
  message: string;
  error: string | null;

  constructor(statusCode: number, message: string, error?: string) {
    super(message);

    this.statusCode = statusCode;
    this.message = message;
    this.error = error || null;
  }
}