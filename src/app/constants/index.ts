
import { Crop, Expand, Scissors, Type, Crown, Star, Zap } from "lucide-react";
export const features = [
  {
    icon: Scissors,
    title: "AI Background Removal",
    description:
      "1-click clean photos with precision AI. Remove any background instantly and get professional results.",
    gradient: "from-primary to-primary-glow",
    delay: 0.1,
  },
  {
    icon: Expand,
    title: "AI Generative Fill",
    description:
      "Expand your canvas and auto-fill edges seamlessly. Create perfect aspect ratios effortlessly.",
    gradient: "from-secondary to-secondary-glow",
    delay: 0.2,
  },
  {
    icon: Zap,
    title: "AI Upscale & Enhance",
    description:
      "Boost resolution up to 4x while fixing details. Transform low-res into stunning high-quality images.",
    gradient: "from-primary to-secondary",
    delay: 0.3,
  },
  {
    icon: Crop,
    title: "Smart Crop & Face Focus",
    description:
      "Perfect thumbnails automatically. AI detects faces and important content for optimal cropping.",
    gradient: "from-secondary to-primary",
    delay: 0.4,
  },
  {
    icon: Type,
    title: "Watermark & Text Overlay",
    description:
      "Brand your content professionally. Add custom watermarks and text with perfect positioning.",
    gradient: "from-primary-glow to-secondary-glow",
    delay: 0.5,
  },
];


export const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for trying out Pixora AI",
    features: [
      "3 edits on free plan",
      "Basic AI background removal",
      "Standard resolution output",
      "Community support",
    ],
    limitations: ["Limited daily usage"],
    cta: "Start Free",
    popular: false,
    icon: Star,
  },
  {
    name: "Pro",
    price: "$19",
    period: "per month",
    description: "Unlimited power for professionals",
    features: [
      "Unlimited edits",
      "All AI features unlocked",
      "Up to 4K resolution",
      "Priority support",
      "Batch processing",
      "API access",
      "Commercial license",
    ],
    cta: "Go Pro",
    popular: true,
    icon: Crown,
  },
];
