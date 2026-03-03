"use client";

import React, { useRef, useState } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 !outline-none",
    {
        variants: {
            variant: {
                default:
                    "bg-white text-black hover:bg-white/90 shadow-sm",
                outline:
                    "border border-white/10 bg-transparent hover:bg-white/5 text-white/90",
                ghost: "hover:bg-white/10 text-white/90",
                glow: "relative bg-primary text-white border border-white/10 hover:border-white/20 glass-panel",
            },
            size: {
                default: "h-11 px-6 py-2",
                sm: "h-8 rounded-md px-3 text-xs",
                lg: "h-12 rounded-lg px-8 text-base",
                icon: "h-9 w-9",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";

        // Mouse movement for glow effect on `glow` variant
        const x = useMotionValue(0);
        const y = useMotionValue(0);
        const [isHovered, setIsHovered] = useState(false);

        function handleMouseMove(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
            const rect = e.currentTarget.getBoundingClientRect();
            x.set(e.clientX - rect.left);
            y.set(e.clientY - rect.top);
        }

        if (variant === "glow") {
            return (
                <Comp
                    className={cn(buttonVariants({ variant, size, className }), "relative overflow-hidden group")}
                    onMouseMove={handleMouseMove}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    ref={ref}
                    {...props}
                >
                    {isHovered && (
                        <motion.div
                            className="absolute inset-0 z-0 pointer-events-none opacity-50 transition-opacity duration-300"
                            style={{
                                background: useMotionTemplate`
                  radial-gradient(
                    120px circle at ${x}px ${y}px,
                    rgba(0, 240, 255, 0.4),
                    transparent 80%
                  )
                `,
                            }}
                        />
                    )}
                    <span className="relative z-10 flex border-white/20 items-center justify-center space-x-2">
                        {props.children}
                    </span>
                    <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-white/10 group-hover:ring-white/20 transition-all pointer-events-none" />
                </Comp>
            );
        }

        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
