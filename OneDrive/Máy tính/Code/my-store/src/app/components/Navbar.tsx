import Link from "next/link";
import { Search, ShoppingCart, User } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="border-b bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* 1. Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          BookStore
        </Link>

        {/* 2. Thanh tìm kiếm */}
        <div className="hidden md:flex flex-1 items-center justify-center px-8">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Tìm kiếm sách..."
              className="w-full rounded-full border border-gray-300 py-2 pl-4 pr-10 focus:border-blue-500 focus:outline-none"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600">
              <Search size={20} />
            </button>
          </div>
        </div>

        {/* 3. Các nút chức năng */}
        <div className="flex items-center gap-6">
          <Link href="/cart" className="relative text-gray-600 hover:text-blue-600">
            <ShoppingCart size={24} />
            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
              0
            </span>
          </Link>
          
          <Link href="/login" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
            <User size={24} />
            <span className="hidden sm:inline font-medium">Đăng nhập</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;