import Image from "next/image";

export default function MenuBarDialog() {
  return (
    <div className="absolute w-full h-full z-25">
      <Image
        fill
        alt="Menu bar dialog background"
        className="opacity-25 z-0"
        src="/ui/menubar/menubar-dialog-mobile-bg.jpg"
      />

      {/* Video Layer */}
      <video
        src="/ui/menubar/koi-fish-mobile.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-10"
      />

      <div>
        <div>
          {/*<Image
          />*/}
        </div>
      </div>
    </div>
  );
}
