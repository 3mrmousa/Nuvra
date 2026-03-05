import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers/theme-provider";
import Nav from "./components/shared/Nav";
import { WeatherProvider } from "./providers/WeatherProvider";
import { cookies } from "next/headers";
import { getLocationByState, getNextDays, getTodayRainCharts, getTodayWeatherCharts, getTodaySun } from "./lib/serverData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "DEVLIX",
    template: "%s - DEVLIX",
  },
  description: "Your Personal Weather Companion",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const c = await cookies();
  const myLat = c.get("lat")?.value || "29.987075";
  const myLon = c.get("lon")?.value || "31.211806";

  const locationByState = await getLocationByState(myLon, myLat);
  const nextSevenDays = await getNextDays(myLon, myLat, 1);
  const todayRainCharts = await getTodayRainCharts(myLon, myLat);
  const todayWeatherCharts = await getTodayWeatherCharts(myLon, myLat);
  const todaySun = await getTodaySun(myLon, myLat);


  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-black`}
      >
        <ThemeProvider>
          <WeatherProvider
            nextSevenDays={nextSevenDays}
            locationByState={locationByState}
            todayRainCharts={todayRainCharts}
            todayWeatherCharts={todayWeatherCharts}
            todaySun={todaySun}
          >
            <Nav />
            {children}
          </WeatherProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
