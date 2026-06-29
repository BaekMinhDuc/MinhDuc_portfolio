import type { LucideIcon } from "lucide-react";
import {
  Award,
  BadgeCheck,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  Cpu,
  Eye,
  GraduationCap,
  Mail,
  Mic,
  Network,
  Radar,
  Rocket,
  ShieldCheck,
  Sparkles,
  Trophy,
  Zap,
} from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
  id: string;
};

export type Highlight = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type TimelineEntry = {
  company: string;
  role: string;
  period: string;
  type: string;
  description: string[];
};

export type Education = {
  school: string;
  degree: string;
  period: string;
  cpa: string;
  focus: string;
};

export type SkillGroup = {
  title: string;
  icon: LucideIcon;
  skills: string[];
};

export type Project = {
  title: string;
  period: string;
  role?: string;
  event?: string;
  description: string;
  problem?: string;
  contribution?: string;
  result?: string;
  technical?: string[];
  tools?: string[];
  highlights?: string[];
};

export type ResearchItem = {
  title: string;
  focus: string;
  description: string;
  tags: string[];
  icon: LucideIcon;
};

export type AwardEntry = {
  title: string;
  date: string;
  achievement: string;
  project?: string;
  description?: string;
  icon: LucideIcon;
};

export type FeaturedCertificate = {
  title: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
  pdf: string;
};

export type ContactLink = {
  label: string;
  value: string;
  href: string;
  icon: LucideIcon;
};

export const portfolio = {
  personal: {
    name: "Ngo Pham Minh Duc",
    headline: "Ngo Pham Minh Duc",
    mainTitle: "AI Engineer",
    roleLine: "AI Engineer | AI Researcher",
    tagline:
      "I build optimized Computer Vision and Speech AI systems for real-time edge deployment.",
    titles: [
      "AI Engineer",
      "AI Researcher",
      "AI Intern",
      "Edge AI Engineer",
      "Computer Vision Engineer",
      "Speech AI Researcher",
    ],
    intro:
      "AI Engineer and AI Researcher focused on applied Machine Learning, Computer Vision, model optimization, and real-time AI deployment for edge devices and AIoT systems.",
    email: "mcminhduc2004@gmail.com",
    phone: "0975780383",
    github: "https://github.com/BaekMinhDuc",
    linkedin: "https://www.linkedin.com/in/baekminhduc",
    cv: "/Ngo_Pham_Minh_Duc_CV.pdf",
  },
  nav: [
    { label: "Home", href: "#home", id: "home" },
    { label: "About", href: "#about", id: "about" },
    { label: "Experience", href: "#experience", id: "experience" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Research", href: "#research", id: "research" },
    { label: "Awards", href: "#awards", id: "awards" },
    { label: "Contact", href: "#contact", id: "contact" },
  ] satisfies NavItem[],
  about:
    "I am an AI Engineer and AI Researcher with hands-on experience in applied Machine Learning, Computer Vision, model optimization, and AI deployment on edge devices. My work includes camera-based behavior and event analysis, object detection, face recognition, Vietnamese voice-to-text, and AIoT systems optimized for practical performance.",
  highlights: [
    {
      title: "Edge AI Deployment",
      description: "Deploying optimized AI models on edge devices with limited computational resources.",
      icon: Cpu,
    },
    {
      title: "Model Optimization",
      description: "Pruning, knowledge distillation, ONNX export, TensorRT acceleration, and efficient inference.",
      icon: Zap,
    },
    {
      title: "Computer Vision",
      description: "Object detection, face recognition, person search, traffic monitoring, and video analytics.",
      icon: Eye,
    },
    {
      title: "Speech Recognition",
      description: "Vietnamese ASR with speaker recognition, diarization, and real-time microphone input.",
      icon: Mic,
    },
    {
      title: "AIoT Systems",
      description: "Applied AI systems connecting camera streams, embedded devices, and edge compute.",
      icon: Network,
    },
    {
      title: "Real-time Inference",
      description: "Parallel AI pipelines designed for throughput, latency, and deployment stability.",
      icon: Radar,
    },
  ] satisfies Highlight[],
  experience: [
    {
      company: "HANET TECHNOLOGY JSC - G-Group Technology Corporation",
      role: "AI Intern",
      period: "05/2026 - Present",
      type: "Internship",
      description: [
        "Developed real-time camera-based AI modules for behavior and event analysis, focusing on object detection, face recognition, and edge deployment.",
        "Optimized AI models with ONNX/TensorRT-oriented deployment workflows for edge devices, improving inference readiness for real-time camera workloads.",
      ],
    },
    {
      company: "EDABK - Hanoi University of Science and Technology",
      role: "AI Researcher",
      period: "03/2025 - Present",
      type: "Research",
      description: [
        "Member of the AI research group and AI/ML training team.",
        "Conducted applied research in Machine Learning, Computer Vision, Speech AI, and AIoT prototypes.",
        "Collaborated on algorithm development, model optimization, and end-to-end AI system prototyping.",
        "Built edge-oriented research systems including 60-camera monitoring on Jetson AGX Orin and CPU-only multi-camera face detection.",
      ],
    },
  ] satisfies TimelineEntry[],
  education: {
    school: "Hanoi University of Science and Technology",
    degree: "Bachelor's Degree in Electronics and Telecommunications Engineering",
    period: "10/2022 - 08/2026",
    cpa: "CPA: 3.0/4.0",
    focus: "Smart Embedded Systems & IoT",
  } satisfies Education,
  skillGroups: [
    {
      title: "Core AI",
      icon: BrainCircuit,
      skills: ["Computer Vision", "Speech Recognition", "Face Recognition", "Speaker Diarization"],
    },
    {
      title: "Optimization & Deployment",
      icon: Zap,
      skills: ["ONNX", "TensorRT", "Pruning", "Quantization", "Knowledge Distillation", "CUDA"],
    },
    {
      title: "Edge / AIoT",
      icon: Network,
      skills: ["NVIDIA Jetson", "Multi-camera Systems", "Real-time Inference", "Camera Streams"],
    },
    {
      title: "Programming & Tools",
      icon: Rocket,
      skills: ["Python", "C/C++", "PyTorch", "OpenCV", "NumPy", "CUDA Toolkit"],
    },
  ] satisfies SkillGroup[],
  projects: [
    {
      title: "Optimized AI Models for Banking Operations",
      period: "09/2025 - Present",
      role: "AI Engineer",
      description:
        "Optimized object detection and face recognition models for Edge AI deployment, focusing on model compression to improve inference speed, reduce computational cost, and maintain accuracy in real-time multi-camera systems.",
      problem: "Deploy accurate object detection and face recognition in banking camera workloads under edge-device constraints.",
      contribution: "Optimized models for compression, export, and deployment readiness across ONNX/TensorRT-oriented pipelines.",
      result: "Improved deployment efficiency for real-time multi-camera inference while preserving practical recognition accuracy.",
      technical: ["Pruning", "Knowledge Distillation", "Edge AI Optimization"],
      tools: ["PyTorch", "TensorRT", "ONNX", "OpenCV", "NVIDIA Jetson"],
    },
    {
      title: "Vietnamese Voice2Text System",
      period: "05/2026",
      role: "AI Researcher",
      event: "43rd HUST Student Research Conference",
      description:
        "Developed a Vietnamese Voice-to-Text system with speaker recognition and speaker diarization for live microphone input and edge-oriented inference.",
      problem: "Convert Vietnamese multi-speaker speech into text while preserving speaker-level information in real-time usage.",
      contribution: "Integrated ASR, speaker recognition, diarization, and live microphone processing into a practical speech AI pipeline.",
      result: "Built a real-time Vietnamese Speech AI prototype for edge-device deployment scenarios.",
      technical: ["Vietnamese ASR", "Speaker Recognition", "Speaker Diarization", "Real-time Audio"],
      tools: ["Python", "PyTorch", "Microphone Input", "Edge Inference"],
    },
    {
      title: "Civil Intelligent Sensing System",
      period: "05/2026",
      role: "AI Researcher",
      event: "First Prize - AI Applications Track",
      description:
        "Built a real-time urban monitoring system across multiple cameras on Jetson AGX Orin using VLMs, attribute-based person search, and parallel AI pipelines.",
      problem: "Monitor urban multi-camera scenes and retrieve people/events efficiently on edge hardware.",
      contribution: "Designed the multi-camera AI pipeline with VLM-assisted analysis, attribute-based person search, and parallel inference.",
      result: "Achieved 15-20 FPS across 60 cameras on Jetson AGX Orin.",
      technical: ["VLM", "Person Search", "Parallel AI Pipelines", "60 Cameras", "15-20 FPS"],
      tools: ["Jetson AGX Orin", "PyTorch", "OpenCV", "TensorRT"],
    },
    {
      title: "CPU-only Multi-camera Face Detection",
      period: "05/2025",
      role: "AI Researcher",
      event: "42nd HUST Student Research Conference",
      description:
        "Optimized a multi-camera face detection system by compressing YOLOv3 and improving the video decoding pipeline for CPU-only deployment.",
      problem: "Run multi-camera face detection without GPU acceleration while keeping practical real-time throughput.",
      contribution: "Compressed YOLOv3 and optimized the video decoding/inference pipeline for CPU workloads.",
      result: "Processed 12 camera streams at 10 FPS on CPU-only systems.",
      technical: ["YOLOv3 Compression", "CPU-only Inference", "12 Camera Streams", "10 FPS"],
      tools: ["Python", "OpenCV", "YOLOv3", "CPU Deployment"],
    },
  ] satisfies Project[],
  research: [
    {
      title: "Civil Intelligent Sensing System",
      focus: "43rd HUST Student Scientific Research Conference | 05/2026",
      description:
        "Built a real-time urban monitoring system across multiple cameras on Jetson AGX Orin, using VLMs, attribute-based person search, and parallel AI pipelines, achieving 15-20 FPS across 60 cameras on edge devices.",
      tags: ["Jetson AGX Orin", "VLMs", "Attribute-based Person Search", "60 Cameras", "15-20 FPS"],
      icon: Eye,
    },
    {
      title: "Voice2Text",
      focus: "43rd HUST Student Scientific Research Conference | 05/2026",
      description:
        "Developed a Vietnamese Voice-to-Text system using state-of-the-art automatic speech recognition models, supporting speaker recognition and speaker diarization, optimized for real-time inference on edge devices from live microphone input.",
      tags: ["Vietnamese ASR", "Speaker Recognition", "Speaker Diarization", "Edge Inference"],
      icon: Mic,
    },
    {
      title: "Multi-Camera Face Detection on CPU-Only Systems",
      focus: "42nd HUST Student Scientific Research Conference | 05/2025",
      description:
        "Optimized a multi-camera AI system for face detection by compressing the YOLOv3 model and improving the video decoding pipeline, enabling real-time processing of 12 camera streams at 10 FPS on CPU.",
      tags: ["YOLOv3 Compression", "CPU-only Inference", "12 Camera Streams", "10 FPS"],
      icon: ShieldCheck,
    },
  ] satisfies ResearchItem[],
  awards: [
    {
      title: "43rd HUST Student Research Conference",
      date: "05/2026",
      achievement: "First Prize - AI Applications Track",
      project: "Civil Intelligent Sensing System",
      description:
        "Won First Prize in the AI Applications Track with the project Civil Intelligent Sensing System.",
      icon: Award,
    },
    {
      title: "Best AI Award Taiwan 2026",
      date: "04/2026",
      achievement: "Finalist - International AI Applications Track",
      project: "Civil Intelligent Sensing System",
      description:
        "Selected as a finalist in the International AI Applications Track with the project Civil Intelligent Sensing System.",
      icon: Trophy,
    },
    {
      title: "Vietnam Electronic Design Contest 2025",
      date: "11/2025",
      achievement: "Top 5 in the Northern Region",
      project: "Smart Urban Monitoring Using Edge Computing Technology",
      description: "Achieved Top 5 in the Northern Region with an edge-computing urban monitoring project.",
      icon: Award,
    },
  ] satisfies AwardEntry[],
  featuredCertificates: [
    {
      title: "First Prize Student Research Award",
      date: "05/2026",
      issuer: "Hanoi University of Science and Technology",
      description: "First Prize for Civil Sensing Intelligent System at the university-level student research award.",
      image: "/certificates/research-award.jpg",
      pdf: "/certificates/research-award.pdf",
    },
    {
      title: "Civil Sensing Intelligent System Certificate",
      date: "05/2026",
      issuer: "43rd HUST Student Research Conference",
      description: "Certificate for the Civil Sensing Intelligent System research project.",
      image: "/certificates/civil-sensing-certificate.jpg",
      pdf: "/certificates/civil-sensing-certificate.pdf",
    },
    {
      title: "Voice Recognition on Edge Devices Certificate",
      date: "05/2026",
      issuer: "43rd HUST Student Research Conference",
      description: "Certificate for efficient Vietnamese multi-speaker speech and voice recognition on edge devices.",
      image: "/certificates/voice-recognition-certificate.jpg",
      pdf: "/certificates/voice-recognition-certificate.pdf",
    },
  ] satisfies FeaturedCertificate[],
  contacts: [
    {
      label: "Email",
      value: "mcminhduc2004@gmail.com",
      href: "mailto:mcminhduc2004@gmail.com",
      icon: Mail,
    },
    {
      label: "GitHub",
      value: "github.com/BaekMinhDuc",
      href: "https://github.com/BaekMinhDuc",
      icon: Code2,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/baekminhduc",
      href: "https://www.linkedin.com/in/baekminhduc",
      icon: BriefcaseBusiness,
    },
  ] satisfies ContactLink[],
  quickFacts: [
    { label: "Degree", value: "Electronics & Telecommunications", icon: GraduationCap },
    { label: "Research", value: "HUST Student Scientific Research", icon: Sparkles },
    { label: "Focus", value: "Smart Embedded Systems & IoT", icon: Sparkles },
    { label: "Current", value: "AI Intern and AI Researcher", icon: BadgeCheck },
  ],
};
