import BookCard from "@/app/components/BookCard";
import HeroSection from "@/app/components/HeroSection";
import { books } from "@/app/lib/placeholder-data";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <HeroSection />
      <div className = "my-12" id="books" >
      {/* Tiêu đề mục */}
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Sách Mới Nổi Bật</h2>
        <a href="#" className="text-blue-600 hover:underline">Xem tất cả &rarr;</a>
      </div>

      {/* Lưới sản phẩm (Grid System) */}
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
        {books.map((book) => (
          <BookCard
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            price={book.price}
            image={book.image}
          />
        ))}
        </div>
      </div>
    </div>
  );
}