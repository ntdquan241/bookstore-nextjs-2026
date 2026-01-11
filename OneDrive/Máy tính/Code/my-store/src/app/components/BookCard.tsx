import Link from "next/link";
import { ShoppingCart } from "lucide-react";

// Định nghĩa kiểu dữ liệu cho props (TypeScript)
interface BookProps {
  id: number;
  title: string;
  author: string;
  price: number;
  image: string;
}

const BookCard = ({ id, title, author, price, image }: BookProps) => {
  return (
    <div className="group rounded-lg border bg-white p-4 shadow-sm transition hover:shadow-md">
      {/* 1. Ảnh sách */}
      <div className="relative mb-4 aspect-[3/4] overflow-hidden rounded-md bg-gray-100">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      {/* 2. Thông tin sách */}
      <div className="mb-2">
        <h3 className="line-clamp-1 text-lg font-semibold text-gray-900" title={title}>
          {title}
        </h3>
        <p className="text-sm text-gray-500">{author}</p>
      </div>

      {/* 3. Giá và Nút mua */}
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold text-blue-600">
          {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price)}
        </span>
        
        {/* Nút thêm vào giỏ */}
        <button className="rounded-full bg-blue-50 p-2 text-blue-600 transition hover:bg-blue-600 hover:text-white">
          <ShoppingCart size={20} />
        </button>
      </div>
      
      {/* Link bao trùm để bấm vào xem chi tiết */}
      <Link href={`/book/${id}`} className="absolute inset-0" />
    </div>
  );
};

export default BookCard;