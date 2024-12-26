'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'

const PROGRAMMING_LANGUAGES = [
    { name: 'Java', icon: '/java-icon.png' },
    { name: 'Python', icon: '/python-icon.png' },
    { name: 'C', icon: '/placeholder.svg?text=C' },
    { name: 'C++', icon: '/placeholder.svg?text=C++' },
    { name: 'TypeScript', icon: '/placeholder.svg?text=TypeScript' },
    { name: 'JavaScript', icon: '/placeholder.svg?text=JavaScript' },
    { name: 'Rust', icon: '/placeholder.svg?text=Rust' },
    { name: 'Go', icon: '/placeholder.svg?text=Go' },
    { name: 'C#', icon: '/placeholder.svg?text=C#' }
]

interface BinaryString {
    x: number;
    y: number;
    speed: number;
    value: string;
}

const SpaceBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        const updateCanvasSize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        updateCanvasSize()

        const stars: { x: number; y: number; speed: number; size: number }[] = []
        const binaryStrings: BinaryString[] = []

        // Create stars
        for (let i = 0; i < 200; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                speed: Math.random() * 0.5 + 0.1,
                size: Math.random() * 1.5,
            })
        }

        // Create binary strings
        for (let i = 0; i < 5; i++) {
            binaryStrings.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                speed: Math.random() * 0.5 + 0.1,
                value: generateBinaryString(),
            })
        }

        function generateBinaryString() {
            return Array.from({ length: 8 }, () => Math.round(Math.random())).join('')
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // Draw stars with glow
            stars.forEach(star => {
                ctx.beginPath()
                ctx.fillStyle = 'white'
                ctx.shadowBlur = 4
                ctx.shadowColor = 'white'
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
                ctx.fill()
                ctx.shadowBlur = 0

                star.x -= star.speed
                if (star.x < 0) {
                    star.x = canvas.width
                    star.y = Math.random() * canvas.height
                }
            })

            // Draw binary strings
            ctx.font = '16px "Courier New", monospace'
            ctx.fillStyle = 'rgba(0, 255, 0, 0.5)'
            binaryStrings.forEach(binary => {
                ctx.fillText(binary.value, binary.x, binary.y)

                binary.x -= binary.speed
                if (binary.x < 0) {
                    binary.x = canvas.width
                    binary.y = Math.random() * canvas.height
                    binary.value = generateBinaryString()
                }
            })

            requestAnimationFrame(animate)
        }

        animate()

        const handleResize = () => {
            updateCanvasSize()
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <>
            <div className="fixed top-16 left-0 w-full -z-20 bg-transparent flex justify-around items-center px-4 py-2 overflow-x-auto">
                {PROGRAMMING_LANGUAGES.map((lang, index) => (
                    <div key={lang.name} className="flex-shrink-0">
                        <Image
                            src={lang.icon}
                            alt={`${lang.name} icon`}
                            width={64}
                            height={64}
                            className="w-12 h-12 md:w-16 md:h-16 opacity-20 hover:opacity-50 transition-opacity duration-300"
                        />
                    </div>
                ))}
            </div>
            <div
                className="fixed bottom-0 right-0 w-1/2 h-1/2 rounded-full filter blur-3xl -z-10"
                style={{
                    background: 'radial-gradient(circle at bottom right, rgba(128, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0) 70%)',
                    transform: 'translate(25%, 25%)'
                }}
            />
            <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />
        </>
    )
}

export default SpaceBackground
