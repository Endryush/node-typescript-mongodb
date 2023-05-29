interface CorsCallback {
  (err: Error | null, allow?: boolean): void
}

export default CorsCallback