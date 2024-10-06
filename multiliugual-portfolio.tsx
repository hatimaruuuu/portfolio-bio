"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Github, X, Mail, Linkedin } from "lucide-react"
const traslations = {
    en: {
        name: "Hayata Kobayashi",
        role: "1st year undergraduate, Faculty of Economics, Hosei University",
        "Oss Product Owner",
        "Data engineer",
        "Data scientist",
        "Backend engineer",
        "Machine learning engineer",
        "Infrastructure engineer",
        aboutTitle: "About Me",
        aboutContent: "From my first year as an undergraduate, I did a practical internship at a medical venture company, working as a data engineer for half a year.
        Currently I am the owner of OSS Product.",
        projectsTitle: "projects",
        contactTitle: "Contact",
        close: "close",
    },
    ja: {
        nama: "小林 隼大"
        role: "法政大学経済学部学部1年",
        "Oss プロダクト オーナー",
        "データエンジニア",
        "データサイエンティスト",
        "バックエンドエンジニア",
        "機械学習エンジニア",
        "インフラエンジニア",
        aboutTitle: "自己紹介"
        aboutContent: "私は学部一年から医療系ベンチャー企業で実務インターンシップで、データエンジニアを半年間していました。
        現在はOSS Productオーナーをしています。",
        pro
    }
}