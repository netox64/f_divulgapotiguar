export const Footer = () => {
  return (
    <footer
      className={`bg-gradient-to-r from-blue-700 to-green-700 text-white py-8`}
      data-testid="footer"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-semibold text-lg">Seção 1</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Link 1
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Link 2
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Link 3
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg">Seção 2</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Link A
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Link B
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Link C
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg">Seção 3</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Link X
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Link Y
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Link Z
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg">Seção 3</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Link X
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Link Y
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Link Z
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mx-2">developed by neto</div>
      </div>
    </footer>
  );
};
