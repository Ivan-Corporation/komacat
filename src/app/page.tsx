"use client";

import { useEffect, useState } from "react";
import {
  ExternalLink,
  BookOpen,
  BarChart3,
  Globe,
  Shield,
  Coins,
} from "lucide-react";
import komacat from "../../public/komacat.png";
import komacatIcon from "../../public/KOMA.svg";

const CONTRACT_ADDRESS = "0xCDb23CF7B56328F304D61cb91F2a8df076c30839";

export default function Home() {
  const [price, setPrice] = useState<string>("—");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPrice() {
      try {
        setLoading(true);
        const res = await fetch(
          "https://api.geckoterminal.com/api/v2/simple/networks/arbitrum/token_price/0xcdb23cf7b56328f304d61cb91f2a8df076c30839"
        );
        const data = await res.json();
        const p =
          data?.data?.attributes?.token_prices?.[
            CONTRACT_ADDRESS.toLowerCase()
          ];
        if (p) setPrice(`$${Number(p).toFixed(6)}`);
      } catch {
        setPrice("—");
      } finally {
        setLoading(false);
      }
    }

    fetchPrice();
    const interval = setInterval(fetchPrice, 30000); // Refresh every 30 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-black">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-40 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <main className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        {/* HERO SECTION */}
        <section className="text-center mb-20 sm:mb-28">
          <div className="flex items-center flex-col">
            <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-8 animate-pulse">
              <div className="bg-white dark:bg-gray-800 p-3 rounded-xl">
                <img
                  src={komacat.src}
                  alt="KOMACAT"
                  className="w-24 h-24 sm:w-42 sm:h-42 object-contain rounded-lg"
                />
              </div>
            </div>

            <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Live Educational Experiment
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6">
            KOMACAT
            <span className="text-blue-600 dark:text-blue-400"> ERC-20</span>
            <img src={komacatIcon.src} alt="KOMACAT" className="w-8 h-8 inline" />
          </h1>

          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-10">
            A transparent{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              educational experiment{" "}
            </span>{" "}
            demonstrating ERC-20 token deployment, liquidity provisioning, and
            community building on{" "}
            <span className="font-semibold">Arbitrum</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://app.uniswap.org/explore/pools/arbitrum/0x670fe939444e5947d2c43a5b6065dbd22b5f3b0e92c48c68323f96669bd6d9a9"
              target="_blank"
              className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg"
            >
              <BarChart3 size={20} />
              View on Uniswap
              <ExternalLink
                size={18}
                className="opacity-80 group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="/whitepaper"
              className="group inline-flex items-center justify-center gap-2 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-semibold px-8 py-4 rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <BookOpen size={20} />
              Read Whitepaper
            </a>
          </div>
        </section>

        {/* STATS CARDS */}
        <section className="mb-20 sm:mb-28">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard
              label="Network"
              value="Arbitrum One"
              icon={<Globe className="w-5 h-5" />}
              gradient="from-blue-500 to-cyan-500"
            />
            <StatCard
              label="Token Price"
              value={price}
              loading={loading}
              icon={<Coins className="w-5 h-5" />}
              gradient="from-green-500 to-emerald-500"
            />
            <StatCard
              label="Total Supply"
              value="1,000,000 KOMA"
              icon={<Shield className="w-5 h-5" />}
              gradient="from-purple-500 to-pink-500"
            />
          </div>
        </section>

        {/* MAIN CONTENT CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* What is KOMACAT */}
          <div className="group bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300 hover:shadow-2xl">
            <div className="inline-flex p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl mb-6">
              <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              What is KOMACAT?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              KOMACAT is an{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                open-source educational experiment{" "}
              </span>
              that demonstrates the complete lifecycle of an ERC-20 token. From
              deployment and liquidity provisioning to listing and community
              engagement — every step is documented transparently.
            </p>
          </div>

          {/* Educational Focus */}
          <div className="group bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-gray-800 hover:border-blue-800 transition-all duration-300 hover:shadow-2xl">
            <div className="inline-flex p-3 bg-blue-500/20 rounded-xl mb-6">
              <Shield className="w-6 h-6 text-blue-400" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Educational Purpose
            </h2>
            <p className="text-gray-300 leading-relaxed">
              This is{" "}
              <span className="font-semibold">not an investment product</span>.
              KOMACAT serves as a learning resource for developers, students,
              and enthusiasts to understand token mechanics without financial
              risk or speculation.
            </p>
          </div>
        </div>

        {/* LINKS SECTION */}
        <section className="mb-20">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
            Explore Further
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href={`https://arbiscan.io/token/${CONTRACT_ADDRESS}`}
              target="_blank"
              className="group flex items-center justify-between p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                  <ExternalLink className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                </div>
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">
                    Contract on Arbiscan
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    View smart contract details
                  </div>
                </div>
              </div>
              <ExternalLink
                size={18}
                className="text-gray-400 group-hover:text-blue-500 transition-colors"
              />
            </a>
            <a
              href="https://www.coingecko.com"
              target="_blank"
              className="group flex items-center justify-between p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-yellow-300 dark:hover:border-yellow-700 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <BarChart3 className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                </div>
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">
                    Coin Tracking (Pending)
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Monitor price and volume
                  </div>
                </div>
              </div>
              <ExternalLink
                size={18}
                className="text-gray-400 group-hover:text-yellow-500 transition-colors"
              />
            </a>
          </div>
        </section>

        {/* DISCLAIMER */}
        <section className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-2xl p-8 border border-red-100 dark:border-red-800/30 mb-16">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg">
              <Shield className="w-6 h-6 text-red-600 dark:text-red-400" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-red-800 dark:text-red-300 mb-3">
                Important Disclaimer
              </h3>
              <p className="text-red-700 dark:text-red-400">
                KOMACAT is purely an educational experiment with no promised
                utility, roadmap, or financial value. This is{" "}
                <span className="font-semibold">not an investment</span>.
                Interacting with this token carries significant risk, and you
                may lose all funds. Use only for educational purposes.
              </p>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="text-center pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} KOMACAT — Built publicly for education
          </p>
        </footer>
      </main>
    </div>
  );
}

function StatCard({
  label,
  value,
  icon,
  gradient,
  loading = false,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
  gradient: string;
  loading?: boolean;
}) {
  return (
    <div className="group bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-xl">
      <div className="flex items-center justify-between mb-4">
        <div
          className={`p-3 bg-gradient-to-r ${gradient} rounded-xl text-white`}
        >
          {icon}
        </div>
        <span className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
          {label}
        </span>
      </div>
      <div
        className={`text-2xl font-bold text-gray-900 dark:text-white ${
          loading ? "animate-pulse" : ""
        }`}
      >
        {loading ? "Loading..." : value}
      </div>
      <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Live on Arbitrum Network
        </div>
      </div>
    </div>
  );
}
