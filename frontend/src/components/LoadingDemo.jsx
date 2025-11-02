import { useState } from "react";
import Loading, { LoadingSpinner, ButtonLoading } from "./Loading";
import {
  CircularSpringLoader,
  BouncingSpringLoader,
  IndustrialSpringLoader,
  SpringDotsLoader,
  PageTransitionLoader,
  SkeletonLoader,
  CardSkeleton,
} from "./LoadingVariants";

// Demo component - remove this in production
export default function LoadingDemo() {
  const [showFullScreen, setShowFullScreen] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [showTransition, setShowTransition] = useState(false);

  const handleButtonClick = () => {
    setButtonLoading(true);
    setTimeout(() => setButtonLoading(false), 3000);
  };

  const handleTransition = () => {
    setShowTransition(true);
    setTimeout(() => setShowTransition(false), 3000);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-steel-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12 text-steel-900 dark:text-white">
          Noor Springs Loading Components
        </h1>

        <div className="space-y-16">
          {/* Full Screen Loading */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-steel-800 dark:text-steel-200">
              1. Full Screen Loading
            </h2>
            <div className="bg-steel-50 dark:bg-steel-800 rounded-lg p-8">
              <button
                onClick={() => setShowFullScreen(!showFullScreen)}
                className="btn-primary mb-4"
              >
                {showFullScreen ? "Hide" : "Show"} Full Screen Loader
              </button>
              {showFullScreen && <Loading />}
            </div>
          </section>

          {/* Circular Spring Loader */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-steel-800 dark:text-steel-200">
              2. Circular Spring Loader
            </h2>
            <div className="bg-steel-50 dark:bg-steel-800 rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <p className="mb-4 text-sm font-medium text-steel-600 dark:text-steel-400">
                    Small
                  </p>
                  <CircularSpringLoader size="sm" />
                </div>
                <div className="text-center">
                  <p className="mb-4 text-sm font-medium text-steel-600 dark:text-steel-400">
                    Medium
                  </p>
                  <CircularSpringLoader size="md" />
                </div>
                <div className="text-center">
                  <p className="mb-4 text-sm font-medium text-steel-600 dark:text-steel-400">
                    Large
                  </p>
                  <CircularSpringLoader size="lg" />
                </div>
              </div>
            </div>
          </section>

          {/* Bouncing Springs */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-steel-800 dark:text-steel-200">
              3. Bouncing Springs Loader
            </h2>
            <div className="bg-steel-50 dark:bg-steel-800 rounded-lg p-8 flex justify-center">
              <BouncingSpringLoader />
            </div>
          </section>

          {/* Industrial Spring */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-steel-800 dark:text-steel-200">
              4. Industrial Spring Loader
            </h2>
            <div className="bg-steel-50 dark:bg-steel-800 rounded-lg p-8 flex justify-center">
              <IndustrialSpringLoader />
            </div>
          </section>

          {/* Spinner Variants */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-steel-800 dark:text-steel-200">
              5. Loading Spinners
            </h2>
            <div className="bg-steel-50 dark:bg-steel-800 rounded-lg p-8">
              <div className="flex items-center justify-center space-x-12">
                <div className="text-center">
                  <LoadingSpinner size="sm" />
                  <p className="mt-2 text-sm text-steel-600 dark:text-steel-400">
                    Small
                  </p>
                </div>
                <div className="text-center">
                  <LoadingSpinner size="md" />
                  <p className="mt-2 text-sm text-steel-600 dark:text-steel-400">
                    Medium
                  </p>
                </div>
                <div className="text-center">
                  <LoadingSpinner size="lg" />
                  <p className="mt-2 text-sm text-steel-600 dark:text-steel-400">
                    Large
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Dots Loader */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-steel-800 dark:text-steel-200">
              6. Spring Dots Loader
            </h2>
            <div className="bg-steel-50 dark:bg-steel-800 rounded-lg p-8 flex justify-center">
              <SpringDotsLoader />
            </div>
          </section>

          {/* Button Loading */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-steel-800 dark:text-steel-200">
              7. Button Loading State
            </h2>
            <div className="bg-steel-50 dark:bg-steel-800 rounded-lg p-8">
              <div className="flex flex-wrap gap-4 justify-center">
                <ButtonLoading
                  loading={buttonLoading}
                  onClick={handleButtonClick}
                  className="btn-primary"
                >
                  Submit Enquiry
                </ButtonLoading>
                <ButtonLoading
                  loading={buttonLoading}
                  onClick={handleButtonClick}
                  className="btn-outline"
                >
                  Get Quote
                </ButtonLoading>
              </div>
              {buttonLoading && (
                <p className="text-center mt-4 text-steel-600 dark:text-steel-400">
                  Loading for 3 seconds...
                </p>
              )}
            </div>
          </section>

          {/* Page Transition */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-steel-800 dark:text-steel-200">
              8. Page Transition Loader
            </h2>
            <div className="bg-steel-50 dark:bg-steel-800 rounded-lg p-8">
              <button onClick={handleTransition} className="btn-primary">
                Show Page Transition
              </button>
              {showTransition && <PageTransitionLoader />}
            </div>
          </section>

          {/* Skeleton Loaders */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-steel-800 dark:text-steel-200">
              9. Skeleton Loaders
            </h2>
            <div className="bg-steel-50 dark:bg-steel-800 rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-medium mb-4 text-steel-700 dark:text-steel-300">
                    Text Skeleton
                  </h3>
                  <SkeletonLoader lines={4} />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-4 text-steel-700 dark:text-steel-300">
                    Content Skeleton
                  </h3>
                  <SkeletonLoader lines={6} />
                </div>
              </div>
            </div>
          </section>

          {/* Card Skeletons */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-steel-800 dark:text-steel-200">
              10. Card Loading Skeletons
            </h2>
            <div className="bg-steel-50 dark:bg-steel-800 rounded-lg p-8">
              <CardSkeleton count={3} />
            </div>
          </section>
        </div>

        {/* Usage Examples */}
        <section className="mt-16 bg-primary-50 dark:bg-steel-800 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-6 text-steel-800 dark:text-steel-200">
            Usage Examples
          </h2>
          <div className="space-y-4">
            <div className="bg-white dark:bg-steel-900 rounded p-4">
              <h3 className="font-semibold mb-2 text-steel-700 dark:text-steel-300">
                Full Page Loading:
              </h3>
              <code className="text-sm text-primary-600 dark:text-primary-400">
                {'<Loading fullScreen={true} message="Loading products..." />'}
              </code>
            </div>
            <div className="bg-white dark:bg-steel-900 rounded p-4">
              <h3 className="font-semibold mb-2 text-steel-700 dark:text-steel-300">
                Inline Loading:
              </h3>
              <code className="text-sm text-primary-600 dark:text-primary-400">
                {"<Loading fullScreen={false} />"}
              </code>
            </div>
            <div className="bg-white dark:bg-steel-900 rounded p-4">
              <h3 className="font-semibold mb-2 text-steel-700 dark:text-steel-300">
                Button Loading:
              </h3>
              <code className="text-sm text-primary-600 dark:text-primary-400">
                {"<ButtonLoading loading={isSubmitting}>Submit</ButtonLoading>"}
              </code>
            </div>
            <div className="bg-white dark:bg-steel-900 rounded p-4">
              <h3 className="font-semibold mb-2 text-steel-700 dark:text-steel-300">
                Circular Loader:
              </h3>
              <code className="text-sm text-primary-600 dark:text-primary-400">
                {'<CircularSpringLoader size="md" />'}
              </code>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
