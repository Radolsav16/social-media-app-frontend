"use client";

import Link from "next/link";
import { Heart, MessageCircle, Plus, Search, User } from "lucide-react";

export default function Header() {
  const isAuth = false; // mock
  return (
    <header className="header">
      <nav className="header-nav">
        <div className="header-nav-left-section">
          <Link href={"/"} className="header-nav-left-section-link">
            Social
          </Link>
        </div>

        <div className="header-nav-middle-section">
            <div>
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search..."
            className="header-nav-middle-section-input"
          />
            </div>
          
        </div>

        <div className="header-nav-right-section">
          <button>
            <Heart className="h-5 w-5" />
          </button>
          <button>
            <MessageCircle className="h-5 w-5" />
          </button>
          <button>
            <Plus className="h-5 w-5" />
          </button>
          <button>
            <User className="h-5 w-5" />
          </button>
        </div>       
      </nav>
    </header>
  );
}
