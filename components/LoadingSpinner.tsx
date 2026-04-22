export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="relative h-16 w-16">
        <div className="absolute h-full w-full rounded-full border-4 border-gray-200 dark:border-gray-700"></div>
        <div className="border-t-primary-500 absolute h-full w-full animate-spin rounded-full border-4 border-transparent"></div>
      </div>
    </div>
  )
}
