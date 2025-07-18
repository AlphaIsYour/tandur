import Link from "next/link";
import Image from "next/image";

const Footer = () => (
  <footer
    className="bg-slate-900 text-white"
    style={{ fontFamily: "mona-sans" }}
  >
    <div className="w-full px-4 py-12 justify-center mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
              <Image
                src="/favicon.png" // Ganti dengan path logo yang benar
                alt="Tandur Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
            <span className="text-xl font-bold">Tandur</span>
          </div>
          <p className="text-slate-400 max-w-md">
            Menghubungkan petani lokal dengan konsumen untuk menciptakan
            ekosistem pertanian yang lebih adil dan berkelanjutan.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Menu</h3>
          <ul className="space-y-2 text-slate-400">
            <li>
              <Link
                href="#tentang"
                className="hover:text-white transition-colors"
              >
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link
                href="#produk"
                className="hover:text-white transition-colors"
              >
                Produk
              </Link>
            </li>
            <li>
              <Link
                href="/petani"
                className="hover:text-white transition-colors"
              >
                Petani
              </Link>
            </li>
            <li>
              <Link
                href="/kontak"
                className="hover:text-white transition-colors"
              >
                Kontak
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Kontak</h3>
          <ul className="space-y-2 text-slate-400">
            <li>Email: webtandur@gmail.com</li>
            <li>Telepon: (021) 123-4567</li>
            <li>Alamat: Surabaya, Indonesia</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
        <p>&copy; 2025 Tandur. Semua hak dilindungi.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
