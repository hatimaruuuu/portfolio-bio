'use client'

import { useEffect, useRef } from 'react'

const AnimatedBackground = () => {
    const cavasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        
        const ctx = canvas.getCo
    })