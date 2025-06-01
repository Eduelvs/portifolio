"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import {
  Code,
  Globe,
  Zap,
  Coffee,
  Heart,
  Star,
  Briefcase,
  MapPin,
  GraduationCap,
  Calendar,
  Award,
  ExternalLink,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useTheme } from "next-themes"
import Link from "next/link"

const languages = [
  {
    name: "JavaScript",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 256 256"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMinYMin meet"
      >
        <path d="M0 0h256v256H0V0z" fill="#F7DF1E" />
        <path d="M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996M152.381 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247L210.29 147.43c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574" />
      </svg>
    ),
    description: "Linguagem versátil para web",
    level: "Intermediário",
    gradient: "from-yellow-400/20 to-yellow-600/20",
    borderColor: "border-yellow-400/30",
    experience: "2+ anos",
  },
  {
    name: "React",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M18.6789 15.9759C18.6789 14.5415 17.4796 13.3785 16 13.3785C14.5206 13.3785 13.3211 14.5415 13.3211 15.9759C13.3211 17.4105 14.5206 18.5734 16 18.5734C17.4796 18.5734 18.6789 17.4105 18.6789 15.9759Z"
          fill="#53C1DE"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24.7004 11.1537C25.2661 8.92478 25.9772 4.79148 23.4704 3.39016C20.9753 1.99495 17.7284 4.66843 16.0139 6.27318C14.3044 4.68442 10.9663 2.02237 8.46163 3.42814C5.96751 4.82803 6.73664 8.8928 7.3149 11.1357C4.98831 11.7764 1 13.1564 1 15.9759C1 18.7874 4.98416 20.2888 7.29698 20.9289C6.71658 23.1842 5.98596 27.1909 8.48327 28.5877C10.9973 29.9932 14.325 27.3945 16.0554 25.7722C17.7809 27.3864 20.9966 30.0021 23.4922 28.6014C25.9956 27.1963 25.3436 23.1184 24.7653 20.8625C27.0073 20.221 31 18.7523 31 15.9759C31 13.1835 26.9903 11.7923 24.7004 11.1537ZM24.4162 19.667C24.0365 18.5016 23.524 17.2623 22.8971 15.9821C23.4955 14.7321 23.9881 13.5088 24.3572 12.3509C26.0359 12.8228 29.7185 13.9013 29.7185 15.9759C29.7185 18.07 26.1846 19.1587 24.4162 19.667ZM22.85 27.526C20.988 28.571 18.2221 26.0696 16.9478 24.8809C17.7932 23.9844 18.638 22.9422 19.4625 21.7849C20.9129 21.6602 22.283 21.4562 23.5256 21.1777C23.9326 22.7734 24.7202 26.4763 22.85 27.526ZM9.12362 27.5111C7.26143 26.47 8.11258 22.8946 8.53957 21.2333C9.76834 21.4969 11.1286 21.6865 12.5824 21.8008C13.4123 22.9332 14.2816 23.9741 15.1576 24.8857C14.0753 25.9008 10.9945 28.557 9.12362 27.5111ZM2.28149 15.9759C2.28149 13.874 5.94207 12.8033 7.65904 12.3326C8.03451 13.5165 8.52695 14.7544 9.12123 16.0062C8.51925 17.2766 8.01977 18.5341 7.64085 19.732C6.00369 19.2776 2.28149 18.0791 2.28149 15.9759ZM9.1037 4.50354C10.9735 3.45416 13.8747 6.00983 15.1159 7.16013C14.2444 8.06754 13.3831 9.1006 12.5603 10.2265C11.1494 10.3533 9.79875 10.5569 8.55709 10.8297C8.09125 9.02071 7.23592 5.55179 9.1037 4.50354ZM20.3793 11.5771C21.3365 11.6942 22.2536 11.85 23.1147 12.0406C22.8562 12.844 22.534 13.6841 22.1545 14.5453C21.6044 13.5333 21.0139 12.5416 20.3793 11.5771ZM16.0143 8.0481C16.6054 8.66897 17.1974 9.3623 17.7798 10.1145C16.5985 10.0603 15.4153 10.0601 14.234 10.1137C14.8169 9.36848 15.414 8.67618 16.0143 8.0481ZM9.8565 14.5444C9.48329 13.6862 9.16398 12.8424 8.90322 12.0275C9.75918 11.8418 10.672 11.69 11.623 11.5748C10.9866 12.5372 10.3971 13.5285 9.8565 14.5444ZM11.6503 20.4657C10.6679 20.3594 9.74126 20.2153 8.88556 20.0347C9.15044 19.2055 9.47678 18.3435 9.85796 17.4668C10.406 18.4933 11.0045 19.4942 11.6503 20.4657ZM16.0498 23.9915C15.4424 23.356 14.8365 22.6531 14.2448 21.8971C15.4328 21.9423 16.6231 21.9424 17.811 21.891C17.2268 22.6608 16.6369 23.3647 16.0498 23.9915ZM22.1667 17.4222C22.5677 18.3084 22.9057 19.1657 23.1742 19.9809C22.3043 20.1734 21.3652 20.3284 20.3757 20.4435C21.015 19.4607 21.6149 18.4536 22.1667 17.4222ZM18.7473 20.5941C16.9301 20.72 15.1016 20.7186 13.2838 20.6044C12.2509 19.1415 11.3314 17.603 10.5377 16.0058C11.3276 14.4119 12.2404 12.8764 13.2684 11.4158C15.0875 11.2825 16.9178 11.2821 18.7369 11.4166C19.7561 12.8771 20.6675 14.4086 21.4757 15.9881C20.6771 17.5812 19.7595 19.1198 18.7473 20.5941ZM22.8303 4.4666C24.7006 5.51254 23.8681 9.22726 23.4595 10.8426C22.2149 10.5641 20.8633 10.3569 19.4483 10.2281C18.6239 9.09004 17.7698 8.05518 16.9124 7.15949C18.1695 5.98441 20.9781 3.43089 22.8303 4.4666Z"
          fill="#53C1DE"
        />
      </svg>
    ),
    description: "Biblioteca para interfaces",
    level: "Avançado",
    gradient: "from-blue-400/20 to-cyan-500/20",
    borderColor: "border-blue-400/30",
    experience: "2+ anos",
  },
  {
    name: "PHP",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient
            id="php-gradient"
            cx="-16.114"
            cy="20.532"
            r="18.384"
            gradientTransform="translate(26.52 -9.307)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#ffffff" />
            <stop offset="0.5" stopColor="#4c6b96" />
            <stop offset="1" stopColor="#231f20" />
          </radialGradient>
        </defs>
        <ellipse cx="16" cy="16" rx="14" ry="7.365" fill="url(#php-gradient)" />
        <ellipse cx="16" cy="16" rx="13.453" ry="6.818" fill="#6280b6" />
        <path
          d="M18.725,18.2l.667-3.434a1.752,1.752,0,0,0-.372-1.719,2.929,2.929,0,0,0-2-.525H15.867l.331-1.7a.219.219,0,0,0-.215-.26h-1.6a.219.219,0,0,0-.215.177l-.709,3.646a2.051,2.051,0,0,0-.477-1.054,2.783,2.783,0,0,0-2.2-.807H7.7a.219.219,0,0,0-.215.177l-1.434,7.38a.219.219,0,0,0,.215.26H7.869a.219.219,0,0,0,.215-.177l.347-1.785h1.2a5.167,5.167,0,0,0,1.568-.2,3.068,3.068,0,0,0,1.15-.689,3.538,3.538,0,0,0,.68-.844l-.287,1.475a.219.219,0,0,0,.215.26h1.6a.219.219,0,0,0,.215-.177l.787-4.051h1.094c.466,0,.6.093.64.133s.1.165.025.569l-.635,3.265a.219.219,0,0,0,.215.26h1.62A.219.219,0,0,0,18.725,18.2ZM11.33,15.366a1.749,1.749,0,0,1-.561,1.092,2.171,2.171,0,0,1-1.315.321H8.742l.515-2.651h.921c.677,0,.949.145,1.059.266A1.181,1.181,0,0,1,11.33,15.366Z"
          fill="#fff"
        />
        <path
          d="M25.546,13.332a2.783,2.783,0,0,0-2.2-.807H20.255a.219.219,0,0,0-.215.177l-1.434,7.38a.219.219,0,0,0,.215.26h1.608a.219.219,0,0,0,.215-.177l.347-1.785h1.2a5.167,5.167,0,0,0,1.568-.2,3.068,3.068,0,0,0,1.15-.689,3.425,3.425,0,0,0,1.076-1.927A2.512,2.512,0,0,0,25.546,13.332Zm-1.667,2.034a1.749,1.749,0,0,1-.561,1.092A2.171,2.171,0,0,1,22,16.778H21.29l.515-2.651h.921c.677,0,.949.145,1.059.266A1.181,1.181,0,0,1,23.879,15.366Z"
          fill="#fff"
        />
      </svg>
    ),
    description: "Desenvolvimento backend",
    level: "Avançado",
    gradient: "from-purple-400/20 to-indigo-500/20",
    borderColor: "border-purple-400/30",
    experience: "4+ anos",
  },
  {
    name: "MySQL",
    icon: (
      <svg width="50" height="50" viewBox="-18.458 -22.75 191.151 191.151" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M40.054 113.583h-5.175c-.183-8.735-.687-16.947-1.511-24.642h-.046l-7.879 24.642h-3.94l-7.832-24.642h-.045c-.581 7.388-.947 15.602-1.099 24.642H7.81c.304-10.993 1.068-21.299 2.289-30.919h6.414l7.465 22.719h.046l7.511-22.719h6.137c1.344 11.268 2.138 21.575 2.382 30.919M62.497 90.771c-2.107 11.434-4.887 19.742-8.337 24.928-2.688 3.992-5.633 5.99-8.84 5.99-.855 0-1.91-.258-3.16-.77v-2.757c.611.088 1.328.138 2.152.138 1.498 0 2.702-.412 3.62-1.238 1.098-1.006 1.647-2.137 1.647-3.388 0-.858-.428-2.612-1.282-5.268L42.618 90.77h5.084l4.076 13.19c.916 2.995 1.298 5.086 1.145 6.277 2.229-5.953 3.786-12.444 4.673-19.468h4.901v.002z"
          fill="#5d87a1"
        />
        <path
          d="M131.382 113.583h-14.7V82.664h4.945v27.113h9.755v3.806zM112.834 114.33l-5.684-2.805c.504-.414.986-.862 1.42-1.381 2.416-2.838 3.621-7.035 3.621-12.594 0-10.229-4.014-15.346-12.045-15.346-3.938 0-7.01 1.298-9.207 3.895-2.414 2.84-3.619 7.022-3.619 12.551 0 5.435 1.068 9.422 3.205 11.951 1.955 2.291 4.902 3.438 8.843 3.438 1.47 0 2.819-.18 4.048-.543l7.4 4.308 2.018-3.474zm-18.413-6.934c-1.252-2.014-1.878-5.248-1.878-9.707 0-7.785 2.365-11.682 7.1-11.682 2.475 0 4.289.932 5.449 2.792 1.25 2.017 1.879 5.222 1.879 9.619 0 7.849-2.367 11.774-7.099 11.774-2.476.001-4.29-.928-5.451-2.796M85.165 105.013c0 2.622-.962 4.773-2.884 6.458-1.924 1.678-4.504 2.519-7.737 2.519-3.024 0-5.956-.966-8.794-2.888l1.329-2.655c2.442 1.223 4.653 1.831 6.638 1.831 1.863 0 3.319-.413 4.375-1.232 1.055-.822 1.684-1.975 1.684-3.433 0-1.837-1.281-3.407-3.631-4.722-2.167-1.19-6.501-3.678-6.501-3.678-2.349-1.712-3.525-3.55-3.525-6.578 0-2.506.877-4.529 2.632-6.068 1.757-1.545 4.024-2.315 6.803-2.315 2.87 0 5.479.769 7.829 2.291l-1.192 2.656c-2.01-.854-3.994-1.281-5.951-1.281-1.585 0-2.809.381-3.66 1.146-.858.762-1.387 1.737-1.387 2.933 0 1.828 1.308 3.418 3.722 4.759 2.196 1.192 6.638 3.723 6.638 3.723 2.409 1.709 3.612 3.53 3.612 6.534"
          fill="#f8981d"
        />
      </svg>
    ),
    description: "Banco de dados relacional",
    level: "Avançado",
    gradient: "from-orange-400/20 to-red-500/20",
    borderColor: "border-orange-400/30",
    experience: "4+ anos",
  },
  {
    name: "Python",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.0164 2C10.8193 2 9.03825 3.72453 9.03825 5.85185V8.51852H15.9235V9.25926H5.97814C3.78107 9.25926 2 10.9838 2 13.1111L2 18.8889C2 21.0162 3.78107 22.7407 5.97814 22.7407H8.27322V19.4815C8.27322 17.3542 10.0543 15.6296 12.2514 15.6296H19.5956C21.4547 15.6296 22.9617 14.1704 22.9617 12.3704V5.85185C22.9617 3.72453 21.1807 2 18.9836 2H13.0164ZM12.0984 6.74074C12.8589 6.74074 13.4754 6.14378 13.4754 5.40741C13.4754 4.67103 12.8589 4.07407 12.0984 4.07407C11.3378 4.07407 10.7213 4.67103 10.7213 5.40741C10.7213 6.14378 11.3378 6.74074 12.0984 6.74074Z"
          fill="url(#paint0_linear_python)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.9834 30C21.1805 30 22.9616 28.2755 22.9616 26.1482V23.4815L16.0763 23.4815L16.0763 22.7408L26.0217 22.7408C28.2188 22.7408 29.9998 21.0162 29.9998 18.8889V13.1111C29.9998 10.9838 28.2188 9.25928 26.0217 9.25928L23.7266 9.25928V12.5185C23.7266 14.6459 21.9455 16.3704 19.7485 16.3704L12.4042 16.3704C10.5451 16.3704 9.03809 17.8296 9.03809 19.6296L9.03809 26.1482C9.03809 28.2755 10.8192 30 13.0162 30H18.9834ZM19.9015 25.2593C19.1409 25.2593 18.5244 25.8562 18.5244 26.5926C18.5244 27.329 19.1409 27.9259 19.9015 27.9259C20.662 27.9259 21.2785 27.329 21.2785 26.5926C21.2785 25.8562 20.662 25.2593 19.9015 25.2593Z"
          fill="url(#paint1_linear_python)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_python"
            x1="12.4809"
            y1="2"
            x2="12.4809"
            y2="22.7407"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#327EBD" />
            <stop offset="1" stopColor="#1565A7" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_python"
            x1="19.519"
            y1="9.25928"
            x2="19.519"
            y2="30"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFDA4B" />
            <stop offset="1" stopColor="#F9C600" />
          </linearGradient>
        </defs>
      </svg>
    ),
    description: "Automação, análise e Modelagem",
    level: "Intermediário",
    gradient: "from-green-400/20 to-blue-500/20",
    borderColor: "border-green-400/30",
    experience: "2+ ano",
  },
  {
    name: "C",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48">
        <path
          fill="#283593"
          fillRule="evenodd"
          d="M22.903,3.286c0.679-0.381,1.515-0.381,2.193,0 c3.355,1.883,13.451,7.551,16.807,9.434C42.582,13.1,43,13.804,43,14.566c0,3.766,0,15.101,0,18.867 c0,0.762-0.418,1.466-1.097,1.847c-3.355,1.883,13.451,7.551,16.807,9.434c-0.679,0.381-1.515,0.381-2.193,0 c-3.355-1.883-13.451-7.551-16.807-9.434C5.418,34.899,5,34.196,5,33.434c0-3.766,0-15.101,0-18.867 c0-0.762,0.418-1.466,1.097-1.847C9.451,10.837,19.549,5.169,22.903,3.286z"
          clipRule="evenodd"
        />
        <path
          fill="#5c6bc0"
          fillRule="evenodd"
          d="M5.304,34.404C5.038,34.048,5,33.71,5,33.255 c0-3.744,0-15.014,0-18.759c0-0.758,0.417-1.458,1.094-1.836c3.343-1.872,13.405-7.507,16.748-9.38 c0.677-0.379,1.594-0.371,2.271,0.008c3.343,1.872,13.371,7.459,16.714,9.331c0.27,0.152,0.476,0.335,0.66,0.576L5.304,34.404z"
          clipRule="evenodd"
        />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M24,10c7.727,0,14,6.273,14,14s-6.273,14-14,14 s-14-6.273-14-14S16.273,10,24,10z M24,17c3.863,0,7,3.136,7,7c0,3.863-3.137,7-7,7s-7-3.137-7-7C17,20.136,20.136,17,24,17z"
          clipRule="evenodd"
        />
        <path
          fill="#3949ab"
          fillRule="evenodd"
          d="M42.485,13.205c0.516,0.483,0.506,1.211,0.506,1.784 c0,3.795-0.032,14.589,0.009,18.384c0.004,0.396-0.127,0.813-0.323,1.127L23.593,24L42.485,13.205z"
          clipRule="evenodd"
        />
      </svg>
    ),
    description: "Programação de sistemas",
    level: "Avançado",
    gradient: "from-gray-400/20 to-gray-600/20",
    borderColor: "border-gray-400/30",
    experience: "4 anos",
  },
]

const courses = [
  {
    title: "Técnico em Informática",
    institution: "ETEC",
    duration: "3 Anos",
    year: "2018-2020",
    description: "Ensino médio integrado ao técnico com enfase em manutenção de computadores e introdução a programação",
    skills: ["PHP", "Banco de Dados", "HTML", "CSS"],
    certificate: "https://certificado.exemplo.com",
    status: "Concluído",
    gradient: "from-pink-500/20 to-purple-500/20",
    borderColor: "border-pink-400/30",
    icon: "🎨",
  },
  {
    title: "Engenharia da Computação",
    institution: "UNIFEI",
    duration: "5 Anos",
    year: "2021 - 2025",
    description: "Faculdade em engenharia da computação",
    skills: ["C", "Java", "Python", "IA", "Modelagem", "UML", "Banco de Dados"],
    certificate: "https://certificado.exemplo.com",
    status: "Em Andamento",
    gradient: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-400/30",
    icon: "📱",
  },
  {
    title: "Desenvolvimento Web Full Stack",
    institution: "Rocketseat",
    duration: "6 meses",
    year: "2023",
    description: "Curso completo de desenvolvimento web com React, Node.js e banco de dados",
    skills: ["React", "Node.js", "TypeScript", "PostgreSQL"],
    certificate: "https://certificado.exemplo.com",
    status: "Concluído",
    gradient: "from-purple-500/20 to-blue-500/20",
    borderColor: "border-purple-400/30",
    icon: "🚀",
  },
]
{/*
  {
    title: "JavaScript Moderno (ES6+)",
    institution: "Udemy",
    duration: "40 horas",
    year: "2023",
    description: "Curso avançado de JavaScript com foco em ES6+ e programação funcional",
    skills: ["JavaScript", "ES6+", "Async/Await", "Modules"],
    certificate: "https://certificado.exemplo.com",
    status: "Concluído",
    gradient: "from-yellow-500/20 to-orange-500/20",
    borderColor: "border-yellow-400/30",
    icon: "⚡",
  },
  {
    title: "DevOps e Cloud Computing",
    institution: "AWS Training",
    duration: "4 meses",
    year: "2024",
    description: "Infraestrutura em nuvem, CI/CD e práticas DevOps",
    skills: ["AWS", "Docker", "CI/CD", "Kubernetes"],
    certificate: "https://certificado.exemplo.com",
    status: "Em Andamento",
    gradient: "from-green-500/20 to-teal-500/20",
    borderColor: "border-green-400/30",
    icon: "☁️",
  },
  {
    title: "Machine Learning com Python",
    institution: "DataCamp",
    duration: "5 meses",
    year: "2024",
    description: "Introdução ao aprendizado de máquina e análise de dados",
    skills: ["Python", "Pandas", "Scikit-learn", "TensorFlow"],
    certificate: "https://certificado.exemplo.com",
    status: "Planejado",
    gradient: "from-indigo-500/20 to-purple-500/20",
    borderColor: "border-indigo-400/30",
    icon: "🤖",
  },
*/}

const timeline = [
  {
    year: "2018",
    title: "Início da Jornada",
    description: "Ingresso na ETEC em Técnico de Informática",
    icon: <Star className="h-5 w-5" />,
    color: "from-yellow-500 to-orange-500",
    achievements: [
      "Primeiros passos na programação com HTML e CSS",
      "Criação do primeiro site",
      "Descoberta da paixão por código",
    ],
  },
  {
    year: "2021",
    title: "Início na Graduação",
    description: "Após anos de preparação ingressei em Engenharia da Computção na UNIFEI.",
    icon: <Code className="h-5 w-5" />,
    color: "from-blue-500 to-cyan-500",
    achievements: [
      "Primeiro Contato com Lógica de Progrmação",
      "Primeiras Soluções com C",
      "Primeiros projetos pessoais",
      "Aprendizado de Git/GitHub",
    ],
  },
  {
    year: "2022",
    title: "Expansão Backend",
    description: "Desenvolvimento full-stack com Node.js e bancos de dados",
    icon: <Briefcase className="h-5 w-5" />,
    color: "from-green-500 to-emerald-500",
    achievements: ["APIs REST", "Integração com bancos de dados", "Primeiro projeto full-stack"],
  },
  {
    year: "2023",
    title: "Profissionalização",
    description: "Entrada no mercado de trabalho e projetos comerciais",
    icon: <MapPin className="h-5 w-5" />,
    color: "from-purple-500 to-pink-500",
    achievements: ["Primeiro emprego tech", "Projetos em produção", "Trabalho em equipe"],
  },
  {
    year: "2024",
    title: "Especialização",
    description: "Foco em tecnologias avançadas e liderança técnica",
    icon: <GraduationCap className="h-5 w-5" />,
    color: "from-indigo-500 to-purple-500",
    achievements: ["Certificações AWS", "Mentoria de juniors", "Arquitetura de sistemas"],
  },
  {
    year: "2025",
    title: "Futuro",
    description: "Metas e objetivos para continuar evoluindo",
    icon: <Globe className="h-5 w-5" />,
    color: "from-teal-500 to-blue-500",
    achievements: ["Projetos internacionais", "Contribuições open source", "Palestras técnicas"],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
}

const cardVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
  hover: {
    scale: 1.05,
    y: -5,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
}

const glowVariants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 1,
    scale: 1.1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
}

export function HomePage() {
  const { theme } = useTheme()
  const isDarkTheme = theme === "dark"
  const containerRef = useRef<HTMLDivElement>(null)
  const [selectedTimelineItem, setSelectedTimelineItem] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Parallax effect for sections
  const aboutY = useTransform(scrollYProgress, [0, 0.3], [0, -50])
  const languagesY = useTransform(scrollYProgress, [0.5, 0.8], [50, -50])
  const ctaY = useTransform(scrollYProgress, [0.7, 1], [50, -20])
  const timelineY = useTransform(scrollYProgress, [0.3, 0.6], [50, -50])
  const coursesY = useTransform(scrollYProgress, [0.6, 0.9], [50, -50])

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Concluído":
        return "bg-green-500/20 text-green-700 dark:text-green-300 border-green-500/30"
      case "Em Andamento":
        return "bg-blue-500/20 text-blue-700 dark:text-blue-300 border-blue-500/30"
      case "Planejado":
        return "bg-orange-500/20 text-orange-700 dark:text-orange-300 border-orange-500/30"
      default:
        return "bg-gray-500/20 text-gray-700 dark:text-gray-300 border-gray-500/30"
    }
  }

  return (
    <div ref={containerRef} className="max-w-6xl mx-auto px-4 py-8">
      <motion.div variants={containerVariants} initial="hidden" animate="visible">
        {/* Hero Section */}
        <motion.section variants={itemVariants} className="text-center mb-16">
          <div className="relative inline-block mb-8">
            <motion.div
              className={`absolute -inset-4 bg-gradient-radial from-transparent ${
                isDarkTheme
                  ? "via-blue-400/30 via-30% via-purple-400/30 via-60% via-pink-400/30 via-90%"
                  : "via-blue-400/20 via-30% via-purple-400/20 via-60% via-pink-400/20 via-90%"
              } to-transparent rounded-full pointer-events-none`}
              variants={glowVariants}
              whileHover="hover"
              initial="initial"
            />
            <Avatar className="w-32 h-32 border-4 border-border/40 relative z-10">
              <AvatarImage src="/foto_perfil.jpg" alt="Minha foto" />
              <AvatarFallback className="text-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                EA
              </AvatarFallback>
            </Avatar>
          </div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Olá, eu sou Eduardo! <span className="inline-block animate-bounce">👋</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Desenvolvedor apaixonado por tecnologia e inovação. Transformo ideias em código e código em soluções que
            fazem a diferença.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <Code className="w-4 h-4 mr-2" />
              Full Stack Developer
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <Coffee className="w-4 h-4 mr-2" />
              Movido a café
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <Heart className="w-4 h-4 mr-2" />
              Apaixonado por código
            </Badge>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
            <Link href="/projects">
              <Button
                size="lg"
                className="mr-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                <Globe className="w-4 h-4 mr-2" />
                Ver Projetos
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                <Zap className="w-4 h-4 mr-2" />
                Entre em Contato
              </Button>
            </Link>
          </motion.div>
        </motion.section>

        {/* About Section */}
        <motion.section variants={itemVariants} className="mb-16" style={{ y: aboutY }}>
          <Card className="border border-border/40 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-lg">
            <motion.div
              className={`absolute -inset-2 bg-gradient-radial from-transparent ${
                isDarkTheme
                  ? "via-green-400/20 via-30% via-blue-400/20 via-60% via-purple-400/20 via-90%"
                  : "via-green-400/10 via-30% via-blue-400/10 via-60% via-purple-400/10 via-90%"
              } to-transparent rounded-3xl pointer-events-none`}
              variants={glowVariants}
              whileHover="hover"
              initial="initial"
            />
            <CardContent className="p-8 relative z-10">
              <h2 className="text-2xl font-bold text-center mb-6 text-foreground">Sobre Mim</h2>
              <p className="text-lg text-muted-foreground text-center max-w-4xl mx-auto leading-relaxed">
                Sou um desenvolvedor em constante evolução, sempre buscando aprender novas tecnologias e aprimorar
                minhas habilidades. Tenho experiência em desenvolvimento web full-stack, desde a criação de interfaces
                intuitivas até a implementação de sistemas robustos no backend. Acredito que a tecnologia pode
                transformar vidas e estou aqui para fazer parte dessa transformação.
              </p>
            </CardContent>
          </Card>
        </motion.section>

        {/* Timeline Section */}
        <motion.section variants={itemVariants} className="mb-16" style={{ y: timelineY }}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Minha Jornada</h2>
            <p className="text-muted-foreground">Uma linha do tempo da minha evolução como desenvolvedor</p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-full transform -translate-y-1/2" />

            {/* Timeline Items */}
            <div className="flex justify-between items-center relative">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  className="flex flex-col items-center cursor-pointer group"
                  onClick={() => setSelectedTimelineItem(index)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Timeline Point */}
                  <motion.div
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-white shadow-lg mb-4 relative z-10 ${
                      selectedTimelineItem === index ? "ring-4 ring-white/50" : ""
                    }`}
                    animate={{
                      scale: selectedTimelineItem === index ? 1.2 : 1,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {item.icon}
                  </motion.div>

                  {/* Year */}
                  <div className="text-sm font-bold text-foreground mb-2">{item.year}</div>

                  {/* Title (visible on hover or selection) */}
                  <motion.div
                    className="text-xs text-center text-muted-foreground max-w-20"
                    animate={{
                      opacity: selectedTimelineItem === index ? 1 : 0.7,
                    }}
                  >
                    {item.title}
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Selected Item Details */}
            <motion.div
              className="mt-12"
              key={selectedTimelineItem}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="border border-border/40 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-lg">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${timeline[selectedTimelineItem].color} text-white mb-4`}
                    >
                      {timeline[selectedTimelineItem].icon}
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {timeline[selectedTimelineItem].year} - {timeline[selectedTimelineItem].title}
                    </h3>
                    <p className="text-muted-foreground mb-6">{timeline[selectedTimelineItem].description}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {timeline[selectedTimelineItem].achievements.map((achievement, index) => (
                      <motion.div
                        key={achievement}
                        className="flex items-center gap-3 p-4 rounded-lg bg-muted/50"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                        <span className="text-sm text-foreground">{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.section>

        {/* Education & Courses Section */}
        <motion.section variants={itemVariants} className="mb-16" style={{ y: coursesY }}>
          <div className="relative">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground relative z-10">
              <GraduationCap className="inline-block w-8 h-8 mr-3 mb-1" />
              Formação & Cursos
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
              {courses.map((course, index) => (
                <motion.div
                  key={course.title}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  transition={{ delay: index * 0.1 }}
                >
                  <Card
                    className={`relative overflow-hidden border ${course.borderColor} bg-gradient-to-br ${course.gradient} backdrop-blur-lg group cursor-pointer h-full`}
                  >
                    <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                    <CardContent className="p-6 relative z-10 h-full flex flex-col">
                      <div className="flex items-start justify-between mb-4">
                        <div className="text-3xl">{course.icon}</div>
                        <div className="flex flex-col items-end gap-2">
                          <Badge className={`${getStatusColor(course.status)} border text-xs`}>{course.status}</Badge>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Calendar className="h-3 w-3" />
                            {course.year}
                          </div>
                        </div>
                      </div>

                      <h3 className="text-lg font-bold text-foreground mb-2">{course.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{course.institution}</p>
                      <p className="text-xs text-muted-foreground mb-4">{course.duration}</p>

                      <p className="text-sm text-muted-foreground mb-4 flex-1">{course.description}</p>

                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                          {course.skills.map((skill) => (
                            <Badge key={skill} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>

                        {course.certificate && course.status === "Concluído" && (
                          <Button variant="outline" size="sm" className="w-full" asChild>
                            <a href={course.certificate} target="_blank" rel="noopener noreferrer">
                              <Award className="h-4 w-4 mr-2" />
                              Ver Certificado
                              <ExternalLink className="h-3 w-3 ml-2" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Languages Section */}
        <motion.section variants={itemVariants} className="mb-16" style={{ y: languagesY }}>
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Minhas Linguagens & Tecnologias</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {languages.map((language, index) => (
              <motion.div
                key={language.name}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  className={`relative overflow-hidden border ${language.borderColor} bg-gradient-to-br ${language.gradient} backdrop-blur-lg group cursor-pointer`}
                >
                  <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <CardContent className="p-6 relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-3xl">{language.icon}</div>
                      <Badge
                        variant={
                          language.level === "Avançado"
                            ? "default"
                            : language.level === "Intermediário"
                              ? "secondary"
                              : "outline"
                        }
                        className="text-xs"
                      >
                        {language.level}
                      </Badge>
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-2">{language.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{language.description}</p>

                    <div className="flex justify-between items-center">
                      <span className="text-xs text-muted-foreground">Experiência:</span>
                      <span className="text-xs font-medium text-foreground">{language.experience}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section variants={itemVariants} className="text-center" style={{ y: ctaY }}>
          <Card className="border border-border/40 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Vamos trabalhar juntos?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Estou sempre aberto a novos desafios e oportunidades. Se você tem um projeto interessante ou quer apenas
                conversar sobre tecnologia, não hesite em entrar em contato!
              </p>
              <Link href="/contact" className="relative z-10 block">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
                >
                  Vamos Conversar!
                </Button>
              </Link>
            </CardContent>
          </Card>
        </motion.section>
      </motion.div>
    </div>
  )
}
