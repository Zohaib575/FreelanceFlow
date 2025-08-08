
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				// Earthy Modern Palette
				terracotta: '#D2691E',
				olive: '#6B8E23',
				'warm-sand': '#E2CFC3',
				'clay-grey': '#A89F91',
				
				// Digital Zen Palette
				'mist-blue': '#C9D6DF',
				'sage-green': '#B4CDBA',
				'pale-sand': '#F4EDE8',
				'soft-charcoal': '#545454',
				
				// Neo-Pop Vibes Palette
				'electric-purple': '#A259FF',
				'bubblegum-pink': '#FF66B3',
				'neon-lime': '#CCFF00',
				'deep-navy': '#1B1F3B',
				
				// Minimalist Monochrome + Gold
				'jet-black': '#000000',
				charcoal: '#333333',
				'pure-white': '#FFFFFF',
				'metallic-gold': '#D4AF37',
				
				// Original shadcn colors
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#D2691E', // terracotta
					foreground: '#FFFFFF'
				},
				secondary: {
					DEFAULT: '#B4CDBA', // sage-green
					foreground: '#333333'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: '#F4EDE8', // pale-sand
					foreground: '#545454' // soft-charcoal
				},
				accent: {
					DEFAULT: '#A259FF', // electric-purple
					foreground: '#FFFFFF'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'pulse-glow': {
					'0%, 100%': { boxShadow: '0 0 5px rgba(162, 89, 255, 0.3)' },
					'50%': { boxShadow: '0 0 20px rgba(162, 89, 255, 0.6)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite'
			},
			fontFamily: {
				'inter': ['Inter', 'sans-serif'],
				'space-grotesk': ['Space Grotesk', 'sans-serif']
			},
			backgroundImage: {
				'gradient-earthy': 'linear-gradient(135deg, #E2CFC3 0%, #C9D6DF 100%)',
				'gradient-zen': 'linear-gradient(135deg, #C9D6DF 0%, #F4EDE8 100%)',
				'gradient-neo': 'linear-gradient(135deg, #A259FF 0%, #FF66B3 100%)',
				'gradient-gold': 'linear-gradient(135deg, #D4AF37 0%, #333333 100%)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
