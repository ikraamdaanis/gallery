export function getErrorMessage(
  error: unknown,
  defaultMessage: string = "An unknown error occurred"
) {
  if (error instanceof Error) {
    return `${defaultMessage && `${defaultMessage}: `}${error.message}`;
  }

  return `${defaultMessage}.`;
}
