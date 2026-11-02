import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'


interface RevealProps {
    children: ReactNode
    className?: string
    delay?: number
}

export function Reveal({ children, className = '', delay = 0 }: RevealProps) {
    const reduceMotion = useReducedMotion()
    console.log('huhu: ', 'hehe')

    return (
        <motion.div
            className={className}
            initial={reduceMotion ? false : { opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.12 }}
            transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </motion.div>
    )
}
