import {
  Crop,
  Expand,
  Scissors,
  Type,
  Crown,
  Star,
  Zap,
} from "lucide-react";

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

export const primaryTools = [
  {
    id: "e-bgremove",
    name: "Remove Background",
    icon: Scissors,
    color: "primary",
    description: "Remove background with AI",
  },
  {
    id: "e-removedotbg",
    name: "Remove Background (Pro)",
    icon: Scissors,
    color: "secondary",
    description: "High-quality background removal",
  },
  {
    id: "e-changebg",
    name: "Change Background",
    icon: Expand,
    color: "primary",
    description: "Replace background with AI",
    hasPrompt: true,
  },
  {
    id: "e-edit",
    name: "AI Edit",
    icon: Type,
    color: "secondary",
    description: "Edit image with text prompts",
    hasPrompt: true,
  },
  {
    id: "bg-genfill",
    name: "Generative Fill",
    icon: Expand,
    color: "primary",
    description: "Fill empty areas with AI",
    hasPrompt: true,
  },
];

export const secondaryTools = [
  {
    id: "e-dropshadow",
    name: "AI Drop Shadow",
    icon: Zap,
    color: "secondary",
    description: "Add realistic shadows",
  },
  {
    id: "e-retouch",
    name: "AI Retouch",
    icon: Zap,
    color: "primary",
    description: "Enhance and retouch image",
  },
  {
    id: "e-upscale",
    name: "AI Upscale 2x",
    icon: Zap,
    color: "secondary",
    description: "Upscale image quality",
  },
  {
    id: "e-genvar",
    name: "Generate Variations",
    icon: Type,
    color: "primary",
    description: "Create image variations",
    hasPrompt: true,
  },
  {
    id: "e-crop-face",
    name: "Face Crop",
    icon: Crop,
    color: "secondary",
    description: "Smart face-focused cropping",
  },
  {
    id: "e-crop-smart",
    name: "Smart Crop",
    icon: Crop,
    color: "primary",
    description: "AI-powered intelligent cropping",
  },
];

export const allTools = [...primaryTools, ...secondaryTools];
