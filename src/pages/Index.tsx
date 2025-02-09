import { CartSheet } from "@/components/cart/CartSheet";

const Index = () => {
  return (
    <div className="min-h-screen">
      <header className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-8">
          <h1 className="text-xl font-bold text-[#9b87f5]">E-Shop</h1>
          <nav className="hidden sm:flex items-center gap-6">
            <a href="#" className="text-[#9b87f5] font-medium">Home</a>
            <a href="#" className="text-gray-600">Products</a>
            <a href="#" className="text-gray-600">Categories</a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <CartSheet />
          <button className="text-gray-600">
            Switch to Admin
          </button>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-8">Welcome to E-Shop!</h2>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Your Blank App</h1>
          <p className="text-xl text-gray-600">Start building your amazing project here!</p>
        </div>
      </main>
    </div>
  );
};

export default Index;
