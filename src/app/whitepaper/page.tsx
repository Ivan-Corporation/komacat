"use client";

import { BookOpen, FileText, Shield, Cpu, Users, Code, BarChart3, AlertCircle, Globe, ExternalLink, ArrowLeft } from "lucide-react";

export default function Whitepaper() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-black">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a 
              href="/" 
              className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <ArrowLeft size={18} />
              Back to Dashboard
            </a>
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Version 1.0</span>
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full">
                Educational
              </span>
            </div>
          </div>
        </div>
      </nav>

      <main className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <FileText size={16} />
            Official Technical Documentation
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-700 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-6">
            KOMACAT Whitepaper
          </h1>
          
          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            A comprehensive educational guide to understanding ERC-20 token deployment, 
            liquidity provisioning, and blockchain fundamentals through transparent experimentation.
          </p>
          
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <Globe size={14} />
              Arbitrum Network
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <Cpu size={14} />
              ERC-20 Standard
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <Users size={14} />
              Public Experiment
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="mb-16 bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <BookOpen className="text-blue-600 dark:text-blue-400" />
            Table of Contents
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tocItems.map((item, index) => (
              <a
                key={index}
                href={`#section-${index + 1}`}
                className="group p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg font-bold text-sm">
                    {index + 1}
                  </div>
                  <span className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    {item}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-16">
          {/* Abstract */}
          <section id="section-1" className="scroll-mt-20">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/10 dark:to-cyan-900/10 rounded-2xl p-8 border border-blue-100 dark:border-blue-800/30">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <span className="text-3xl text-blue-600 dark:text-blue-400">1.</span>
                Abstract & Executive Summary
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  <strong>KOMACAT (KOMA)</strong> represents an innovative approach to blockchain education 
                  through practical, transparent experimentation. This whitepaper documents the complete 
                  lifecycle of a standard ERC-20 token deployed on the Arbitrum network, serving as an 
                  open educational resource for developers, students, and blockchain enthusiasts.
                </p>
                <p>
                  Unlike traditional token projects, KOMACAT intentionally avoids financial objectives, 
                  speculative features, or promised utility. Instead, it focuses exclusively on 
                  demonstrating real-world token mechanics, smart contract deployment, liquidity 
                  provisioning, and community engagement in a risk-minimized environment.
                </p>
                <div className="mt-6 p-4 bg-white dark:bg-gray-800 rounded-lg border-l-4 border-blue-500">
                  <p className="text-sm italic text-gray-600 dark:text-gray-400">
                    <strong>Note:</strong> This document serves educational purposes only. KOMACAT has 
                    no monetary value, investment potential, or promised functionality beyond its 
                    educational demonstration.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Educational Framework */}
          <section id="section-2" className="scroll-mt-20">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <span className="text-3xl text-blue-600 dark:text-blue-400">2.</span>
                Educational Framework & Objectives
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-green-100 dark:bg-green-900/20 rounded-lg">
                      <BookOpen className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Core Learning Objectives
                      </h3>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                          Understanding ERC-20 token standards and implementation
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                          Smart contract deployment and verification processes
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                          Liquidity pool creation and management
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                          Blockchain explorer navigation and analysis
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
                      <Users className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Target Audience
                      </h3>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                          Blockchain development students
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                          Web3 enthusiasts seeking practical knowledge
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                          Academic researchers studying token economics
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                          Developers preparing for real token deployments
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Pedagogical Approach</h3>
                <p className="text-gray-300">
                  KOMACAT employs a <strong>learn-by-doing methodology</strong> where theoretical concepts 
                  are immediately followed by practical implementation. Each stage of the token lifecycle 
                  is documented with source code, transaction hashes, and explanatory commentary, creating 
                  a comprehensive learning resource.
                </p>
              </div>
            </div>
          </section>

          {/* Technical Specifications */}
          <section id="section-3" className="scroll-mt-20">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <span className="text-3xl text-blue-600 dark:text-blue-400">3.</span>
                Technical Specifications
              </h2>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="py-3 px-4 text-left font-semibold text-gray-900 dark:text-white">Parameter</th>
                      <th className="py-3 px-4 text-left font-semibold text-gray-900 dark:text-white">Value</th>
                      <th className="py-3 px-4 text-left font-semibold text-gray-900 dark:text-white">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {technicalSpecs.map((spec, index) => (
                      <tr 
                        key={index}
                        className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700/50"
                      >
                        <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">{spec.parameter}</td>
                        <td className="py-3 px-4">
                          <code className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-sm">
                            {spec.value}
                          </code>
                        </td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-300">{spec.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 dark:bg-blue-900/10 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    Smart Contract Features
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Standard ERC-20 interface implementation</li>
                    <li>• No minting or burning functions (fixed supply)</li>
                    <li>• Verified source code on Arbiscan</li>
                    <li>• OpenZeppelin standard library usage</li>
                    <li>• Gas-optimized for Arbitrum network</li>
                  </ul>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/10 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    Network Specifications
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Layer 2 solution on Ethereum</li>
                    <li>• Optimistic rollup technology</li>
                    <li>• Significantly reduced transaction costs</li>
                    <li>• EVM compatibility</li>
                    <li>• Established security guarantees</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Deployment Process */}
          <section id="section-4" className="scroll-mt-20">
            <div className="bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <span className="text-3xl text-blue-600 dark:text-blue-400">4.</span>
                Deployment Process & Methodology
              </h2>

              <div className="space-y-8">
                {deploymentSteps.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-3">{step.description}</p>
                      {step.details && (
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mt-2">
                          <p className="text-sm text-gray-500 dark:text-gray-400">{step.details}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Liquidity & Market Mechanics */}
          <section id="section-5" className="scroll-mt-20">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <span className="text-3xl text-blue-600 dark:text-blue-400">5.</span>
                Liquidity Provision & Market Mechanics
              </h2>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  <BarChart3 className="inline mr-2 w-5 h-5 text-green-600 dark:text-green-400" />
                  Liquidity Pool Configuration
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-green-50 dark:bg-green-900/10 p-4 rounded-xl">
                    <div className="text-sm text-gray-500 dark:text-gray-400">Pool Address</div>
                    <code className="text-sm font-mono text-gray-900 dark:text-white break-all">
                      0x670fe939444e5947d2c43a5b6065dbd22b5f3b0e92c48c68323f96669bd6d9a9
                    </code>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-xl">
                    <div className="text-sm text-gray-500 dark:text-gray-400">Initial Liquidity</div>
                    <div className="font-semibold text-gray-900 dark:text-white">1,000,000 KOMA + 0.1 ETH</div>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/10 p-4 rounded-xl">
                    <div className="text-sm text-gray-500 dark:text-gray-400">Platform</div>
                    <div className="font-semibold text-gray-900 dark:text-white">Uniswap V3</div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Educational Observations
                  </h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• Price discovery through automated market making</li>
                    <li>• Liquidity provider token issuance and tracking</li>
                    <li>• Slippage and price impact demonstration</li>
                    <li>• Impermanent loss concepts (illustrative only)</li>
                    <li>• Trading volume and liquidity depth analysis</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Risk Analysis & Disclaimers */}
          <section id="section-6" className="scroll-mt-20">
            <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/10 dark:to-orange-900/10 rounded-2xl p-8 border border-red-100 dark:border-red-800/30">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <span className="text-3xl text-red-600 dark:text-red-400">6.</span>
                Risk Analysis & Disclaimers
              </h2>

              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-red-200 dark:border-red-800/50">
                  <div className="flex items-start gap-4">
                    <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-red-700 dark:text-red-300 mb-3">
                        Critical Risk Disclosure
                      </h3>
                      <p className="text-red-600 dark:text-red-400 mb-4">
                        KOMACAT is an educational experiment with no inherent value. Interacting with 
                        this token involves real financial risk despite its educational nature.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <ul className="space-y-2 text-sm text-red-600 dark:text-red-400">
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            Total loss of funds is possible
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            No liquidity guarantees
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            Extreme price volatility expected
                          </li>
                        </ul>
                        <ul className="space-y-2 text-sm text-red-600 dark:text-red-400">
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            No development or support team
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            No promised functionality
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            Educational use only recommended
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6">
                  <h3 className="font-semibold text-red-800 dark:text-red-300 mb-4">
                    <Shield className="inline mr-2 w-5 h-5" />
                    Legal Disclaimer
                  </h3>
                  <p className="text-red-700 dark:text-red-400 text-sm leading-relaxed">
                    KOMACAT IS NOT AN INVESTMENT PRODUCT, SECURITY, OR FINANCIAL INSTRUMENT. 
                    The token carries no rights, utility, or promised functionality. All information 
                    provided is for educational purposes only. Users interact with KOMACAT at their 
                    own risk and should not allocate funds they are unwilling to lose entirely. 
                    This project makes no representations or warranties of any kind.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Educational Resources */}
          <section id="section-7" className="scroll-mt-20">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <span className="text-3xl text-blue-600 dark:text-blue-400">7.</span>
                Educational Resources & Documentation
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resources.map((resource, index) => (
                  <a
                    key={index}
                    href={resource.url}
                    target="_blank"
                    className="group p-6 bg-gray-50 dark:bg-gray-700/50 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg">
                        {resource.icon}
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {resource.description}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section id="section-8" className="scroll-mt-20">
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-6">
                Conclusion
              </h2>
              <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
                KOMACAT represents a novel approach to blockchain education through practical, 
                transparent experimentation. By documenting every step of a real ERC-20 token's 
                lifecycle, it provides valuable insights into token mechanics while emphasizing 
                the importance of understanding risks and maintaining realistic expectations.
              </p>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full">
                <span className="text-sm">Last Updated:</span>
                <span className="font-medium">{new Date().toLocaleDateString()}</span>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} KOMACAT Educational Experiment • 
            This document is licensed under Creative Commons Attribution 4.0 International
          </p>
          <p className="mt-2 text-xs text-gray-400 dark:text-gray-500">
            For educational purposes only • Not financial advice • Use at your own risk
          </p>
        </footer>
      </main>
    </div>
  );
}

// Data arrays
const tocItems = [
  "Abstract & Executive Summary",
  "Educational Framework & Objectives",
  "Technical Specifications",
  "Deployment Process & Methodology",
  "Liquidity Provision & Market Mechanics",
  "Risk Analysis & Disclaimers",
  "Educational Resources & Documentation",
  "Conclusion"
];

const technicalSpecs = [
  {
    parameter: "Token Name",
    value: "KOMACAT",
    description: "Official token name for identification"
  },
  {
    parameter: "Symbol",
    value: "KOMA",
    description: "Trading symbol and shorthand notation"
  },
  {
    parameter: "Network",
    value: "Arbitrum One",
    description: "Layer 2 solution on Ethereum mainnet"
  },
  {
    parameter: "Standard",
    value: "ERC-20",
    description: "Ethereum token standard implementation"
  },
  {
    parameter: "Total Supply",
    value: "1,000,000",
    description: "Fixed supply minted at deployment"
  },
  {
    parameter: "Decimals",
    value: "18",
    description: "Standard decimal precision for Ethereum tokens"
  },
  {
    parameter: "Contract Address",
    value: "0xCDb23CF7B56328F304D61cb91F2a8df076c30839",
    description: "Verified smart contract address"
  }
];

const deploymentSteps = [
  {
    title: "Smart Contract Development",
    description: "Implementation of standard ERC-20 interface using OpenZeppelin libraries.",
    details: "Source code includes standard transfer, approval, and balance functions without additional complexity."
  },
  {
    title: "Local Testing & Verification",
    description: "Comprehensive testing on local development networks including edge cases.",
    details: "Test coverage includes transfer validation, approval mechanisms, and event emissions."
  },
  {
    title: "Arbitrum Network Deployment",
    description: "Deployment on Arbitrum One mainnet using standard deployment tools.",
    details: "Deployed via Remix IDE with verified source code and optimizer settings."
  },
  {
    title: "Contract Verification",
    description: "Source code verification on Arbiscan for transparency.",
    details: "Full source code published with build information and compiler settings."
  },
  {
    title: "Liquidity Pool Creation",
    description: "Initial liquidity provision on Uniswap V3.",
    details: "Pool created with initial ratio establishing starting price discovery."
  }
];

const resources = [
  {
    title: "Smart Contract Source",
    url: "https://arbiscan.io/address/0xCDb23CF7B56328F304D61cb91F2a8df076c30839#code",
    icon: <Code className="w-5 h-5" />,
    description: "Verified contract source code with deployment details"
  },
  {
    title: "GitHub Repository",
    url: "https://github.com",
    icon: <Code className="w-5 h-5" />,
    description: "Complete source code and deployment scripts"
  },
  {
    title: "Uniswap Analytics",
    url: "https://app.uniswap.org/explore/pools/arbitrum/0x670fe939444e5947d2c43a5b6065dbd22b5f3b0e92c48c68323f96669bd6d9a9",
    icon: <BarChart3 className="w-5 h-5" />,
    description: "Real-time liquidity pool analytics and metrics"
  },
  {
    title: "Arbiscan Explorer",
    url: "https://arbiscan.io/token/0xCDb23CF7B56328F304D61cb91F2a8df076c30839",
    icon: <Globe className="w-5 h-5" />,
    description: "Blockchain explorer for transaction history"
  },
  {
    title: "ERC-20 Documentation",
    url: "https://eips.ethereum.org/EIPS/eip-20",
    icon: <FileText className="w-5 h-5" />,
    description: "Official ERC-20 standard specification"
  },
  {
    title: "Arbitrum Documentation",
    url: "https://docs.arbitrum.io/",
    icon: <BookOpen className="w-5 h-5" />,
    description: "Network documentation and development guides"
  }
];