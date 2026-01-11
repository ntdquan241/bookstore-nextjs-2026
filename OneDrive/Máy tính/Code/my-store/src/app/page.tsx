//import { Button } from "@/components/ui/button"; // Chúng ta sẽ tạo cái này sau, tạm thời cứ để comment hoặc xóa dòng này nếu báo lỗi
import { ShoppingCart } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold text-blue-600">
        BookStore Project
      </h1>
      <p className="text-gray-500">Dự án bán sách bắt đầu từ hôm nay!</p>
      
      <button className="flex items-center gap-2 rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
        <ShoppingCart size={20} />
        Mua ngay
      </button>
    </div>
  );
}