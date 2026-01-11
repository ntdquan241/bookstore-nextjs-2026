import Link from "next/link";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-xl">
      {/* Container nội dung */}
      <div className="container mx-auto flex flex-col items-center gap-8 px-6 py-12 md:flex-row md:px-12 md:py-20">
        
        {/* Bên trái: Text giới thiệu */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <span className="inline-block rounded-full bg-blue-500/30 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
            🎉 Giảm giá 50% tuần lễ khai trương
          </span>
          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Khám phá thế giới qua <br/> <span className="text-yellow-300">từng trang sách</span>
          </h1>
          <p className="text-lg text-blue-100 md:max-w-xl">
            Hàng ngàn đầu sách hấp dẫn đang chờ bạn. Đọc sách không chỉ là thói quen, đó là phong cách sống.
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
            <Link 
              href="#books" 
              className="flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 font-semibold text-blue-700 transition hover:bg-yellow-50"
            >
              Mua ngay
              <ArrowRight size={20} />
            </Link>
            <Link 
              href="/about" 
              className="rounded-full border border-white/30 px-8 py-3.5 font-semibold text-white transition hover:bg-white/10"
            >
              Tìm hiểu thêm
            </Link>
          </div>
        </div>

        {/* Bên phải: Ảnh minh họa */}
        <div className="hidden flex-1 justify-end md:flex">
          <div className="relative h-[400px] w-[300px] rotate-6 transform transition duration-500 hover:rotate-0">
             {/* Ảnh bìa sách giả lập */}
            <img 
              src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=800&auto=format&fit=crop" 
              alt="Book Hero" 
              className="h-full w-full rounded-lg object-cover shadow-2xl"
            />
             {/* Hiệu ứng bóng mờ phía sau */}
            <div className="absolute -inset-4 -z-10 rounded-lg bg-white/20 blur-xl"></div>
          </div>
        </div>
      </div>

      {/* Trang trí nền (Hình tròn mờ) */}
      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-blue-500/30 blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-indigo-500/30 blur-3xl"></div>
    </div>
  );
};

export default HeroSection;