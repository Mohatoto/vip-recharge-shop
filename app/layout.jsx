export const metadata = {
  title: "VIP Recharge Shop",
  description: "Recharge your KSA apps like Kiyo, TikTok, Mr7ba & more",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
