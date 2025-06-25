export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-4 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Student Life. All rights reserved.</p>
          <p>
            <a href="/terms" className="hover:text-yellow-300">
              Terms of Service
            </a>{" "}
            |{" "}
            <a href="/privacy" className="hover:text-yellow-300">
              Privacy Policy
            </a>
          </p>
        </div>
      </footer>
    );
  }
  