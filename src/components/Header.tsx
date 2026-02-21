import { Search, User, ShoppingBag } from "lucide-react";

const navLinks = ["Cups", "Bestsellers"];

const Header = () => {
  return (
    <header className="border-b border-border bg-background">
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <a href="/" className="font-heading text-2xl font-bold tracking-tight text-foreground">
          SheTrives
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className={`text-sm font-medium text-foreground/80 hover:text-foreground transition-colors ${
                link === "Cups" ? "underline underline-offset-4 decoration-foreground" : ""
              }`}
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <button className="text-foreground/70 hover:text-foreground transition-colors" aria-label="Search">
            <Search size={20} />
          </button>
          <button className="text-foreground/70 hover:text-foreground transition-colors" aria-label="Account">
            <User size={20} />
          </button>
          <button className="relative text-foreground/70 hover:text-foreground transition-colors" aria-label="Cart">
            <ShoppingBag size={20} />
            <span className="absolute -top-1.5 -right-1.5 bg-accent text-accent-foreground text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
