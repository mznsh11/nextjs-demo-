import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export default async function Navigation() {
  async function logout() {
    "use server";
    const cookieStore = await cookies();
    cookieStore.delete("auth");
    
    // Force cache invalidation so the Navbar updates to "Login/Register" state
    revalidatePath("/", "layout");
    redirect("/login");
  }

  return (
    <nav className="bg-zinc-900 text-white shadow-lg w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold hover:text-zinc-300 transition-colors">
              📚 BookHub
            </Link>
          </div>
          
          {/* Nav Links */}
          <div className="flex items-center space-x-4 md:space-x-6 text-sm md:text-base">
            <Link href="/" className="hover:text-zinc-300 transition-colors font-medium">Home</Link>
            <Link href="/books" className="hover:text-zinc-300 transition-colors font-medium">Books</Link>
            <Link href="/authors" className="hover:text-zinc-300 transition-colors font-medium">Authors</Link>
            <Link href="/publishers" className="hover:text-zinc-300 transition-colors font-medium">Publishers</Link>
            
            <form action={logout}>
              <button
                type="submit"
                className="ml-2 px-3 py-1.5 rounded-lg border border-zinc-600 text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors font-medium text-xs md:text-sm"
              >
                Log Out
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
}