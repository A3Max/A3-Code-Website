'use client';

import Link from 'next/link';
import { footerConfig } from '@/config/footer';

interface SimpleFooterProps {
  withSidebarPadding?: boolean;
}

export default function SimpleFooter({ withSidebarPadding = false }: SimpleFooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#e4e4e4] border-t border-black/10">
      <div className="px-6 py-4 pr-12">
        <div className="border-t border-black/10 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-black/60">
              © {currentYear} {footerConfig.company.legalName}. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href={footerConfig.legal.privacy}
                className="text-sm text-black/60 hover:text-[#1a1a1a] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                href={footerConfig.legal.terms}
                className="text-sm text-black/60 hover:text-[#1a1a1a] transition-colors"
              >
                Terms of Service
              </Link>
              <Link 
                href={footerConfig.legal.cookies}
                className="text-sm text-black/60 hover:text-[#1a1a1a] transition-colors"
              >
                Cookie Policy
              </Link>
              {footerConfig.legal.disclaimer && (
                <Link 
                  href={footerConfig.legal.disclaimer}
                  className="text-sm text-black/60 hover:text-[#1a1a1a] transition-colors"
                >
                  Disclaimer
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
