
import "./globals.css";


export const metadata = {
  title: "Ayozo",
  description: "Plan. Play. AYOZO.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg=linear-to-br from-gray-950 via-zinc-900 to-stone-900 text-white`}
      >
        {/*Header*/}
        {children}
        {}{/*Footer*/}
      </body>
    </html>
  );
}
