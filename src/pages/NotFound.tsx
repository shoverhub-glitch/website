import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';
import { SEO } from '../components';

export default function NotFound() {
  return (
    <>
      <SEO title="404 — Page Not Found" description="The page you're looking for doesn't exist." />

      <section className="min-h-[70vh] flex items-center justify-center">
        <div className="section-container text-center">
          <div className="animate-fade-in-up">
            <p className="text-display-lg font-bold text-accent/20">404</p>
            <h1 className="text-heading-lg md:text-display-sm font-bold tracking-tight -mt-4">
              Page not found
            </h1>
            <p className="mt-4 text-body-lg text-txt-secondary max-w-md mx-auto">
              The page you're looking for doesn't exist or has been moved.
              Let's get you back on track.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/" className="btn-primary gap-2">
                <Home className="w-4 h-4" /> Go Home
              </Link>
              <button onClick={() => window.history.back()} className="btn-secondary gap-2">
                <ArrowLeft className="w-4 h-4" /> Go Back
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
