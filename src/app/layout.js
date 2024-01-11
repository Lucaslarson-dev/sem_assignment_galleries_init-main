import "./globals.css";
import { oswaldFont } from "@/utils/fonts";
import Navigation from "@/components/navigation/navigation";
export const metadata = {
  title: "MediaCollege Denmark",
  description: "Vi arbejder...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={oswaldFont.className}>
        <Navigation></Navigation>
        {children}
      </body>
    </html>
  );
}
