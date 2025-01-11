import { GridBeam } from "@/components/ui/GridBeam";

export default function Hero() {
  return (
    <div className="w-full h-[400px] dark:bg-grid-white/[0.05] bg-grid-black/[0.07]">
      <GridBeam className="sm:pl-16 pt-28 pl-4 flex items-start justify-start">
        <div className="grid gap-2">
          {/* Updated Title */}
          <h1 className="sm:text-5xl text-4xl font-bold max-w-sm">
            Simplify Your Business with RubbySub
          </h1>

          {/* Updated Description */}
          <p className="text-neutral-500 max-w-lg">
            RubbySub empowers cafes, hotels, and restaurants to streamline
            subscriptions, boost revenue, and focus on delivering exceptional
            experiences.
          </p>
        </div>
      </GridBeam>
    </div>
  );
}
