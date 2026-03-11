"use client";

import { Component, ReactNode } from "react";
import Image from "next/image";

interface Props {
  children: ReactNode;
  fallbackImage?: string;
  fallbackAlt?: string;
}

interface State {
  hasError: boolean;
}

export default class VehicleViewer3DErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("VehicleViewer3D Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      const { fallbackImage, fallbackAlt } = this.props;

      if (fallbackImage) {
        return (
          <div className="relative aspect-[4/3] bg-charcoal overflow-hidden">
            <Image
              src={fallbackImage}
              alt={fallbackAlt || "Vehicle"}
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <div className="text-center">
                <p className="text-off-white text-sm mb-1">
                  3D View Unavailable
                </p>
                <p className="text-gunmetal text-xs tracking-[0.1em] uppercase">
                  WebGL is not supported in your browser
                </p>
              </div>
            </div>
          </div>
        );
      }

      return (
        <div className="aspect-[4/3] bg-charcoal flex items-center justify-center border border-white/5">
          <div className="text-center">
            <svg
              className="w-10 h-10 text-gunmetal mx-auto mb-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={0.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
              />
            </svg>
            <p className="text-off-white text-sm mb-1">3D View Unavailable</p>
            <p className="text-gunmetal text-xs tracking-[0.1em] uppercase">
              WebGL is not supported in your browser
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
