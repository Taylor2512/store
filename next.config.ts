import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, "src/styles")],
        // additionalData: `@import "styles/globals.scss";`,

    },
};

export default nextConfig;
