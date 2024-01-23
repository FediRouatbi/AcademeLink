import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <div className="w-full lg:grid  lg:grid-cols-2 min-h-svh">
      {children}
      <div className="hidden bg-gray-100 lg:block dark:bg-gray-800">
        <Image
          alt="Image"
          className="h-full w-full object-cover"
          height="1080"
          src="/study.jpg"
          style={{
            aspectRatio: "1920/1080",
            objectFit: "cover",
          }}
          width="1920"
        />
      </div>
    </div>
  );
}
